export type ExternalResource = {
  href: string
  source: string
  topic: string
}

/**
 * Verified patient-education destinations only. Do not add a URL unless the
 * page was confirmed to exist and match the condition.
 */
export const EXTERNAL_RESOURCES: Record<string, ExternalResource> = {
  '/conditions/atrial-fibrillation': {
    href: 'https://www.heart.org/en/health-topics/atrial-fibrillation/what-is-atrial-fibrillation-afib-or-af',
    source: 'the American Heart Association',
    topic: 'atrial fibrillation',
  },
  '/conditions/arrhythmias': {
    href: 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia',
    source: 'the American Heart Association',
    topic: 'arrhythmia',
  },
  '/conditions/heart-failure': {
    href: 'https://www.heart.org/en/health-topics/heart-failure/what-is-heart-failure',
    source: 'the American Heart Association',
    topic: 'heart failure',
  },
  '/conditions/sudden-cardiac-arrest': {
    href: 'https://medlineplus.gov/cardiacarrest.html',
    source: 'MedlinePlus, U.S. National Library of Medicine',
    topic: 'sudden cardiac arrest',
  },
  '/conditions/peripheral-artery-disease': {
    href: 'https://vascular.org/your-vascular-health/vascular-conditions/common-conditions/peripheral-artery-disease',
    source: 'the Society for Vascular Surgery',
    topic: 'peripheral artery disease',
  },
  '/conditions/peripheral-vascular-disease': {
    href: 'https://medlineplus.gov/peripheralarterialdisease.html',
    source: 'MedlinePlus, U.S. National Library of Medicine',
    topic: 'peripheral arterial disease',
  },
  '/conditions/varicose-veins': {
    href: 'https://vascular.org/your-vascular-health/vascular-conditions/common-conditions/varicose-veins',
    source: 'the Society for Vascular Surgery',
    topic: 'varicose veins',
  },
  '/conditions/deep-vein-thrombosis': {
    href: 'https://vascular.org/your-vascular-health/vascular-conditions/common-conditions/deep-vein-thrombosis',
    source: 'the Society for Vascular Surgery',
    topic: 'deep vein thrombosis',
  },
  '/conditions/limb-ischemia': {
    href: 'https://www.heart.org/en/health-topics/peripheral-artery-disease/about-peripheral-artery-disease-pad',
    source: 'the American Heart Association',
    topic: 'peripheral artery disease',
  },
  '/treatments/pacemaker': {
    href: 'https://medlineplus.gov/pacemakersandimplantabledefibrillators.html',
    source: 'MedlinePlus, U.S. National Library of Medicine',
    topic: 'pacemakers',
  },
  '/treatments/implantable-cardioverter-defibrillator': {
    href: 'https://www.heart.org/en/health-topics/arrhythmia/prevention--treatment-of-arrhythmia/implantable-cardioverter-defibrillator-icd',
    source: 'the American Heart Association',
    topic: 'implantable cardioverter defibrillators',
  },
  '/treatments/cardiac-resynchronization-therapy': {
    href: 'https://www.heart.org/en/health-topics/heart-failure/treatment-options-for-heart-failure/cardiac-resynchronization-therapy-crt',
    source: 'the American Heart Association',
    topic: 'cardiac resynchronization therapy',
  },
}

export const EXTERNAL_RESOURCE_DISCLAIMER =
  'Outside education links are provided for additional reading. Those organizations do not endorse Dr. Polosajian or Cardiac Rhythm Specialists.'
