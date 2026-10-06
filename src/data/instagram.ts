import { practice } from './practice'

export type InstagramEducationItem = {
  id: string
  title: string
  summary: string
  relatedTo: string
  relatedLabel: string
  /**
   * Official Instagram permalink (`/p/` or `/reel/`) when independently verified.
   * Leave unset rather than guessing shortcodes or using CDN image URLs.
   */
  permalink?: string
}

export const INSTAGRAM_EDUCATION: InstagramEducationItem[] = [
  {
    id: 'atrial-fibrillation',
    title: 'Atrial fibrillation, in plain language',
    summary:
      'Dr. Polosajian uses short Instagram videos to explain atrial fibrillation and related stroke-prevention topics, including Watchman education. This website remains the detailed patient guide.',
    relatedTo: '/conditions/atrial-fibrillation',
    relatedLabel: 'Atrial fibrillation',
  },
  {
    id: 'palpitations',
    title: 'Palpitations and heart-rhythm questions',
    summary:
      'Recent Instagram education covers racing, fluttering, or skipped beats. Use the palpitations page on this site for evaluation context, then watch the Instagram video if you want a short physician explanation.',
    relatedTo: '/conditions/heart-palpitations',
    relatedLabel: 'Heart palpitations',
  },
  {
    id: 'stress-testing',
    title: 'Cardiac stress testing',
    summary:
      'Dr. Polosajian’s newer Instagram videos include stress-testing education. The echocardiogram page on this site explains how ultrasound and exercise testing may be used together.',
    relatedTo: '/testing/echocardiogram',
    relatedLabel: 'Echocardiogram and stress echo',
  },
  {
    id: 'heart-attack',
    title: 'Heart-attack warning signs',
    summary:
      'Instagram heart-health videos can help patients recognize emergency symptoms. They are not a diagnosis. Call 911 for emergency symptoms, and use this site’s sudden cardiac arrest page for background.',
    relatedTo: '/conditions/sudden-cardiac-arrest',
    relatedLabel: 'Sudden cardiac arrest',
  },
  {
    id: 'pad',
    title: 'Peripheral artery disease',
    summary:
      'Newer Instagram videos discuss circulation in the legs and vascular disease in an educational style. The PAD page on this website is the practice’s written patient education.',
    relatedTo: '/conditions/peripheral-artery-disease',
    relatedLabel: 'Peripheral artery disease',
  },
  {
    id: 'pacemakers',
    title: 'Pacemakers and electrophysiology',
    summary:
      'Dr. Polosajian continues pacemaker and electrophysiology education on Instagram. Featured YouTube videos on this site cover pacemaker basics; Instagram is a short-form supplement.',
    relatedTo: '/treatments/pacemaker',
    relatedLabel: 'Pacemakers',
  },
]

export const INSTAGRAM_LATEST = INSTAGRAM_EDUCATION.filter((item) =>
  ['atrial-fibrillation', 'palpitations', 'pad', 'pacemakers'].includes(item.id),
)

export const INSTAGRAM_HOME = INSTAGRAM_EDUCATION.filter((item) =>
  ['atrial-fibrillation', 'pad'].includes(item.id),
)

const INSTAGRAM_BY_PATH = Object.fromEntries(
  INSTAGRAM_EDUCATION.map((item) => [item.relatedTo, item]),
) as Record<string, InstagramEducationItem>

export function instagramForPath(path: string) {
  return INSTAGRAM_BY_PATH[path]
}

export function instagramWatchUrl(item: InstagramEducationItem) {
  return item.permalink ?? practice.instagramUrl
}
