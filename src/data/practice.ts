const streetAddress = '7640 Tampa Ave, Suite 101'
const city = 'Reseda'
const state = 'CA'
const zip = '91335'
const fullAddress = `${streetAddress}, ${city}, ${state} ${zip}`

export const practice = {
  legalName: 'Cardiac Rhythm Specialists, Inc.',
  brandName: 'Cardiac Rhythm Specialists',
  physician: 'Leo Polosajian, MD',
  physicianInformal: 'Dr. Leo Polosajian',
  specialty: 'Cardiology & Electrophysiology',
  photoSrc: '/dr-leo-polosajian.jpg',
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
  siteUrl: 'https://www.cardiacrhythmspecialists.com',
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
