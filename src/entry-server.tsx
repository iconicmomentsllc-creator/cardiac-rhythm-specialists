import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { App } from './App'
import { getSeo, PUBLIC_PATHS } from './seo/pages'
import { jsonLdGraph } from './seo/structuredData'
import { GSC_VERIFICATION } from './seo/site'

export function render(url: string) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url} basename={basename || undefined}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

  return {
    html,
    seo: getSeo(url),
    jsonLd: jsonLdGraph(url),
    gsc: GSC_VERIFICATION,
    publicPaths: PUBLIC_PATHS,
  }
}
