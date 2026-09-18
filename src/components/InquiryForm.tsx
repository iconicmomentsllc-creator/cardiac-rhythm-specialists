import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { practice } from '../data/practice'

type Field = 'name' | 'phone' | 'email' | 'topic' | 'preferredContact'
type Errors = Partial<Record<Field, string>>

const fieldOrder: Field[] = ['name', 'phone', 'email', 'preferredContact', 'topic']

const MAX_NAME = 500
const MAX_PHONE = 80
const MAX_EMAIL = 160
const MAX_AVAILABILITY = 240
const MAX_MESSAGE = 2000
const MAX_HONEYPOT = 80

type Props = {
  formType: 'contact' | 'appointment'
  heading: string
  headingLevel?: 'h2' | 'h3'
}

export function InquiryForm({ formType, heading, headingLevel = 'h3' }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [formError, setFormError] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const ids = useId()
  const warningId = `${ids}-warning`
  const successRef = useRef<HTMLOutputElement>(null)
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const sendingRef = useRef(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const topicRef = useRef<HTMLSelectElement>(null)
  const contactRef = useRef<HTMLSelectElement>(null)
  const fieldRefs = {
    name: nameRef,
    phone: phoneRef,
    email: emailRef,
    topic: topicRef,
    preferredContact: contactRef,
  }

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  useEffect(() => {
    if (formError) errorSummaryRef.current?.focus()
  }, [formError])

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const next: Errors = {}
    if (!String(data.get('name') ?? '').trim()) next.name = 'Enter your full name.'
    if (!String(data.get('phone') ?? '').trim()) next.phone = 'Enter a phone number.'
    const email = String(data.get('email') ?? '').trim()
    if (!email) next.email = 'Enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!String(data.get('preferredContact') ?? '').trim()) {
      next.preferredContact = 'Select a preferred contact method.'
    }
    if (!String(data.get('topic') ?? '').trim()) next.topic = 'Select a topic.'
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sendingRef.current) return
    const form = event.currentTarget
    const next = validate(form)
    setErrors(next)
    setFormError('')
    const firstError = fieldOrder.find((field) => next[field])
    if (firstError) {
      fieldRefs[firstError].current?.focus()
      return
    }

    const data = new FormData(form)
    sendingRef.current = true
    setSending(true)
    let ok = false
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
          name: String(data.get('name') ?? '').trim(),
          phone: String(data.get('phone') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          topic: String(data.get('topic') ?? '').trim(),
          preferredContact: String(data.get('preferredContact') ?? '').trim(),
          availability: String(data.get('availability') ?? '').trim(),
          patientType: String(data.get('patientType') ?? '').trim(),
          message: String(data.get('message') ?? ''),
          website: String(data.get('website') ?? ''),
        }),
      })
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null
      if (!response.ok || !payload?.ok) {
        setFormError(payload?.error || 'The request could not be sent. Please call the office.')
        return
      }
      ok = true
      setSubmitted(true)
    } catch {
      setFormError('The request could not be sent. Please call the office.')
    } finally {
      sendingRef.current = false
      if (!ok) setSending(false)
    }
  }

  function fieldError(field: Field) {
    const errorId = `${ids}-${field}-error`
    return errors[field] ? (
      <p id={errorId} className="mt-1 text-base font-medium text-navy">
        {errors[field]}
      </p>
    ) : null
  }

  function describedBy(field: Field, extra?: string) {
    const parts = [extra, errors[field] ? `${ids}-${field}-error` : null].filter(Boolean)
    return parts.length ? parts.join(' ') : undefined
  }

  const Heading = headingLevel

  if (submitted) {
    return (
      <output
        ref={successRef}
        tabIndex={-1}
        className="block rounded-xl border-2 border-[var(--color-ui-border)] bg-white p-5"
      >
        <p className="text-lg font-semibold text-navy">Thank you. Your request was sent to the office.</p>
        <p className="mt-2 text-lg leading-relaxed text-navy">
          Staff will review it at {practice.email}. This is a request only and does not confirm an
          appointment. If you need a faster response, call{' '}
          <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
            {practice.phoneDisplay}
          </a>
          .
        </p>
      </output>
    )
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={warningId}
      aria-busy={sending || undefined}
    >
      <Heading className="font-serif text-2xl font-semibold text-navy">{heading}</Heading>
      <p
        id={warningId}
        className="rounded-xl border-2 border-[var(--color-ui-border)] bg-white px-4 py-3 text-base leading-relaxed text-navy"
      >
        {formType === 'appointment'
          ? 'This is an appointment request. Submitting this form does not guarantee an appointment. Do not use this form for medical emergencies. If you are experiencing a medical emergency, call 911.'
          : 'Please do not submit confidential medical information through this form. Please do not use this form for medical emergencies. If you are experiencing a medical emergency, call 911.'}
      </p>
      <p className="text-base leading-relaxed text-navy">
        Requests are sent to {practice.email}. This is not a patient portal and is not a HIPAA-secure
        channel for detailed health information.
      </p>

      {formError || fieldOrder.some((field) => errors[field]) ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border-2 border-[var(--color-ui-border)] bg-white px-4 py-3"
        >
          <p className="font-semibold text-navy">Please correct the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-navy">
            {formError ? <li>{formError}</li> : null}
            {fieldOrder.map((field) =>
              errors[field] ? (
                <li key={field}>
                  <a href={`#${ids}-${field}`} className="font-semibold underline underline-offset-4">
                    {errors[field]}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>
      ) : null}

      <div hidden inert aria-hidden="true">
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
          maxLength={MAX_HONEYPOT}
        />
      </div>

      <div>
        <label htmlFor={`${ids}-name`} className="block text-base font-semibold text-navy">
          Full name (required)
        </label>
        <input
          ref={nameRef}
          id={`${ids}-name`}
          required
          type="text"
          autoComplete="name"
          maxLength={MAX_NAME}
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy('name')}
          name="name"
          className="site-input mt-1.5"
        />
        {fieldError('name')}
      </div>
      <div>
        <label htmlFor={`${ids}-phone`} className="block text-base font-semibold text-navy">
          Phone (required)
        </label>
        <input
          ref={phoneRef}
          id={`${ids}-phone`}
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={MAX_PHONE}
          aria-required="true"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={describedBy('phone')}
          name="phone"
          className="site-input mt-1.5"
        />
        {fieldError('phone')}
      </div>
      <div>
        <label htmlFor={`${ids}-email`} className="block text-base font-semibold text-navy">
          Email (required)
        </label>
        <input
          ref={emailRef}
          id={`${ids}-email`}
          required
          type="email"
          autoComplete="email"
          maxLength={MAX_EMAIL}
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy('email')}
          name="email"
          className="site-input mt-1.5"
        />
        {fieldError('email')}
      </div>
      <div>
        <label htmlFor={`${ids}-preferredContact`} className="block text-base font-semibold text-navy">
          Preferred contact method (required)
        </label>
        <select
          ref={contactRef}
          id={`${ids}-preferredContact`}
          required
          name="preferredContact"
          defaultValue=""
          aria-required="true"
          aria-invalid={errors.preferredContact ? true : undefined}
          aria-describedby={describedBy('preferredContact')}
          className="site-input mt-1.5"
        >
          <option value="" disabled>
            Select a method
          </option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
        </select>
        {fieldError('preferredContact')}
      </div>
      {formType === 'appointment' ? (
        <>
          <div>
            <label htmlFor={`${ids}-patientType`} className="block text-base font-semibold text-navy">
              Patient type (optional)
            </label>
            <select id={`${ids}-patientType`} name="patientType" defaultValue="" className="site-input mt-1.5">
              <option value="">Select if known</option>
              <option value="new">New patient</option>
              <option value="established">Established patient</option>
            </select>
          </div>
          <div>
            <label htmlFor={`${ids}-availability`} className="block text-base font-semibold text-navy">
              Preferred days or times (optional)
            </label>
            <input
              id={`${ids}-availability`}
              name="availability"
              type="text"
              maxLength={MAX_AVAILABILITY}
              className="site-input mt-1.5"
              aria-describedby={`${ids}-availability-hint`}
            />
            <p id={`${ids}-availability-hint`} className="mt-1 text-base text-navy">
              Share general availability. Staff will confirm any appointment by phone or email.
            </p>
          </div>
        </>
      ) : null}
      <div>
        <label htmlFor={`${ids}-topic`} className="block text-base font-semibold text-navy">
          How can we help? (required)
        </label>
        <select
          ref={topicRef}
          id={`${ids}-topic`}
          required
          name="topic"
          defaultValue=""
          aria-required="true"
          aria-invalid={errors.topic ? true : undefined}
          aria-describedby={describedBy('topic')}
          className="site-input mt-1.5"
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="appointment">Appointment request</option>
          <option value="referral">Referral</option>
          <option value="device">Pacemaker or ICD follow-up</option>
          <option value="general">General office question</option>
        </select>
        {fieldError('topic')}
      </div>
      <div>
        <label htmlFor={`${ids}-message`} className="block text-base font-semibold text-navy">
          Brief reason for contact (optional)
        </label>
        <textarea
          id={`${ids}-message`}
          name="message"
          rows={4}
          maxLength={MAX_MESSAGE}
          aria-describedby={`${ids}-message-hint`}
          className="site-input mt-1.5 min-h-32 py-3"
        />
        <p id={`${ids}-message-hint`} className="mt-1 text-base text-navy">
          Keep this short. Do not include diagnoses, medication lists, insurance IDs, or other
          sensitive health information.
        </p>
      </div>
      <button type="submit" className="btn btn-primary w-full" disabled={sending}>
        {sending ? 'Sending…' : formType === 'appointment' ? 'Send appointment request' : 'Send message to the office'}
      </button>
    </form>
  )
}
