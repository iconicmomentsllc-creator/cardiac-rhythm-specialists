import type { MedicalPageContent } from './medicalPages'

export type EducationPageContent = Omit<MedicalPageContent, 'kind'> & {
  kind: 'education'
}

export const EDUCATION: Record<string, EducationPageContent> = {
  'basic-cardiology': {
    slug: 'basic-cardiology',
    kind: 'education',
    shortTitle: 'Basic Cardiology',
    h1: 'Basic Cardiology',
    eyebrow: 'Patient education',
    intro:
      'This page introduces how the heart pumps blood and how its electrical system times each beat. It is for general education and is not a diagnosis. Cardiac Rhythm Specialists in Reseda can help if you have questions after reading.',
    images: [
      {
        src: '/education/basic-cardiology.jpg',
        alt: 'Labeled educational illustration of the heart showing chambers, valves, and major vessels',
        width: 367,
        height: 372,
      },
    ],
    sections: [
      {
        heading: 'The heart as a pump',
        paragraphs: [
          'The heart is a muscular pump about the size of a fist. Its primary job is to pump oxygenated blood to the rest of the body. It has four chambers: the right and left atria on top, and the right and left ventricles on the bottom. A thin muscular wall called the septum separates the right and left sides.',
          'Each contraction occurs in response to an electrical impulse that starts in the upper portion of the heart. Blood moves in a closed circuit. The heart contracts and pumps blood out (systole) and relaxes to fill with more blood (diastole).',
        ],
      },
      {
        heading: 'How the heart muscle gets oxygen',
        paragraphs: [
          'The heart muscle needs oxygen like other organs. Oxygen-rich blood reaches the heart muscle through the coronary arteries. Two main arteries — the right coronary artery and the left main coronary artery — begin at the aorta, the body’s main artery, then branch into smaller vessels along the surface of the heart.',
        ],
      },
      {
        heading: 'Plumbing and wiring',
        paragraphs: [
          'If the coronary veins and arteries are the plumbing, the conduction system is the electrical wiring. Through that wiring, each muscle fiber knows when and how fast to beat so the heart can pump efficiently.',
          'Electrophysiology is the part of cardiology that studies this electrical system — the same system evaluated during an EP study when a physician needs more detail than an EKG can provide.',
        ],
      },
      {
        heading: 'The conduction pathway',
        paragraphs: [
          'The electrical system is affected by the brain and by hormones and electrolytes. How those elements interact with the heart’s rhythm generators determines heart rate and the sequence of the heartbeat.',
          'The sino-atrial (SA) node is the body’s main natural cardiac pacemaker. The heartbeat starts there and spreads through conduction fibers in the two atria, causing them to contract. The beat normally reaches the ventricles only after it has passed through the atrioventricular (AV) node. The AV node slows the signal so atrial contraction can finish and fill the ventricles more completely. It also helps prevent the lower chambers from beating too fast if the atria develop a rapid rhythm.',
        ],
      },
      {
        heading: 'Finishing each beat',
        paragraphs: [
          'The electrical signal then passes to the ventricles — the main workhorses of the heart — through the bundle of His, the bundle branches, and the Purkinje system, a specialized network that coordinates ventricular contraction. Each heartbeat is completed and a new one is initiated in the SA node.',
          'When you are nervous or exercising, the heartbeat typically speeds up; during relaxation it slows. That combination of the heart’s own rhythms and the body’s energy needs is normal.',
        ],
      },
      {
        heading: 'When to ask a physician',
        paragraphs: [
          'If you have palpitations, fainting, or a known arrhythmia, this overview is only background. Call the office to ask about evaluation. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/education/the-normal-heart', label: 'The normal heart' },
      { to: '/education/electrical-system', label: 'Electrical system' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
    ],
  },
  'the-normal-heart': {
    slug: 'the-normal-heart',
    kind: 'education',
    shortTitle: 'The Normal Heart',
    h1: 'The Normal Heart',
    eyebrow: 'Patient education',
    intro:
      'The heart is a muscle about the size of a clenched fist. It pumps blood every second of every day. Circulating blood delivers oxygen and nutrients and carries waste toward the kidneys, liver, and lungs. Three components work together: structure, electrical system, and circulation.',
    images: [
      {
        src: '/education/the-normal-heart.jpg',
        alt: 'Educational illustration of a normal heart and its chambers',
        width: 137,
        height: 181,
      },
    ],
    sections: [
      {
        heading: 'Three components that work together',
        paragraphs: [
          'The heart structure includes the muscle’s chambers and valves. The electrical system provides the signals that tell the heart to beat. The circulatory system is the network of blood pathways.',
          'Trouble in any part can affect the others. Understanding the normal pattern makes arrhythmias and other problems easier to discuss with a physician.',
        ],
      },
      {
        heading: 'The heart structure',
        paragraphs: [
          'The heart is divided into four chambers — the left and right atria (upper chambers) and the left and right ventricles (lower chambers). With each heartbeat, the atria draw blood into the heart and send it to the ventricles, which push blood out.',
          'Valves between the chambers and at the ends of the ventricles open and close like doorways so blood continues to move forward in the right direction.',
        ],
      },
      {
        heading: 'The electrical system',
        paragraphs: [
          'An electrical impulse generator called the sinus node sends signals from the right atrium to trigger the heartbeat, like a natural pacemaker. The current follows a web of pathways, causing the chambers to squeeze and release in a steady sequence that draws blood in and pushes it out.',
        ],
      },
      {
        heading: 'The circulatory system',
        paragraphs: [
          'Arteries carry oxygen-rich blood from the left side of the heart to smaller vessels (capillaries) throughout the body. Veins return used blood to the right side of the heart, which routes it to the lungs to pick up oxygen. Fresh blood then returns to the left side, and the cycle repeats.',
        ],
      },
      {
        heading: 'When things do not work together',
        paragraphs: [
          'A clogged artery can cause a heart attack, which can damage muscle, which can disrupt the electrical pathway in the damaged area, which can cause an arrhythmia. That chain is one example from recovered education — not a description of your situation.',
          'Rhythm problems can also occur without a blocked artery. A physician sorts the cause.',
        ],
      },
      {
        heading: 'Keeping the system as healthy as you can',
        paragraphs: [
          'Recovered education listed eating well, exercising, avoiding excess alcohol, and not smoking as common advice that can support heart health. Some heart problems still occur despite those efforts.',
          'This is general wellness language, not a treatment plan. Ask your physician what is appropriate for you.',
        ],
      },
    ],
    related: [
      { to: '/education/basic-cardiology', label: 'Basic cardiology' },
      { to: '/education/electrical-system', label: 'Electrical system' },
      { to: '/education/ejection-fraction', label: 'Ejection fraction' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
    ],
  },
  'electrical-system': {
    slug: 'electrical-system',
    kind: 'education',
    shortTitle: 'Electrical System',
    h1: 'The Heart’s Electrical System',
    eyebrow: 'Patient education',
    intro:
      'The electrical system coordinates pumping of the four chambers and controls heart rate so the heart can speed up or slow down as the body’s needs change. A problem anywhere along this path can cause an arrhythmia.',
    sections: [
      {
        heading: 'Purpose of the electrical system',
        paragraphs: [
          'Recovered education stated that the purpose of the electrical system is to coordinate the pumping of the four chambers and to control the heart rate. That allows the heart to speed up and slow down as demands change.',
        ],
      },
      {
        heading: 'The natural pacemaker',
        paragraphs: [
          'The natural pacemaker is the sino-atrial (SA) node, a small area of specialized electrical tissue high on the right side of the heart in the right atrium. It starts the electrical signal.',
          'The signal travels through the atria, causing them to contract, then down through the atrioventricular (AV) node between the atria and the ventricles.',
        ],
      },
      {
        heading: 'From the AV node to the ventricles',
        paragraphs: [
          'The signal continues through the bundle of His, which separates into the right and left bundle branches, then out to the ventricular muscle through the Purkinje fibers. Those fibers are the final “thin wires” that spread the signal through the ventricular muscle.',
          'As the impulse spreads, the muscles contract and the ventricles pump blood to the rest of the body.',
        ],
      },
      {
        heading: 'What a normal sequence produces',
        paragraphs: [
          'This coordinated flow produces a normal heartbeat, sometimes called sinus rhythm. An EKG records that sequence as a pattern of waves.',
          'If the SA node is too slow, if the AV node blocks the signal, or if an extra pathway or irritable focus takes over, the pulse can become too slow, too fast, or irregular.',
        ],
      },
      {
        heading: 'How this relates to electrophysiology care',
        paragraphs: [
          'A cardiac electrophysiologist focuses on this wiring. Tests such as an EKG, Holter monitor, or EP study are ways to see how the system is working when symptoms or risk raise a question.',
          'This page cannot diagnose a conduction problem.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call our Reseda office if you have been told you have an electrical-system problem or want to ask about evaluation. Call 911 for fainting, severe chest pain, or collapse.',
        ],
      },
    ],
    related: [
      { to: '/education/basic-cardiology', label: 'Basic cardiology' },
      { to: '/education/the-normal-heart', label: 'The normal heart' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
    ],
  },
  'ejection-fraction': {
    slug: 'ejection-fraction',
    kind: 'education',
    shortTitle: 'Ejection Fraction',
    h1: 'Ejection Fraction',
    eyebrow: 'Patient education',
    intro:
      'Ejection fraction (EF) is the percentage of blood pumped out of a ventricle with each heartbeat. It is a common measure of how well the heart muscle is squeezing. An echocardiogram is often used to estimate EF.',
    sections: [
      {
        heading: 'What ejection fraction measures',
        paragraphs: [
          'During each heartbeat the heart contracts and relaxes. In contraction (systole) the ventricles eject blood. When the heart relaxes (diastole) the ventricles fill. The heart never empties all of the blood from the ventricles, no matter how hard it beats.',
          'Ejection fraction is the percentage of blood that is pumped out with each beat. It is usually measured in the left ventricle because that chamber is the main pump to the body.',
        ],
      },
      {
        heading: 'Numbers mentioned in recovered education',
        paragraphs: [
          'Recovered practice education stated that a typical ejection fraction in a person at rest is between 55 and 70 percent. If the heart muscle has been damaged by heart attack, heart-muscle disease, or valve problems, the EF may be below that range.',
          'These figures are educational background from older materials. Only your physician should interpret your measurement and whether it has changed.',
        ],
      },
      {
        heading: 'How EF is commonly obtained',
        paragraphs: [
          'An echocardiogram is a commonly used test to estimate EF. Other imaging can be used in some situations. Ask which test was used if you were given a number.',
        ],
      },
      {
        heading: 'Why EF comes up in rhythm care',
        paragraphs: [
          'Recovered FAQ text noted that people with a substantially reduced EF may be discussed as having higher risk for abnormal rhythms and sudden cardiac arrest. That discussion is individualized and involves more than a single percentage.',
          'Some device conversations, including ICD or CRT topics, also consider pumping function. Those criteria require physician review and are not listed here as rules.',
        ],
      },
      {
        heading: 'What EF does not tell you by itself',
        paragraphs: [
          'EF does not describe your heart rhythm. You can have a reduced EF without an arrhythmia, or an arrhythmia with a preserved EF. Symptoms such as shortness of breath have many causes.',
          'Do not use a number from a report to change medications on your own.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you were told your ejection fraction is reduced and you have questions about heart rhythm evaluation in the San Fernando Valley. Call 911 for sudden worsening of breathing, chest pain, or fainting.',
        ],
      },
    ],
    related: [
      { to: '/testing/echocardiogram', label: 'Echocardiogram' },
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/treatments/cardiac-resynchronization-therapy', label: 'CRT' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
    ],
  },
  'useful-resources': {
    slug: 'useful-resources',
    kind: 'education',
    shortTitle: 'Useful Resources',
    h1: 'Useful Heart-Health Resources',
    eyebrow: 'Patient education',
    intro:
      'The prior Cardiac Rhythm Specialists website listed a few external education links. Those addresses may be outdated or no longer appropriate to recommend. This page is conservative on purpose. Ask the office if you want current reading suggestions.',
    sections: [
      {
        heading: 'Why we are not republishing the old link list',
        paragraphs: [
          'The recovered links page pointed to a small set of third-party sites, including a general heart library, a flutter-treatment site, and an academic ECG image index. Sites change, move, or go offline. We are not presenting those URLs as current recommendations.',
          'External pages are not a substitute for advice from your own physician.',
        ],
      },
      {
        heading: 'Start with this website’s educational pages',
        paragraphs: [
          'For patient-friendly background, see basic cardiology, the normal heart, the electrical system, and ejection fraction. Condition and testing pages explain topics that come up in heart rhythm care in Reseda.',
          'Those pages are educational. They are not a diagnosis.',
        ],
      },
      {
        heading: 'Organizations patients often ask about',
        paragraphs: [
          'National organizations that publish patient education on heart rhythm and heart disease include groups such as the Heart Rhythm Society and the American Heart Association. Listing them here is not an endorsement of any specific article, and their materials can change.',
          'If you want a printed pamphlet or a specific topic, call the office and ask what the practice currently shares with patients.',
        ],
      },
      {
        heading: 'Dr. Polosajian’s educational videos',
        paragraphs: [
          'The practice also shares educational videos on pacemaker topics and common heart conditions. Video links on this site are labeled as education, not as personal medical advice.',
        ],
      },
      {
        heading: 'When you need the office, not a link',
        paragraphs: [
          'Appointments, prescription questions, device alerts, and test results should go through the office — not through a third-party website. Call during weekday hours.',
          'If you believe you are having a medical emergency, call 911.',
        ],
      },
    ],
    related: [
      { to: '/education/basic-cardiology', label: 'Basic cardiology' },
      { to: '/education/the-normal-heart', label: 'The normal heart' },
      { to: '/education/multimedia-library', label: 'Original education library' },
      { to: '/faq', label: 'FAQ' },
    ],
  },
  'multimedia-library': {
    slug: 'multimedia-library',
    kind: 'education',
    shortTitle: 'Original Education Library',
    h1: 'Original Electrophysiology Education Library',
    eyebrow: 'Patient education',
    intro:
      'The recovered Cardiac Rhythm Specialists website included an “Electrophysiology Multimedia Library.” Many items were Flash animations. Useful text and still images have been rebuilt as modern pages. Flash-only illustrations remain in the on-disk archive until they can be converted.',
    sections: [
      {
        heading: 'How this library is used today',
        paragraphs: [
          'Topics that had recovered written education now have modern pages. Topics that were only a Flash movie are listed so nothing is silently dropped. We did not invent medical text to fill those Flash wrappers.',
          'Illustrated booklets that used Flash (atrial fibrillation, common arrhythmias, CRT, and heart failure) are available as accessible image sequences.',
        ],
      },
      {
        heading: 'Cooking, diet, and medication Flash books',
        paragraphs: [
          'The archive also contains Cooking for a Healthy Heart, Diet for a Healthy Heart, and Lincare medication booklets. Those remain in the archive because the medication material needs physician review before it is published.',
        ],
      },
    ],
    related: [
      { to: '/media', label: 'Media library' },
      { to: '/education/basic-cardiology', label: 'Basic cardiology' },
      { to: '/education/booklets/atrial-fibrillation', label: 'AFib booklet' },
      { to: '/presentations', label: 'Presentations' },
    ],
  },
}

export const EDUCATION_LIST = Object.values(EDUCATION)
