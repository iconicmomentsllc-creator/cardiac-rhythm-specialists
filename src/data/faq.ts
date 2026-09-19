import { practice } from './practice'

export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is a cardiac electrophysiologist?',
    answer: `A cardiac electrophysiologist is a cardiologist with additional training focused on the heart’s electrical system and heart rhythm disorders. Patients sometimes call this a heart rhythm specialist. ${practice.physician} provides cardiology and cardiac electrophysiology care at ${practice.brandName} in Reseda.`,
  },
  {
    question: 'What conditions does a heart rhythm specialist evaluate?',
    answer:
      'A heart rhythm specialist may evaluate symptoms such as palpitations, an irregular heartbeat, a pulse that seems too fast or too slow, lightheadedness, or fainting that may be related to the heart’s rhythm. Named rhythm disorders such as atrial fibrillation may also be evaluated after referral or testing. The right evaluation depends on the individual.',
  },
  {
    question: 'What is atrial fibrillation?',
    answer:
      'Atrial fibrillation, often called AFib, is a common heart rhythm disorder in which the upper chambers of the heart beat in an irregular way. Some people notice palpitations, fatigue, or shortness of breath; others learn about AFib from a test. Treatment, if recommended, varies based on the individual.',
  },
  {
    question: 'What is cardiac ablation?',
    answer:
      'Cardiac ablation is a procedure that may be used for some heart rhythm disorders. During ablation, a physician may use catheters to locate and treat small areas of heart tissue that can contribute to an abnormal rhythm. Whether ablation is appropriate depends on the patient, the rhythm diagnosis, and a physician’s evaluation.',
  },
  {
    question: 'When might a pacemaker be used?',
    answer:
      'A pacemaker is a small implanted device that may be recommended when the heart’s electrical system is too slow or pauses in a way that causes symptoms or medical concern. A physician determines whether a pacemaker is appropriate. Our office also provides educational information about pacemakers and cardiac device care.',
  },
  {
    question: 'Where is the office located?',
    answer: `${practice.brandName} is located at ${practice.fullAddress}. Get directions from the contact page or call ${practice.phoneDisplay}.`,
  },
  {
    question: 'How do I schedule an appointment?',
    answer: `Please call the office at ${practice.phoneDisplay} during weekday hours (${practice.weekdayHours}). Staff can help with scheduling and insurance information. Please confirm your coverage and benefits with your insurer. This website is not a patient portal and cannot complete scheduling online.`,
  },
  {
    question: 'Does the office accept my insurance?',
    answer: `Insurance participation varies by plan. Please contact our office at ${practice.phoneDisplay} or your insurance carrier to confirm current coverage and benefits before scheduling.`,
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'It is often helpful to bring a photo ID, your insurance card, a current medication list, and any relevant medical records or test results you have. If another physician referred you, bring referral information if you have it. Call the office if you are unsure what to bring.',
  },
  {
    question: 'How does the human heart work?',
    answer:
      'The heart is a double pump. The right side receives blood that is low in oxygen from the veins and pumps it through the pulmonary artery to the lungs, where it is re-oxygenated. The left side receives oxygen-rich blood from the lungs and pumps it through the aorta to the body. As blood circulates, it delivers oxygen and nutrients through the arteries and picks up carbon dioxide. Veins return de-oxygenated blood to the right side, and the cycle begins again.',
  },
  {
    question: 'How do the heart’s valves work?',
    answer:
      'The heart has four valves that function like one-way doors so blood flows in one direction. The valves open to let blood flow out, then close to keep blood from returning.',
  },
  {
    question: 'What is sudden cardiac arrest, and who may be at risk?',
    answer:
      'Sudden cardiac arrest (SCA) occurs when the heart abruptly stops beating and circulation stops. Recovered education noted that people who have survived a previous heart attack or who have been diagnosed with some form of heart disease may be at risk. Risk is individualized. If someone collapses, call 911.',
  },
  {
    question: 'What are symptoms of sudden cardiac arrest?',
    answer:
      'Recovered education listed sudden collapse, loss of consciousness, abnormal breathing, inability to find a pulse, and loss of blood pressure. SCA can also occur without warning. These are emergency signs — call 911.',
  },
  {
    question: 'How is sudden cardiac arrest treated?',
    answer:
      'Immediate treatment is cardiopulmonary resuscitation (CPR) and an automated external defibrillator when one is available. People recovering from SCA, or who a physician believes may be at risk, may later discuss an implantable cardioverter defibrillator (ICD). Office visits are not the response to collapse.',
  },
  {
    question: 'What is ejection fraction?',
    answer:
      'Ejection fraction (EF) refers to the amount of blood pumped out of the heart with each beat. It is an important measure of how the heart muscle is squeezing. An echocardiogram is commonly used to estimate EF. A physician may discuss rhythm risk and other options when EF is reduced. Do not interpret a number from a report on your own.',
  },
  {
    question: 'What is the difference between a pacemaker and an ICD?',
    answer:
      'A pacemaker can speed up a heart rate that is too slow. An implantable cardioverter defibrillator (ICD) can treat certain dangerously fast ventricular rhythms, including with pacing or a shock. Many ICDs also contain a full-featured pacemaker.',
  },
  {
    question: 'How does a physician adjust ICD settings after implant?',
    answer:
      'A clinic computer called a programmer lets the physician review how the ICD is performing and change its settings. A telemetry wand is often placed on the chest over the device so the programmer and the ICD can communicate.',
  },
  {
    question: 'How effective are ICDs at treating sudden cardiac arrest?',
    answer:
      'An ICD is designed to monitor the heart and, if a life-threatening ventricular arrhythmia is detected, may deliver pacing or a shock to try to restore a safer rhythm. How a person does after a shock or an arrest varies. This site does not quote success percentages. Ask your physician what an ICD can and cannot do in your situation.',
  },
  {
    question: 'How large is a typical pacemaker?',
    answer:
      'Recovered education described a typical pacemaker as very small — often less than 2 inches wide and about a quarter inch thick. Device size varies by model. Your physician can show you the type being discussed.',
  },
  {
    question: 'Can people hear or feel a pacemaker ticking?',
    answer:
      'After a pacemaker is implanted, you will probably be aware of it for a while. That awareness usually lessens with time. The pacemaker does not make sounds that other people can hear.',
  },
  {
    question: 'Can pacemaker patients stay active with jogging, tennis, or skiing?',
    answer:
      'Many people return to an active life after a pacemaker, but you should check with your physician before resuming strenuous sports. Energy levels sometimes improve after pacing if a slow rate had been limiting activity. What is safe depends on the individual and on healing after implant.',
  },
  {
    question: 'Do pacemakers limit sexual activity, and what about other medications?',
    answer:
      `After the hospital stay and a short recovery, recovered education stated that pacemakers themselves do not have adverse effects on patients’ sex lives, and that activity limited by a very slow rate may improve after implant. Ask your physician about any medication — including medicines sometimes used for erectile dysfunction — to be sure it is appropriate and to review interactions with cardiac drugs. Call the office at ${practice.phoneDisplay} if you need to ask about medications.`,
  },
]
