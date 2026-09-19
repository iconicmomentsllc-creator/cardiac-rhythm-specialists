import { BOOKLETS } from '../data/booklets'
import { EDUCATION } from '../data/educationPages'
import { CONDITIONS, TREATMENTS } from '../data/medicalPages'
import { practice } from '../data/practice'
import { TESTS } from '../data/testingPages'
import { absoluteUrl, OG_IMAGE_URL } from './site'

export type SeoRecord = {
  title: string
  description: string
  robots?: string
}

export type ResolvedSeo = SeoRecord & {
  path: string
  canonical: string
  ogImage: string
  robots: string
}

const phone = practice.phoneDisplay

export const pageSeo: Record<string, SeoRecord> = {
  '/': {
    title:
      'Cardiac Electrophysiologist in Los Angeles | Leo Polosajian, MD, MS, FACC, FHRS, CCDS',
    description:
      'Cardiac Rhythm Specialists in Reseda provides heart rhythm care for Los Angeles and the San Fernando Valley, including AFib, SVT, ablation, pacemakers, and ICD follow-up.',
  },
  '/about-dr-polosajian': {
    title: 'About Leo Polosajian, MD, MS, FACC, FHRS, CCDS | Heart Rhythm Specialist',
    description: `Meet Leo Polosajian, MD, MS, FACC, FHRS, CCDS, a cardiologist and cardiac electrophysiologist at Cardiac Rhythm Specialists in Reseda. Call ${phone}.`,
  },
  '/conditions': {
    title: 'Heart Rhythm Conditions | Cardiac Rhythm Specialists',
    description:
      'Learn about heart rhythm conditions evaluated in Reseda, including atrial fibrillation, arrhythmias, palpitations, and related symptoms. Call our office with questions.',
  },
  '/conditions/atrial-fibrillation': {
    title: 'Atrial Fibrillation (AFib) in Reseda, CA | Heart Rhythm Care',
    description:
      'Educational information about atrial fibrillation (AFib), common symptoms, evaluation, and care discussions. Cardiac Rhythm Specialists is in Reseda, CA.',
  },
  '/conditions/arrhythmias': {
    title: 'Arrhythmia Evaluation in Reseda, CA | Heart Rhythm Specialist',
    description:
      'Learn what arrhythmias are, why evaluation may be recommended, and how a heart rhythm specialist may assess irregular, fast, or slow heartbeats.',
  },
  '/conditions/supraventricular-tachycardia': {
    title: 'SVT Information in Reseda, CA | Supraventricular Tachycardia',
    description:
      'Patient-friendly information about supraventricular tachycardia (SVT), possible symptoms, and when a cardiac electrophysiology evaluation may be discussed.',
  },
  '/conditions/heart-palpitations': {
    title: 'Heart Palpitations Evaluation in Reseda, CA',
    description:
      'Learn about heart palpitations, common reasons people seek evaluation, and how a cardiologist or electrophysiologist may assess heart rhythm concerns.',
  },
  '/conditions/heart-failure': {
    title: 'Heart Failure and Heart Rhythm Care in Reseda, CA',
    description:
      'Educational information about how heart failure and heart rhythm disorders can be related, and when specialized evaluation may be discussed. Call our Reseda office.',
  },
  '/treatments': {
    title: 'Heart Rhythm Treatments | Cardiac Rhythm Specialists',
    description:
      'Learn about heart rhythm treatment topics such as pacemaker care, ICD care, and educational information about ablation. Call our Reseda office with questions.',
  },
  '/treatments/cardiac-ablation': {
    title: 'Cardiac Ablation in Reseda, CA | Heart Rhythm Education',
    description:
      'Educational information about cardiac ablation, why it may be discussed for some arrhythmias, and what patients can generally expect to ask a physician.',
  },
  '/treatments/afib-ablation': {
    title: 'AFib Ablation Information in Reseda, CA',
    description:
      'Learn what AFib ablation means, when it may be discussed, and how it relates to atrial fibrillation care. Contact Cardiac Rhythm Specialists in Reseda.',
  },
  '/treatments/pacemaker': {
    title: 'Pacemaker Care in Reseda, CA | Leo Polosajian, MD, MS, FACC, FHRS, CCDS',
    description:
      'Learn about pacemakers, why they may be used, and cardiac device care. Educational videos and office contact are available from Cardiac Rhythm Specialists.',
  },
  '/treatments/implantable-cardioverter-defibrillator': {
    title: 'ICD Care in Reseda, CA | Implantable Cardioverter Defibrillator',
    description:
      'Educational information about implantable cardioverter defibrillators (ICDs) and cardiac device care. Call our Reseda office to ask about evaluation.',
  },
  '/treatments/cardiac-resynchronization-therapy': {
    title: 'Cardiac Resynchronization Therapy (CRT) Education | Reseda, CA',
    description:
      'Patient-friendly information about cardiac resynchronization therapy. Treatment decisions vary by individual. Call Cardiac Rhythm Specialists with questions.',
  },
  '/new-patients': {
    title: 'New Patients | Cardiac Rhythm Specialists in Reseda, CA',
    description: `What to bring to a first visit, how to schedule, and office information for Cardiac Rhythm Specialists in Reseda. Call ${phone}.`,
  },
  '/insurance': {
    title: 'Insurance Information | Cardiac Rhythm Specialists',
    description: `Insurance participation can vary by plan. Please call Cardiac Rhythm Specialists at ${phone} or your insurer to confirm coverage before scheduling.`,
  },
  '/contact': {
    title: 'Contact Cardiac Rhythm Specialists in Reseda, CA',
    description: `Call ${phone} or email ${practice.email} for administrative inquiries. Visit 7640 Tampa Ave, Suite 101, Reseda, CA 91335. Office hours and directions are available.`,
  },
  '/faq': {
    title: 'Heart Rhythm FAQ | Cardiac Rhythm Specialists',
    description:
      'Answers to common questions about cardiac electrophysiology, atrial fibrillation, ablation, pacemakers, office location, scheduling, and insurance questions.',
  },
  '/medical-disclaimer': {
    title: 'Medical Disclaimer | Cardiac Rhythm Specialists',
    description:
      'Website information is for general education and is not a substitute for professional medical advice, diagnosis, or treatment. Call 911 for emergencies.',
  },
  '/accessibility': {
    title: 'Accessibility | Cardiac Rhythm Specialists',
    description: `Accessibility information for the Cardiac Rhythm Specialists website. Call ${phone} if you need help accessing practice information.`,
  },
  '/privacy': {
    title: 'Privacy Policy | Cardiac Rhythm Specialists',
    description: `Privacy information for Cardiac Rhythm Specialists in Reseda, CA. Appointments are requested by phone. Do not send medical records or other sensitive patient information by email. Call ${phone}.`,
  },
  '/terms': {
    title: 'Terms of Use | Cardiac Rhythm Specialists',
    description: `Terms of use for the Cardiac Rhythm Specialists website. Content is not medical advice. For office requests, call ${phone}.`,
  },
  '/testing': {
    title: 'Heart Rhythm Testing and Monitoring in Reseda, CA',
    description:
      'Learn about Holter monitoring, event monitoring, EKGs, echocardiography, tilt-table testing, and cardiac device follow-up at Cardiac Rhythm Specialists.',
  },
  '/education': {
    title: 'Patient Education | Cardiac Rhythm Specialists',
    description:
      'Patient education about the heart, arrhythmias, and illustrated booklets recovered from the original Cardiac Rhythm Specialists website.',
  },
  '/media': {
    title: 'Media | Videos, Presentations, and Education | Cardiac Rhythm Specialists',
    description:
      'Find educational videos from Dr. Leo Polosajian, plus historical presentations, articles, and recovered patient-education materials from Cardiac Rhythm Specialists.',
  },
  '/patient-resources': {
    title: 'Patient Resources | Cardiac Rhythm Specialists in Reseda, CA',
    description: `Appointment help, printable forms, FAQs, medical records, and education for Cardiac Rhythm Specialists. Call ${phone}.`,
  },
  '/appointment-request': {
    title: 'Appointment Request | Cardiac Rhythm Specialists',
    description: `Call to request an appointment at Cardiac Rhythm Specialists in Reseda. This website cannot complete scheduling online. Call ${phone}.`,
  },
  '/patient-forms': {
    title: 'Patient Forms | Cardiac Rhythm Specialists',
    description:
      'Print the new-patient intake form and learn which recovered forms still need office confirmation.',
  },
  '/medical-records': {
    title: 'Medical Records | Cardiac Rhythm Specialists',
    description: `How to request medical records from Cardiac Rhythm Specialists in Reseda. Call ${phone}. This website is not a patient portal.`,
  },
  '/prescription-refills': {
    title: 'Prescription Refills | Cardiac Rhythm Specialists',
    description: `Call ${phone} for prescription refill questions. Please do not send medication details by email.`,
  },
  '/lab-test-information': {
    title: 'Lab and Test Information | Cardiac Rhythm Specialists',
    description:
      'How to ask Cardiac Rhythm Specialists about lab or test results. Results are not posted through a patient portal.',
  },
  '/videos': {
    title: 'Educational Videos | Cardiac Rhythm Specialists',
    description:
      'Educational heart rhythm videos from Dr. Leo Polosajian. Current videos are available on YouTube.',
  },
  '/photos': {
    title: 'Photos | Cardiac Rhythm Specialists',
    description:
      'Physician photographs and educational images from Cardiac Rhythm Specialists. Patient testimonials are not published pending privacy review.',
  },
  '/presentations': {
    title: 'Presentations | Cardiac Rhythm Specialists',
    description:
      'Historical presentation images recovered from the original Cardiac Rhythm Specialists website. Event and affiliation details may no longer be current.',
  },
  '/articles': {
    title: 'Articles | Cardiac Rhythm Specialists',
    description:
      'A recovered November 2010 magazine article from the original Cardiac Rhythm Specialists website, kept as historical material rather than current guidance.',
  },
}

