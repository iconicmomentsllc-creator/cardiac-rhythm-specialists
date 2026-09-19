import type { MedicalPageContent } from './medicalPages'

export type TestingPageContent = Omit<MedicalPageContent, 'kind'> & {
  kind: 'test'
}

export const TESTS: Record<string, TestingPageContent> = {
  'holter-monitoring': {
    slug: 'holter-monitoring',
    kind: 'test',
    shortTitle: 'Holter Monitor',
    h1: '24-Hour Holter Monitoring in Reseda, CA',
    eyebrow: 'Outpatient ECG testing',
    intro:
      'A Holter monitor is a small recorder worn during usual daily activity so a physician can review the heart’s rhythm over a longer period than a standard EKG. It is also called ambulatory electrocardiography.',
    images: [
      {
        src: '/education/holter-monitoring.jpg',
        alt: 'Example of a wearable Holter monitor with chest electrodes',
        width: 290,
        height: 250,
      },
    ],
    sections: [
      {
        heading: 'What a Holter monitor is',
        paragraphs: [
          'A Holter monitor continuously records the heart’s rhythms. Recovered education described a battery-operated recorder worn for 24 hours, and sometimes 24 to 48 hours, while the patient performs usual daily activities.',
          'Electrodes (small conducting patches) are placed on the chest and attached to the recorder, which is carried in a pocket or a pouch at the waist or neck. Recovered Tests education mentioned three to seven electrodes.',
        ],
      },
      {
        heading: 'How the test is performed',
        paragraphs: [
          'While you wear the monitor, it records the heart’s electrical activity. You keep a diary of activities such as sleeping or eating, and of symptoms, so the physician can match events with the recording. Accurate notes are important.',
          'After the wearing period, you return the monitor to the office. The physician reviews the record for irregular rhythms or other changes.',
        ],
      },
      {
        heading: 'How to prepare, and how it feels',
        paragraphs: [
          'There is no special diet preparation. Shower or bathe before the monitor is applied; you will not be able to shower or bathe while wearing it. Tell the staff if you are allergic to tape or adhesives. Some people need a small area of chest hair shaved so electrodes will stick.',
          'The test is painless. Keeping the monitor close to the body can make sleeping uncomfortable for some people. Continue normal activities unless you are told otherwise. You will be shown how to replace an electrode if one becomes loose.',
        ],
      },
      {
        heading: 'Why the test may be ordered',
        paragraphs: [
          'Holter monitoring is used to see how the heart responds to normal activity. Recovered pages listed uses when starting a new heart medicine, after a heart attack, and to diagnose heart rhythm problems.',
          'Conditions mentioned as possible diagnostic questions included atrial fibrillation or flutter, multifocal atrial tachycardia, paroxysmal SVT, palpitations, and reasons for fainting. A Holter can also show every beat over the recording period, including changes that may suggest ischemia in some patients — a physician interprets those findings.',
        ],
      },
      {
        heading: 'Special considerations from recovered education',
        paragraphs: [
          'Electrodes must stay firmly attached. Do not let the monitor get wet. Recovered Holter instructions also said to avoid magnets, metal detectors, electric blankets, and high-voltage areas, and to limit small electrical devices such as electric toothbrushes or razors while wearing the device.',
          'These precautions are historical patient instructions and should be confirmed with the office for the specific monitor you are given.',
        ],
      },
      {
        heading: 'What results can mean',
        paragraphs: [
          'Normal variations in heart rate occur with activity. A physician looks for significant rhythm changes. Abnormal results may include various arrhythmias. Changes in the usual wave pattern may mean the heart is not getting enough oxygen — only a physician should interpret that.',
          'A Holter may miss a problem that occurs less often than every day or two. An event monitor may be discussed when symptoms are less frequent.',
        ],
      },
    ],
    related: [
      { to: '/testing/event-monitoring', label: 'Event monitoring' },
      { to: '/testing/outpatient-ecg-monitoring', label: 'Outpatient ECG monitoring' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/conditions/heart-palpitations', label: 'Heart palpitations' },
    ],
  },
  'event-monitoring': {
    slug: 'event-monitoring',
    kind: 'test',
    shortTitle: 'Event Monitor',
    h1: '30-Day Event Monitoring in Reseda, CA',
    eyebrow: 'Outpatient ECG testing',
    intro:
      'An event recorder is a type of ambulatory ECG used when symptoms come and go and may not appear during a 24-hour Holter. It can be worn for weeks until the symptom of interest occurs. The office can explain which monitor, if any, is appropriate.',
    sections: [
      {
        heading: 'How event recorders differ from Holter monitors',
        paragraphs: [
          'Ambulatory monitoring looks for transient cardiac problems that are not apparent on a standard EKG — especially intermittent arrhythmias and, in some Holter analyses, silent ischemia.',
          'A Holter records a continuous tracing for 24 or 48 hours. Recovered event-monitor education described a looping recorder that stores a short recent segment of rhythm — about 30 seconds in that older description. When you have the symptom, you press a button to freeze that recording.',
        ],
      },
      {
        heading: 'How long it can be used',
        paragraphs: [
          'A major advantage described in recovered education is that event recorders can be used for 30 to 60 days, until the transient symptom occurs. If the symptom typically lasts more than a minute or two, electrodes may not need to stay on all the time; they can be attached when needed because applying them takes less than a minute.',
          'Your specific device and wearing instructions come from the office. Newer monitors may work differently than the tape-based systems described on the older site.',
        ],
      },
      {
        heading: 'What information can be gained',
        paragraphs: [
          'Event monitors are useful for correlating a patient’s heart rhythm with symptoms. If symptoms are caused by a transient arrhythmia, an event recorder is often a practical way to capture it.',
          'A Holter shows every beat during a short continuous window and can be harder to match to sporadic symptoms. Recovered text also noted that event recorders are not useful for diagnosing silent ischemia, because those episodes have no symptom to trigger a transmission.',
        ],
      },
      {
        heading: 'When event monitoring may be chosen',
        paragraphs: [
          'A Holter often fails to provide a diagnosis if the condition occurs less often than every day or every other day. Continuous 24- to 48-hour recording may miss an arrhythmia that occurs about once a month.',
          'Your physician chooses the monitor based on how often symptoms occur and what question needs to be answered.',
        ],
      },
      {
        heading: 'Older telephone transmission',
        paragraphs: [
          'The recovered 30-day event page described transmitting a frozen recording by telephone to an interpreting center. That trans-telephonic workflow is an older method and may not match how current monitors send data.',
          'Ask the office how your assigned monitor should be returned or uploaded. Do not assume a phone-line transmission is still used.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call Cardiac Rhythm Specialists if you were asked to wear an event monitor or have infrequent palpitations or fainting that have not been captured on a Holter. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/testing/outpatient-ecg-monitoring', label: 'Outpatient ECG monitoring' },
      { to: '/treatments/loop-recorder', label: 'Loop recorder' },
      { to: '/conditions/syncope', label: 'Syncope' },
    ],
  },
  electrocardiogram: {
    slug: 'electrocardiogram',
    kind: 'test',
    shortTitle: 'EKG / ECG',
    h1: 'Electrocardiogram (EKG or ECG) in Reseda, CA',
    eyebrow: 'Heart rhythm testing',
    intro:
      'An electrocardiogram is a brief test that records the electrical activity of the heart at rest. It is often the first rhythm test a physician orders. It cannot capture every intermittent arrhythmia by itself.',
    images: [
      {
        src: '/education/display/electrocardiogram.jpg',
        alt: 'Educational illustration of electrocardiogram electrodes and a rhythm tracing',
        width: 280,
        height: 228,
      },
    ],
    sections: [
      {
        heading: 'What an EKG records',
        paragraphs: [
          'The heart’s electrical impulses are shown as a line tracing. By examining the sequence of waves, physicians can diagnose many arrhythmias that are present during the recording.',
          'Recovered Tests education described the tracing as a wavy line on paper. Today the same information is usually displayed digitally. The idea is unchanged: a short snapshot of the electrical pattern.',
        ],
      },
      {
        heading: 'Why a brief test has limits',
        paragraphs: [
          'Arrhythmias are often unpredictable and intermittent. An EKG records only the events that occur while the test is running. That is why a physician may later recommend a Holter monitor, event recorder, or EP study.',
          'A normal EKG does not prove that palpitations or fainting are unrelated to rhythm.',
        ],
      },
      {
        heading: 'How the test is done',
        paragraphs: [
          'Electrodes are placed on the chest and often the limbs. The test is painless and typically takes only a few minutes. You lie still while the tracing is recorded.',
          'No special preparation is usually required unless you are told otherwise.',
        ],
      },
      {
        heading: 'What physicians look for',
        paragraphs: [
          'The tracing can show a regular sinus rhythm, extra beats, atrial fibrillation or flutter, heart block, a long QT interval, or patterns that suggest a prior heart attack, among other findings.',
          'Only a trained clinician should interpret your EKG. This website cannot read a tracing.',
        ],
      },
      {
        heading: 'Related testing',
        paragraphs: [
          'If more time is needed, outpatient ECG monitoring may be the next step. An echocardiogram looks at structure and pumping, not the same electrical snapshot.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call if you were asked to come in for an EKG or have questions about a result you were given. Call 911 for chest pain, fainting, or other emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/testing/event-monitoring', label: 'Event monitoring' },
      { to: '/education/electrical-system', label: 'The heart’s electrical system' },
      { to: '/conditions/arrhythmias', label: 'Arrhythmias' },
    ],
  },
  echocardiogram: {
    slug: 'echocardiogram',
    kind: 'test',
    shortTitle: 'Echocardiogram',
    h1: 'Echocardiogram in Reseda, CA',
    eyebrow: 'Cardiac ultrasound testing',
    intro:
      'An echocardiogram uses ultrasound to look at heart muscle motion, chamber size, valves, and blood flow. It is a common way to estimate ejection fraction. Recovered education stated there is typically no preparation for a standard resting echo.',
    images: [
      {
        src: '/education/echocardiogram.jpg',
        alt: 'Educational illustration of an echocardiogram ultrasound examination',
        width: 195,
        height: 276,
      },
    ],
    sections: [
      {
        heading: 'What a resting echocardiogram shows',
        paragraphs: [
          'Ultrasound images show movement of blood in each chamber and as it passes through the valves. Heart walls and chambers are measured for size. The exam looks at muscle motion and circulation.',
          'Recovered Tests education estimated about 30 minutes for a standard echocardiogram and stated no preparation is necessary.',
        ],
      },
      {
        heading: 'Why it may be ordered in rhythm care',
        paragraphs: [
          'Pumping function, valve disease, and chamber size can influence arrhythmia symptoms and treatment discussions. Ejection fraction — the portion of blood pumped out with each beat — is often estimated from an echo.',
          'An echo does not replace an EKG. The two tests answer different questions.',
        ],
      },
      {
        heading: 'Stress echocardiogram',
        paragraphs: [
          'A stress echo compares resting and exercising ultrasound images of the heart and simultaneous EKG recordings. Recovered education said the exam takes about one hour and can be done on a treadmill or a bicycle.',
          'You change into a gown, are connected to an EKG monitor, have resting EKGs and a resting ultrasound, then exercise — recovered text said about 6 to 10 minutes — until peak exercise, then another ultrasound is obtained. Images and EKGs are compared.',
        ],
      },
      {
        heading: 'Stress-echo preparation from recovered education',
        paragraphs: [
          'Wear tennis shoes or comfortable walking shoes. Recovered instructions asked patients not to eat for one hour before the exam, and said medications can be taken as usual unless you are told otherwise.',
          'Confirm prep with the office. Fasting and medication instructions can differ by protocol and are flagged for physician approval.',
        ],
      },
      {
        heading: 'What an echo cannot do',
        paragraphs: [
          'A resting echo does not continuously record rhythm the way a Holter does. Intra-cardiac echo used during some procedures is a different, hospital-based technique and is not the same as an office ultrasound.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call if you were scheduled for an echocardiogram in Reseda or have questions about preparation. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/education/ejection-fraction', label: 'Ejection fraction' },
      { to: '/conditions/heart-failure', label: 'Heart failure and rhythm care' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/education/the-normal-heart', label: 'The normal heart' },
    ],
  },
  'tilt-table': {
    slug: 'tilt-table',
    kind: 'test',
    shortTitle: 'Tilt Table',
    h1: 'Tilt-Table Study in Reseda, CA',
    eyebrow: 'Syncope testing',
    intro:
      'A tilt-table study helps show how the body responds to a change from lying flat to a near-upright position. It is used for some patients who have had syncope (fainting). The physician decides whether this test is appropriate.',
    images: [
      {
        src: '/education/tilt-table.jpg',
        alt: 'Educational illustration of a patient on a tilt table with monitoring',
        width: 364,
        height: 204,
      },
    ],
    sections: [
      {
        heading: 'What the test is looking for',
        paragraphs: [
          'The patient lies on a table that can be moved to a nearly upright position while heart rate, blood pressure, and symptoms are monitored. An electrocardiogram is recorded. The goal is to see whether an upright position reproduces fainting or related symptoms and how the pulse and blood pressure respond.',
        ],
      },
      {
        heading: 'How the test is performed',
        paragraphs: [
          'The patient is secured on the table lying flat, then the table is tilted to an almost upright position. Recovered Tests education stated that patients are often suspended at sixty to eighty degrees and are instructed not to move. Symptoms, blood pressure, pulse, ECG, and oxygen saturation are recorded.',
          'A recovered tilt-table instruction page described an IV lock, then 70 degrees for 45 minutes without shifting weight. The test ends if the patient faints or has significant symptoms, or after a set time — recovered text said that period usually ranges from 20 to 45 minutes.',
        ],
      },
      {
        heading: 'Preparation notes from recovered education',
        paragraphs: [
          'Patients may be asked to fast the day of or the day before the test. One recovered instruction set said nothing by mouth after midnight for a morning procedure, and a clear-liquid breakfast (tea, broth, gelatin, apple juice) for an afternoon procedure.',
          'That same sheet said to wear comfortable shoes, take medications as usual, and expected 45 minutes to one hour. It also stated a ride home is not required. Confirm every item with the office — prep and ride rules can change and are flagged for physician approval.',
        ],
      },
      {
        heading: 'What is watched afterward',
        paragraphs: [
          'Recovered post-procedure notes listed continued watching of blood pressure, heart rate, and EKG, and close observation of consciousness and arrhythmia.',
          'If you faint during the test, the table is returned to flat and the team supports you as directed by the protocol.',
        ],
      },
      {
        heading: 'How results may be used',
        paragraphs: [
          'Findings may support a reflex (non-heart-block) cause of fainting or prompt more rhythm evaluation. A tilt-table study does not replace Holter monitoring, an EP study, or a loop recorder when those are the right tools.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call if you were referred for a tilt-table study after fainting. Call 911 if you have a new fainting spell with chest pain or injury.',
        ],
      },
    ],
    related: [
      { to: '/conditions/syncope', label: 'Syncope' },
      { to: '/treatments/loop-recorder', label: 'Loop recorder' },
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/treatments/electrophysiology-study', label: 'EP study' },
    ],
  },
  'device-follow-up': {
    slug: 'device-follow-up',
    kind: 'test',
    shortTitle: 'Device Follow-up',
    h1: 'Pacemaker and ICD Follow-up in Reseda, CA',
    eyebrow: 'Cardiac device testing',
    intro:
      'After a pacemaker, ICD, or CRT device is implanted, scheduled follow-up is part of ongoing care. Checks review battery status, leads, and recorded rhythms. Some follow-up can occur in the office; some devices also support remote monitoring.',
    sections: [
      {
        heading: 'Why follow-up matters',
        paragraphs: [
          'Devices have become more programmable and store more information than early fixed-rate pacemakers. ICDs and cardiac resynchronization therapy add further complexity. Recovered education emphasized that follow-up visits remain an important part of care after implant.',
          'Device monitoring tracks the activity of the heart and of the ICD or pacemaker. Information can be reviewed in the office or, for some systems, from another location using patient monitors.',
        ],
      },
      {
        heading: 'What a check typically includes',
        paragraphs: [
          'A clinician or device specialist interrogates the device, reviews battery and lead performance, and looks at stored rhythm information. Settings may be adjusted with a programmer — a clinic computer that communicates with the device, often via a wand placed over the implant.',
          'Do not use the website for alerts, shocks, or urgent symptoms. Call the office or 911 as appropriate.',
        ],
      },
      {
        heading: 'Remote and home monitoring',
        paragraphs: [
          'Recovered device-monitoring education described remote devices that transmit ICD data for physician review, including older systems that used a phone line from home. Internet follow-up from home was also mentioned for some ICD patients, depending on the manufacturer.',
          'Ask the office which method, if any, applies to your device. Do not assume a landline transmission is still used.',
        ],
      },
      {
        heading: 'Trans-telephonic monitoring (older workflow)',
        paragraphs: [
          'Recovered ICD-check education described teaching some pacemaker patients to do a battery check over the telephone (TTM, or trans-telephonic monitoring), on a schedule such as every other month at first and then monthly. That telephone-based workflow is an older method and may not be the current process for every patient.',
          'This section is included for historical recovered content, not as a standalone current home-monitoring program. Confirm today’s instructions with the clinic.',
        ],
      },
      {
        heading: 'How this relates to CRT and other devices',
        paragraphs: [
          'People with biventricular pacemakers or CRT-D devices also need scheduled checks. The same office follow-up principles apply: battery, leads, and stored events.',
          'Replacement is planned when the generator battery runs low. See the device-replacement page for educational background.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call Cardiac Rhythm Specialists in Reseda to schedule device follow-up or ask how your monitor should be used. Call 911 for collapse or emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/testing/pacemaker-checks', label: 'Pacemaker checks' },
      { to: '/testing/icd-checks', label: 'ICD checks' },
      { to: '/treatments/device-replacement', label: 'Device replacement' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
    ],
  },
  'pacemaker-checks': {
    slug: 'pacemaker-checks',
    kind: 'test',
    shortTitle: 'Pacemaker Checks',
    h1: 'Pacemaker Checks in Reseda, CA',
    eyebrow: 'Cardiac device testing',
    intro:
      'Pacemaker checks are done at implant and at regular intervals afterward. A check reviews battery status, lead performance, and information the device has stored about your rhythm. Your physician sets the schedule.',
    sections: [
      {
        heading: 'Why pacemakers are checked',
        paragraphs: [
          'Pacemakers are implanted when the heart’s rhythm is not the usual sinus pattern produced by communication between the SA node and the AV node. Checks confirm that the implant is performing as intended.',
          'Most pacemakers also store information about the heart’s rhythm when it is not being paced.',
        ],
      },
      {
        heading: 'What happens during a check',
        paragraphs: [
          'Recovered education described a cardiac technician gathering information about the battery and general performance. A magnet may be placed over the pacemaker, which changes the pacing rate so a computer can analyze the system and the device can be reprogrammed to suit the patient’s needs.',
          'Clinic programmers used today may communicate without a magnet in some cases. Your team will explain what they are doing.',
        ],
      },
      {
        heading: 'How often visits may occur',
        paragraphs: [
          'Recovered pacemaker-check text said intervals can be between 3 months and 12 months depending on the type of pacemaker. A shared follow-up page described a first visit 7 to 10 days after implant (incision check and a full device and lead evaluation), a six-week visit when new leads were placed, and then routine clinic visits — listed there as every six months for pacemaker-only patients.',
          'Schedules vary. Follow the plan you were given.',
        ],
      },
      {
        heading: 'Battery life and replacement',
        paragraphs: [
          'Recovered education stated that most pacemaker batteries last between 5 and 10 years, and that the technician or cardiologist advises when a new battery (generator) is required. A battery change typically replaces the pacemaker box and leaves the leads in the heart.',
          'Longevity varies. Do not rely on a website range instead of clinic measurements.',
        ],
      },
      {
        heading: 'Older telephone battery checks',
        paragraphs: [
          'An older recovered follow-up page described teaching pacemaker patients to perform trans-telephonic battery checks from home on a monthly or every-other-month schedule. That telephone method may be outdated for many current devices.',
          'Ask the office whether you should use a home transmitter, a smartphone-based system, or in-office visits only.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call the Reseda office to schedule a pacemaker check or if you have a device alert. Call 911 for fainting or emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/testing/device-follow-up', label: 'Device follow-up' },
      { to: '/treatments/pacemaker', label: 'Pacemaker care' },
      { to: '/treatments/device-replacement', label: 'Device replacement' },
      { to: '/testing/icd-checks', label: 'ICD checks' },
    ],
  },
  'icd-checks': {
    slug: 'icd-checks',
    kind: 'test',
    shortTitle: 'ICD Checks',
    h1: 'ICD Checks in Reseda, CA',
    eyebrow: 'Cardiac device testing',
    intro:
      'Follow-up visits are an important part of care after an ICD is implanted. Checks review the generator, leads, and stored events, including treated fast rhythms. Contact the office about defibrillator device care — not the website for shocks.',
    sections: [
      {
        heading: 'Early visits after implant',
        paragraphs: [
          'Recovered ICD-check education described a first visit 7 to 10 days after implant, including evaluation of the incision, bandage removal, and a full check of the defibrillator and lead system.',
          'A six-week visit was described for patients who received new leads, to confirm lead placement and set lead outputs to longer-term values. Your surgeon or electrophysiologist may use a different timetable.',
        ],
      },
      {
        heading: 'Routine clinic schedule from recovered education',
        paragraphs: [
          'The same recovered page listed routine clinic visits every three months for people with an ICD (and every six months for pacemaker-only patients). Actual schedules depend on the device, remote monitoring, and clinical stability.',
          'Keep the appointments you are given even if you feel well.',
        ],
      },
      {
        heading: 'What the clinician reviews',
        paragraphs: [
          'A programmer allows the physician or device specialist to evaluate performance and change settings. Stored VT or VF episodes, pacing, and battery status are typical topics.',
          'If you received a shock, say so at the visit — and follow urgent instructions you already have.',
        ],
      },
      {
        heading: 'Home and internet follow-up',
        paragraphs: [
          'Recovered education said patients with an ICD may have the option of internet follow-up from home, depending on the manufacturer. Older descriptions also included phone-line transmission of device data.',
          'Trans-telephonic checks described for pacemakers are an older workflow and should not be assumed to apply to your ICD. Ask the office for current home-monitoring steps.',
        ],
      },
      {
        heading: 'When a shock is not a “check”',
        paragraphs: [
          'A shock or a cluster of therapies is a clinical event, not a routine interrogation. Call the office or emergency services as you were instructed. Do not wait for the next scheduled check if you feel unwell.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call Cardiac Rhythm Specialists to schedule an ICD check or ask about remote monitoring. Call 911 for collapse or ongoing severe symptoms after a shock.',
        ],
      },
    ],
    related: [
      { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICD care' },
      { to: '/testing/device-follow-up', label: 'Device follow-up' },
      { to: '/treatments/icd-implantation', label: 'ICD implantation' },
      { to: '/treatments/device-replacement', label: 'Device replacement' },
    ],
  },
  'outpatient-ecg-monitoring': {
    slug: 'outpatient-ecg-monitoring',
    kind: 'test',
    shortTitle: 'Outpatient ECG',
    h1: 'Outpatient ECG Monitoring in Reseda, CA',
    eyebrow: 'Heart rhythm testing',
    intro:
      'Outpatient ECG monitoring means recording the heart’s electrical activity away from a single office EKG — typically with a Holter monitor or a longer event recorder. The recovered practice site grouped 24-hour Holter monitoring and 30-day event monitoring under this heading.',
    sections: [
      {
        heading: 'What “outpatient ECG” meant on the recovered site',
        paragraphs: [
          'The older Cardiac Rhythm Specialists patient pages listed 24-hour Holter monitoring and 30-day event monitoring as the two outpatient ECG options. Both record ECG signals while you are not lying still in an exam room.',
          'The purpose is to look for transient problems — rhythms or, on some Holter reviews, ischemic changes — that a brief EKG can miss.',
        ],
      },
      {
        heading: 'Holter monitoring in brief',
        paragraphs: [
          'A Holter uses chest electrodes attached to a small recorder worn for a day or two during usual activity. You keep a symptom and activity diary. The entire period is recorded and then analyzed.',
          'It is a good choice when symptoms or the clinical question are likely to appear within that short window.',
        ],
      },
      {
        heading: 'Event monitoring in brief',
        paragraphs: [
          'An event recorder is used longer, often up to a month or more in recovered descriptions, and is triggered when you have symptoms (or, on some modern devices, when the recorder detects a rhythm). It is better suited to infrequent spells.',
          'Older recovered instructions described freezing a short loop and sending it by telephone. Confirm how today’s assigned monitor works.',
        ],
      },
      {
        heading: 'Choosing a monitor',
        paragraphs: [
          'If the problem occurs almost daily, a Holter may be enough. If it occurs every few weeks, an event monitor or, in some unexplained fainting, a loop recorder may be discussed.',
          'Your physician chooses the tool. This page does not order a test.',
        ],
      },
      {
        heading: 'What this page is not',
        paragraphs: [
          'A research abstract that appeared on the recovered Outpatient ECG page described ECG use during short outpatient surgery. That study is not used here as patient-care guidance for Holter or event monitoring.',
          'Intra-operative monitoring in a surgery center is a different setting from wearing a monitor at home in Reseda or elsewhere in the San Fernando Valley.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call to ask about Holter or event monitoring if you have intermittent palpitations, an irregular pulse, or unexplained fainting. Call 911 for emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/testing/holter-monitoring', label: 'Holter monitoring' },
      { to: '/testing/event-monitoring', label: 'Event monitoring' },
      { to: '/testing/electrocardiogram', label: 'Electrocardiogram' },
      { to: '/treatments/loop-recorder', label: 'Loop recorder' },
    ],
  },
}

export const TEST_LIST = Object.values(TESTS)
