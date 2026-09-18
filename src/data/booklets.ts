import { ATRIAL_FIBRILLATION_TEXT } from './bookletText/atrialFibrillation'
import { COMMON_ARRHYTHMIAS_TEXT } from './bookletText/commonArrhythmias'
import { CRT_TEXT } from './bookletText/crt'
import { HEART_FAILURE_TEXT } from './bookletText/heartFailure'
import { attachBookletImages, type EducationBooklet } from './bookletTypes'

export type { BookletPage, EducationBooklet } from './bookletTypes'

const ATRIAL_FIBRILLATION_IMAGE_NUMBERS = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const

if (ATRIAL_FIBRILLATION_TEXT.length !== ATRIAL_FIBRILLATION_IMAGE_NUMBERS.length) {
  throw new Error('AFib public pages must stay aligned with the original image files.')
}

export const BOOKLETS: Record<string, EducationBooklet> = {
  'atrial-fibrillation': {
    slug: 'atrial-fibrillation',
    title: 'Atrial Fibrillation Booklet',
    description:
      'Accessible page-by-page images from the practice’s former Flash atrial fibrillation booklet. The images are educational illustrations, not a diagnosis or a treatment plan.',
    pages: attachBookletImages(
      'atrial-fibrillation',
      (n) => `Atrial_${String(ATRIAL_FIBRILLATION_IMAGE_NUMBERS[n - 1]).padStart(3, '0')}.jpg`,
      ATRIAL_FIBRILLATION_TEXT,
    ),
  },
  'common-arrhythmias': {
    slug: 'common-arrhythmias',
    title: 'Common Arrhythmias Booklet',
    description:
      'Accessible page-by-page images from the former Flash common-arrhythmias booklet. Use the condition pages on this site for modernized wording; these scans preserve the original illustrated sequence.',
    pages: attachBookletImages(
      'common-arrhythmias',
      (n) => `Common_Arrhythmias_${String(n).padStart(2, '0')}.jpg`,
      COMMON_ARRHYTHMIAS_TEXT,
    ),
  },
  crt: {
    slug: 'crt',
    title: 'Cardiac Resynchronization Therapy Booklet',
    description:
      'Accessible page-by-page images from the former Flash CRT booklet. CRT candidacy is individualized; ask a physician before treating any booklet page as personal advice.',
    pages: attachBookletImages('crt', (n) => `CRT${String(n).padStart(3, '0')}.jpg`, CRT_TEXT),
  },
  'heart-failure': {
    slug: 'heart-failure',
    title: 'Heart Failure Booklet',
    description:
      'Accessible page-by-page images from the former Flash heart-failure booklet. Heart-failure care is coordinated by your physicians; these pages are historical educational art, not current instructions.',
    pages: attachBookletImages(
      'heart-failure',
      (n) => `Heart_Failure_${String(n).padStart(2, '0')}.jpg`,
      HEART_FAILURE_TEXT,
    ),
  },
}

export const BOOKLET_LIST = Object.values(BOOKLETS)
