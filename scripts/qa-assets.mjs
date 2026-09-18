import fs from 'node:fs'
import path from 'node:path'

const publicDir = 'public'
const srcs = new Set([
  '/dr-leo-polosajian.jpg',
  '/forms/new-patient-intake-form.pdf',
  '/education/holter-monitoring.jpg',
  '/education/electrocardiogram.jpg',
  '/education/display/electrocardiogram.jpg',
  '/education/echocardiogram.jpg',
  '/education/tilt-table.jpg',
  '/education/basic-cardiology.jpg',
  '/education/the-normal-heart.jpg',
  '/education/atrial-flutter.jpg',
  '/education/ventricular-tachycardia.jpg',
  '/education/ventricular-fibrillation.jpg',
  '/education/heart-block.jpg',
  '/education/heart-block-ecg.jpg',
  '/education/premature-atrial-contractions.jpg',
  '/education/premature-ventricular-contractions.jpg',
  '/education/electrophysiology-study.jpg',
  '/education/svt-ablation.jpg',
  '/education/pacemaker-implantation.jpg',
  '/presentations/symposium-dr-leo.jpg',
  '/presentations/los-robles-flyer.jpg',
  '/articles/november-2010-yhc-magazine.pdf',
])

function booklet(folder, nameFn, count) {
  for (let n = 1; n <= count; n += 1) {
    srcs.add(`/education/booklets/${folder}/${nameFn(n)}`)
  }
}

booklet('atrial-fibrillation', (n) => `Atrial_${String(n).padStart(3, '0')}.jpg`, 15)
booklet('common-arrhythmias', (n) => `Common_Arrhythmias_${String(n).padStart(2, '0')}.jpg`, 17)
booklet('crt', (n) => `CRT${String(n).padStart(3, '0')}.jpg`, 17)
booklet('heart-failure', (n) => `Heart_Failure_${String(n).padStart(2, '0')}.jpg`, 23)

function walk(dir) {
  const files = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

const assetPattern =
  /['"`](\/(?:education|forms|presentations|articles|dr-leo)[^'"`]+?\.(?:jpg|jpeg|png|gif|webp|pdf|svg))['"`]/g

for (const file of walk('src')) {
  if (!/\.(ts|tsx)$/.test(file)) continue
  const text = fs.readFileSync(file, 'utf8')
  for (const match of text.matchAll(assetPattern)) {
    srcs.add(match[1])
  }
}

const missing = [...srcs].filter((src) => !fs.existsSync(path.join(publicDir, src.slice(1))))
if (missing.length) {
  console.error(`Missing ${missing.length} assets:`)
  for (const src of missing) console.error(src)
  process.exit(1)
}

const failures = []

function walkText(dir, pattern) {
  let text = ''
  for (const file of walk(dir)) {
    if (!pattern.test(file)) continue
    text += `\n${fs.readFileSync(file, 'utf8')}`
  }
  return text
}

const srcText = walkText('src', /\.(ts|tsx)$/)
if (srcText.includes('physicianApprovalNeeded')) {
  failures.push('physicianApprovalNeeded remains in src (unused review flag)')
}
if (/style\s*=\s*\{\{/.test(srcText)) {
  failures.push('inline React style attributes remain in src')
}

const headers = fs.readFileSync('public/_headers', 'utf8')
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
const csp = vercel.headers?.[0]?.headers?.find((item) => item.key === 'Content-Security-Policy')?.value ?? ''
if (csp.includes('unsafe-inline') || headers.includes("script-src 'self' 'unsafe-inline'")) {
  failures.push('CSP still contains unsafe-inline')
}
if (csp.includes('style-src-attr')) {
  failures.push('CSP still contains style-src-attr unsafe-inline fallback')
}
if (!headers.includes(csp)) {
  failures.push('public/_headers CSP does not match vercel.json')
}

function vercelLiteral(source) {
  return source.replace(/\\([+()?])/g, '$1')
}

const vercelRedirects = vercel.redirects.filter((item) => !item.has)
const vercelSources = new Map()
for (const item of vercelRedirects) {
  const source = vercelLiteral(item.source)
  const existing = vercelSources.get(source)
  if (existing) failures.push(`Duplicate Vercel redirect ${source} -> ${existing} and ${item.destination}`)
  vercelSources.set(source, item.destination)
}

const hostRedirects = vercel.redirects.filter((item) => item.has)
for (const item of hostRedirects) {
  const destHost = new URL(item.destination.replace('/:path*', '/')).host
  const fromHost = item.has?.[0]?.value
  if (fromHost && destHost === fromHost) {
    failures.push(`Host redirect loop ${fromHost}`)
  }
}

const destinationSet = new Set(vercelRedirects.map((item) => item.destination))
for (const item of vercelRedirects) {
  if (vercelSources.has(item.destination)) {
    failures.push(`Redirect chain ${item.source} -> ${item.destination} -> ${vercelSources.get(item.destination)}`)
  }
  if (item.source === item.destination) {
    failures.push(`Self-redirect ${item.source}`)
  }
}

const legacyText = fs.readFileSync('src/data/legacyRedirects.ts', 'utf8')
const legacyFrom = [...legacyText.matchAll(/from: '([^']+)'/g)].map((match) => match[1])
const seenLegacy = new Set()
for (const from of legacyFrom) {
  if (seenLegacy.has(from)) failures.push(`Duplicate in-app redirect ${from}`)
  seenLegacy.add(from)
  if (!vercelSources.has(from)) failures.push(`In-app redirect missing from vercel.json: ${from}`)
}

const publicFiles = walk(publicDir).map((file) => file.replace(/\\/g, '/'))
const blockedPublic = publicFiles.filter((file) =>
  /\.(env|sql|db|sqlite|log|bak|pem|key)$/i.test(file) || /\/(\.env|secrets?|credentials)/i.test(file),
)
if (blockedPublic.length) {
  failures.push(`Sensitive public files: ${blockedPublic.join(', ')}`)
}

const indexHtml = fs.readFileSync('index.html', 'utf8')
if (/google-site-verification"\s+content="\s*"/i.test(indexHtml) || /<meta[^>]*name=["']google-site-verification["']/i.test(indexHtml)) {
  failures.push('index.html should not contain a Google site verification tag until a token is supplied')
}

if (failures.length) {
  console.error(`QA source checks failed (${failures.length}):`)
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`All ${srcs.size} referenced public assets exist`)
console.log(`Redirect/CSP/source checks passed (${vercelRedirects.length} path redirects, ${destinationSet.size} destinations)`)

