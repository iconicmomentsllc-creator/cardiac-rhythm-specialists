import { practice } from '../data/practice'
import { PageIntro } from '../components/PageIntro'

export function PrivacyPage() {
  return (
    <PageIntro
      eyebrow={practice.legalName}
      title="Privacy Policy"
      documentTitle="Privacy Policy | Cardiac Rhythm Specialists"
    >
      <p>
        This website is provided by {practice.legalName} for general information
        about our cardiology practice in Reseda, California.
      </p>
      <p>
        Please do not use the website contact form for medical emergencies or to
        submit sensitive medical information. If you are experiencing a medical
        emergency, call 911.
      </p>
      <p>
        The contact form is not a HIPAA-compliant or otherwise secure channel for
        protected health information. Do not include diagnoses, record numbers,
        insurance identifiers, or other sensitive details. For appointments,
        referrals, prescription questions, medical records, insurance questions,
        and procedure instructions, please call{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        .
      </p>
      <p>
        If you choose to enter a name, phone number, email address, or message,
        that information is used only to understand your request. The contact form
        is not a medical messaging system.
      </p>
      <p>
        Browser settings such as accessibility preferences may be stored locally
        on your device so those settings can be remembered on later visits.
      </p>
    </PageIntro>
  )
}
