type NodeLikeRequest = {
  method?: string
}

type NodeLikeResponse = {
  status: (code: number) => NodeLikeResponse
  json: (body: unknown) => NodeLikeResponse
  setHeader: (name: string, value: string) => void
  end: () => void
}

// Public patient inquiry and appointment forms are retired. This route no longer
// accepts submissions or sends email. Resend environment variables may remain on
// Vercel for future non-PHI practice/business email only — not for appointment
// requests, symptoms, diagnoses, or other patient health information.

export default async function handler(req: NodeLikeRequest, res: NodeLikeResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'OPTIONS')
    return res.status(204).end()
  }

  res.setHeader('Allow', 'OPTIONS')
  return res.status(410).json({
    ok: false,
    error: 'Online requests are no longer accepted. Please call the office.',
  })
}
