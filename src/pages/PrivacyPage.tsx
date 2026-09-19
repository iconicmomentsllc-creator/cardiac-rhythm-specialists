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
        Please do not send medical records, protected health information, or other sensitive
        patient information through this website or by email. Please do not use the website for
        medical emergencies. If you are experiencing a medical emergency, call{' '}
        <a href="tel:911" className="font-semibold text-navy underline underline-offset-4">
          911
        </a>
        .
      </p>
      <p>
        Appointments are requested by telephone. Staff can help with scheduling and insurance
        information. Please confirm your own coverage and benefits with your insurer. For
        appointments, referrals, prescription questions, medical records, insurance questions, and
        procedure instructions, please call{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        .
      </p>
      <p>
        A general office email address is published for administrative inquiries only. Please do
        not send medical records, protected health information, or other sensitive patient
        information by email. Email is not a patient portal.
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
