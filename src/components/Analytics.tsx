import { ANALYTICS_ENABLED, GA_MEASUREMENT_ID } from '../seo/site'

export function Analytics() {
  if (!GA_MEASUREMENT_ID || !ANALYTICS_ENABLED) return null

  const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`

  return (
    <>
      <script async src={src} />
      <script src="/analytics-init.js" data-ga-id={GA_MEASUREMENT_ID} />
    </>
  )
}
