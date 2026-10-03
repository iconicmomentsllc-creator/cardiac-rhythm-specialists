import { practice } from './practice'

export const featuredVideos = practice.featuredVideos

export type FeaturedVideo = (typeof featuredVideos)[number]

export type EducationalLibraryVideo = {
  id: string
  title: string
  youtubeId: string
  publisherCredit: string
}

export type HistoricalPracticeVideo = {
  id: string
  title: string
  src: string
  mimeType: 'video/mp4'
  poster?: string
  captionsSrc: string
  archivalCaption: string
}

export const educationalLibraryHeading = 'Educational Video Library'
export const historicalPracticeHeading = 'Historical Practice Media'
export const historicalPracticeCaption =
  'Archival footage of Dr. Leo Polosajian discussing cardiac rhythm care and diagnostic imaging. Edited from historical practice footage for presentation on this website.'

/**
 * Official-source educational titles only. Keep empty until a publisher source
 * is verified and approved. Do not add unauthorized FLV files, dead cards, or
 * fake thumbnails.
 *
 * History videos presented as Part 1 and Part 2 (including “Part:1 How Dr. Leo
 * Polosajian became one of the top performing Cardiologists in the US”) are not
 * embedded in this production codebase and should not be re-added. Current
 * featured videos are pacemaker and common-heart-condition education.
 *
 * TODO(physician-approval): When Dr. Polosajian selects replacement educational
 * videos from https://www.youtube.com/@DrLeoPolosajian, add them here as
 * `{ id, title, youtubeId, publisherCredit }`. Do not auto-embed Shorts or
 * guess which videos belong on the site. Do not add the Part 1 or Part 2
 * history videos.
 */
export const educationalLibraryVideos: EducationalLibraryVideo[] = []

/**
 * Historical CRS footage only. Keep empty until a privacy-safe recut is
 * approved for publication. Do not reference unpublished working copies here.
 */
export const historicalPracticeVideos: HistoricalPracticeVideo[] = []
