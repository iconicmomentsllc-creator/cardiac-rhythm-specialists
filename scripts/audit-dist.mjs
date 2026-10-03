import fs from 'node:fs'
import path from 'node:path'

const distDir = 'dist'
const failures = []

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const lastmods = new Set([...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]))
const today = new Date().toISOString().slice(0, 10)
const lastmod = [...lastmods][0]
if (locs.length !== 85) failures.push(`Sitemap has ${locs.length} URLs, expected 85`)
if (locs.some((loc) => loc.endsWith('/education/multimedia-library'))) {
  failures.push('Sitemap includes noindex /education/multimedia-library')
}
if (lastmods.size !== 1 || lastmod !== today) {
  failures.push(`Sitemap lastmod is ${lastmod ?? '(missing)'} expected ${today}`)
}

const origin = 'https://www.crsmdinc.com'
if (locs.some((loc) => !loc.startsWith(`${origin}/`))) {
  failures.push('Sitemap contains a URL that is not on https://www.crsmdinc.com')
}
if (locs.some((loc) => !loc.startsWith('https://'))) failures.push('Sitemap contains a non-HTTPS URL')
if (new Set(locs).size !== locs.length) failures.push('Sitemap contains duplicate URLs')
if (locs.some((loc) => loc !== `${origin}/` && loc.endsWith('/'))) {
  failures.push('Sitemap contains a trailing-slash URL other than the homepage')
}
if (locs.some((loc) => loc.includes('.html'))) failures.push('Sitemap contains a legacy .html URL')
if (locs.includes(`${origin}/404`) || locs.includes(`${origin}/404.html`)) {
  failures.push('Sitemap includes the 404 page')
}
if (locs.some((loc) => loc.includes('localhost') || loc.includes('127.0.0.1'))) {
  failures.push('Sitemap contains a localhost URL')
}

const pages = locs.map((loc) => loc.replace(origin, '') || '/')
for (const page of pages) {
  const file = page === '/' ? path.join(distDir, 'index.html') : path.join(distDir, page.slice(1), 'index.html')
  if (!fs.existsSync(file)) {
    failures.push(`Missing prerendered file for ${page}`)
    continue
  }
  const html = fs.readFileSync(file, 'utf8')
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1]
  const robotsTag = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i)?.[1] ?? ''
  const expected = page === '/' ? `${origin}/` : `${origin}${page}`
  if (canonical !== expected) failures.push(`${page} canonical is ${canonical ?? '(missing)'}, expected ${expected}`)
  if (robotsTag.includes('noindex')) failures.push(`${page} is in the sitemap but has robots ${robotsTag}`)
  if ((html.match(/rel=["']canonical["']/gi) || []).length > 1) {
    failures.push(`${page} has more than one canonical tag`)
  }
}

if (!fs.existsSync(path.join(distDir, '404.html'))) failures.push('Missing dist/404.html')

const home = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
const notFound = fs.readFileSync(path.join(distDir, '404.html'), 'utf8')
if (/<meta[^>]*name=["']google-site-verification["']/.test(home)) {
  failures.push('Homepage emitted a Google site verification tag without a configured token')
}
if (/googletagmanager|gtag\(|analytics-init\.js/.test(home)) {
  failures.push('Homepage emitted analytics scripts while analytics is disabled')
}
if (!home.includes('id="jsonld-graph"')) failures.push('Homepage missing JSON-LD')
if (!home.includes('class="a11y-dock"')) failures.push('Homepage missing accessibility dock in prerendered HTML')
if (!home.includes('id="main"')) failures.push('Homepage missing main landmark')
if (!notFound.includes('noindex')) failures.push('404 missing noindex')
if (!notFound.includes('canonical') || !notFound.includes(`${origin}/404`)) {
  failures.push('404 canonical is not /404')
}

const multimediaLibrary = path.join(distDir, 'education', 'multimedia-library', 'index.html')
if (!fs.existsSync(multimediaLibrary)) {
  failures.push('Missing prerendered /education/multimedia-library')
} else {
  const multimediaHtml = fs.readFileSync(multimediaLibrary, 'utf8')
  if (!/name=["']robots["'][^>]*content=["']noindex, follow["']/.test(multimediaHtml)) {
    failures.push('/education/multimedia-library is missing noindex, follow')
  }
  if (multimediaHtml.includes('\uFFFD') || multimediaHtml.includes('???Electrophysiology')) {
    failures.push('/education/multimedia-library has garbled characters in prerendered HTML')
  }
}

const robotsTxt = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf8').replace(/\r\n/g, '\n')
if (robotsTxt !== 'User-agent: *\nAllow: /\n\nSitemap: https://www.crsmdinc.com/sitemap.xml\n') {
  failures.push('dist/robots.txt does not allow crawlers and point to the production sitemap')
}

const headers = fs.readFileSync(path.join(distDir, '_headers'), 'utf8')
if (headers.includes('unsafe-inline')) failures.push('dist/_headers still contains unsafe-inline')
if (headers.includes('style-src-attr')) failures.push('dist/_headers still contains style-src-attr')

const htmlFiles = walk(distDir).filter((file) => file.endsWith('.html'))
let overflowCandidates = 0
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8')
  if (/<script(?![^>]*type=["']application\/ld\+json["'])[^>]*>\s*[^<]/.test(html)) {
    const inline = [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)]
      .filter((match) => !/application\/ld\+json/i.test(match[0]) && match[1].trim())
    if (inline.length) failures.push(`Inline JS in ${file}: ${inline.length}`)
  }
  if (html.includes('style="')) overflowCandidates += 1
  if (/https?:\/\/(?:localhost|127\.0\.0\.1)/i.test(html)) {
    failures.push(`Localhost URL in ${file}`)
  }
  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)?.[1] ?? ''
  if (/github\.io|vercel\.app|localhost|127\.0\.0\.1/i.test(canonical)) {
    failures.push(`Non-production canonical in ${file}: ${canonical}`)
  }
}
if (overflowCandidates) failures.push(`${overflowCandidates} HTML files still contain style=" attributes`)

const hrefs = new Set()
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8')
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) hrefs.add(match[1].split('#')[0].split('?')[0])
}

const knownFiles = new Set(
  walk(distDir).map((file) => {
    const rel = file.replace(/\\/g, '/').replace(/^dist/, '')
    return rel
  }),
)

function existsPublicPath(urlPath) {
  if (!urlPath || urlPath === '/') return true
  if (pages.includes(urlPath)) return true
  const asFile = path.join(distDir, urlPath.slice(1))
  const asIndex = path.join(distDir, urlPath.slice(1), 'index.html')
  return fs.existsSync(asFile) || fs.existsSync(asIndex)
}

for (const href of [...hrefs].sort()) {
  if (href.startsWith('//') || href.startsWith('/api/')) continue
  if (href === '/404') continue
  if (!existsPublicPath(href)) failures.push(`Broken internal href ${href}`)
}

console.log(`Audited ${pages.length} sitemap URLs, ${htmlFiles.length} HTML files, ${hrefs.size} internal hrefs`)
console.log(`Sitemap lastmod=${[...lastmods].join(',')}`)
console.log(`Known dist files=${knownFiles.size}`)
if (failures.length) {
  console.error(`Dist audit failed (${failures.length}):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}
console.log('Dist route/SEO/CSP/asset audit passed')
