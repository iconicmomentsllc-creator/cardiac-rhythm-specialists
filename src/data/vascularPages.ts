import type { MedicalPageContent } from './medicalPages'

export const VASCULAR_PAGES: Record<string, MedicalPageContent> = {
  'peripheral-artery-disease': {
    slug: 'peripheral-artery-disease',
    kind: 'condition',
    group: 'vascular',
    shortTitle: 'Peripheral Artery Disease',
    h1: 'Peripheral Artery Disease (PAD)',
    eyebrow: 'Vascular condition',
    intro:
      'Peripheral artery disease, often called PAD, is a condition in which arteries that carry blood to the legs or arms become narrowed. This page is for general education. It cannot diagnose PAD or explain your symptoms.',
    sections: [
      {
        heading: 'What PAD is',
        paragraphs: [
          'PAD involves the arteries outside the heart. In many people, the legs are the area of concern. When an artery is narrowed, the affected limb may receive less blood flow than it needs during activity.',
          'PAD is different from a heart rhythm disorder. A cardiovascular evaluation can look at circulation, heart rhythm, and related health factors when that is appropriate.',
        ],
      },
      {
        heading: 'How PAD relates to other vascular terms',
        paragraphs: [
          'People sometimes hear the term peripheral vascular disease (PVD). PVD is a broader phrase that can include arterial and venous problems. PAD refers more specifically to arterial disease, most often in the legs.',
          'Venous conditions such as varicose veins or deep vein thrombosis are not the same as PAD, even though they can also affect the legs.',
        ],
      },
      {
        heading: 'Why someone might be evaluated',
        paragraphs: [
          'A physician may discuss PAD when a person has activity-related leg discomfort, skin or pulse findings, or another reason to look at arterial blood flow. Some people have few symptoms and learn about a circulation concern after testing done for another reason.',
          'Leg pain, cramping, and wounds have many possible causes. Those symptoms are not a diagnosis of PAD.',
        ],
      },
      {
        heading: 'How evaluation may proceed',
        paragraphs: [
          'Evaluation, when recommended, may include a history, an exam, and circulation testing chosen by the physician. Heart rhythm and other cardiac questions may also be reviewed when they are relevant to the individual.',
          'This website cannot interpret pulses, ultrasound results, or wound findings.',
        ],
      },
      {
        heading: 'Care discussions are individualized',
        paragraphs: [
          'If PAD is diagnosed, next steps depend on the person. A physician may discuss risk-factor care, activity, medications, or referral for additional vascular care. This practice does not use this page to list procedures or promise a result.',
          'Do not start, stop, or change treatment based on this website.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the Reseda office if you have been referred for a cardiovascular evaluation or want to ask whether a visit is appropriate. Call 911 for sudden severe pain, a cold or pale limb, chest pain, trouble breathing, or other emergency symptoms.',
        ],
      },
    ],
    related: [
      { to: '/conditions/peripheral-vascular-disease', label: 'Peripheral vascular disease (PVD)' },
      { to: '/conditions/limb-ischemia', label: 'Limb ischemia' },
      { to: '/conditions/vascular-symptoms', label: 'Symptoms that may warrant a vascular evaluation' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'peripheral-vascular-disease': {
    slug: 'peripheral-vascular-disease',
    kind: 'condition',
    group: 'vascular',
    shortTitle: 'Peripheral Vascular Disease',
    h1: 'Peripheral Vascular Disease (PVD)',
    eyebrow: 'Vascular condition',
    intro:
      'Peripheral vascular disease, often called PVD, is a broad term for circulation problems in blood vessels outside the heart. It is not one single diagnosis. This page explains the term in patient-friendly language and is not a diagnosis of your condition.',
    sections: [
      {
        heading: 'What PVD can mean',
        paragraphs: [
          'PVD can be used to describe arterial disease, venous disease, or both, depending on who is speaking. Because the phrase is broad, it is important to ask which vessels a physician is referring to.',
          'Peripheral artery disease (PAD) is the name more often used when the concern is narrowed arteries, usually in the legs. Vein problems such as varicose veins or deep vein thrombosis are different conditions.',
        ],
      },
      {
        heading: 'Why the distinction matters',
        paragraphs: [
          'Arteries carry blood away from the heart. Veins return blood toward the heart. Problems in those systems can share some symptoms, such as leg discomfort, but they are not evaluated or managed in the same way.',
          'A cardiovascular evaluation can help sort whether arterial disease, venous disease, a heart rhythm issue, or another cause may be contributing. This page cannot make that determination.',
        ],
      },
      {
        heading: 'Related conditions on this website',
        paragraphs: [
          'For arterial disease of the limbs, see the PAD page. For enlarged surface veins, see varicose veins. For a clot in a deep vein, see deep vein thrombosis. For more advanced arterial compromise, see limb ischemia.',
          'A separate page explains symptoms that may warrant a vascular evaluation without treating those symptoms as a diagnosis.',
        ],
      },
      {
        heading: 'Outside reading about arterial disease',
        paragraphs: [
          'There is not a single widely used patient-education page titled only “PVD” that is distinct from PAD. The Learn more link on this page goes to MedlinePlus education about peripheral arterial disease, which is the arterial condition most often discussed alongside the PVD label.',
          'Venous education is linked from the varicose veins and DVT pages.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office if another physician used the term PVD or PAD and you have questions about evaluation in Reseda. Call 911 for emergency symptoms, including sudden chest pain, trouble breathing, or a suddenly cold, pale, or painful limb.',
        ],
      },
    ],
    related: [
      { to: '/conditions/peripheral-artery-disease', label: 'Peripheral artery disease (PAD)' },
      { to: '/conditions/varicose-veins', label: 'Varicose veins' },
      { to: '/conditions/deep-vein-thrombosis', label: 'Deep vein thrombosis (DVT)' },
      { to: '/conditions/vascular-symptoms', label: 'Symptoms that may warrant a vascular evaluation' },
    ],
  },
  'varicose-veins': {
    slug: 'varicose-veins',
    kind: 'condition',
    group: 'vascular',
    shortTitle: 'Varicose Veins',
    h1: 'Varicose Veins',
    eyebrow: 'Vascular condition',
    intro:
      'Varicose veins are enlarged, twisted veins that are often visible under the skin of the legs. This page is educational. Visible veins or leg aching are not a diagnosis by themselves, and this website cannot determine the cause of your symptoms.',
    sections: [
      {
        heading: 'What varicose veins are',
        paragraphs: [
          'Veins return blood toward the heart. When vein valves do not work as they should, blood can pool and the vein can enlarge. Varicose veins are a venous condition. They are not the same as PAD, which involves arteries.',
          'Some people also notice smaller surface veins. Those findings still need a physician’s assessment if they are new, painful, or changing.',
        ],
      },
      {
        heading: 'Symptoms are not a diagnosis',
        paragraphs: [
          'Heaviness, aching, swelling, itching, or skin changes in the legs can occur with venous problems and with many other conditions. This page does not conclude that those symptoms mean you have varicose veins or vein disease.',
          'A cardiovascular evaluation can help determine whether a venous condition may be contributing.',
        ],
      },
      {
        heading: 'How evaluation may proceed',
        paragraphs: [
          'A physician may review your history, examine the legs, and, when appropriate, recommend additional testing. Heart rhythm and other cardiac questions may also be relevant for some patients.',
          'Do not use photographs on the internet to self-diagnose vein disease.',
        ],
      },
      {
        heading: 'Care discussions vary',
        paragraphs: [
          'If a venous condition is diagnosed, options depend on the individual. This page does not list office procedures or promise cosmetic or medical results.',
          'Ask the physician what, if anything, is recommended for you.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call the office to ask about evaluation. Seek urgent or emergency care for sudden one-sided swelling, severe pain, chest pain, or trouble breathing, which can have causes that need prompt medical attention.',
        ],
      },
    ],
    related: [
      { to: '/conditions/deep-vein-thrombosis', label: 'Deep vein thrombosis (DVT)' },
      { to: '/conditions/peripheral-vascular-disease', label: 'Peripheral vascular disease (PVD)' },
      { to: '/conditions/vascular-symptoms', label: 'Symptoms that may warrant a vascular evaluation' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'deep-vein-thrombosis': {
    slug: 'deep-vein-thrombosis',
    kind: 'condition',
    group: 'vascular',
    shortTitle: 'Deep Vein Thrombosis',
    h1: 'Deep Vein Thrombosis (DVT)',
    eyebrow: 'Vascular condition',
    intro:
      'Deep vein thrombosis, or DVT, is a blood clot in a deep vein, often in the leg. This page is for general education. It cannot diagnose a clot or tell you whether your swelling or pain is caused by DVT.',
    sections: [
      {
        heading: 'What DVT is',
        paragraphs: [
          'A clot in a deep vein can interfere with blood returning toward the heart. DVT is a venous condition. It is not the same as PAD, which involves arteries.',
          'A piece of clot can sometimes travel to the lungs. That is a medical emergency. This website cannot determine whether that has happened.',
        ],
      },
      {
        heading: 'Symptoms are not a diagnosis',
        paragraphs: [
          'Swelling, warmth, redness, or pain in a leg can have many causes, including problems that are not a clot. Those symptoms do not prove DVT.',
          'A physician uses history, examination, and testing when DVT needs to be considered. Do not wait on a website if you are worried about a clot.',
        ],
      },
      {
        heading: 'Emergency warning',
        paragraphs: [
          'Call 911 or seek emergency care for sudden trouble breathing, chest pain, coughing up blood, fainting, or a suddenly swollen, painful leg if you are concerned you need urgent care.',
          'The office telephone is not the right first step for a suspected emergency.',
        ],
      },
      {
        heading: 'Evaluation and follow-up',
        paragraphs: [
          'If DVT has already been diagnosed, or if another physician asked for cardiovascular follow-up, our office can help you ask about a visit. Treatment of a clot, when needed, is individualized and is not directed by this website.',
          'Heart rhythm conditions such as atrial fibrillation can also relate to clot-risk discussions in some people. That is a separate topic and still requires physician judgment.',
        ],
      },
      {
        heading: 'When to contact the office',
        paragraphs: [
          'Call during weekday hours for non-emergency questions about evaluation or follow-up in Reseda. For emergencies, call 911.',
        ],
      },
    ],
    related: [
      { to: '/conditions/varicose-veins', label: 'Varicose veins' },
      { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation' },
      { to: '/conditions/vascular-symptoms', label: 'Symptoms that may warrant a vascular evaluation' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'limb-ischemia': {
    slug: 'limb-ischemia',
    kind: 'condition',
    group: 'vascular',
    shortTitle: 'Limb Ischemia',
    h1: 'Limb Ischemia and Chronic Limb-Threatening Ischemia',
    eyebrow: 'Vascular condition',
    intro:
      'Limb ischemia refers to reduced blood flow to an arm or, more often, a leg. Chronic limb-threatening ischemia, sometimes called CLTI, is a more advanced arterial problem. This page is educational and cannot diagnose ischemia or a wound.',
    sections: [
      {
        heading: 'How these terms are used',
        paragraphs: [
          'Ischemia means a tissue is not getting the blood flow it needs. In the legs, that concern is often related to arterial disease such as PAD.',
          'CLTI is a clinical term physicians may use when PAD is present together with rest pain, a wound that is not healing, or other signs of threatened limb tissue. Only a physician can decide whether that term applies.',
        ],
      },
      {
        heading: 'Wounds and pain are not a diagnosis',
        paragraphs: [
          'Non-healing sores, rest pain, color change, or a cold limb can have many causes. Those findings do not, by themselves, mean a person has CLTI or needs a particular procedure.',
          'They can still be a reason to seek prompt medical evaluation rather than waiting on online reading.',
        ],
      },
      {
        heading: 'Why timely evaluation matters',
        paragraphs: [
          'Reduced arterial blood flow can become urgent. A cardiovascular evaluation can help determine whether circulation, infection, nerve problems, or another issue may be contributing.',
          'This practice provides educational information and office evaluation. This page does not claim that every limb-circulation procedure is performed here, and it does not promise limb salvage or any other outcome.',
        ],
      },
      {
        heading: 'Additional reading',
        paragraphs: [
          'A dedicated patient-education page titled only “CLTI” was not used here because the strongest verified public pages describe PAD, the related arterial condition. The Learn more link goes to American Heart Association education about PAD.',
        ],
      },
      {
        heading: 'When to contact a physician',
        paragraphs: [
          'Call 911 for a suddenly cold, pale, or severely painful limb, chest pain, or trouble breathing. Call the office if you have been referred for evaluation of circulation concerns or a non-healing lower-extremity wound and the situation is not an emergency.',
        ],
      },
    ],
    related: [
      { to: '/conditions/peripheral-artery-disease', label: 'Peripheral artery disease (PAD)' },
      { to: '/conditions/vascular-symptoms', label: 'Symptoms that may warrant a vascular evaluation' },
      { to: '/conditions/deep-vein-thrombosis', label: 'Deep vein thrombosis (DVT)' },
      { to: '/contact', label: 'Contact the office' },
    ],
  },
  'vascular-symptoms': {
    slug: 'vascular-symptoms',
    kind: 'condition',
    group: 'vascular-symptom',
    shortTitle: 'Vascular Evaluation Symptoms',
    h1: 'Symptoms That May Warrant a Vascular Evaluation',
    eyebrow: 'Symptoms, not a diagnosis',
    intro:
      'Symptoms such as leg pain, cramping, swelling, skin changes, or non-healing wounds can have many causes. A cardiovascular evaluation can help determine whether vascular disease may be contributing. This page does not diagnose visitors.',
    sections: [
      {
        heading: 'These symptoms are not diagnoses',
        paragraphs: [
          'Leg pain, lower-extremity discomfort, cramping with walking, swelling, skin color or texture changes, and sores that heal slowly are symptoms or findings. They are not the same as PAD, PVD, varicose veins, DVT, or limb ischemia.',
          'Muscles, nerves, joints, skin, infection, and other medical problems can cause similar complaints. Online reading cannot tell them apart.',
        ],
      },
      {
        heading: 'Leg pain and cramping',
        paragraphs: [
          'Some people notice aching or cramping in the calves, thighs, or hips that comes on with walking and eases with rest. Physicians may call that pattern claudication when they are considering arterial blood flow, but the word describes a symptom pattern, not a confirmed disease.',
          'Night cramps, rest pain, and pain after injury have other common explanations. A physician decides what to evaluate.',
        ],
      },
      {
        heading: 'Swelling, skin changes, and wounds',
        paragraphs: [
          'Swelling in one or both legs can be related to veins, lymph vessels, heart function, medication, or other causes. Skin darkening, thickening, or a sore on the foot or ankle also has a wide range of possible explanations.',
          'A non-healing lower-extremity wound should be assessed by a clinician. This website cannot judge whether a wound is infected, ischemic, or related to vein disease.',
        ],
      },
      {
        heading: 'Heart rhythm symptoms are a separate topic',
        paragraphs: [
          'Palpitations, fainting, or an irregular heartbeat are discussed on the heart rhythm condition pages. Some people have both circulation concerns and rhythm concerns. Each still needs individual evaluation.',
        ],
      },
      {
        heading: 'When to call',
        paragraphs: [
          'Call the Reseda office during weekday hours if you want to ask whether a cardiovascular visit is appropriate. Call 911 for sudden severe symptoms, including chest pain, trouble breathing, fainting, or a suddenly cold, pale, or severely painful limb.',
          'Do not use this page to decide that you do or do not have vascular disease.',
        ],
      },
    ],
    related: [
      { to: '/conditions/peripheral-artery-disease', label: 'Peripheral artery disease (PAD)' },
      { to: '/conditions/varicose-veins', label: 'Varicose veins' },
      { to: '/conditions/deep-vein-thrombosis', label: 'Deep vein thrombosis (DVT)' },
      { to: '/conditions/heart-palpitations', label: 'Heart palpitations' },
    ],
  },
}
