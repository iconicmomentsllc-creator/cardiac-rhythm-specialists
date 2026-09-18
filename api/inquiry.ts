const MAX_FIELD = 500
const MAX_MESSAGE = 2000
const MAX_BODY_CHARS = 16_384
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 8
const MAX_RATE_KEYS = 4_000

type HitWindow = { start: number; count: number }
const hits = new Map<string, HitWindow>()
// Per-instance limiter only. Cross-instance / distributed limiting needs
// platform infrastructure (for example Vercel KV or Upstash), which is not
// added here without a paid-service decision.

type InquiryBody = {
  name?: unknown
  phone?: unknown
  email?: unknown
  topic?: unknown
  preferredContact?: unknown
  availability?: unknown
  patientType?: unknown
  message?: unknown
  formType?: unknown
  website?: unknown
}

type NodeLikeRequest = {
  method?: string
  body?: unknown
  headers: Record<string, string | string[] | undefined>
  socket?: { remoteAddress?: string }
  on?: (event: string, listener: (...args: unknown[]) => void) => void
}

type NodeLikeResponse = {
  status: (code: number) => NodeLikeResponse
  json: (body: unknown) => NodeLikeResponse
  setHeader: (name: string, value: string) => void
  end: () => void
}

function sanitizeField(value: string, allowNewlines: boolean) {
  let output = ''
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0
    if (code === 127) continue
    if (code < 32) {
      if (allowNewlines && code === 10) output += char
      else if (!allowNewlines) output += ' '
      continue
    }
    output += char
  }
  return allowNewlines ? output : output.replace(/\s+/g, ' ')
}

function text(value: unknown, max: number, allowNewlines = false) {
  return sanitizeField(String(value ?? ''), allowNewlines).trim().slice(0, max)
}

function parseJsonObject(raw: string): InquiryBody {
  if (raw.length > MAX_BODY_CHARS) {
    throw new Error('payload-too-large')
  }
  if (!raw.trim()) return {}
  const parsed = JSON.parse(raw) as unknown
  return parsed && typeof parsed === 'object' ? (parsed as InquiryBody) : {}
}

async function readJsonBody(req: NodeLikeRequest): Promise<InquiryBody> {
  const raw = req.body
  if (typeof raw === 'string' && raw.trim()) {
    try {
      return parseJsonObject(raw)
    } catch (error) {
      if (error instanceof Error && error.message === 'payload-too-large') throw error
      return {}
    }
  }
  if (ArrayBuffer.isView(raw)) {
    try {
      return parseJsonObject(new TextDecoder().decode(raw))
    } catch (error) {
      if (error instanceof Error && error.message === 'payload-too-large') throw error
      return {}
    }
  }
  if (raw && typeof raw === 'object') {
    return raw as InquiryBody
  }
  if (typeof req.on !== 'function') return {}

  const streamed = await new Promise<string>((resolve, reject) => {
    const chunks: Uint8Array[] = []
    let total = 0
    req.on?.('data', (chunk: unknown) => {
      const bytes =
        chunk instanceof Uint8Array
          ? chunk
          : typeof chunk === 'string'
            ? new TextEncoder().encode(chunk)
            : null
      if (!bytes) return
      total += bytes.length
      if (total > MAX_BODY_CHARS) {
        reject(new Error('payload-too-large'))
        return
      }
      chunks.push(bytes)
    })
    req.on?.('end', () => {
      const merged = new Uint8Array(total)
      let offset = 0
      for (const chunk of chunks) {
        merged.set(chunk, offset)
        offset += chunk.length
      }
      resolve(new TextDecoder().decode(merged))
    })
    req.on?.('error', (error: unknown) => reject(error))
  })

  try {
    return parseJsonObject(streamed)
  } catch (error) {
    if (error instanceof Error && error.message === 'payload-too-large') throw error
    return {}
  }
}

function headerLine(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0]
  return value
}

function clientKey(req: NodeLikeRequest) {
  const realIp = headerLine(req.headers['x-real-ip'])?.trim()
  if (realIp && !realIp.includes(',')) return realIp.slice(0, 64)

  const vercelForwarded = headerLine(req.headers['x-vercel-forwarded-for'])?.trim()
  if (vercelForwarded) {
    const first = vercelForwarded.split(',')[0]?.trim()
    if (first) return first.slice(0, 64)
  }

  const forwarded = headerLine(req.headers['x-forwarded-for'])
  if (forwarded) {
    const hops = forwarded
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean)
    const peer = hops[hops.length - 1]
    if (peer) return peer.slice(0, 64)
  }

  return (req.socket?.remoteAddress ?? 'unknown').slice(0, 64)
}

