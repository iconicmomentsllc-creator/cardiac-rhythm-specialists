export type RelatedLink = {
  to: string
  label: string
}

export type MedicalSection = {
  heading: string
  paragraphs: string[]
}

export type MedicalPageImage = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export type MedicalPageContent = {
  slug: string
  kind: 'condition' | 'treatment' | 'test' | 'education'
  h1: string
  eyebrow: string
  intro: string
  sections: MedicalSection[]
  related: RelatedLink[]
  shortTitle?: string
  images?: MedicalPageImage[]
}

export function topicLabel(page: Pick<MedicalPageContent, 'shortTitle' | 'h1'>) {
  return page.shortTitle ?? page.h1
}

export const CONDITIONS: Record<string, MedicalPageContent> = {
  'atrial-fibrillation': {
    slug: 'atrial-fibrillation',
    kind: 'condition',
    shortTitle: 'Atrial Fibrillation',
    h1: 'Atrial Fibrillation Treatment in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Atrial fibrillation, often called AFib, is a common irregular heart rhythm. A cardiologist or cardiac electrophysiologist — a heart rhythm specialist — may evaluate AFib and discuss care options that depend on the individual.',
    sections: [
      {
        heading: 'What atrial fibrillation is',
        paragraphs: [
          'In atrial fibrillation, the upper chambers of the heart (the atria) may beat in a rapid, irregular way instead of a steady pattern. Blood flow through the heart can be less efficient, and some people notice an irregular pulse.',
          'AFib can be occasional or more persistent. How it feels, and whether treatment is recommended, can vary widely from person to person.',
        ],
      },
      {
        heading: 'Common symptoms or reasons for evaluation',
        paragraphs: [
          'Some people notice palpitations, a fluttering feeling, fatigue, shortness of breath, or reduced exercise tolerance. Others have few symptoms and learn about AFib from an EKG, a wearable monitor, or a hospital visit.',
          'Evaluation may also be discussed after a stroke or other medical event, or when another physician refers a patient for heart rhythm care. This page cannot determine the cause of your symptoms.',
        ],
      },
      {
        heading: 'How specialists may evaluate AFib',
        paragraphs: [
          'A physician may review your history, medications, and prior tests. An electrocardiogram (EKG) can show the heart’s rhythm at a moment in time. Longer monitoring, blood tests, or imaging may be recommended depending on the patient.',
          'Your physician may look for related heart conditions and factors that can influence care decisions. The evaluation plan is individualized.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Care for AFib, when recommended, may include lifestyle discussion, medications, and in some cases procedures. A physician may talk about rate control, rhythm control, and stroke-risk considerations depending on the individual.',
          'Some patients may later discuss catheter ablation for AFib. Whether that is appropriate can only be determined after evaluation. Treatment is not guaranteed to eliminate AFib or prevent every complication.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you have been referred for AFib care or want to ask about an evaluation. If you have chest pain, severe shortness of breath, fainting, or other emergency symptoms, call 911 or seek emergency care.',
          'Do not use this website to diagnose AFib or decide on treatment.',
        ],
      },
      {
        heading: 'Why specialized heart rhythm evaluation may help',
        paragraphs: [
          'A cardiac electrophysiologist focuses on the heart’s electrical system. For some patients with AFib, that focus can help with diagnosis, monitoring decisions, and a discussion of options that may include medications or procedures.',
          'The right next step depends on your history, test results, and a physician’s judgment.',
        ],
      },
    ],
    related: [
      { to: '/treatments/afib-ablation', label: 'AFib ablation information' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/conditions/heart-palpitations', label: 'Heart palpitations' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation overview' },
    ],
  },
  arrhythmias: {
    slug: 'arrhythmias',
    kind: 'condition',
    shortTitle: 'Arrhythmias',
    h1: 'Arrhythmia Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'An arrhythmia is a heart rhythm that is too fast, too slow, or irregular. A heart rhythm specialist may evaluate these patterns and discuss next steps based on your symptoms and test results.',
    sections: [
      {
        heading: 'What an arrhythmia is',
        paragraphs: [
          'The heart has an electrical system that helps it beat in a coordinated way. When that system fires too early, too late, too quickly, or in an extra circuit, the pulse can feel uneven or unusual.',
          'Arrhythmias include many named patterns. Some are brief and mild. Others may need closer evaluation. Only a physician can interpret your rhythm.',
        ],
      },
      {
        heading: 'Common symptoms or reasons for evaluation',
        paragraphs: [
          'People may notice palpitations, skipped beats, a racing pulse, a slow pulse, lightheadedness, fatigue, or fainting. An irregular rhythm may also be found on a physical exam, EKG, or hospital monitor.',
          'Not every flutter or skip is dangerous, and not every serious rhythm is easy to feel. Evaluation depends on the individual.',
        ],
      },
      {
        heading: 'How specialists may evaluate arrhythmias',
        paragraphs: [
          'A cardiologist or electrophysiologist may start with your history and an EKG. Wearable or extended monitors, echocardiograms, blood tests, or other studies may be recommended depending on the situation.',
          'The goal is often to document the rhythm, understand related heart conditions, and decide whether treatment or further testing is appropriate.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Some arrhythmias are observed. Others may be treated with medication, lifestyle changes, or procedures such as ablation. Pacemakers or other devices may be discussed when the heart’s rate is too slow or pauses.',
          'There is no single treatment for every arrhythmia. Your physician may recommend a plan based on the specific rhythm and your overall health.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Contact the office if you have been told you have an arrhythmia, if palpitations persist, or if another doctor has referred you for heart rhythm care. Call 911 for emergency symptoms such as fainting, severe chest pain, or sudden severe shortness of breath.',
        ],
      },
      {
        heading: 'Why specialized electrophysiology evaluation may help',
        paragraphs: [
          'Cardiac electrophysiology is the part of cardiology that focuses on heart rhythm. Specialized evaluation may be helpful when the diagnosis is unclear, symptoms continue, or treatment options need a detailed discussion.',
        ],
      },
    ],
    related: [
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation information' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
    ],
  },
  'supraventricular-tachycardia': {
    slug: 'supraventricular-tachycardia',
    kind: 'condition',
    shortTitle: 'SVT',
    h1: 'Supraventricular Tachycardia (SVT) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Supraventricular tachycardia, often called SVT, is a group of fast heart rhythms that start above the ventricles. A heart rhythm specialist may evaluate possible SVT when symptoms or test results raise that question.',
    sections: [
      {
        heading: 'What SVT is',
        paragraphs: [
          'SVT is a general term for certain rapid rhythms that originate in the atria or the electrical pathways near the AV node. Episodes may start and stop suddenly. The exact type of SVT, if present, is determined by a physician using tests — not by this website.',
          'SVT is different from atrial fibrillation, though both can cause a fast or irregular-feeling pulse. Related reading is available on our arrhythmias and AFib pages.',
        ],
      },
      {
        heading: 'Common symptoms or reasons for evaluation',
        paragraphs: [
          'Some people notice a sudden racing heartbeat, palpitations, chest discomfort, lightheadedness, or shortness of breath during an episode. Others have brief symptoms that are hard to capture on a single EKG.',
          'A physician may recommend monitoring if symptoms suggest a fast rhythm that comes and goes.',
        ],
      },
      {
        heading: 'Types of SVT named on the original site',
        paragraphs: [
          'Recovered Conditions education named AVNRT (AV nodal re-entrant tachycardia) and AVRT (AV reciprocating tachycardia) as specific SVT patterns, along with atrial fibrillation and atrial flutter as related atrial rhythms.',
          'Those patterns are explained on their own pages. A physician, not this website, determines which pattern is present.',
        ],
      },
      {
        heading: 'How specialists may evaluate SVT',
        paragraphs: [
          'Evaluation may include a history, EKG, and sometimes longer rhythm monitoring. If a fast rhythm is recorded, a cardiologist or electrophysiologist can better identify the pattern.',
          'Additional testing depends on the patient. This page does not confirm whether you have SVT.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'If SVT is diagnosed, a physician may discuss maneuvers, medications, or, for some patients, catheter ablation. The choice depends on how often episodes occur, how they feel, other medical conditions, and patient preference after counseling.',
          'Outcomes vary. No treatment is guaranteed to prevent every future episode.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office to ask about evaluation if you have been told you may have SVT or have unexplained racing heart episodes. Seek emergency care for fainting, severe chest pain, or symptoms that feel like a medical emergency.',
        ],
      },
      {
        heading: 'Why specialized evaluation may help',
        paragraphs: [
          'Because several fast rhythms can feel similar, electrophysiology evaluation may help clarify the diagnosis and the range of options. Please call our Reseda office to ask whether this type of evaluation is appropriate for you.',
        ],
      },
    ],
    related: [
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/conditions/avnrt', label: 'AVNRT' },
      { to: '/conditions/avrt', label: 'AVRT' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation information' },
    ],
  },
  'heart-palpitations': {
    slug: 'heart-palpitations',
    kind: 'condition',
    shortTitle: 'Palpitations',
    h1: 'Heart Palpitations Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm symptom',
    intro:
      'Heart palpitations are a feeling that the heart is racing, fluttering, pounding, or skipping beats. They are a symptom, not a diagnosis. A cardiologist or heart rhythm specialist may evaluate palpitations to look for an arrhythmia or other explanation.',
    sections: [
      {
        heading: 'What palpitations are',
        paragraphs: [
          'Palpitations describe how the heartbeat feels. Extra beats, a brief pause, anxiety, caffeine, dehydration, anemia, thyroid issues, and true arrhythmias can all sometimes play a role. Only a medical evaluation can sort out likely causes.',
          'Many palpitations are not dangerous, but new, frequent, or associated symptoms deserve professional attention rather than self-diagnosis.',
        ],
      },
      {
        heading: 'Common reasons people seek evaluation',
        paragraphs: [
          'People may seek care when palpitations last longer, happen more often, occur with exercise, or come with dizziness, chest discomfort, or fainting. Palpitations after a hospital stay or abnormal EKG may also prompt a visit.',
          'Bring notes about when symptoms occur if you can. That history can help a physician decide on monitoring.',
        ],
      },
      {
        heading: 'How specialists may evaluate palpitations',
        paragraphs: [
          'A visit may include questions about timing, triggers, medications, and other medical conditions, along with an exam and EKG. If symptoms are intermittent, a physician may recommend a monitor worn for days or weeks.',
          'Other tests may be considered depending on the patient. The plan is individualized.',
        ],
      },
      {
        heading: 'Potential next steps',
        paragraphs: [
          'If an arrhythmia is found, treatment depends on the specific rhythm. If tests do not show a serious rhythm problem, a physician may still discuss reassurance, contributing factors, or follow-up.',
          'This website cannot tell you whether your palpitations are benign.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office to ask about an evaluation. Call 911 if palpitations occur with severe chest pain, fainting, or sudden severe shortness of breath.',
        ],
      },
      {
        heading: 'Why heart rhythm evaluation may help',
        paragraphs: [
          'Documenting the rhythm during symptoms can be an important step. A cardiac electrophysiology perspective may be useful when palpitations suggest an arrhythmia such as AFib or another named rhythm disorder.',
        ],
      },
    ],
    related: [
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'heart-failure': {
    slug: 'heart-failure',
    kind: 'condition',
    shortTitle: 'Heart Failure',
    h1: 'Heart Failure and Heart Rhythm Care in Reseda, CA',
    eyebrow: 'Related cardiac topic',
    intro:
      'Heart failure means the heart is not pumping as effectively as it should. Some people with heart failure also have heart rhythm disorders. This page is educational and does not mean every patient with heart failure needs electrophysiology care.',
    sections: [
      {
        heading: 'How heart failure and heart rhythm can be related',
        paragraphs: [
          'Heart failure and arrhythmias can influence each other. For example, a fast or irregular rhythm such as atrial fibrillation may worsen symptoms in some patients. A slow rhythm or pauses may also contribute to fatigue or lightheadedness.',
          'Not every person with heart failure has a rhythm problem, and not every arrhythmia means heart failure is present. A physician coordinates this assessment.',
        ],
      },
      {
        heading: 'Common symptoms that may prompt evaluation',
        paragraphs: [
          'Heart failure symptoms can include shortness of breath, swelling in the legs, fatigue, and reduced activity tolerance. Rhythm-related symptoms can include palpitations, a fast or slow pulse, or fainting.',
          'These symptoms have many possible causes. Emergency symptoms require 911, not a website form.',
        ],
      },
      {
        heading: 'How specialists may evaluate related rhythm concerns',
        paragraphs: [
          'If you already receive heart failure care, a cardiologist or electrophysiologist may review your rhythm, medications, and prior tests. Monitoring or device-related questions may come up depending on the individual.',
          'Our practice’s verified focus is cardiology and heart rhythm care. Broader heart-failure management, if needed, is determined by your physicians.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Heart failure care often involves medications, fluid management, and follow-up with a cardiology team. Rhythm treatments, when discussed, depend on the specific arrhythmia and overall condition.',
          'Some patients with reduced pumping function may later hear about devices such as ICDs or cardiac resynchronization therapy. Those decisions are individualized and are not promised here.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you have been referred for heart rhythm evaluation and also have heart failure, or if you have questions about rhythm-related symptoms. For sudden worsening of breathing, chest pain, or fainting, call 911.',
        ],
      },
      {
        heading: 'Why specialized rhythm evaluation may help',
        paragraphs: [
          'When palpitations, AFib, or device questions arise in someone with heart failure, a heart rhythm specialist may help clarify options. Please call to ask whether an evaluation through our Reseda office is appropriate.',
        ],
      },
    ],
    related: [
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
      { to: '/treatments/cardiac-resynchronization-therapy', label: 'CRT information' },
    ],
  },
  'atrial-flutter': {
    slug: 'atrial-flutter',
    kind: 'condition',
    shortTitle: 'Atrial Flutter',
    h1: 'Atrial Flutter Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Atrial flutter is a rapid heart rhythm that starts in the atria, the upper chambers of the heart. Unlike atrial fibrillation, the heartbeat in flutter is typically regular. A heart rhythm specialist in Reseda may evaluate possible flutter when symptoms or an EKG raise that question.',
    images: [
      {
        src: '/education/atrial-flutter.jpg',
        alt: 'Illustration of a regular, rapid atrial flutter rhythm compared with a normal heartbeat',
        width: 312,
        height: 90,
      },
    ],
    sections: [
      {
        heading: 'What atrial flutter is',
        paragraphs: [
          'Atrial flutter is similar to atrial fibrillation in that it is a rapid rhythm that originates in the atria. It differs in that the heartbeat is regular, not irregular. Recovered practice education described the electrical signal becoming “trapped” in the right atrium and traveling repeatedly in a circular pattern, only occasionally passing through the AV node to the ventricles.',
          'That pattern can cause the atria to beat faster than the ventricles. The recovered description placed typical atrial rates between 150 and 450 beats each minute. Only a physician can interpret your rhythm.',
        ],
      },
      {
        heading: 'How flutter differs from atrial fibrillation',
        paragraphs: [
          'In atrial fibrillation, the atrial activity is irregular and the pulse is often erratic. In atrial flutter, the circuit is more organized. Both can impair how efficiently the heart pumps blood.',
          'Atrial flutter also carries a risk of blood clots, though the recovered education described that risk as not as great as with atrial fibrillation. Clot-prevention decisions are individualized and must be made by a physician.',
        ],
      },
      {
        heading: 'Symptoms and reasons for evaluation',
        paragraphs: [
          'People may notice palpitations, fatigue, dizziness, fainting spells, shortness of breath, or chest discomfort. Some people have few symptoms and learn about flutter from an EKG or monitor.',
          'Evaluation may also follow a hospital stay, a stroke or TIA concern, or a referral from another physician in the San Fernando Valley or greater Los Angeles area.',
        ],
      },
      {
        heading: 'How specialists may evaluate flutter',
        paragraphs: [
          'A physician may review your history and perform an electrocardiogram. Longer monitoring, such as a Holter monitor, or an electrophysiology study may be discussed if the diagnosis or treatment plan is unclear.',
          'This page cannot diagnose atrial flutter or decide whether treatment is needed.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Recovered education described anti-arrhythmic medications to restore or maintain a more normal rhythm, and catheter ablation to treat abnormal electrical pathways when medications are not enough or not a good fit. Lifestyle discussion may also be part of care.',
          'Whether medication, monitoring, cardioversion, or ablation is appropriate can only be determined after evaluation. Treatment is not guaranteed to eliminate flutter or prevent every complication.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call Cardiac Rhythm Specialists if you have been told you have atrial flutter or want to ask about an evaluation. Seek emergency care for chest pain, severe shortness of breath, fainting, or stroke symptoms. Call 911 for emergencies.',
        ],
      },
    ],
    related: [
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation' },
      { to: '/treatments/cardioversion', label: 'Cardioversion' },
    ],
  },
  'ventricular-tachycardia': {
    slug: 'ventricular-tachycardia',
    kind: 'condition',
    shortTitle: 'Ventricular Tachycardia',
    h1: 'Ventricular Tachycardia (VT) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Ventricular tachycardia, often called VT, is a rapid heart rhythm that originates in the ventricles, the lower chambers of the heart. A cardiac electrophysiologist may evaluate possible VT when symptoms, an EKG, or hospital monitoring raise that concern.',
    images: [
      {
        src: '/education/ventricular-tachycardia.jpg',
        alt: 'Illustration of a rapid ventricular tachycardia rhythm',
        width: 327,
        height: 194,
      },
    ],
    sections: [
      {
        heading: 'What ventricular tachycardia is',
        paragraphs: [
          'VT is a rapid heartbeat caused by abnormal firing of electrical signals in the ventricle. Recovered education described typical rates of 160 to 240 beats per minute. The rapid rate may not allow enough time for the heart to fill before it contracts, so blood flow to the body can be reduced.',
          'VT most often occurs in people with underlying structural heart disease, such as ischemic heart disease. It can also be discussed in other settings. Only a physician can determine whether a recorded rhythm is VT.',
        ],
      },
      {
        heading: 'Symptoms that may prompt evaluation',
        paragraphs: [
          'Recovered practice pages listed diminished or irregular pulse, fatigue, shortness of breath, syncope (fainting), palpitations, low blood pressure, chest pain, and cardiac arrest among symptoms associated with VT.',
          'Dizziness, lightheadedness, or loss of consciousness can occur when blood flow is compromised. Emergency symptoms require 911, not a website form.',
        ],
      },
      {
        heading: 'Causes and factors mentioned in recovered education',
        paragraphs: [
          'The recovered Conditions page listed abnormal electrolyte levels, electrocution, heart attack, scarring after a heart attack, and unstable angina among possible causes. Risk factors listed included alcohol use, cardiomyopathy, congenital heart defects, certain drugs (including caffeine, cocaine, some heart drugs, diet pills, and some cold and allergy medications), coronary heart disease, hypertension, and valve disease.',
          'These lists are educational. They do not mean any one factor caused your symptoms. A physician sorts this out.',
        ],
      },
      {
        heading: 'How specialists may evaluate VT',
        paragraphs: [
          'A physician typically takes a detailed history and examines the patient. Tests may include a resting electrocardiogram or ambulatory monitoring with a Holter monitor or loop recorder. An electrophysiology study may be discussed when more detail about the electrical system is needed.',
          'The goal is to document the rhythm, understand related heart conditions, and discuss next steps. This page does not confirm a diagnosis.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Care, when recommended, may include medications, lifestyle discussion, catheter ablation for some patients, or an implantable cardioverter defibrillator (ICD) when a physician determines that is appropriate. Cardioversion or emergency defibrillation may be used to restore a safer rhythm in urgent settings.',
          'No treatment is guaranteed to prevent every future episode. Device criteria and medication choices require physician review.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been told you have VT or were referred for heart rhythm evaluation. Call 911 for fainting, severe chest pain, sudden severe shortness of breath, or suspected cardiac arrest.',
        ],
      },
    ],
    related: [
      { to: '/conditions/ventricular-fibrillation', label: 'Ventricular fibrillation' },
      { to: '/conditions/sudden-cardiac-arrest', label: 'Sudden cardiac arrest' },
      { to: '/treatments/vt-ablation', label: 'VT ablation information' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
    ],
  },
  'ventricular-fibrillation': {
    slug: 'ventricular-fibrillation',
    kind: 'condition',
    shortTitle: 'Ventricular Fibrillation',
    h1: 'Ventricular Fibrillation (VF) in Reseda, CA',
    eyebrow: 'Heart rhythm emergency topic',
    intro:
      'Ventricular fibrillation, often called VF, is a very fast, irregular rhythm in the ventricles. The heart cannot pump effectively. VF is a medical emergency. This page is educational and is not a substitute for calling 911.',
    images: [
      {
        src: '/education/ventricular-fibrillation.jpg',
        alt: 'Illustration of disorganized ventricular fibrillation activity',
        width: 299,
        height: 186,
      },
    ],
    sections: [
      {
        heading: 'What ventricular fibrillation is',
        paragraphs: [
          'In VF, disorganized electrical impulses in the lower chambers cause the ventricles to quiver instead of pumping blood. Recovered education described immediate loss of the heart’s pumping ability.',
          'VF causes sudden loss of consciousness. It is life-threatening and requires immediate emergency treatment with defibrillation — an electrical shock intended to restart a coordinated rhythm.',
        ],
      },
      {
        heading: 'How VF relates to sudden cardiac arrest',
        paragraphs: [
          'Recovered pages described VF as a major cause of sudden cardiac arrest. Blood and oxygen do not reach vital organs such as the brain while the ventricles quiver.',
          'If cardiac arrest is not treated promptly, it can be fatal. Bystander CPR and an automated external defibrillator, when available, are emergency responses — not office appointments.',
        ],
      },
      {
        heading: 'Who may later be evaluated',
        paragraphs: [
          'People who have survived a cardiac arrest, or who have had ventricular tachycardia or other rhythm problems that could lead to arrest, may later discuss further evaluation. A history of heart disease is one reason physicians consider risk.',
          'This website cannot tell you whether you are at risk for VF.',
        ],
      },
      {
        heading: 'How specialists may evaluate after an event',
        paragraphs: [
          'After emergency care, a cardiologist or electrophysiologist may review hospital records, EKGs, heart function, and related conditions. Further testing depends on the individual.',
          'An ICD may be discussed for some people after dangerous ventricular arrhythmias. That decision is individualized.',
        ],
      },
      {
        heading: 'Potential later treatment discussions',
        paragraphs: [
          'Recovered education described ICDs as devices that monitor the heart and may deliver pacing or a shock if a dangerous rapid rhythm is detected. Medications, ablation, or other care may also be discussed depending on the situation.',
          'Outcomes vary. Nothing on this page promises that a device or procedure will prevent every future event.',
        ],
      },
      {
        heading: 'When to get emergency help',
        paragraphs: [
          'If someone collapses, is unresponsive, or is not breathing normally, call 911 immediately. For non-emergency questions after a hospital stay or referral, call our Reseda office.',
        ],
      },
    ],
    related: [
      { to: '/conditions/sudden-cardiac-arrest', label: 'Sudden cardiac arrest' },
      { to: '/conditions/ventricular-tachycardia', label: 'Ventricular tachycardia' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
      { to: '/treatments/icd-implantation', label: 'ICD implantation' },
    ],
  },
  syncope: {
    slug: 'syncope',
    kind: 'condition',
    shortTitle: 'Syncope',
    h1: 'Syncope (Fainting) Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm symptom',
    intro:
      'Syncope is a sudden loss of consciousness with a typically rapid recovery. It can be harmless or related to a serious heart problem. People who faint should seek medical attention. A heart rhythm specialist may evaluate whether an arrhythmia contributed.',
    sections: [
      {
        heading: 'What syncope is',
        paragraphs: [
          'Syncope, or fainting, is a temporary loss of consciousness with inability to maintain posture. People may fall and sometimes are injured. Recovered education described inadequate blood flow to the brain, often from a brief drop in blood pressure, as the usual mechanism.',
          'Syncope often recurs. It can range from completely harmless to life-threatening. That is why an episode should be evaluated rather than dismissed.',
        ],
      },
      {
        heading: 'Heart-related and other causes',
        paragraphs: [
          'Usually, syncope is not caused by a heart condition. Recovered pages also listed stress, pain, dehydration, and medications. Cardiac syncope can result from arrhythmias or from a problem that reduces the heart’s ability to pump enough blood.',
          'Heart valve disease, heart muscle disease, and abnormally fast or slow rhythms were specifically mentioned. Only a physician can sort among these possibilities.',
        ],
      },
      {
        heading: 'How specialists may evaluate fainting',
        paragraphs: [
          'Evaluation may include a history of what happened before the episode, an exam, and an EKG. Holter or event monitoring, a tilt-table study, or an implantable loop recorder may be discussed when episodes are infrequent or unexplained.',
          'An electrophysiology study is sometimes considered when a rhythm cause is suspected. The plan is individualized.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Treatments depend on the cause. Recovered education listed adjusting medications, taking medications, pacemaker implantation, and surgical procedures among options that may be discussed.',
          'This page cannot say whether you need a pacemaker, a monitor, or another form of care.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you have fainted, been told you have unexplained syncope, or were referred for heart rhythm evaluation in the San Fernando Valley. Call 911 if someone is still unresponsive or if fainting occurs with chest pain or severe shortness of breath.',
        ],
      },
      {
        heading: 'Why heart rhythm evaluation may help',
        paragraphs: [
          'When fainting might be related to a pause, a slow pulse, or a fast ventricular rhythm, an electrophysiology perspective may help document the rhythm and discuss options. Please call to ask whether an evaluation through our Reseda office is appropriate.',
        ],
      },
    ],
    related: [
      { to: '/treatments/loop-recorder', label: 'Loop recorder' },
      { to: '/testing/tilt-table', label: 'Tilt-table study' },
      { to: '/conditions/bradycardia', label: 'Bradycardia' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
    ],
  },
  bradycardia: {
    slug: 'bradycardia',
    kind: 'condition',
    shortTitle: 'Bradycardia',
    h1: 'Bradycardia Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Bradycardia means the heart is beating too slowly. Sinus bradycardia is often described as a rate under 60 beats per minute. Not every slow pulse needs treatment. A physician determines whether evaluation or pacing should be discussed.',
    sections: [
      {
        heading: 'What sinus bradycardia is',
        paragraphs: [
          'Recovered education associated sinus bradycardia with impaired impulse generation in the SA node, the heart’s natural pacemaker, causing the rate to decrease to fewer than 60 beats per minute. It may also occur when impulses are not conducted normally from the atria to the ventricles.',
          'A slow rate can be expected in some athletes or during sleep. A slow rate that causes symptoms or pauses is a different question.',
        ],
      },
      {
        heading: 'Related causes mentioned in recovered education',
        paragraphs: [
          'Sick sinus syndrome was listed as a common association. Drugs such as beta-blockers and calcium-channel blockers can also slow the heart. Occasionally, impaired conduction to the atrial muscle was mentioned.',
          'Do not stop a prescribed medication because of this page. Ask the prescribing physician if you have questions.',
        ],
      },
      {
        heading: 'Symptoms that may prompt evaluation',
        paragraphs: [
          'People may notice fatigue, lightheadedness, dizziness, fainting, or reduced exercise tolerance. A slow pulse may also be found on an exam or EKG without symptoms.',
          'Not every slow pulse requires a pacemaker.',
        ],
      },
      {
        heading: 'How specialists may evaluate a slow rhythm',
        paragraphs: [
          'A cardiologist or electrophysiologist may review medications, an EKG, and longer monitoring if symptoms come and go. Related conduction problems, such as heart block, may be considered.',
          'Reversible causes are looked for before any discussion of a device.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'If a slow rhythm is related to a medication, a physician may adjust therapy. If the natural pacemaker or conduction system cannot maintain an adequate rate, a pacemaker may be discussed.',
          'Device decisions are individualized and are not promised here.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been told your heart is too slow or you have fainting with a slow pulse. Seek emergency care for fainting, severe shortness of breath, or chest pain.',
        ],
      },
    ],
    related: [
      { to: '/conditions/sick-sinus-syndrome', label: 'Sick sinus syndrome' },
      { to: '/conditions/heart-block', label: 'Heart block' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/treatments/pacemaker-implantation', label: 'Pacemaker implantation' },
    ],
  },
  'sick-sinus-syndrome': {
    slug: 'sick-sinus-syndrome',
    kind: 'condition',
    shortTitle: 'Sick Sinus Syndrome',
    h1: 'Sick Sinus Syndrome in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'In sick sinus syndrome, the SA node does not reliably perform its role as the heart’s natural pacemaker. The heart may beat too slowly, pause, or sometimes alternate between slow and fast rhythms. A heart rhythm specialist may evaluate this pattern after symptoms or monitoring.',
    sections: [
      {
        heading: 'What sick sinus syndrome is',
        paragraphs: [
          'Recovered education explained that the SA node may not send electrical impulses often enough, may skip some, or may send too many at the same time. The result can be a heart that beats too slowly or pauses too long between beats.',
          'In some cases the heart alternates between being too slow and too fast. Sick sinus syndrome is commonly associated with aging, according to the recovered Conditions page.',
        ],
      },
      {
        heading: 'Symptoms and reasons for evaluation',
        paragraphs: [
          'People may notice fatigue, lightheadedness, palpitations, or fainting. Fast rhythms, when they occur, can feel like racing or irregular beats.',
          'The pattern may be found on an EKG, Holter monitor, or hospital recording. This page cannot diagnose sick sinus syndrome.',
        ],
      },
      {
        heading: 'How specialists may evaluate SSS',
        paragraphs: [
          'Evaluation usually includes a history, review of medications that affect heart rate, an EKG, and sometimes longer monitoring to capture slow periods, pauses, or alternating fast rhythms.',
          'Related conditions and reversible causes are considered before treatment decisions.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Recovered education stated that physicians may prescribe anti-arrhythmic drugs to help prevent rapid rhythms, or may implant a pacemaker to prevent slow rhythms. Those choices depend on the individual and require physician review.',
          'Medication and device criteria on this page are educational only and are flagged for physician approval.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call Cardiac Rhythm Specialists if you have been referred for sick sinus evaluation or have symptoms that suggest a slow or pausing rhythm. Call 911 for fainting or emergency symptoms.',
        ],
      },
      {
        heading: 'Related heart rhythm care',
        paragraphs: [
          'Bradycardia, heart block, and pacemaker topics are closely related. Staff can help you take the next step toward an appointment if you call the office.',
        ],
      },
    ],
    related: [
      { to: '/conditions/bradycardia', label: 'Bradycardia' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/conditions/heart-block', label: 'Heart block' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
    ],
  },
  'wolff-parkinson-white': {
    slug: 'wolff-parkinson-white',
    kind: 'condition',
    shortTitle: 'Wolff-Parkinson-White',
    h1: 'Wolff-Parkinson-White Syndrome (WPW) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Wolff-Parkinson-White syndrome involves an extra electrical pathway that can let signals bypass the normal route through the AV node. That extra pathway can cause very fast heart rates. A heart rhythm specialist may evaluate WPW after an EKG or symptoms of SVT.',
    sections: [
      {
        heading: 'What WPW is',
        paragraphs: [
          'In a normal heart, the electrical signal pauses at the AV node on its way from the atria to the ventricles. In WPW, an extra pathway — sometimes called a bypass tract — can let the impulse skip that pause.',
          'Recovered education stated that WPW can cause heart rates approaching 240 beats per minute. The extra pathway can be present at birth, though symptoms can appear later. The recovered page also stated that more women than men are diagnosed with WPW.',
        ],
      },
      {
        heading: 'How an extra pathway can create a loop',
        paragraphs: [
          'Occasionally, impulses can go down one extra pathway and up another, creating a loop or short circuit. Recovered pages called this SVT because of WPW, related to atrioventricular reciprocating tachycardia (AVRT).',
          'Patients with WPW may also develop atrial fibrillation. The recovered Conditions page stated they are at increased risk for a dangerous ventricular arrhythmia when that occurs.',
        ],
      },
      {
        heading: 'Symptoms that may prompt evaluation',
        paragraphs: [
          'People may notice a sudden racing heartbeat, palpitations, lightheadedness, shortness of breath, or fainting. An EKG may show a characteristic pattern even between episodes.',
          'This website cannot confirm WPW from a description of symptoms.',
        ],
      },
      {
        heading: 'How specialists may evaluate WPW',
        paragraphs: [
          'An EKG is often the first test. Monitoring or an electrophysiology study may be discussed to understand the pathway and the risk of fast rhythms.',
          'Evaluation is individualized. Please call the Reseda office to ask about an appointment if you have been referred.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'Recovered education listed medications and procedures among treatments. Catheter ablation may be discussed for some patients to treat the extra pathway. Lifelong medication is another option some people discuss with a physician.',
          'Medication choices and whether ablation is appropriate require physician counseling. Outcomes vary.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you have been told you have WPW or a bypass tract, or if you have sudden racing-heart episodes. Seek emergency care for fainting, severe chest pain, or collapse.',
        ],
      },
    ],
    related: [
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/conditions/avrt', label: 'AVRT' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
    ],
  },
  'heart-block': {
    slug: 'heart-block',
    kind: 'condition',
    shortTitle: 'Heart Block',
    h1: 'Heart Block Evaluation in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Heart block, or atrioventricular (AV) block, is a delay or interruption of the electrical signal as it travels from the atria to the ventricles. The heart may beat too slowly. A physician classifies the type of block and decides whether treatment is needed.',
    images: [
      {
        src: '/education/heart-block.jpg',
        alt: 'Simple diagram of delayed or blocked conduction from the atria to the ventricles',
        width: 485,
        height: 62,
      },
      {
        src: '/education/heart-block-ecg.jpg',
        alt: 'Educational rhythm-strip illustration of heart block from the original practice website',
        width: 485,
        height: 62,
      },
    ],
    sections: [
      {
        heading: 'What heart block is',
        paragraphs: [
          'AV block is an interruption in transmission of an impulse from the atria to the ventricles because of an anatomical or functional problem in the conduction system. The disturbance can be transient or permanent. Conduction can be delayed, intermittent, or absent.',
          'Physicians classify heart block by the length of the delay. Recovered education used first degree (slowed conduction without missed beats), second degree (missed beats, often in a pattern), and third degree or complete AV block.',
        ],
      },
      {
        heading: 'First, second, and third degree block',
        paragraphs: [
          'In first-degree block, impulses are delayed in the AV node but still reach the ventricles. Sometimes first-degree block can later be associated with other forms of block.',
          'In second-degree block, some impulses fail to reach the ventricles. It is further divided into Type I and Type II. In third-degree, or complete, block, sinus impulses do not reach the ventricles, and the ventricles must generate their own impulse. Depending on cause, third-degree block may be temporary or permanent.',
        ],
      },
      {
        heading: 'Symptoms, causes, and risk factors from recovered education',
        paragraphs: [
          'Symptoms listed included dizziness or lightheadedness, low blood pressure, palpitations, fatigue, and syncope. Heart block can occur at any age and becomes more common in middle age. For people without heart disease, the cause may be unknown.',
          'Less severe forms can be related to medications such as adenosine, calcium-channel blockers, beta-blockers, and digitalis. Diseases listed included endocarditis, myocarditis, Lyme disease, Lenegre disease, Lev disease, coronary heart disease, and heart attack. Increased vagal tone, congenital block, and prior heart surgery were also mentioned.',
        ],
      },
      {
        heading: 'How specialists may evaluate heart block',
        paragraphs: [
          'Because block may be brief and unpredictable, it can be difficult to diagnose. A history, description of symptoms, exam, resting EKG, or Holter monitor may be used.',
          'Do not change heart medications based on this page. Ask your physician.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'If a medication is contributing, a physician may adjust it. If the block causes a dangerously slow rate or symptoms, a pacemaker may be discussed. Not every first-degree delay needs a device.',
          'Device criteria require a full clinical evaluation.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been told you have heart block or a conduction delay. Call 911 for fainting, severe shortness of breath, or chest pain.',
        ],
      },
    ],
    related: [
      { to: '/conditions/bradycardia', label: 'Bradycardia' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
    ],
  },
  'premature-ventricular-contractions': {
    slug: 'premature-ventricular-contractions',
    kind: 'condition',
    shortTitle: 'PVCs',
    h1: 'Premature Ventricular Contractions (PVCs) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'A premature ventricular contraction is an extra beat that starts in a ventricle before the normal signal arrives. Many people feel a skip or pause. PVCs are common. A physician decides whether they need further evaluation.',
    images: [
      {
        src: '/education/premature-ventricular-contractions.jpg',
        alt: 'Example tracing showing premature ventricular contractions',
        width: 432,
        height: 116,
      },
    ],
    sections: [
      {
        heading: 'What a PVC is',
        paragraphs: [
          'A PVC happens when there is a premature discharge of an electrical impulse in the ventricle, causing a premature contraction. The ventricle contracts early, without waiting for the usual signal from the AV node.',
          'Recovered education described PVCs as most often transient and common, including in people without heart disease. Most often they are harmless, though a physician should interpret frequent or symptomatic extra beats.',
        ],
      },
      {
        heading: 'How PVCs can feel',
        paragraphs: [
          'The most common symptom is palpitations. Patients often describe “skipping” or “missing” a heartbeat. The recovered explanation is that the PVC comes too early to produce an effective pulse, so no beat is felt until the next regularly timed beat after a pause.',
          'In many cases PVCs cause no symptoms at all.',
        ],
      },
      {
        heading: 'Factors mentioned in recovered education',
        paragraphs: [
          'In most cases, the recovered Conditions text noted that patients have no history or evidence of a related problem in that unfinished sentence — meaning many people with PVCs do not have known heart disease. A related multimedia page listed anxiety, caffeine, exercise, and certain drugs or medications as possible contributors in adults, and stated PVCs can also occur in children.',
          'Lifestyle changes such as reducing caffeine or stress were mentioned for some extra beats. That does not replace medical evaluation when symptoms are new, frequent, or associated with dizziness or fainting.',
        ],
      },
      {
        heading: 'How specialists may evaluate PVCs',
        paragraphs: [
          'An EKG can show PVCs if they occur during the tracing. A Holter monitor or other ambulatory recording may be used to count how often they occur and whether they happen with symptoms.',
          'Further testing depends on the patient, including whether structural heart disease is a concern.',
        ],
      },
      {
        heading: 'Potential next steps',
        paragraphs: [
          'Many PVCs are observed. If symptoms are bothersome or the pattern is frequent, a physician may discuss contributing factors, monitoring, or treatment. This website cannot tell you whether your extra beats are benign.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office to ask about evaluation if palpitations persist or another doctor has noted PVCs. Call 911 if extra beats occur with fainting, severe chest pain, or sudden severe shortness of breath.',
        ],
      },
    ],
    related: [
      { to: '/conditions/heart-palpitations', label: 'Heart palpitations' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/conditions/ventricular-tachycardia', label: 'Ventricular tachycardia' },
    ],
  },
  'sudden-cardiac-arrest': {
    slug: 'sudden-cardiac-arrest',
    kind: 'condition',
    shortTitle: 'Sudden Cardiac Arrest',
    h1: 'Sudden Cardiac Arrest Information in Reseda, CA',
    eyebrow: 'Heart rhythm emergency topic',
    intro:
      'Sudden cardiac arrest occurs when the heart abruptly stops beating and circulation stops. It is different from a heart attack, though heart disease can raise risk. This page is educational. If someone collapses, call 911.',
    sections: [
      {
        heading: 'What sudden cardiac arrest is',
        paragraphs: [
          'SCA is caused by a problem with the heart’s electrical system. The most common cause described in recovered education is ventricular fibrillation: abnormal firing in the lower chambers so the ventricles quiver and do not pump.',
          'Blood and oxygen do not reach the brain and other organs. The heart needs immediate emergency treatment, typically defibrillation, to try to restore a coordinated rhythm.',
        ],
      },
      {
        heading: 'Who may be at higher risk',
        paragraphs: [
          'Recovered FAQ text stated that people who have survived a previous heart attack or who have been diagnosed with some form of heart disease are at risk for SCA. A reduced ejection fraction is another topic physicians may discuss.',
          'Risk is individualized. This page cannot estimate your personal risk.',
        ],
      },
      {
        heading: 'Symptoms',
        paragraphs: [
          'Recovered education listed sudden collapse, loss of consciousness, abnormal breathing, inability to find a pulse, and loss of blood pressure. SCA can also occur without warning.',
          'These are emergency signs. Do not use this website to decide whether to call 911.',
        ],
      },
      {
        heading: 'Emergency treatment',
        paragraphs: [
          'Immediate treatment is cardiopulmonary resuscitation (CPR) and an automated external defibrillator when one is available. Office appointments are not the response to collapse.',
          'People recovering from SCA, or who a physician believes may be at risk, may later discuss an implantable cardioverter defibrillator.',
        ],
      },
      {
        heading: 'Later evaluation and devices',
        paragraphs: [
          'After survival or when risk is being assessed, a cardiologist or electrophysiologist may review heart function, prior rhythms, and guideline-based options. ICD criteria involve medications, heart function, and history — those decisions require physician approval.',
          'Our practice provides educational information and cardiac device-care questions. Call to ask whether evaluation is appropriate.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call 911 for collapse or suspected arrest. For follow-up after a hospital stay or a referral in Los Angeles or the San Fernando Valley, call Cardiac Rhythm Specialists.',
        ],
      },
    ],
    related: [
      { to: '/conditions/ventricular-fibrillation', label: 'Ventricular fibrillation' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
      { to: '/education/ejection-fraction', label: 'Ejection fraction' },
      { to: '/faq', label: 'Heart rhythm FAQ' },
    ],
  },
  'long-qt-syndrome': {
    slug: 'long-qt-syndrome',
    kind: 'condition',
    shortTitle: 'Long QT Syndrome',
    h1: 'Long QT Syndrome in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Long QT syndrome is a condition in which the heart’s electrical recovery after each beat is delayed. That delay can raise the risk of a dangerous ventricular rhythm. A heart rhythm specialist may evaluate a prolonged QT interval found on an EKG or after symptoms such as fainting.',
    sections: [
      {
        heading: 'What long QT syndrome is',
        paragraphs: [
          'Recovered education described long QT syndrome as a delay in repolarization of the heart after the initial depolarization and ventricular contraction. On an ECG, the pattern of Q, R, S, and T waves reflects that electrical sequence.',
          'In long QT syndrome, electrical signals are delayed because the system cannot recharge fast enough to carry the next signal normally. The recovered page stated this condition increases the risk of a life-threatening arrhythmia known as ventricular tachycardia.',
        ],
      },
      {
        heading: 'Why the QT interval matters',
        paragraphs: [
          'The QT interval is a measurement on the EKG. Only a physician should interpret whether it is prolonged for you, because heart rate and other factors affect the measurement.',
          'This website cannot read an EKG or diagnose long QT syndrome.',
        ],
      },
      {
        heading: 'Symptoms that may prompt evaluation',
        paragraphs: [
          'People may be evaluated after fainting, a concerning family history, or an abnormal EKG. Some people have few symptoms until a serious rhythm occurs.',
          'Emergency symptoms require 911.',
        ],
      },
      {
        heading: 'How specialists may evaluate a long QT concern',
        paragraphs: [
          'Evaluation typically starts with a careful EKG review and history, including medications that can affect the QT interval. Further testing depends on the individual.',
          'Medication lists and family history matter. Bring those to a visit if you can.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'A physician may discuss avoiding certain medications, other medical therapy, or devices in selected patients. Those decisions involve risk assessment and are not made from a website.',
          'Content about medications and device criteria needs physician approval before it is treated as personal advice.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been told you have a long QT interval or were referred for evaluation. Call 911 for fainting with palpitations, collapse, or other emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/conditions/ventricular-tachycardia', label: 'Ventricular tachycardia' },
      { to: '/conditions/sudden-cardiac-arrest', label: 'Sudden cardiac arrest' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
    ],
  },
  avnrt: {
    slug: 'avnrt',
    kind: 'condition',
    shortTitle: 'AVNRT',
    h1: 'AVNRT (AV Nodal Re-entrant Tachycardia) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Atrioventricular nodal re-entrant tachycardia, often called AVNRT, is a type of SVT. Recovered Cardiac Rhythm Specialists education described it as the second most common SVT. A heart rhythm specialist may evaluate possible AVNRT when a fast rhythm starts above the ventricles.',
    sections: [
      {
        heading: 'What AVNRT is',
        paragraphs: [
          'In a normal heart there is a single electrical pathway, or “gate,” called the atrioventricular (AV) node that controls the timing and direction of the electrical signal as it travels from the atria to the ventricles.',
          'With AVNRT, recovered education explained that an extra electrical pathway forms and allows the signal to travel backward through the AV node at the same time, starting another heartbeat. The signals can go around the two pathways in a circular pattern called re-entry.',
        ],
      },
      {
        heading: 'How fast it may feel',
        paragraphs: [
          'The recovered Conditions page stated that during AVNRT the heart rate can become very fast, in the range of 160 to 220 beats per minute. Those figures are educational background from older materials. Only a recorded rhythm and a physician can say whether an episode is AVNRT.',
        ],
      },
      {
        heading: 'How this relates to SVT and WPW',
        paragraphs: [
          'AVNRT is one kind of SVT. It is different from AVRT, in which an extra pathway goes around the AV node rather than through it. Wolff-Parkinson-White syndrome is related to an accessory pathway and is discussed separately.',
        ],
      },
      {
        heading: 'How specialists may evaluate it',
        paragraphs: [
          'Evaluation may include history, EKG, and rhythm monitoring. An electrophysiology study may be discussed when a physician needs more detail about the pathway.',
          'This page cannot diagnose AVNRT.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'If AVNRT is diagnosed, a physician may discuss maneuvers, medications, or catheter ablation. Whether any of those is appropriate is an individual decision.',
          'Medication and ablation details require physician review and are not standing orders.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been told you may have AVNRT or sudden racing-heart episodes. Call 911 for fainting, severe chest pain, or collapse.',
        ],
      },
    ],
    related: [
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/conditions/avrt', label: 'AVRT' },
      { to: '/conditions/wolff-parkinson-white', label: 'Wolff-Parkinson-White' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation information' },
    ],
  },
  avrt: {
    slug: 'avrt',
    kind: 'condition',
    shortTitle: 'AVRT',
    h1: 'AVRT (AV Reciprocating Tachycardia) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Atrioventricular reciprocating tachycardia, often called AVRT, is a type of SVT that uses an extra electrical pathway around the AV node. Recovered practice education distinguished it from AVNRT. A cardiac electrophysiologist may evaluate this pattern when symptoms or testing raise that question.',
    sections: [
      {
        heading: 'What AVRT is',
        paragraphs: [
          'Recovered education stated that AVRT is similar to AVNRT in that an extra electrical pathway allows the signal to travel backward from the ventricles to the atria.',
          'In AVRT, the extra pathway circumvents the AV node, or “gate.” That extra pathway around the outside of the AV node is called an accessory pathway.',
        ],
      },
      {
        heading: 'How this relates to Wolff-Parkinson-White syndrome',
        paragraphs: [
          'An accessory pathway is also the electrical feature discussed in Wolff-Parkinson-White syndrome. Not every accessory pathway is the same, and not every fast rhythm is WPW. A physician interprets EKGs and symptoms together.',
        ],
      },
      {
        heading: 'How specialists may evaluate it',
        paragraphs: [
          'History, EKG, monitoring, and sometimes an electrophysiology study may be used to see whether an accessory pathway is present and how it behaves.',
          'This website cannot diagnose AVRT.',
        ],
      },
      {
        heading: 'Potential treatment approaches',
        paragraphs: [
          'If AVRT or an accessory pathway is diagnosed, a physician may discuss observation, medication, or ablation. Those choices depend on symptoms, the pathway, and other medical conditions.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you were referred for possible AVRT, WPW, or SVT evaluation. Call 911 for fainting or emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/conditions/avnrt', label: 'AVNRT' },
      { to: '/conditions/wolff-parkinson-white', label: 'Wolff-Parkinson-White' },
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation information' },
    ],
  },
  'premature-atrial-contractions': {
    slug: 'premature-atrial-contractions',
    kind: 'condition',
    shortTitle: 'PACs',
    h1: 'Premature Atrial Contractions (PACs) in Reseda, CA',
    eyebrow: 'Heart rhythm condition',
    intro:
      'Premature atrial contractions, often called PACs, are extra atrial beats that occur earlier than expected and briefly interrupt the heart rhythm. Recovered Cardiac Rhythm Specialists education described them as common. They are a finding, not a complete diagnosis.',
    images: [
      {
        src: '/education/premature-atrial-contractions.jpg',
        alt: 'Educational illustration of premature atrial contractions on a rhythm strip',
        width: 309,
        height: 140,
      },
    ],
    sections: [
      {
        heading: 'What PACs are',
        paragraphs: [
          'Recovered education stated that premature atrial contractions are atrial beats that occur earlier than expected. Almost everyone has them once in a while. In the majority of cases they do not cause symptoms.',
          'Some people feel palpitations or a sensation of skipped beats.',
        ],
      },
      {
        heading: 'When they may need attention',
        paragraphs: [
          'The recovered page said PACs are often harmless and usually do not require special attention. If symptoms occur, a few lifestyle changes were mentioned as possible first steps, such as avoiding caffeine, reducing stress, or getting enough sleep.',
          'That is general recovered education, not a treatment plan. Frequent palpitations, fainting, or an abnormal EKG still deserve a physician’s review.',
        ],
      },
      {
        heading: 'How this differs from PVCs and AFib',
        paragraphs: [
          'PACs start in the atria. Premature ventricular contractions start in the ventricles. Atrial fibrillation is a sustained irregular atrial rhythm, not a single extra beat. A recorded tracing is needed to tell these apart.',
        ],
      },
      {
        heading: 'How specialists may evaluate palpitations',
        paragraphs: [
          'If extra beats are frequent or bothersome, a physician may order an EKG or a monitor. The goal is to document the rhythm and look for other heart conditions.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if extra beats are new, frequent, or associated with dizziness, chest discomfort, or fainting. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/conditions/premature-ventricular-contractions', label: 'PVCs' },
      { to: '/conditions/heart-palpitations', label: 'Heart palpitations' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
    ],
  },
  'aortic-valve-disease': {
    slug: 'aortic-valve-disease',
    kind: 'condition',
    shortTitle: 'Aortic Valve Disease',
    h1: 'Aortic Valve Disease Education',
    eyebrow: 'Recovered heart education',
    intro:
      'The original Cardiac Rhythm Specialists conditions library included aortic valve disease because valve problems can affect heart rhythm and pumping. This page recovers that education. It is not a statement that valve surgery is offered through this office.',
    sections: [
      {
        heading: 'How the aortic valve works',
        paragraphs: [
          'Recovered education explained that the heart has four valves. A normal aortic valve has three leaflets that seal tightly when closed. During contraction the aortic valve opens so blood can flow from the left ventricle into the aorta. When the heart relaxes, the valve closes to keep blood from re-entering the left ventricle.',
        ],
      },
      {
        heading: 'Stenosis and regurgitation',
        paragraphs: [
          'Aortic stenosis is narrowing or obstruction that prevents the valve from opening fully. The left ventricle may have to pump harder and can thicken or enlarge. Aortic regurgitation occurs when the valve does not close properly, allowing blood to leak back into the left ventricle.',
        ],
      },
      {
        heading: 'Symptoms mentioned in recovered education',
        paragraphs: [
          'A person may have few symptoms at first. As valve disease becomes more severe, recovered text listed shortness of breath, chest pain, back pressure from fluid in the lungs, poor pumping, palpitations, and arrhythmias.',
        ],
      },
      {
        heading: 'Causes listed on the original page',
        paragraphs: [
          'The recovered page listed degeneration of valve leaflets, enlargement of the base of the aorta, endocarditis, dissection of the aorta, traumatic injury, and hypertension among causes and risk factors. Those lists are educational, not a diagnosis of your valve.',
        ],
      },
      {
        heading: 'Why this appears on a heart rhythm website',
        paragraphs: [
          'Valve disease can contribute to palpitations, atrial fibrillation, or reduced pumping. A heart rhythm specialist may still need a complete picture of the heart’s structure. Structural heart procedures are decided by the treating physicians, not by this page.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you were told you have aortic valve disease and have rhythm questions. Call 911 for sudden severe chest pain, fainting, or sudden severe shortness of breath.',
        ],
      },
    ],
    related: [
      { to: '/conditions/mitral-valve-disease', label: 'Mitral valve disease' },
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/education/the-normal-heart', label: 'The normal heart' },
    ],
  },
  'mitral-valve-disease': {
    slug: 'mitral-valve-disease',
    kind: 'condition',
    shortTitle: 'Mitral Valve Disease',
    h1: 'Mitral Valve Disease Education',
    eyebrow: 'Recovered heart education',
    intro:
      'The original conditions library also explained mitral valve disease. Recovered text described mitral stenosis and mitral regurgitation. This page preserves that education. It does not advertise valve surgery.',
    sections: [
      {
        heading: 'What mitral valve disease is',
        paragraphs: [
          'Recovered education stated that mitral valve disease occurs when the mitral valve cannot open or close properly. Mitral stenosis is narrowing that prevents the valve from opening properly. Mitral regurgitation occurs when the valve does not fully close.',
        ],
      },
      {
        heading: 'What regurgitation can do over time',
        paragraphs: [
          'When the valve closes incompletely during ventricular contraction, blood can flow from the left ventricle back into the atrium. Mild regurgitation may not cause problems. As it persists, the left atrium can enlarge. Serious regurgitation can cause the left ventricle to enlarge, weaken, and begin to fail.',
        ],
      },
      {
        heading: 'Symptoms mentioned in recovered education',
        paragraphs: [
          'The original page listed fatigue, shortness of breath, palpitations, and atrial arrhythmias.',
        ],
      },
      {
        heading: 'Why rhythm care may still be relevant',
        paragraphs: [
          'An enlarged atrium and atrial arrhythmias, including atrial fibrillation, can appear together with mitral valve disease. A physician coordinates structure and rhythm care. This website cannot decide whether a valve needs repair or replacement.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have mitral valve disease and questions about palpitations or AFib. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/conditions/aortic-valve-disease', label: 'Aortic valve disease' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/education/the-normal-heart', label: 'The normal heart' },
    ],
  },
}

export const TREATMENTS: Record<string, MedicalPageContent> = {
  'cardiac-ablation': {
    slug: 'cardiac-ablation',
    kind: 'treatment',
    shortTitle: 'Cardiac Ablation',
    h1: 'Cardiac Ablation in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'Cardiac ablation is a procedure that may be used to treat some heart rhythm disorders. Whether it is appropriate depends on the diagnosis, symptoms, and a physician’s evaluation. Please call the office to ask about evaluation and whether related care is available through this practice.',
    sections: [
      {
        heading: 'What cardiac ablation is',
        paragraphs: [
          'During catheter ablation, a physician typically threads thin tubes through blood vessels to the heart. Energy may then be used to treat small areas of tissue that can sustain an abnormal rhythm.',
          'Ablation is not the first step for every arrhythmia. It is one option that may be discussed after evaluation.',
        ],
      },
      {
        heading: 'Why ablation may be discussed',
        paragraphs: [
          'Physicians may discuss ablation for certain tachycardias, some cases of atrial fibrillation, or other rhythms when medications are not a good fit, are not tolerated, or have not been enough. The reasons vary by patient.',
          'This page cannot say whether ablation is right for you.',
        ],
      },
      {
        heading: 'How specialists evaluate whether ablation might be an option',
        paragraphs: [
          'Evaluation usually includes a confirmed rhythm diagnosis, a review of symptoms and medications, and a discussion of risks and alternatives. Additional heart tests may be recommended depending on the individual.',
          'A cardiac electrophysiologist is the specialist who typically performs or recommends ablation when it is appropriate.',
        ],
      },
      {
        heading: 'What patients can generally expect to discuss',
        paragraphs: [
          'If ablation is considered, a physician should explain the intended goal, possible complications, recovery, and the chance that the rhythm could return. Results vary. Ablation does not guarantee a cure.',
          'Ask about hospital location, preparation, and follow-up if a procedure is planned.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call our Reseda office if you have been referred for a heart rhythm procedure discussion or want to ask about evaluation. For emergencies, call 911.',
        ],
      },
      {
        heading: 'A note about services at this practice',
        paragraphs: [
          'Cardiac Rhythm Specialists provides cardiology and heart rhythm evaluation and care. Specific procedures offered can vary. Contact the office to confirm whether ablation evaluation or related care is available for your situation.',
        ],
      },
    ],
    related: [
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/treatments/afib-ablation', label: 'AFib ablation' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
    ],
  },
  'afib-ablation': {
    slug: 'afib-ablation',
    kind: 'treatment',
    shortTitle: 'AFib Ablation',
    h1: 'AFib Ablation in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'AFib ablation is a type of cardiac ablation that may be discussed for some people with atrial fibrillation. It is not appropriate for every patient. Call the office to ask about evaluation.',
    sections: [
      {
        heading: 'What AFib ablation means',
        paragraphs: [
          'Atrial fibrillation ablation aims to reduce the abnormal electrical activity that can trigger or sustain AFib, often by treating tissue around the pulmonary veins or other target areas selected by the physician.',
          'Techniques and targets can differ. Your physician would explain the approach being considered, if any.',
        ],
      },
      {
        heading: 'Why it may be discussed',
        paragraphs: [
          'A physician may discuss AFib ablation when symptoms continue despite medication, when medications are not tolerated, or when a rhythm-control strategy is being considered. Stroke prevention and other medical issues remain separate parts of AFib care.',
          'Ablation does not replace the need for individualized decisions about blood thinners or other therapies.',
        ],
      },
      {
        heading: 'Evaluation before any procedure discussion',
        paragraphs: [
          'Confirming AFib, understanding how often it occurs, reviewing heart structure, and discussing goals are typical steps. Additional imaging or monitoring may be recommended depending on the patient.',
        ],
      },
      {
        heading: 'What patients should know',
        paragraphs: [
          'AFib can return after ablation in some people. Repeat procedures are sometimes considered. Risks and recovery should be explained by the treating physician before any decision.',
          'This website does not schedule procedures or promise outcomes.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'If you have AFib and want to discuss heart rhythm options, call Cardiac Rhythm Specialists. Seek emergency care for stroke symptoms, severe chest pain, or fainting.',
        ],
      },
      {
        heading: 'Related heart rhythm care',
        paragraphs: [
          'Learn about atrial fibrillation as a condition and about cardiac ablation in general. Office staff can help you take the next step toward an appointment if evaluation is appropriate.',
        ],
      },
    ],
    related: [
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation overview' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/new-patients', label: 'New patient information' },
    ],
  },
  pacemaker: {
    slug: 'pacemaker',
    kind: 'treatment',
    shortTitle: 'Pacemaker',
    h1: 'Pacemaker Care in Reseda, CA',
    eyebrow: 'Cardiac device care',
    intro:
      'A pacemaker is a small device that may be used when the heart beats too slowly or pauses. Dr. Polosajian provides educational information about pacemakers, and our office can help with cardiac device care questions. Whether a pacemaker is needed is a physician decision.',
    sections: [
      {
        heading: 'What a pacemaker is',
        paragraphs: [
          'A pacemaker can send small electrical signals to help the heart maintain an appropriate rate when the natural electrical system is too slow. It is typically placed under the skin, with leads or a leadless design depending on the device.',
          'Dr. Polosajian has educational videos explaining what a pacemaker is and how it can sense when pacing is needed.',
        ],
      },
      {
        heading: 'When a pacemaker might be discussed',
        paragraphs: [
          'Physicians may consider a pacemaker for symptomatic slow heart rates, certain conduction problems, or pauses documented on monitoring. The indication depends on symptoms, EKG findings, and other medical factors.',
          'Not every slow pulse requires a pacemaker.',
        ],
      },
      {
        heading: 'How specialists evaluate the need for pacing',
        paragraphs: [
          'Evaluation may include an EKG, longer monitoring, a review of medications that affect heart rate, and assessment for reversible causes. Your physician may also check for related heart conditions.',
        ],
      },
      {
        heading: 'Living with a pacemaker and device care',
        paragraphs: [
          'After a pacemaker is placed, follow-up is important. Device checks, wound questions, and activity guidance are typically handled by the implanting and follow-up team. Our office lists pacemaker and defibrillator device care among the reasons patients seek help.',
          'Call the office about device-care questions. Do not send device reports through the website form.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office to ask about pacemaker evaluation or device follow-up. Seek urgent or emergency care for fainting, severe shortness of breath, or signs of infection after a recent procedure as directed by your physician.',
        ],
      },
      {
        heading: 'Why heart rhythm evaluation may help',
        paragraphs: [
          'Understanding whether symptoms come from a slow rhythm, another arrhythmia, or a different cause can guide next steps. A cardiac electrophysiology evaluation may be useful when pacing or other rhythm care is being considered.',
        ],
      },
    ],
    related: [
      { to: '/conditions/arrhythmias', label: 'Arrhythmias and heart rhythm evaluation' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
      { to: '/faq', label: 'Heart rhythm FAQ' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'implantable-cardioverter-defibrillator': {
    slug: 'implantable-cardioverter-defibrillator',
    kind: 'treatment',
    shortTitle: 'ICD',
    h1: 'ICD Care in Reseda, CA',
    eyebrow: 'Cardiac device care',
    intro:
      'An implantable cardioverter defibrillator (ICD) is a device that may treat certain dangerous fast ventricular rhythms. Our practice provides cardiac device care, including defibrillator-related follow-up questions. Whether an ICD is recommended is individualized.',
    sections: [
      {
        heading: 'What an ICD is',
        paragraphs: [
          'An ICD can monitor the heart rhythm and, if a life-threatening ventricular arrhythmia is detected, may deliver pacing or a shock to try to restore a safer rhythm. Some ICDs also provide pacemaker functions.',
          'An ICD is not the same as a pacemaker, though the devices can look similar and both require follow-up.',
        ],
      },
      {
        heading: 'When an ICD might be discussed',
        paragraphs: [
          'Physicians may discuss an ICD after certain dangerous arrhythmias, or in some patients with reduced heart pumping function, based on guidelines and individual risk. Those decisions require a full clinical evaluation.',
          'This page does not determine whether you need an ICD.',
        ],
      },
      {
        heading: 'Evaluation and counseling',
        paragraphs: [
          'If an ICD is considered, a physician should explain why, what the device can and cannot do, and possible complications. Heart failure status, prior rhythms, and other conditions may all matter.',
        ],
      },
      {
        heading: 'Device care',
        paragraphs: [
          'People who already have an ICD typically need scheduled checks. Contact the office about defibrillator device care. Do not use the website form for alerts, shocks, or urgent symptoms — call the office or emergency services as appropriate.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call for appointments or device-care questions. After a shock, follow the instructions you were given; if you feel unwell or were not given instructions, seek urgent medical help. Call 911 for emergency symptoms.',
        ],
      },
      {
        heading: 'Related care',
        paragraphs: [
          'Rhythm evaluation, heart-failure-related questions, and pacemaker education are related topics. Staff can help you find the right type of visit if you call the office.',
        ],
      },
    ],
    related: [
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/treatments/cardiac-resynchronization-therapy', label: 'CRT information' },
    ],
  },
  'cardiac-resynchronization-therapy': {
    slug: 'cardiac-resynchronization-therapy',
    kind: 'treatment',
    shortTitle: 'CRT',
    h1: 'Cardiac Resynchronization Therapy in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'Cardiac resynchronization therapy (CRT) is a specialized pacing approach that may be considered for some people with heart failure and a specific electrical pattern. It is not appropriate for everyone. Please call to ask about evaluation; confirm with the practice which services are offered.',
    sections: [
      {
        heading: 'What CRT is',
        paragraphs: [
          'CRT uses a device to pace more than one region of the heart so the ventricles may squeeze in a more coordinated way in selected patients. It is sometimes combined with defibrillator therapy (CRT-D) or used as a pacemaker (CRT-P).',
          'A physician determines candidacy using heart function, EKG findings, symptoms, and other factors.',
        ],
      },
      {
        heading: 'Why CRT may be discussed',
        paragraphs: [
          'CRT may be discussed when heart failure symptoms continue and the electrical system shows a pattern that suggests the ventricles are not contracting together. It is one possible tool among medications and other heart-failure therapies.',
        ],
      },
      {
        heading: 'Evaluation',
        paragraphs: [
          'Evaluation typically involves echocardiography or other imaging, an EKG, and a review of guideline-directed medical therapy. Not every patient with heart failure benefits from CRT.',
        ],
      },
      {
        heading: 'What patients can expect to ask',
        paragraphs: [
          'If CRT is considered, ask about goals, implant risks, follow-up, and how success is measured. Improvement is not guaranteed.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you were referred to discuss a heart-failure device or rhythm care. For sudden worsening of breathing or chest pain, call 911.',
        ],
      },
      {
        heading: 'Availability of this service',
        paragraphs: [
          'This page explains CRT for education. Contact Cardiac Rhythm Specialists to ask whether CRT evaluation or related device care is available through our practice for your situation.',
        ],
      },
    ],
    related: [
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'electrophysiology-study': {
    slug: 'electrophysiology-study',
    kind: 'treatment',
    shortTitle: 'EP Study',
    h1: 'Electrophysiology Study (EP Study) in Reseda, CA',
    eyebrow: 'Heart rhythm procedure topic',
    intro:
      'An electrophysiology study is a detailed way to look at the heart’s electrical system. Electrode catheters can sense activity in different parts of the heart and deliver tiny pacing impulses. Whether an EP study is appropriate depends on symptoms, prior tests, and a physician’s evaluation.',
    images: [
      {
        src: '/education/electrophysiology-study.jpg',
        alt: 'Educational photo of an electrophysiology laboratory setting',
        width: 206,
        height: 175,
      },
    ],
    sections: [
      {
        heading: 'What an EP study is',
        paragraphs: [
          'Normally, electricity flows through the heart in a regular pattern that produces coordinated contractions. A problem along that pathway can cause an arrhythmia. An EP study is designed to diagnose the precise electrical cause so treatment options can be discussed.',
          'Special electrode catheters are inserted, often from the groin, and advanced to the heart while staff watch their position on imaging. The catheters measure how impulses travel and can pace the heart so certain arrhythmias can be observed in a controlled lab.',
        ],
      },
      {
        heading: 'Why an EP study may be discussed',
        paragraphs: [
          'Brief tests such as a standard EKG may miss intermittent arrhythmias. Even longer recordings such as Holter monitoring may not capture an event. During an EP study, a specialist may provoke arrhythmia events and collect data during those events.',
          'Recovered education listed these reasons: to diagnose the cause of lightheadedness, dizziness, palpitations, or fainting; to pinpoint a known arrhythmia and discuss treatment; to see how certain medications are working; to assess severity and future cardiac-event risk; and to help decide whether a pacemaker, defibrillator, or ablation should be discussed.',
        ],
      },
      {
        heading: 'Preparation discussed in recovered education',
        paragraphs: [
          'Recovered pre-test guidance asked patients not to eat or drink for 6 to 8 hours before the study, with small sips of water for medications if allowed. Some medications may be stopped for a few days if the physician instructs that. Arrange a ride home; patients are typically not allowed to drive after sedation.',
          'Tell the team about prior reactions to medications or anesthesia and any bleeding history. Empty your bladder before the procedure; a urinary catheter is sometimes used. These are historical prep notes and must be confirmed with the treating physician — they are flagged for approval.',
        ],
      },
      {
        heading: 'What patients can generally expect',
        paragraphs: [
          'You may arrive the morning of the study or the night before. Routine tests such as an ECG, x-rays, or blood work may be done. After consent, the insertion site — often the groin — is cleaned. An IV and a sedative are typically used.',
          'Recovered education stated the study may take about one to four hours. Patients remain still afterward so the entry site can begin to heal. The electrophysiologist leads a team in an EP lab, usually in a hospital. Complications can occur; the physician should explain risks and alternatives.',
        ],
      },
      {
        heading: 'How results may be used',
        paragraphs: [
          'Mapping data can help locate tissue that gives rise to abnormal impulses. Sometimes medication response is tested. In some cases a physician may proceed to ablation or discuss a pacemaker or ICD based on findings and prior counseling.',
          'An EP study does not guarantee a diagnosis or a specific treatment. Call the office to ask whether evaluation related to an EP study is available through this practice.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call our Reseda office if you were referred for an EP study discussion. For emergencies, call 911.',
        ],
      },
    ],
    related: [
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation' },
      { to: '/treatments/three-dimensional-mapping', label: '3-D mapping' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
    ],
  },
  'svt-ablation': {
    slug: 'svt-ablation',
    kind: 'treatment',
    shortTitle: 'SVT Ablation',
    h1: 'SVT Ablation in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'SVT ablation is a catheter procedure that may be discussed for some people with supraventricular tachycardia. It is not appropriate for every patient. Please call to ask about evaluation; confirm with the practice which services are offered.',
    sections: [
      {
        heading: 'What SVT is',
        paragraphs: [
          'SVT stands for supraventricular tachycardia — a rhythm disorder involving the upper chambers of the heart. Recovered education noted that SVT can affect people of many ages, including infants, and may first become evident in the late teens or twenties.',
          'During an episode the heart can suddenly race. Recovered text described rates greater than 220 beats per minute as not unusual for some attacks. People may feel short of breath, weak, lightheaded, or have chest pain. Passing-out spells can occur.',
        ],
      },
      {
        heading: 'How an episode may stop — and when it may not',
        paragraphs: [
          'Some people can sometimes terminate an episode with maneuvers a physician has taught, such as bearing down, holding the breath, or a cold-water facial stimulus. Others need emergency care. In an emergency department, physicians may use intravenous medication or an electrical shock to stop the rhythm.',
          'Do not try unfamiliar maneuvers from a website. Ask your physician what is appropriate for you.',
        ],
      },
      {
        heading: 'Why ablation may be discussed',
        paragraphs: [
          'SVT can result from an extra region of electrical conduction that lets impulses travel in a circle between the normal system and that extra pathway. Recovered pages listed types such as Wolff-Parkinson-White syndrome, ectopic atrial tachycardia, macro-reentrant atrial tachycardia, orthodromic reciprocating tachycardia, and AV-nodal reentry tachycardia.',
          'Options discussed in recovered education included long-term medication or catheter ablation. Medications can have side effects, and the recovered page noted that some people stop a drug because of side effects or lack of control. Those figures and choices need physician review.',
        ],
      },
      {
        heading: 'What an SVT ablation generally involves',
        paragraphs: [
          'Catheters are inserted, typically from veins in the groin, and advanced to the heart. The electrical system is mapped. When an abnormal extra pathway is identified, radiofrequency energy may be delivered to treat that tissue so the circuit can no longer sustain the rhythm. The heart is then tested to see whether SVT can still be induced.',
          'Tubes are removed afterward. Recovered education described same-day discharge as common, with a return to usual activities often discussed in the following days. Recovery instructions come from the treating team, not this website.',
        ],
      },
      {
        heading: 'What patients should know about results',
        paragraphs: [
          'Ablation can be effective for many people with certain SVT types, but this website does not quote success percentages or promise a permanent cure. Repeat procedures are sometimes considered. Risks should be explained before any decision.',
          'Older recovered copy included clinic-specific outcome claims that are not republished here.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call Cardiac Rhythm Specialists if you have been referred to discuss SVT ablation. Seek emergency care for fainting, severe chest pain, or a racing rhythm that feels like an emergency.',
        ],
      },
    ],
    related: [
      { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
      { to: '/conditions/wolff-parkinson-white', label: 'Wolff-Parkinson-White' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation overview' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
    ],
  },
  'vt-ablation': {
    slug: 'vt-ablation',
    kind: 'treatment',
    shortTitle: 'VT Ablation',
    h1: 'VT Ablation in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'VT ablation is a catheter procedure that may be discussed for some people with ventricular tachycardia. It is one option among medications, devices, and other care. Call the office to ask about evaluation; confirm whether related care is available through this practice.',
    sections: [
      {
        heading: 'What VT ablation means',
        paragraphs: [
          'Catheter ablation uses flexible tubes guided to the heart to treat small areas of tissue that can give rise to abnormal electrical signals. For ventricular tachycardia, the targets are in or related to the ventricles.',
          'Recovered Treatments education described a burst of radiofrequency energy used to treat very small areas of tissue. Not every VT is equally suited to ablation. A physician explains the approach being considered, if any.',
        ],
      },
      {
        heading: 'Why it may be discussed',
        paragraphs: [
          'VT can make it hard for the heart to pump adequate blood. Physicians may discuss ablation when VT recurs, when medications are not tolerated or not enough, or when an ICD is treating repeated events. The reasons vary.',
          'Ablation does not replace emergency care for collapse and does not guarantee that VT will never return.',
        ],
      },
      {
        heading: 'Evaluation before any procedure discussion',
        paragraphs: [
          'Confirming VT, understanding heart structure and pumping function, reviewing medications, and discussing goals are typical steps. An EP study and three-dimensional mapping may be part of planning when ablation is considered.',
          'This page cannot say whether VT ablation is right for you.',
        ],
      },
      {
        heading: 'What patients should ask',
        paragraphs: [
          'If ablation is considered, ask about intended goals, risks, recovery, hospital location, and the chance the rhythm could return. Ask how an ICD, if you have one, fits into the plan.',
          'Older recovered pages that described other hospitals’ programs are not used as claims for this practice.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you were referred to discuss VT ablation. Call 911 for fainting, severe chest pain, or suspected cardiac arrest.',
        ],
      },
      {
        heading: 'Related heart rhythm care',
        paragraphs: [
          'Learn about ventricular tachycardia as a condition, ICD care, and electrophysiology studies. Staff can help you take the next step if evaluation is appropriate.',
        ],
      },
    ],
    related: [
      { to: '/conditions/ventricular-tachycardia', label: 'Ventricular tachycardia' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation overview' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
    ],
  },
  'pacemaker-implantation': {
    slug: 'pacemaker-implantation',
    kind: 'treatment',
    shortTitle: 'Pacemaker Implant',
    h1: 'Pacemaker Implantation in Reseda, CA',
    eyebrow: 'Cardiac device procedure topic',
    intro:
      'A pacemaker is a small device that can send electrical impulses to help maintain a suitable heart rate when the natural pacemaker is too slow. Whether implantation is needed is a physician decision. Please call to ask about evaluation and device care.',
    images: [
      {
        src: '/education/pacemaker-implantation.jpg',
        alt: 'Educational illustration of a pacemaker pulse generator and leads',
        width: 280,
        height: 350,
      },
    ],
    sections: [
      {
        heading: 'What is implanted',
        paragraphs: [
          'A typical pacemaker has a pulse generator — battery and a small computer — placed under the skin of the chest, and leads (wires) that are threaded through veins into the heart. The leads send impulses to the heart muscle and sense the heart’s electrical activity.',
          'Each paced impulse can cause the heart to contract when the device is programmed to do so. The physician programs a minimum rate. When the heart rate drops below that setting, the pacemaker can fire.',
        ],
      },
      {
        heading: 'Types of pacemakers mentioned in recovered education',
        paragraphs: [
          'A single-chamber pacemaker uses one lead in an atrium or a ventricle. A dual-chamber pacemaker uses a lead in the atria and a lead in the ventricles. A biventricular pacemaker uses three leads: right atrium, right ventricle, and a left-ventricular lead typically placed via the coronary sinus — this is cardiac resynchronization therapy.',
          'Your physician decides which type, if any, fits your condition.',
        ],
      },
      {
        heading: 'When implantation might be discussed',
        paragraphs: [
          'Pacemakers are most commonly discussed for bradyarrhythmias — slow rhythms from disease in the SA node, AV node, or His-Purkinje system. Recovered education also mentioned syncope, heart failure treated with CRT, and hypertrophic cardiomyopathy as situations in which pacing is sometimes considered.',
          'Not every slow pulse requires an implant.',
        ],
      },
      {
        heading: 'Preparation notes from recovered education',
        paragraphs: [
          'Ask which medications you may take. Some medicines may be stopped one to five days before the procedure if the physician instructs that. People with diabetes should ask how to adjust diabetes medications.',
          'Recovered instructions said not to eat or drink after midnight the evening before, and to take allowed medications with only a small sip of water. Wear comfortable clothes, change into a gown, and leave jewelry at home. Confirm all prep with the treating team — these notes are flagged for physician approval.',
        ],
      },
      {
        heading: 'After implantation',
        paragraphs: [
          'Follow-up device checks are an important part of care. Wound questions and activity guidance come from the implanting and follow-up team. Our office lists pacemaker device care among reasons patients call.',
          'Do not send device reports through the website form.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office about pacemaker evaluation or implant follow-up. Seek urgent care for fainting, severe shortness of breath, or signs of infection after a recent procedure as directed by your physician.',
        ],
      },
    ],
    related: [
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/testing/pacemaker-checks', label: 'Pacemaker checks' },
      { to: '/conditions/bradycardia', label: 'Bradycardia' },
      { to: '/treatments/device-replacement', label: 'Device replacement' },
    ],
  },
  'icd-implantation': {
    slug: 'icd-implantation',
    kind: 'treatment',
    shortTitle: 'ICD Implant',
    h1: 'ICD Implantation in Reseda, CA',
    eyebrow: 'Cardiac device procedure topic',
    intro:
      'An implantable cardioverter defibrillator is a device placed in the body that can recognize certain rapid ventricular arrhythmias and treat them with pacing or an electronic shock. Whether an ICD is recommended is individualized. Call to ask about evaluation.',
    sections: [
      {
        heading: 'What an ICD is intended to do',
        paragraphs: [
          'An ICD continuously monitors the heart rhythm. If it detects a dangerous rapid rhythm such as ventricular tachycardia or ventricular fibrillation, it may deliver antitachycardia pacing or a high-voltage shock to try to restore a safer heartbeat. If the rate is too slow, the pacemaker function in many ICDs can send a low-energy pulse.',
          'An ICD is not the same as a pacemaker alone, though the implant process can look similar and both need follow-up.',
        ],
      },
      {
        heading: 'When an ICD has been discussed',
        paragraphs: [
          'Recovered education described traditional discussions after survival of cardiac arrest due to VF without a reversible cause, VT that places someone at high risk even without arrest, severe symptoms thought to reflect VF or VT, and some inherited conditions that raise arrest risk.',
          'Later recovered text also described expanded discussions for some people with reduced pumping function and heart failure symptoms, even without prior ventricular arrhythmia. Those criteria change over time and must be reviewed by a physician — they are not republished here as current rules.',
        ],
      },
      {
        heading: 'How implantation was described',
        paragraphs: [
          'Recovered education described a pulse generator placed under the skin in the upper chest, with a lead threaded through blood vessels to the heart. The procedure was described as typically under two hours, often with an overnight stay, though your team’s plan may differ.',
          'Risks, alternatives, and recovery should be explained before any decision. This website does not schedule implants or promise outcomes.',
        ],
      },
      {
        heading: 'Care besides a device',
        paragraphs: [
          'Recovered ICD education emphasized treating underlying heart disease — diet, cholesterol, blood pressure, smoking, medications, and other therapies — before or along with device decisions. An ICD is not a substitute for that care.',
          'Ask your physician what applies to you.',
        ],
      },
      {
        heading: 'After a shock or an alert',
        paragraphs: [
          'Follow the instructions you were given. If you feel unwell or were not given instructions, seek urgent medical help. Do not use the website form for shocks or urgent symptoms.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office for implant questions or device follow-up. Call 911 for collapse or emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD care' },
      { to: '/testing/icd-checks', label: 'ICD checks' },
      { to: '/conditions/sudden-cardiac-arrest', label: 'Sudden cardiac arrest' },
      { to: '/treatments/device-replacement', label: 'Device replacement' },
    ],
  },
  'loop-recorder': {
    slug: 'loop-recorder',
    kind: 'treatment',
    shortTitle: 'Loop Recorder',
    h1: 'Implantable Loop Recorder in Reseda, CA',
    eyebrow: 'Heart rhythm monitoring topic',
    intro:
      'An implantable loop recorder is a small device placed under the skin to help identify the cause of unexplained fainting or infrequent rhythm symptoms. It records heart activity over a long period. A physician decides whether this monitor is appropriate.',
    sections: [
      {
        heading: 'What a loop recorder is',
        paragraphs: [
          'Recovered education described an implantable loop recorder as a small device placed under the skin under local anesthesia. It continuously records heart activity similar to an ECG for an extended period — the recovered page said up to two years.',
          'If the patient has a fainting episode, the device can be activated to save the recording before, during, and after the event so a physician can review it.',
        ],
      },
      {
        heading: 'Why it may be discussed',
        paragraphs: [
          'Syncope can come and go. A standard EKG or even a 24-hour Holter may miss an infrequent pause or arrhythmia. A loop recorder is one tool for longer surveillance when fainting remains unexplained.',
          'It may also be discussed for infrequent palpitations when shorter monitors have not captured the rhythm.',
        ],
      },
      {
        heading: 'How it relates to fainting evaluation',
        paragraphs: [
          'Certain heart disorders, including arrhythmias, can cause fainting. The recordings help determine whether a rhythm problem occurred at the time of symptoms.',
          'A loop recorder does not treat syncope. It is a diagnostic device.',
        ],
      },
      {
        heading: 'Placement and removal',
        paragraphs: [
          'The recovered page stated the device is surgically placed under the skin under local anesthesia and, after the recording period, surgically removed under local anesthesia.',
          'Prep, wound care, and activity limits come from the treating physician. Those instructions are flagged for approval.',
        ],
      },
      {
        heading: 'What happens with the recordings',
        paragraphs: [
          'A physician reviews saved events and, depending on the device, remote or in-office transmissions. Findings may lead to reassurance, further testing, medication changes, or discussion of a pacemaker or other therapy.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if you were referred for a loop recorder discussion or have unexplained syncope. Call 911 if someone is unresponsive or if fainting occurs with chest pain.',
        ],
      },
    ],
    related: [
      { to: '/conditions/syncope', label: 'Syncope' },
      { to: '/testing/event-monitoring', label: 'Event monitoring' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
    ],
  },
  'device-replacement': {
    slug: 'device-replacement',
    kind: 'treatment',
    shortTitle: 'Device Replacement',
    h1: 'Pacemaker and ICD Replacement in Reseda, CA',
    eyebrow: 'Cardiac device procedure topic',
    intro:
      'Implantable pacemakers, ICDs, and CRT devices contain batteries that eventually run low. When that happens, the physician typically replaces the device. The original leads often remain in place. Call the office about device-care questions.',
    sections: [
      {
        heading: 'Why the whole device is replaced',
        paragraphs: [
          'The battery and other parts are sealed inside a metal case during manufacturing. The seal prevents anything from entering or leaving the device. An implantable device cannot be opened and resealed, so when battery energy runs low the entire generator is replaced.',
          'In most cases the leads can remain in place. Recovered education described replacement as usually easier and faster than the first implant for that reason.',
        ],
      },
      {
        heading: 'When replacement is planned',
        paragraphs: [
          'Clinic checks track battery status. Recovered pacemaker-check education stated that many pacemaker batteries last between 5 and 10 years, and that the technician or cardiologist advises when a new generator is needed. Actual longevity varies by device and how it is used.',
          'Do not wait for symptoms to assume a battery is depleted. Keep scheduled follow-up.',
        ],
      },
      {
        heading: 'Preparation notes from recovered education',
        paragraphs: [
          'Replacement is often done in a hospital or day-surgery setting. Many people go home the same day and should not drive immediately afterward, so plan a ride.',
          'You may be told not to eat or drink, or not to take certain medications, for a number of hours before the procedure. An IV is placed. Medication makes you sleepy but not always fully unconscious. Confirm prep with your physician — flagged for approval.',
        ],
      },
      {
        heading: 'During the procedure',
        paragraphs: [
          'The skin near the shoulder is numbed. The physician makes an incision near the existing device, which sits just under the skin. Recovered steps included disconnecting the leads, removing the old device, checking that the leads will work with the new device, placing the new device, and reconnecting the leads. The system is checked before the incision is closed.',
          'If a new defibrillator or CRT-D is being tested, you may be asleep for part of the procedure because testing can send a shock to the heart.',
        ],
      },
      {
        heading: 'After replacement',
        paragraphs: [
          'A short recovery-room stay is typical. Pain medication may be recommended. Recovered education advised asking before using aspirin, which can increase bleeding risk. Call if the incision becomes reddened, swollen, or more painful.',
          'Recovery is often quicker than after the first implant, but instructions still come from your team.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office about battery alerts, replacement scheduling, or wound questions. Seek urgent care for fever, drainage, or opening of the incision as directed by your physician.',
        ],
      },
    ],
    related: [
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD care' },
      { to: '/testing/device-follow-up', label: 'Device follow-up' },
      { to: '/testing/pacemaker-checks', label: 'Pacemaker checks' },
    ],
  },
  'three-dimensional-mapping': {
    slug: 'three-dimensional-mapping',
    kind: 'treatment',
    shortTitle: '3-D Mapping',
    h1: '3-D Electro-Anatomical Mapping in Reseda, CA',
    eyebrow: 'Heart rhythm procedure topic',
    intro:
      'Three-dimensional electro-anatomical mapping is a computer-based way to display catheter location and reconstruct the anatomy and electrical properties of a heart chamber during an EP study or ablation. It is a tool, not a treatment by itself.',
    sections: [
      {
        heading: 'What 3-D mapping is',
        paragraphs: [
          'Recovered education described computerized electroanatomic systems that calculate the real-time position of a catheter tip and display it on a screen. That allows a virtual reconstruction of the chamber being studied, along with electrophysiological characteristics such as voltage and impulse propagation.',
          'The combination of anatomy and electrical information can help a physician locate tissue involved in an arrhythmia.',
        ],
      },
      {
        heading: 'How it may be used during ablation',
        paragraphs: [
          'Mapping is often used together with catheter ablation. Recovered text described radiofrequency ablation of cardiac arrhythmias as one setting in which detailed navigation and mapping are used.',
          'The mapping system does not replace the physician’s judgment about whether ablation should be performed.',
        ],
      },
      {
        heading: 'Navigation technology mentioned historically',
        paragraphs: [
          'An older recovered article described magnetic remote navigation and a computer-controlled catheter drive used in some labs, along with electroanatomic display. Those systems and techniques change over time.',
          'This page does not claim that a particular brand or “new era” technology is used for every patient at this practice. Ask the office what is used if a procedure is planned.',
        ],
      },
      {
        heading: 'What patients can generally expect to hear',
        paragraphs: [
          'If mapping is part of an EP study or ablation, the team will still discuss consent, risks, sedation, and recovery for the overall procedure. Mapping adds information; it is not a separate overnight stay by itself.',
          'Results vary. Mapping does not guarantee a successful ablation.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call if you were referred for an ablation or EP study that may include 3-D mapping. Confirm with Cardiac Rhythm Specialists whether this evaluation is available for your situation.',
        ],
      },
      {
        heading: 'Related procedures',
        paragraphs: [
          'See electrophysiology study, cardiac ablation, SVT ablation, and VT ablation for broader context.',
        ],
      },
    ],
    related: [
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
      { to: '/treatments/cardiac-ablation', label: 'Cardiac ablation' },
      { to: '/treatments/svt-ablation', label: 'SVT ablation' },
      { to: '/treatments/vt-ablation', label: 'VT ablation' },
    ],
  },
  cardioversion: {
    slug: 'cardioversion',
    kind: 'treatment',
    shortTitle: 'Cardioversion',
    h1: 'Cardioversion in Reseda, CA',
    eyebrow: 'Heart rhythm treatment topic',
    intro:
      'Cardioversion is a brief procedure in which a controlled electrical shock is delivered to the heart to convert an abnormal rhythm back toward a normal rhythm. Sometimes medications are used instead of, or in addition to, a shock. A physician decides whether cardioversion is appropriate.',
    sections: [
      {
        heading: 'What cardioversion is',
        paragraphs: [
          'Recovered Treatments education defined cardioversion as delivering a controlled electric shock to convert an abnormal heart rhythm back to a normal rhythm. In emergency settings, the shock may be delivered through external pads. Planned cardioversion is a scheduled procedure with anesthesia or sedation as directed by the team.',
          'Sometimes drugs are used to achieve cardioversion. That choice is individualized.',
        ],
      },
      {
        heading: 'How this differs from an ICD or emergency defibrillation',
        paragraphs: [
          'An implanted defibrillator can deliver shocks automatically if it detects a dangerous ventricular rhythm. Emergency defibrillation is used for cardiac arrest. Planned cardioversion is typically discussed for certain atrial arrhythmias, such as atrial fibrillation or atrial flutter, when a physician wants to try to restore a more organized rhythm.',
          'This page does not schedule procedures.',
        ],
      },
      {
        heading: 'Why it may be discussed',
        paragraphs: [
          'If a rapid or irregular atrial rhythm is causing symptoms or other medical concern, a physician may discuss rhythm control. Cardioversion is one option along with medications and, for some patients, ablation.',
          'Stroke-prevention medicines, when they are part of AFib or flutter care, remain a separate decision and are not stopped because of this page.',
        ],
      },
      {
        heading: 'What patients can expect to discuss',
        paragraphs: [
          'If cardioversion is planned, the team should explain fasting, medications (including blood thinners), anesthesia, and the chance the abnormal rhythm could return. Prep instructions must come from the treating physician.',
          'Success is not guaranteed. Repeat cardioversion is sometimes considered.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you were referred to discuss cardioversion. Call 911 for chest pain, fainting, or stroke symptoms.',
        ],
      },
      {
        heading: 'Related topics',
        paragraphs: [
          'Atrial fibrillation, atrial flutter, and cardiac ablation pages provide additional educational context.',
        ],
      },
    ],
    related: [
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/atrial-flutter', label: 'Atrial flutter' },
      { to: '/treatments/afib-ablation', label: 'AFib ablation' },
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD information' },
    ],
  },
}

export const CONDITION_LIST = Object.values(CONDITIONS)
export const TREATMENT_LIST = Object.values(TREATMENTS)
