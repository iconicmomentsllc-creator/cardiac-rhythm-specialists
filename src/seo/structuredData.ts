import { BOOKLETS } from '../data/booklets'
import { EDUCATION } from '../data/educationPages'
import { CONDITIONS, TREATMENTS } from '../data/medicalPages'
import { CONTENT_UPDATED_ISO, practice } from '../data/practice'
import { FAQ_ITEMS } from '../data/faq'
import { TESTS } from '../data/testingPages'
import { absoluteUrl, SITE_IDS, SITE_ORIGIN } from './site'
import { getSeo, normalizePath } from './pages'

type JsonLd = Record<string, unknown>

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: practice.streetAddress,
  addressLocality: practice.city,
  addressRegion: practice.state,
  postalCode: practice.zip,
  addressCountry: 'US',
}

function organizationNode(): JsonLd {
  return {
    '@type': 'MedicalClinic',
    '@id': SITE_IDS.organization,
    name: practice.legalName,
    alternateName: [practice.brandName, 'Cardiac Rhythm Specialists Inc'],
    url: `${SITE_ORIGIN}/`,
    telephone: '+18187181600',
    email: practice.email,
    hasMap: practice.directionsUrl,
    image: getSeo('/').ogImage,
    medicalSpecialty: 'https://schema.org/Cardiovascular',
    knowsAbout: [
      'Cardiology',
      'Cardiac electrophysiology',
      'Heart rhythm disorders',
      'Atrial fibrillation',
      'Atrial flutter',
      'Supraventricular tachycardia',
      'Ventricular tachycardia',
      'Arrhythmias',
      'Catheter ablation',
      'Pacemakers',
      'Implantable cardioverter defibrillators',
      'Holter monitoring',
    ],
    areaServed: [
      { '@type': 'City', name: 'Reseda' },
      { '@type': 'AdministrativeArea', name: 'San Fernando Valley' },
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'City', name: 'Thousand Oaks' },
      { '@type': 'City', name: 'Simi Valley' },
      { '@type': 'City', name: 'Glendale' },
      { '@type': 'City', name: 'North Hollywood' },
    ],
    address: postalAddress,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:30',
      },
    ],
    employee: { '@id': SITE_IDS.physician },
    sameAs: [...practice.sameAs],
  }
}

function physicianNode(): JsonLd {
  return {
    '@type': 'Physician',
    '@id': SITE_IDS.physician,
    name: practice.physician,
    alternateName: [
      practice.physicianInformalFull,
      practice.physicianShort,
      'Leo Polosajian MD',
    ],
    honorificSuffix: practice.honorificSuffix,
    medicalSpecialty: 'https://schema.org/Cardiovascular',
    jobTitle: practice.physicianTitle,
    image: getSeo('/').ogImage,
    url: absoluteUrl('/about-dr-polosajian'),
    telephone: '+18187181600',
    worksFor: { '@id': SITE_IDS.organization },
    hospitalAffiliation: practice.hospitalAffiliations.map((name) => ({
      '@type': 'Hospital',
      name,
    })),
    address: postalAddress,
    sameAs: [...practice.sameAs],
  }
}

function websiteNode(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': SITE_IDS.website,
    url: `${SITE_ORIGIN}/`,
    name: practice.legalName,
    inLanguage: 'en-US',
    publisher: { '@id': SITE_IDS.organization },
  }
}

export type Crumb = { name: string; path: string }

