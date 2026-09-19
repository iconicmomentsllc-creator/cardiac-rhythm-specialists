export const MEDIA_SECTION_PATHS = [
  '/media',
  '/videos',
  '/photos',
  '/testimonials',
  '/presentations',
  '/articles',
] as const

export const MEDIA_HUB_SECTIONS = [
  {
    to: '/videos',
    heading: 'Videos',
    body: "Dr. Polosajian's educational and practice-related video content, with YouTube players on this site.",
  },
  {
    to: '/presentations',
    heading: 'Presentations',
    body: 'Historical and educational presentations from Dr. Polosajian and Cardiac Rhythm Specialists. Dates and affiliations on recovered images may no longer be current.',
  },
  {
    to: '/articles',
    heading: 'Articles',
    body: 'Published articles and archived educational material recovered from the original website, kept as historical reading rather than current guidance.',
  },
  {
    to: '/testimonials',
    heading: 'Testimonials',
    body: 'Thank-you notes and a letter from the original Cardiac Rhythm Specialists website. Individual comments, not typical or guaranteed results.',
  },
  {
    to: '/education/multimedia-library',
    heading: 'Multimedia education',
    body: 'Topics from the original Cardiac Rhythm Specialists education library, linked to current pages on this website.',
  },
  {
    to: '/education',
    heading: 'Patient education',
    body: 'Illustrated booklets and educational pages about how the heart works. Open the education library rather than duplicating it here.',
  },
] as const

export const MEDIA_HOME_LINKS = MEDIA_HUB_SECTIONS.filter(
  (item) => item.to !== '/education/multimedia-library',
)
