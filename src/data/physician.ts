import { practice } from './practice'

export const physicianBiography = {
  recoveredSource: 'legacy-crs-site/crsmdinc.com/welcome.html',
  intro: `${practice.physician} is a cardiologist and cardiac electrophysiologist at ${practice.legalName} in Reseda, California. Patients in Los Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale, and North Hollywood are served from the Reseda office.`,
  paragraphs: [
    `${practice.physician} provides evaluation and treatment of heart rhythm disorders. His clinical areas of interest, as described on the original Cardiac Rhythm Specialists website, include complex arrhythmia management and ablation, atrial fibrillation ablation, supraventricular tachycardia ablation, heart failure management, cardiac resynchronization therapy, and pacemaker and cardiac defibrillator implantation. The recovered biography also notes training in cardiac catheterization and nuclear cardiology.`,
    'He completed fellowship training in cardiac electrophysiology at Cedars-Sinai Medical Center. He completed internal medicine residency at Columbia University’s St. Luke’s-Roosevelt Hospital in New York City and cardiology fellowship at the University of Connecticut. He also holds a master’s degree in biomedical sciences from Barry University in Florida.',
    'The original practice biography described a patient-centered approach: taking time to explain care and treatment options, coordinating with colleagues, and treating patients with kindness, respect, and professionalism.',
  ],
  recoveredBoardCertifications: [
    'Internal Medicine',
    'Cardiology',
    'Adult comprehensive echocardiography',
    'Clinical cardiac electrophysiology',
  ],
  recoveredFooterStyle: 'Diplomate, American Board of Cardiovascular Disease; Cardiac Electrophysiology',
  recoveredMemberships: [
    'Heart Rhythm Society',
    'American Medical Association',
    'American Heart Association',
    'Armenian American Medical Society of California',
  ],
  recoveredLanguages: ['English', 'Armenian'],
  clinicalInterests: [
    'Complex arrhythmia management and ablation',
    'Atrial fibrillation ablation',
    'Supraventricular tachycardia (SVT) ablation',
    'Heart failure management',
    'Cardiac resynchronization therapy',
    'Pacemaker implantation and follow-up',
    'ICD implantation and follow-up',
  ],
} as const
