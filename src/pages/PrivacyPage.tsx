import { practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

export function PrivacyPage() {
  return (
    <ContentLayout
      path="/privacy"
      eyebrow={practice.legalName}
      title="Privacy Policy"
    >
      <p>
        This website is provided by {practice.legalName} for general information about our
        cardiology practice in Reseda, California.
      </p>
      <p>
        Please do not submit confidential medical information through this form. Please do not use
        the website contact form for medical emergencies. If you are experiencing a medical
        emergency, call{' '}
        <a href="tel:911" className="font-semibold text-navy underline underline-offset-4">
          911
        </a>
        .
      </p>
      <p>
        The contact form is not a HIPAA-compliant or otherwise secure channel for protected health
        information. Do not include diagnoses, record numbers, insurance identifiers, or other
        sensitive details. For appointments, referrals, prescription questions, medical records,
        insurance questions, and procedure instructions, please call{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        .
      </p>
      <p>
        If you choose to enter a name, phone number, email address, or message, that information is
        sent to {practice.email} so staff can understand a basic office request. The form is not a
        medical messaging system and is not a patient portal.
      </p>
      <p>
        Browser settings such as accessibility preferences may be stored locally on your device so
        those settings can be remembered on later visits.
      </p>
      <p>
        This website does not add advertising or analytics trackers unless a measurement ID is later
        supplied and enabled by the practice with an appropriate consent process.
      </p>
    </ContentLayout>
  )
}
