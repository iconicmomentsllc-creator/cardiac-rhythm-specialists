export type TestimonialNote = {
  id: string
  quote: string
  signedAs: string
}

export const TESTIMONIALS_INTRO =
  'Thank-you notes and a letter published on the original Cardiac Rhythm Specialists website. They are individual comments from patients and family members, not a description of typical or guaranteed results.'

export const HANDWRITTEN_NOTES_IMAGE = {
  src: '/testimonials/handwritten-thank-you-notes.jpg',
  alt: 'Photograph of handwritten thank-you notes to Dr. Polosajian from the original Cardiac Rhythm Specialists website',
  width: 750,
  height: 531,
  caption: 'Handwritten notes from the original testimonials page.',
} as const

export const MARCH_2010_LETTER_IMAGE = {
  src: '/testimonials/march-2-2010-letter.jpg',
  alt: 'Scan of a March 2, 2010 thank-you letter to Dr. Polosajian from the original Cardiac Rhythm Specialists website',
  width: 750,
  height: 975,
  caption: 'Letter dated March 2, 2010, from the original testimonials page.',
} as const

export const HANDWRITTEN_NOTES: TestimonialNote[] = [
  {
    id: 'aj',
    quote:
      'Dear Doctor thank you for helping my dad feel better and for showing me and my 2 sisters a Doctor.',
    signedAs: 'A.J.',
  },
  {
    id: 'ab',
    quote:
      'Thank you for giving me a second chance at life. I trully appreciate you and your expertise. Thanks Again,',
    signedAs: 'AB (Patient)',
  },
  {
    id: 's-dad',
    quote:
      'I would like to thankyou for helping my dad from the bottom of my heart. It means the world to have him in our lives, and it couldn\'t have happened without your help. Your an amazing man and you fully change peoples lives for the better. Words cannot sum up how thankful I am.',
    signedAs: 'S.',
  },
  {
    id: 's-dr-nice',
    quote:
      'Dear Dr.Nice, Thank you so much Dr.Leo for helping my dad and thanks for fighting for him to stay at Northridge and thanks to you I\'m prevented from having very bad heart when I\'m older please take good care of your self from the bottom of my family heart. P.S take care Absoluttly PLEASE',
    signedAs: 'S.',
  },
]

export const MARCH_2010_LETTER = {
  date: 'March 2, 2010',
  letterhead: [
    'Cardiac Rhythm Specialist, Inc.',
    'Dr. Leo Polosajian, M.D.',
    '18350 Roscoe Boulevard',
    'Northridge, Ca. 91325',
  ],
  greeting: 'Dear Dr. Polosajian;',
  paragraphs: [
    'My husband was going to another Heart specialist more than an hour away. Back then we were told this Doctor was the right surgeon for Heart Ablations. My husband did indeed have not one, but three of these surgeries. At first we were thrilled and thought this was the answer. Over time my husband\'s health would soon regress back to where he was prior to the surgeries. We had basically given up hope on him getting any better.',
    'The good news is we were referred to you. From our first visit you instilled confidence that you could do one surgery and finally make his heart condition improve dramatically. This was 6 months ago. We are happy to say you are truly a man of your word. My husband feels 100% better, and his medication has been reduced. In addition, you have given us full access to reach you directly by phone. It is rare that a Doctor cares that much, and a patient feels truly cared for.',
    'We would like to thank you for your skill and knowledge as a surgeon. This may sound strange but even visits to your office are a pleasure. Your fun personality only adds to your expertise, which is another rarity in the medical world!',
    'To you and your wonderful staff, many thanks!',
  ],
  signedAs: 'H & JJ',
} as const
