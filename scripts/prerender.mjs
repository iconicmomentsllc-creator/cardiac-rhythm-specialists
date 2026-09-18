import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function fileForPath(urlPath) {
  if (urlPath === '/') return resolve(distDir, 'index.html')
  return resolve(distDir, urlPath.replace(/^\//, ''), 'index.html')
}

function upsertMeta(head, attr, key, content) {
  const pattern = new RegExp(
    `<meta[^>]*${attr}=["']${key}["'][^>]*>\\s*`,
    'i',
  )
  const tag = `<meta ${attr}="${key}" content="${escapeHtml(content)}" />\n    `
  if (pattern.test(head)) {
    return head.replace(pattern, tag)
  }
  return head.replace('</head>', `${tag}</head>`)
}

function upsertLink(head, rel, href) {
  const pattern = new RegExp(`<link[^>]*rel=["']${rel}["'][^>]*>\\s*`, 'i')
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />\n    `
  if (pattern.test(head)) {
    return head.replace(pattern, tag)
  }
  return head.replace('</head>', `${tag}</head>`)
}

function applySeo(template, rendered) {
  const { html, seo, gsc } = rendered
  let output = template.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${html}</div>`,
  )
  output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
  output = upsertMeta(output, 'name', 'description', seo.description)
  output = upsertMeta(output, 'name', 'robots', seo.robots)
  output = upsertLink(output, 'canonical', seo.canonical)
  output = upsertMeta(output, 'property', 'og:title', seo.title)
  output = upsertMeta(output, 'property', 'og:description', seo.description)
  output = upsertMeta(output, 'property', 'og:url', seo.canonical)
  output = upsertMeta(output, 'property', 'og:image', seo.ogImage)
  output = upsertMeta(output, 'property', 'og:image:alt', 'Leo Polosajian, MD, MS, FACC, FHRS, CCDS, cardiologist and cardiac electrophysiologist')
  output = upsertMeta(output, 'name', 'twitter:card', 'summary_large_image')
  output = upsertMeta(output, 'name', 'twitter:title', seo.title)
  output = upsertMeta(output, 'name', 'twitter:description', seo.description)
  output = upsertMeta(output, 'name', 'twitter:image', seo.ogImage)
  if (gsc && String(gsc).trim()) {
    output = upsertMeta(output, 'name', 'google-site-verification', gsc)
  }
  const json = JSON.stringify(rendered.jsonLd)
  output = output.replace(/<script id="jsonld-graph"[\s\S]*?<\/script>\s*/i, '')
  output = output.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/i, '')
  output = output.replace(
    '</head>',
    `    <script id="jsonld-graph" type="application/ld+json">${json}</script>\n  </head>`,
  )
  return output
}

function sitemapXml(origin, paths, lastmod) {
  const urls = paths
    .map((path) => {
      const loc = path === '/' ? `${origin}/` : `${origin}${path}`
      const priority = path === '/' ? '1.0' : path.split('/').length === 2 ? '0.8' : '0.7'
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const { render } = await import(pathToFileURL(serverEntry).href)
const template = readFileSync(resolve(distDir, 'index.html'), 'utf8')
const origin = (process.env.VITE_SITE_URL || 'https://www.crsmdinc.com').replace(/\/$/, '')
const first = render('/')
const PUBLIC_PATHS = first.publicPaths
const lastmod = new Date().toISOString().slice(0, 10)
if (!Array.isArray(PUBLIC_PATHS) || PUBLIC_PATHS.length !== 79) {
  throw new Error(`Expected 79 public paths, received ${PUBLIC_PATHS?.length ?? 0}`)
}

for (const path of PUBLIC_PATHS) {
  const rendered = path === '/' ? first : render(path)
  const file = fileForPath(path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, applySeo(template, rendered))
}

const notFound = applySeo(template, render('/__not-found__'))
writeFileSync(resolve(distDir, '404.html'), notFound)

writeFileSync(resolve(distDir, 'sitemap.xml'), sitemapXml(origin, PUBLIC_PATHS, lastmod))
writeFileSync(
  resolve(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
)

console.log(`Prerendered ${PUBLIC_PATHS.length} pages plus 404.html`)

const homeHtml = readFileSync(fileForPath('/'), 'utf8')
const hasVerificationTag = /<meta[^>]*name=["']google-site-verification["'][^>]*>/i
if (hasVerificationTag.test(homeHtml) && /content="\s*"/i.test(homeHtml.match(hasVerificationTag)?.[0] ?? '')) {
  throw new Error('Empty Google site verification meta tag was emitted')
}
if (!first.gsc && hasVerificationTag.test(homeHtml)) {
  throw new Error('Google site verification meta tag was emitted without a token')
}
if (/googletagmanager|gtag\(|analytics-init\.js/.test(homeHtml)) {
  throw new Error('Analytics script was emitted while analytics should be disabled')
}
const sitemap = readFileSync(resolve(distDir, 'sitemap.xml'), 'utf8')
if (!sitemap.includes(`<lastmod>${lastmod}</lastmod>`)) {
  throw new Error('Sitemap lastmod does not match the current build date')
}
const notFoundHtml = readFileSync(resolve(distDir, '404.html'), 'utf8')
if (!notFoundHtml.includes('noindex')) {
  throw new Error('404 page is missing noindex robots directive')
}
