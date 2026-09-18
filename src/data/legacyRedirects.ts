export type LegacyRedirect = {
  from: string
  to: string
  note: string
}

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  { from: '/index.html', to: '/', note: 'Legacy homepage' },
  { from: '/welcome.html', to: '/about-dr-polosajian', note: 'Physician biography' },
  { from: '/contact-us.html', to: '/contact', note: 'Contact' },
  { from: '/For-Patient.html', to: '/patient-resources', note: 'Patient hub' },
  { from: '/Appointment-Requests.html', to: '/appointment-request', note: 'Appointment request' },
  { from: '/Forms.html', to: '/patient-forms', note: 'Patient forms' },
  { from: '/FAQ.html', to: '/faq', note: 'FAQ' },
  { from: '/Medical-Questions.html', to: '/faq', note: 'Medical questions hub' },
  { from: '/Prescription-Refills.html', to: '/prescription-refills', note: 'Prescription information' },
  { from: '/Lab-Test-Results.html', to: '/lab-test-information', note: 'Lab information' },
  { from: '/Medical-Records-Questions.html', to: '/medical-records', note: 'Medical records' },
  { from: '/Conditions.html', to: '/conditions', note: 'Conditions index' },
  { from: '/Arrhythmia.html', to: '/conditions/arrhythmias', note: 'Arrhythmia education' },
  { from: '/Arrhythmias.html', to: '/conditions/arrhythmias', note: 'Arrhythmias education' },
  { from: '/Treatments.html', to: '/treatments', note: 'Treatments index' },
  { from: '/Tests.html', to: '/testing', note: 'Testing index' },
  { from: '/The-Normal-Heart.html', to: '/education/the-normal-heart', note: 'Normal heart education' },
  { from: '/Basic-Cardiology.html', to: '/education/basic-cardiology', note: 'Basic cardiology' },
  { from: '/Electrophysiology-Study.html', to: '/treatments/electrophysiology-study', note: 'EP study' },
  { from: '/24-Hour-Holter-Monitoring.html', to: '/testing/holter-monitoring', note: 'Holter' },
  { from: '/30-Day-Event-Monitoring.html', to: '/testing/event-monitoring', note: 'Event monitor' },
  { from: '/Outpatient-ECG-Monitoring.html', to: '/testing/outpatient-ecg-monitoring', note: 'Outpatient ECG' },
  { from: '/Trans-telephonic-Home-Monitoring.html', to: '/testing/device-follow-up', note: 'Older home monitoring language' },
  { from: '/Device-Follow-up.html', to: '/testing/device-follow-up', note: 'Device follow-up' },
  { from: '/Device-Implant.html', to: '/treatments/pacemaker-implantation', note: 'Device implant overview' },
  { from: '/Device-Replacement.html', to: '/treatments/device-replacement', note: 'Device replacement' },
  { from: '/Pacemaker-Implant.html', to: '/treatments/pacemaker-implantation', note: 'Pacemaker implant' },
  { from: '/Pacemaker-Checks.html', to: '/testing/pacemaker-checks', note: 'Pacemaker checks' },
  { from: '/ICD.html', to: '/treatments/implantable-cardioverter-defibrillator', note: 'ICD information' },
  { from: '/ICD-Implant.html', to: '/treatments/icd-implantation', note: 'ICD implant' },
  { from: '/ICD-Checks.html', to: '/testing/icd-checks', note: 'ICD checks' },
  { from: '/Bi-V-Pacer-Implant.html', to: '/treatments/cardiac-resynchronization-therapy', note: 'CRT pacemaker' },
  { from: '/Bi-V-Pacemaker-Checks.html', to: '/testing/device-follow-up', note: 'CRT checks' },
  { from: '/Bi-V-+-ICD-Implant.html', to: '/treatments/cardiac-resynchronization-therapy', note: 'CRT-D implant' },
  { from: '/Bi-V-+-ICD-Checks.html', to: '/testing/device-follow-up', note: 'CRT-D checks' },
  { from: '/SVT-Ablation.html', to: '/treatments/svt-ablation', note: 'SVT ablation' },
  { from: '/VT-Ablation.html', to: '/treatments/vt-ablation', note: 'VT ablation' },
  { from: '/3-D-Electro-Anatomical-Mapping.html', to: '/treatments/three-dimensional-mapping', note: '3-D mapping' },
  { from: '/Tilt-Table-Study.html', to: '/testing/tilt-table', note: 'Tilt table' },
  { from: '/Intra-Cardiac Echo-(ICE).html', to: '/testing/echocardiogram', note: 'ICE / echo-related' },
  { from: '/Coumadin-Management.html', to: '/patient-resources', note: 'Anticoagulation page flagged for review' },
  { from: '/movies.html', to: '/videos', note: 'Educational videos' },
  { from: '/photos.html', to: '/photos', note: 'Photo gallery' },
  { from: '/links.html', to: '/education/useful-resources', note: 'External resources' },
  { from: '/whats-new.html', to: '/', note: 'News archive not republished' },
  { from: '/patients-letters.html', to: '/', note: 'Testimonials withheld for privacy review' },
  { from: '/Patient-Feedback.html', to: '/contact', note: 'Feedback routed to contact' },
  { from: '/html/Atrial_Fibrillation.html', to: '/conditions/atrial-fibrillation', note: 'AFib education' },
  { from: '/html/Atrial_Flutter.html', to: '/conditions/atrial-flutter', note: 'Atrial flutter' },
  { from: '/html/SVT.html', to: '/conditions/supraventricular-tachycardia', note: 'SVT' },
  { from: '/html/Ventric_Tachycardia.html', to: '/conditions/ventricular-tachycardia', note: 'VT' },
  { from: '/html/Ventric_Fibrillation.html', to: '/conditions/ventricular-fibrillation', note: 'VF' },
  { from: '/html/Syncope.html', to: '/conditions/syncope', note: 'Syncope' },
  { from: '/html/Pacemakers.html', to: '/treatments/pacemaker', note: 'Pacemakers' },
  { from: '/html/ICD_Device.html', to: '/treatments/implantable-cardioverter-defibrillator', note: 'ICD device' },
  { from: '/html/Catheter_Ablation.html', to: '/treatments/cardiac-ablation', note: 'Ablation' },
  { from: '/html/Electrophysiol_Study.html', to: '/treatments/electrophysiology-study', note: 'EP study' },
  { from: '/html/Holter_Monitor.html', to: '/testing/holter-monitoring', note: 'Holter' },
  { from: '/html/Echocardiogram.html', to: '/testing/echocardiogram', note: 'Echo' },
  { from: '/html/Electrocardiogram.html', to: '/testing/electrocardiogram', note: 'ECG' },
  { from: '/html/Long_QT_Syndrome.html', to: '/conditions/long-qt-syndrome', note: 'Long QT' },
  { from: '/html/Wolff-Parkinson_White.html', to: '/conditions/wolff-parkinson-white', note: 'WPW' },
  { from: '/html/Heart_Block.html', to: '/conditions/heart-block', note: 'Heart block' },
  { from: '/html/Bradycardia.html', to: '/conditions/bradycardia', note: 'Bradycardia' },
  { from: '/html/Cardiac_Arrest.html', to: '/conditions/sudden-cardiac-arrest', note: 'Cardiac arrest' },
  { from: '/html/Loop_Recorder_Syncope.html', to: '/treatments/loop-recorder', note: 'Loop recorder' },
  { from: '/Loop-Recorder-Implant.html', to: '/treatments/loop-recorder', note: 'Loop recorder implant' },
  { from: '/Device-Information.html', to: '/treatments', note: 'Device information hub' },
  { from: '/books.html', to: '/education', note: 'Education hub' },
  { from: '/html/3D_Electrical_Mapping.html', to: '/treatments/three-dimensional-mapping', note: '3-D mapping' },
  { from: '/html/CRT_Device.html', to: '/treatments/cardiac-resynchronization-therapy', note: 'CRT' },
  { from: '/html/Heart_Failure.html', to: '/conditions/heart-failure', note: 'Heart failure' },
  { from: '/html/Ejection_Fraction.html', to: '/education/ejection-fraction', note: 'Ejection fraction' },
  { from: '/html/Electrical_System.html', to: '/education/electrical-system', note: 'Electrical system' },
  { from: '/html/AVNRT.html', to: '/conditions/avnrt', note: 'AVNRT' },
  { from: '/html/AVRT.html', to: '/conditions/avrt', note: 'AVRT' },
  { from: '/html/PVC.html', to: '/conditions/premature-ventricular-contractions', note: 'PVCs' },
  { from: '/html/Mitral_Regurgitation.html', to: '/conditions/mitral-valve-disease', note: 'Mitral regurgitation' },
  { from: '/html/Mitral_Valve_Stenosis.html', to: '/conditions/mitral-valve-disease', note: 'Mitral stenosis' },
  { from: '/html/Heart_Valve_Disease.html', to: '/conditions/aortic-valve-disease', note: 'Valve disease hub' },
  { from: '/presentations.html', to: '/presentations', note: 'Historical presentations' },
  { from: '/articles.html', to: '/articles', note: 'Historical articles' },
  { from: '/Atrial/Default.html', to: '/education/booklets/atrial-fibrillation', note: 'Flash AFib booklet' },
  { from: '/Arrhythmias/Default.html', to: '/education/booklets/common-arrhythmias', note: 'Flash arrhythmia booklet' },
  { from: '/CRT/Default.html', to: '/education/booklets/crt', note: 'Flash CRT booklet' },
  { from: '/Heart/Default.html', to: '/education/booklets/heart-failure', note: 'Flash heart-failure booklet' },
]

function assertUniqueRedirects(items: LegacyRedirect[]) {
  const seen = new Map<string, string>()
  for (const item of items) {
    const existing = seen.get(item.from)
    if (existing) {
      throw new Error(`Duplicate legacy redirect ${item.from} → ${existing} and ${item.to}`)
    }
    seen.set(item.from, item.to)
  }
}

assertUniqueRedirects(LEGACY_REDIRECTS)
