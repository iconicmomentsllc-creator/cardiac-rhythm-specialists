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
 */
export const educationalLibraryVideos: EducationalLibraryVideo[] = []

/**
 * Historical CRS footage only. Keep empty until a privacy-safe recut is
 * approved for publication. Do not reference unpublished working copies here.
 */
export const historicalPracticeVideos: HistoricalPracticeVideo[] = []
