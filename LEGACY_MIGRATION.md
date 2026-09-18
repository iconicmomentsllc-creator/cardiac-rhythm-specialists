# Legacy migration map

The recovered source remains in `legacy-crs-site/` and was not rewritten. Production stays in this repository with the existing Vercel / GitHub / domain relationship.

## Decision legend

- **Modernize:** recovered into a semantic React page
- **Consolidate:** several old URLs share one new page
- **Archive:** kept in `legacy-crs-site` only
- **Remove from production:** obsolete UI, Flash players, vendor credits
- **Redirect:** 301 in `vercel.json` plus client `Navigate` fallback

## High-value old pages

| Old URL | New destination | Action |
| --- | --- | --- |
| `/index.html`, `/welcome.html` | `/`, `/about-dr-polosajian` | Modernize biography; keep current credentials after the name |
| `/Conditions.html`, `/Arrhythmia.html`, `/Arrhythmias.html` | `/conditions`, `/conditions/arrhythmias` | Modernize recovered arrhythmia library |
| `/Treatments.html` | `/treatments` | Modernize |
| `/Tests.html` | `/testing` | Modernize |
| `/For-Patient.html` | `/patient-resources` | Modernize hub |
| `/Appointment-Requests.html` | `/appointment-request` | Rebuild form; route to `info@crsmdinc.com` |
| `/Forms.html` | `/patient-forms` | Recover working PDF only |
| `/FAQ.html` | `/faq` | Merge recovered Q&A; drop outdated statistics |
| `/contact-us.html` | `/contact` | Current phone/address/email |
| `/24-Hour-Holter-Monitoring.html` | `/testing/holter-monitoring` | Modernize |
| `/30-Day-Event-Monitoring.html` | `/testing/event-monitoring` | Modernize |
| `/Electrophysiology-Study.html` | `/treatments/electrophysiology-study` | Modernize |
| Pacemaker / ICD / Bi-V implant and check pages | `/treatments/*`, `/testing/*` | Consolidate by topic |
| `/SVT-Ablation.html`, `/VT-Ablation.html` | `/treatments/svt-ablation`, `/treatments/vt-ablation` | Modernize |
| `/3-D-Electro-Anatomical-Mapping.html` | `/treatments/three-dimensional-mapping` | Modernize |
| `/Atrial/Default.html` and other Flash booklets | `/education/booklets/*` | Replace Flash with accessible image sequences |
| `/html/AVNRT.html`, `/html/AVRT.html` | `/conditions/avnrt`, `/conditions/avrt` | Text recovered from Conditions.html |
| `/presentations.html` | `/presentations` | Historical images; affiliations on flyers not treated as current |
| `/articles.html` | `/articles` | 2010 magazine PDF kept as historical |
| `/movies.html` | `/videos` | Flash/FLV archived; YouTube used in production |
| `/movies.html` | `/videos` | Flash/FLV archived; YouTube used in production |
| `/patients-letters.html` | `/` | Archive pending privacy review |
| `/Coumadin-Management.html` | `/patient-resources` | Do not republish old medication instructions |
| `/whats-new.html` | `/` | Historical news not republished |
| `html/*.html` education wrappers | matching condition/treatment/education pages | Flash wrappers replaced; text recovered from parent pages |

The complete 301 list is in `src/data/legacyRedirects.ts` and `vercel.json`.

## Assets retained in production

- Physician photograph already in `public/dr-leo-polosajian.jpg`
- Educational illustrations copied to `public/education/`
- Flash booklet JPEGs copied to `public/education/booklets/`
- `public/forms/new-patient-intake-form.pdf`

## Media

| Asset | Decision |
| --- | --- |
| `videos/*.flv` | Archive. Cannot play without Flash. Flagged for conversion review |
| YouTube pacemaker / education videos | Keep on homepage and `/videos` |
| Flash header/nav/player SWF | Not used |
| MP3 “beach/office/park” booklet audio | Decorative; not published |
| Cooking / diet / Lincare medication Flash books | Archive; medication content needs physician review |

## Removed from the public site

- “Powered by Universal Graphics & Publishing”
- 2008 copyright
- Old 805 / 213 phone numbers and Los Angeles Cardiology Associates language
- `LeoPolosajian@CRSMDInc.com` as a contact
- Accessibility is built into the pages; the widget remains optional
