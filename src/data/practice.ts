import { SITE_ORIGIN } from '../seo/site'

const streetAddress = '7640 Tampa Ave, Suite 101'
const city = 'Reseda'
const state = 'CA'
const zip = '91335'
const fullAddress = `${streetAddress}, ${city}, ${state} ${zip}`

export const CONTACT_EMAIL = 'info@crsmdinc.com'

export const practice = {
  legalName: 'Cardiac Rhythm Specialists, Inc.',
  brandName: 'Cardiac Rhythm Specialists',
  physician: 'Leo Polosajian, MD, MS, FACC, FHRS, CCDS',
  physicianShort: 'Leo Polosajian, MD, MS, FACC, FHRS, CCDS',
  physicianInformal: 'Dr. Polosajian',
  physicianInformalFull: 'Dr. Leo Polosajian',
  honorificSuffix: 'MD, MS, FACC, FHRS, CCDS',
  specialty: 'Cardiology & Electrophysiology',
  specialtyLong: 'Cardiology & Cardiac Electrophysiology',
  physicianTitle: 'Cardiologist & Cardiac Electrophysiologist',
  email: CONTACT_EMAIL,
  emailMailto: `mailto:${CONTACT_EMAIL}`,
  photoSrc: '/dr-leo-polosajian.jpg',
  photoAlt:
    'Leo Polosajian, MD, MS, FACC, FHRS, CCDS, cardiologist and cardiac electrophysiologist',
  hospitalAffiliations: [
    'Providence',
    'Cedars-Sinai Medical Center',
    'Valley Presbyterian Hospital',
  ],
  serviceAreas: [
    'Los Angeles',
    'San Fernando Valley',
    'Thousand Oaks',
    'Simi Valley',
    'Glendale',
    'North Hollywood',
  ],
  credentials: [
    {
      abbr: 'MD',
      meaning: 'Doctor of Medicine',
    },
    {
      abbr: 'MS',
      meaning: 'Master of Science',
    },
    {
      abbr: 'FACC',
      meaning: 'Fellow of the American College of Cardiology',
    },
    {
      abbr: 'FHRS',
      meaning: 'Fellow of the Heart Rhythm Society',
    },
    {
      abbr: 'CCDS',
      meaning: 'Certified Cardiac Device Specialist',
    },
  ],
  streetAddress,
  city,
  state,
  zip,
  fullAddress,
  phoneDisplay: '(818) 718-1600',
  phoneTel: 'tel:+18187181600',
  weekdayLabel: 'Monday–Friday',
  weekdayHours: '8:30 AM–5:30 PM',
  weekendLabel: 'Saturday–Sunday',
  weekendHours: 'Closed',
  siteUrl: SITE_ORIGIN,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`,
  officeRequests: [
    'Appointments',
    'Referrals',
    'Prescription questions',
    'Medical records',
    'Insurance questions',
    'Procedure instructions',
  ],
  youtubeName: 'Dr. Leo Polosajian',
  youtubeHandle: '@dr.leopolosajian6474',
  youtubeUrl: 'https://www.youtube.com/@dr.leopolosajian6474',
  instagramHandle: '@drleopolosaijan',
  instagramUrl: 'https://www.instagram.com/drleopolosaijan/',
  sameAs: [
    'https://www.youtube.com/@dr.leopolosajian6474',
    'https://www.instagram.com/drleopolosaijan/',
    'https://www.drleopolosajian.com/',
  ],
  featuredVideos: [
    {
      id: 'dwrHQzGXZr0',
      title: 'What is a pacemaker?',
    },
    {
      id: 'V-vxTgyBdgw',
      title: 'How does a pacemaker know when to pace the heart?',
    },
    {
      id: 'q8HWorPtGTs',
      title: 'What are the most common heart conditions?',
    },
  ],
} as const

export const MEDICAL_DISCLAIMER =
  'The information on this website is provided for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. If you believe you may be experiencing a medical emergency, call 911 or seek immediate medical attention.'

export const CONTENT_UPDATED_ISO = '2026-09-19'
export const CONTENT_UPDATED_LABEL = 'September 19, 2026'
