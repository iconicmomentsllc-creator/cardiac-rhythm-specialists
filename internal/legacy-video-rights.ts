/**
 * Internal rights ledger for legacy Movies-page videos.
 * Do not import this file from src pages or components. It is not public content.
 * Every record stays unpublished until approvedForPublication is set true after
 * an official source or a privacy-safe CRS recut is explicitly approved.
 */
export type LegacyVideoRightsRecord = {
  id: string
  legacyFile: string
  legacyHtmlTitle: string | null
  onScreenTitle: string | null
  archivalLabel: string | null
  publisher: string
  approximateDate: string
  rightsStatus: string
  officialSourceStatus: string
  approvedForPublication: false
  replacementOrEmbedUrl: string | null
  notes: string
}

export const LEGACY_VIDEO_RIGHTS: LegacyVideoRightsRecord[] = [
  {
    id: 'northshore-afib-intro',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/Atrial-Fibrillation.flv',
    legacyHtmlTitle: null,
    onScreenTitle: 'An Introduction to Atrial Fibrillation',
    archivalLabel: null,
    publisher: 'NorthShore University HealthSystem',
    approximateDate: 'Encoded 2010 (Adobe Media Encoder XMP)',
    rightsStatus: 'Third-party. Local hosted FLV is not a license.',
    officialSourceStatus: 'Not verified. No official embed URL on file.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Do not re-host the FLV. Do not substitute generic AFib content. Seek NorthShore official player or written permission. Featured physician on-screen: Jose Nazari, M.D.',
  },
  {
    id: 'bupa-arrhythmia-types',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/Different-Types-Of-Arrhythmia.flv',
    legacyHtmlTitle: null,
    onScreenTitle: 'The different types of arrhythmia',
    archivalLabel: null,
    publisher: 'Bupa (British United Provident Association Limited)',
    approximateDate: 'On-screen copyright 2008–2009',
    rightsStatus: 'Third-party copyright on title card. Local hosted FLV is not a license.',
    officialSourceStatus:
      'Candidate official page exists (Bupa arrhythmia animation listing). Not yet confirmed as the same file or embeddable.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Confirm current Bupa official animation/embed terms before any public use. Do not upload the FLV.',
  },
  {
    id: 'abc7-procedure-vs-drugs',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/go-video.flv',
    legacyHtmlTitle: 'Procedure beats drugs in heart rhythm therapy',
    onScreenTitle: 'STEADY HEART RHYTHM / HEALTHY LIVING; CONTROLLING A RACING HEART',
    archivalLabel: null,
    publisher: 'ABC7 / KABC',
    approximateDate: 'News package contemporaneous with ~2009–2010 site era',
    rightsStatus: 'Broadcast copyright. Hosted local copy on movies.html. No ABC7 credit on the HTML.',
    officialSourceStatus: 'Not verified. Search ABC7 archive/player only.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Do not re-host the FLV. Cath-lab monitor in the copy shows identifiable patient information. Do not substitute another news organization.',
  },
  {
    id: 'afib-ab-animation',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/What-Is-Atrial-Fibrillation-Ab.flv',
    legacyHtmlTitle: 'What is Atrial Fibrillation AB',
    onScreenTitle: null,
    archivalLabel: null,
    publisher: 'Unverified. Nucleus Medical Media is a candidate (Abbreviated Version catalog), not confirmed.',
    approximateDate: 'Encoded 2010 (Adobe Media Encoder XMP)',
    rightsStatus: 'Rights unclear. Hosted local copy. No publisher credit on movies.html.',
    officialSourceStatus: 'Not verified. Do not treat Nucleus as confirmed until stills are matched.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Ab in the HTML/filename may mean Abbreviated, not ablation. Do not substitute another animation. License or official embed only after publisher confirmation.',
  },
  {
    id: 'sudden-cardiac-arrest-info4',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/Sudden-Cardiac-Arrest.flv',
    legacyHtmlTitle: 'Sudden Cardiac Arrest',
    onScreenTitle: 'INFO 4 YOUR LIFE',
    archivalLabel: null,
    publisher: 'Unverified. INFO 4 YOUR LIFE series; Canadian airport AED demonstration.',
    approximateDate: 'Encoded 2010 (Adobe Media Encoder XMP)',
    rightsStatus: 'Third-party public-awareness material. Hosted local copy. No license in repo.',
    officialSourceStatus: 'Not verified. Series owner not identified.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Do not re-host the FLV. Do not automatically substitute AHA or other SCA education. Locate the original series owner first.',
  },
  {
    id: 'st-jude-second-chance',
    legacyFile: 'legacy-crs-site/crsmdinc.com/videos/wes.flv',
    legacyHtmlTitle: null,
    onScreenTitle: 'A Second Chance to Make Kids Laugh',
    archivalLabel: null,
    publisher: 'St. Jude Medical (now Abbott)',
    approximateDate: 'Pre-Abbott St. Jude branding; exact year not in metadata',
    rightsStatus: 'Vendor/patient-story. Local hosted FLV is not a license.',
    officialSourceStatus: 'Not verified. No official current page on file.',
    approvedForPublication: false,
    replacementOrEmbedUrl: null,
    notes: 'Do not re-host the FLV. Do not substitute Abbott marketing. Weak clinical fit for the Videos page even with permission.',
  },
]

