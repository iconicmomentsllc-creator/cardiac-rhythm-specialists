# SEO implementation

This document describes the current metadata and structured-data setup. It is not a ranking guarantee.

## Architecture

Indexable sections:

- Home, About
- Conditions (library recovered from `Conditions.html` and related pages)
- Treatments and procedures
- Testing and monitoring
- Patient resources, appointment request, forms, records, prescriptions, labs
- Education, illustrated booklets, videos, photos
- FAQ, contact, insurance, new patients, accessibility, privacy, terms, disclaimer

URLs are descriptive. There are no city-doorway pages. Geographic targeting is the Reseda office plus service area: Los Angeles, San Fernando Valley, Thousand Oaks, Simi Valley, Glendale, North Hollywood.

## Metadata

Each public path has a unique title, meta description, canonical, Open Graph, and Twitter tags via `src/seo/pages.ts` and prerender.

- Homepage and about titles use `Leo Polosajian, MD, MS, FACC, FHRS, CCDS`
- Pacemaker treatment title uses the same credential string
- Generated topic titles include a section phrase (`Heart Rhythm Condition`, `Heart Rhythm Treatment`, `Heart Rhythm Testing`, `Patient Education`, `Illustrated Education`) so similar short titles stay unique
- Generated descriptions start with the topic name, avoid mid-word truncation, and mention the Reseda practice when length allows
- Canonical origin is `VITE_SITE_URL` (production: `https://www.crsmdinc.com`)

## Structured data

JSON-LD graph includes:

- MedicalClinic, Physician (`name` + `honorificSuffix`), WebSite, WebPage, BreadcrumbList
- MedicalWebPage (in addition to WebPage) on condition, treatment, testing, and education URLs, with `PatientAudience`
- FAQPage on `/faq`
- VideoObject on `/` and `/videos` for the three featured YouTube videos (name, description, thumbnail, embed/content URLs; no invented upload dates, view counts, or ratings)

No review stars, extra offices, or invented awards.

## Sitemap and robots

`scripts/prerender.mjs` writes `sitemap.xml` and `robots.txt` for all `PUBLIC_PATHS`. `public/robots.txt` already points to `https://www.crsmdinc.com/sitemap.xml`.

## Redirects

Legacy HTML URLs 301 in `vercel.json`. React Router also `Navigate`s those paths so GitHub Pages prerender fallbacks do not dump every old URL on a soft 404 homepage. Additional recoveries include `/Loop-Recorder-Implant.html`, `/Device-Information.html`, and `/books.html`.

## Internal linking

Condition, treatment, and testing pages include related links (for example AFib → ablation → monitoring → appointment). Hubs and the footer link across sections, including new patients and insurance.

## Image SEO

Published educational images use descriptive filenames under `/education/` and have alt text. Booklet pages use “title, page N” alternatives until clinical captions are approved.

## Remaining opportunities

- Add Google Search Console verification (`VITE_GSC_VERIFICATION`) when a token exists
- Convert archived FLV files only if they should be published; they are not VideoObject sources today
- Confirm current board-certification wording for richer Physician schema (see `PHYSICIAN_REVIEW.md`)
- Supply missing patient-form PDFs