export function breadcrumbsFor(path: string): Crumb[] {
  const normalized = normalizePath(path)
  if (normalized === '/') return [{ name: 'Home', path: '/' }]

  const crumbs: Crumb[] = [{ name: 'Home', path: '/' }]
  const labels: Record<string, string> = {
    '/about-dr-polosajian': 'About Dr. Polosajian',
    '/conditions': 'Conditions',
    '/treatments': 'Treatments',
    '/testing': 'Testing',
    '/education': 'Patient Education',
    '/media': 'Media',
    '/patient-resources': 'Patient Resources',
    '/appointment-request': 'Appointment Request',
    '/patient-forms': 'Patient Forms',
    '/medical-records': 'Medical Records',
    '/prescription-refills': 'Prescription Refills',
    '/lab-test-information': 'Lab and Test Information',
    '/videos': 'Videos',
    '/photos': 'Photos',
    '/presentations': 'Presentations',
    '/articles': 'Articles',
    '/new-patients': 'New Patients',
    '/insurance': 'Insurance',
    '/contact': 'Contact',
    '/faq': 'FAQ',
    '/medical-disclaimer': 'Medical Disclaimer',
    '/accessibility': 'Accessibility',
    '/privacy': 'Privacy Policy',
    '/terms': 'Terms of Use',
  }

  for (const page of Object.values(CONDITIONS)) {
    labels[`/conditions/${page.slug}`] = page.shortTitle ?? page.h1
  }
  for (const page of Object.values(TREATMENTS)) {
    labels[`/treatments/${page.slug}`] = page.shortTitle ?? page.h1
  }
  for (const page of Object.values(TESTS)) {
    labels[`/testing/${page.slug}`] = page.shortTitle ?? page.h1
  }
  for (const page of Object.values(EDUCATION)) {
    labels[`/education/${page.slug}`] = page.shortTitle ?? page.h1
  }
  for (const booklet of Object.values(BOOKLETS)) {
    labels[`/education/booklets/${booklet.slug}`] = booklet.title
  }

  if (normalized.startsWith('/conditions/')) {
    crumbs.push({ name: 'Conditions', path: '/conditions' })
  } else if (normalized.startsWith('/treatments/')) {
    crumbs.push({ name: 'Treatments', path: '/treatments' })
  } else if (normalized.startsWith('/testing/')) {
    crumbs.push({ name: 'Testing', path: '/testing' })
  } else if (normalized.startsWith('/education/booklets/')) {
    crumbs.push({ name: 'Patient Education', path: '/education' })
  } else if (normalized.startsWith('/education/')) {
    crumbs.push({ name: 'Patient Education', path: '/education' })
  } else if (['/videos', '/photos', '/presentations', '/articles'].includes(normalized)) {
    crumbs.push({ name: 'Media', path: '/media' })
  }

  crumbs.push({
    name: labels[normalized] ?? 'Page',
    path: normalized,
  })
  return crumbs
}

function breadcrumbNode(path: string): JsonLd | null {
  const crumbs = breadcrumbsFor(path)
  if (crumbs.length < 2) return null
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

function webpageNode(path: string): JsonLd {
  const seo = getSeo(path)
  const medical =
    path.startsWith('/conditions/') ||
    path.startsWith('/treatments/') ||
    path.startsWith('/testing/') ||
    path.startsWith('/education/')
  return {
    '@type': medical ? ['WebPage', 'MedicalWebPage'] : 'WebPage',
    '@id': `${seo.canonical}#webpage`,
    url: seo.canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: 'en-US',
    dateModified: CONTENT_UPDATED_ISO,
    isPartOf: { '@id': SITE_IDS.website },
    about: { '@id': SITE_IDS.physician },
    primaryImageOfPage: seo.ogImage,
    ...(medical ? { audience: { '@type': 'PatientAudience' } } : {}),
  }
}

function videoNodes(): JsonLd[] {
  return practice.featuredVideos.map((video) => ({
    '@type': 'VideoObject',
    name: video.title,
    description: `Educational heart rhythm video: ${video.title}. From ${practice.physicianInformal} at Cardiac Rhythm Specialists in Reseda, CA.`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: { '@id': SITE_IDS.organization },
  }))
}

function faqNode(): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function jsonLdGraph(path: string): JsonLd {
  const normalized = normalizePath(path)
  const graph: JsonLd[] = [
    organizationNode(),
    physicianNode(),
    websiteNode(),
    webpageNode(normalized),
  ]
  const breadcrumbs = breadcrumbNode(normalized)
  if (breadcrumbs) graph.push(breadcrumbs)
  if (normalized === '/faq') graph.push(faqNode())
  if (normalized === '/' || normalized === '/videos') graph.push(...videoNodes())
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
