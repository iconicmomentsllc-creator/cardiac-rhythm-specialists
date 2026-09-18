export const SITE_ORIGIN = (
  import.meta.env.VITE_SITE_URL ?? 'https://www.crsmdinc.com'
).replace(/\/$/, '')

export const SITE_IDS = {
  organization: `${SITE_ORIGIN}/#organization`,
  physician: `${SITE_ORIGIN}/#physician`,
  website: `${SITE_ORIGIN}/#website`,
} as const

export const OG_IMAGE_PATH = '/dr-leo-polosajian.jpg'

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_ORIGIN}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_ORIGIN}${normalized.replace(/\/$/, '')}`
}

export function assetUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_ORIGIN}${normalized}`
}

export const OG_IMAGE_URL = assetUrl(OG_IMAGE_PATH)

export const GSC_VERIFICATION = import.meta.env.VITE_GSC_VERIFICATION?.trim() || undefined
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID?.trim() || undefined
export const ANALYTICS_ENABLED = import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