function pruneRateMap(now: number) {
  for (const [key, window] of hits) {
    if (now - window.start >= WINDOW_MS) hits.delete(key)
  }
  while (hits.size > MAX_RATE_KEYS) {
    const oldest = hits.keys().next().value
    if (!oldest) break
    hits.delete(oldest)
  }
}

function tooMany(key: string) {
  const now = Date.now()
  pruneRateMap(now)
  const current = hits.get(key)
  if (!current || now - current.start >= WINDOW_MS) {
    hits.set(key, { start: now, count: 1 })
    return false
  }
  if (current.count >= MAX_PER_WINDOW) return true
  current.count += 1
  return false
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function emailFromAddress(value: string) {
  const angled = value.match(/<([^>]+)>/)
  return (angled?.[1] ?? value).trim()
}

const ALLOWED_CONTACT = new Set(['phone', 'email'])
const ALLOWED_TOPICS = new Set(['appointment', 'referral', 'device', 'general'])
const ALLOWED_PATIENT_TYPE = new Set(['', 'new', 'established'])

function configError() {
  return {
    ok: false,
    error: 'Online requests are temporarily unavailable. Please call the office.',
  }
}

export default async function handler(req: NodeLikeRequest, res: NodeLikeResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  if (tooMany(clientKey(req))) {
    return res.status(429).json({
      ok: false,
      error: 'Too many requests. Please call the office instead.',
    })
  }

  let body: InquiryBody
  try {
    body = await readJsonBody(req)
  } catch (error) {
    if (error instanceof Error && error.message === 'payload-too-large') {
      return res.status(413).json({ ok: false, error: 'The request could not be sent. Please call the office.' })
    }
    return res.status(400).json({ ok: false, error: 'The request could not be sent. Please call the office.' })
  }

  if (text(body.website, 80)) {
    return res.status(200).json({ ok: true })
  }

  const name = text(body.name, MAX_FIELD)
  const phone = text(body.phone, 80)
  const email = text(body.email, 160)
  const topic = text(body.topic, 120)
  const preferredContact = text(body.preferredContact, 40)
  const availability = text(body.availability, 240)
  const patientType = text(body.patientType, 40)
  const message = text(body.message, MAX_MESSAGE, true)
  const formType = text(body.formType, 40) === 'appointment' ? 'appointment' : 'contact'

  if (!name || !phone || !email || !topic || !preferredContact) {
    return res.status(400).json({ ok: false, error: 'Please complete all required fields.' })
  }
  if (!validEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Enter a valid email address.' })
  }
  if (!ALLOWED_CONTACT.has(preferredContact)) {
    return res.status(400).json({ ok: false, error: 'Select a preferred contact method.' })
  }
  if (!ALLOWED_TOPICS.has(topic)) {
    return res.status(400).json({ ok: false, error: 'Select a topic.' })
  }
  if (!ALLOWED_PATIENT_TYPE.has(patientType)) {
    return res.status(400).json({ ok: false, error: 'Please complete all required fields.' })
  }

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.FROM_EMAIL?.trim()
  const recipient = process.env.CONTACT_EMAIL?.trim()
  if (
    !apiKey ||
    !from ||
    !recipient ||
    !validEmail(recipient) ||
    !validEmail(emailFromAddress(from))
  ) {
    return res.status(503).json(configError())
  }

  const subject =
    formType === 'appointment'
      ? `Appointment request from ${name}`
      : `Website inquiry from ${name}`

  const lines = [
    `Form: ${formType === 'appointment' ? 'Appointment request' : 'Contact Us'}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Preferred contact: ${preferredContact}`,
    `Topic: ${topic}`,
    `Patient type: ${patientType || 'Not specified'}`,
    `Availability: ${availability || 'Not specified'}`,
    '',
    'Message:',
    message || '(none)',
    '',
    'Do not treat this message as a complete medical history. This form is not for emergencies.',
  ]

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject,
      text: lines.join('\n'),
    }),
  })

  if (!response.ok) {
    return res.status(502).json({
      ok: false,
      error: 'The request could not be sent. Please call the office.',
    })
  }

  return res.status(200).json({ ok: true })
}