function clipDescription(text: string, topic: string) {
  const suffix = ' Cardiac Rhythm Specialists in Reseda, CA.'
  const lead = `${topic}: ${text.trim()}`
  const combined = lead.endsWith('.') ? `${lead}${suffix}` : `${lead}.${suffix}`
  if (combined.length <= 160) return combined
  if (lead.length <= 160) return lead
  const cut = lead.slice(0, 159)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 90 ? lastSpace : 159)}…`
}

function generatedSeo(): Record<string, SeoRecord> {
  const records: Record<string, SeoRecord> = {}
  for (const page of Object.values(CONDITIONS)) {
    const topic = page.shortTitle ?? page.h1
    records[`/conditions/${page.slug}`] = {
      title: `${topic} | Heart Rhythm Condition | Cardiac Rhythm Specialists`,
      description: clipDescription(page.intro, topic),
    }
  }
  for (const page of Object.values(TREATMENTS)) {
    const topic = page.shortTitle ?? page.h1
    records[`/treatments/${page.slug}`] = {
      title: `${topic} | Heart Rhythm Treatment | Cardiac Rhythm Specialists`,
      description: clipDescription(page.intro, topic),
    }
  }
  for (const page of Object.values(TESTS)) {
    const topic = page.shortTitle ?? page.h1
    records[`/testing/${page.slug}`] = {
      title: `${topic} | Heart Rhythm Testing | Cardiac Rhythm Specialists`,
      description: clipDescription(page.intro, topic),
    }
  }
  for (const page of Object.values(EDUCATION)) {
    const topic = page.shortTitle ?? page.h1
    records[`/education/${page.slug}`] = {
      title: `${topic} | Patient Education | Cardiac Rhythm Specialists`,
      description: clipDescription(page.intro, topic),
    }
  }
  for (const booklet of Object.values(BOOKLETS)) {
    records[`/education/booklets/${booklet.slug}`] = {
      title: `${booklet.title} | Illustrated Education | Cardiac Rhythm Specialists`,
      description: clipDescription(booklet.description, booklet.title),
    }
  }
  return records
}

const generated = generatedSeo()
export const allPageSeo: Record<string, SeoRecord> = { ...generated, ...pageSeo }
export const PUBLIC_PATHS = Object.keys(allPageSeo)

function assertUniqueSeo(records: Record<string, SeoRecord>) {
  const titles = new Map<string, string>()
  const descriptions = new Map<string, string>()
  for (const [path, page] of Object.entries(records)) {
    const existingTitle = titles.get(page.title)
    if (existingTitle) {
      throw new Error(`Duplicate SEO title for ${path} and ${existingTitle}: ${page.title}`)
    }
    titles.set(page.title, path)
    const existingDescription = descriptions.get(page.description)
    if (existingDescription) {
      throw new Error(
        `Duplicate SEO description for ${path} and ${existingDescription}: ${page.description}`,
      )
    }
    descriptions.set(page.description, path)
  }
}

assertUniqueSeo(allPageSeo)

export function normalizePath(path: string) {
  const urlPath = path.split('?')[0]?.split('#')[0] ?? '/'
  if (!urlPath || urlPath === '/') return '/'
  return urlPath.endsWith('/') ? urlPath.slice(0, -1) : urlPath
}

export function getSeo(path: string): ResolvedSeo {
  const normalized = normalizePath(path)
  const page = allPageSeo[normalized]
  if (!page) {
    const notFoundPath = normalized === '/__not-found__' ? '/404' : normalized
    return {
      path: normalized,
      title: 'Page not found | Cardiac Rhythm Specialists',
      description: `The page you requested was not found. Return home or call Cardiac Rhythm Specialists at ${phone}.`,
      robots: 'noindex, follow',
      canonical: absoluteUrl(notFoundPath),
      ogImage: OG_IMAGE_URL,
    }
  }
  return {
    path: normalized,
    title: page.title,
    description: page.description,
    robots: page.robots ?? 'index, follow',
    canonical: absoluteUrl(normalized),
    ogImage: OG_IMAGE_URL,
  }
}