export const HISTORICAL_PRACTICE_MEDIA = {
  id: 'leo-office-introduction',
  archiveFile: 'legacy-crs-site/crsmdinc.com/videos/Leo_Video.flv',
  workingCopy: 'local-preview/leo-video/Leo_Video.WORKING-COPY.flv',
  localPreview: 'local-preview/leo-video/Dr-Leo-Polosajian-historical-office-introduction.PREVIEW.mp4',
  localCaptions: 'local-preview/leo-video/Dr-Leo-Polosajian-historical-office-introduction.PREVIEW.en.vtt',
  proposedPublicSrc: '/videos/dr-leo-polosajian-historical-office-introduction.mp4',
  proposedPublicCaptions: '/videos/dr-leo-polosajian-historical-office-introduction.en.vtt',
  proposedPublicTitle: 'Historical Practice Media',
  proposedPublicCaption:
    'Archival footage of Dr. Leo Polosajian discussing cardiac rhythm care and diagnostic imaging. Edited from historical practice footage for presentation on this website.',
  archivalLabel: 'Archival practice footage from Cardiac Rhythm Specialists',
  approvedForPublication: false as const,
  sourceDimensions: { width: 480, height: 360 },
  proposedOutput: {
    width: 640,
    height: 360,
    container: 'mp4',
    videoCodec: 'h264',
    audioCodec: 'aac',
    note: 'Pad to 640x360 navy letterbox. Do not upscale the 480x236 cropped picture.',
  },
  keepRangesSeconds: [
    { start: 0.0, end: 7.5 },
    { start: 11.5, end: 15.7 },
    { start: 18.75, end: 21.5 },
  ],
  excludedRangesSeconds: [
    {
      start: 7.5,
      end: 11.5,
      reason:
        'Procedure footage with a second gowned figure and possible patient anatomy on the right of frame. No face is readable, but the shot is not clearly physician-only.',
    },
    {
      start: 15.7,
      end: 17.25,
      reason: 'EP monitor close-up with a burned-in date (20 Aug 2009). No patient name is readable; excluded as possible medical-record information.',
    },
    {
      start: 17.3,
      end: 18.7,
      reason: 'Identifiable woman during an exam. Face and body clearly visible.',
    },
    {
      start: 22.0,
      end: null,
      reason: 'Later identifiable-patient footage, including a desk consultation and Medicare/address bars.',
    },
  ],
  overlayHandling:
    'Crop the burned-in green lower-third (obsolete Northridge address and phone) and the top credential bar (DR. LEO POLOSAJIAN, MD, FACC). Pad to 640x360 with navy #142033. Do not overlay new current-practice text on the remaining picture.',
  notes:
    'Do not present the recut as newly recorded. Do not add current address/credentials as a lower-third. Clipboard at ~12s is not readable. Echo images at ~13–16s show no patient name. English captions are not publishable until a human listener confirms the spoken words; automated transcription of the 2009 audio was not reliable.',
} as const
