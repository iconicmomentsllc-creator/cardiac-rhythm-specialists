import { MEDICAL_DISCLAIMER, practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

export function DisclaimerPage() {
  return (
    <ContentLayout
      path="/medical-disclaimer"
      eyebrow={practice.legalName}
      title="Medical disclaimer"
    >
      <p>{MEDICAL_DISCLAIMER}</p>
      <p>
        Pages about conditions and treatments describe general topics in cardiology and cardiac
        electrophysiology. They do not tell you what is wrong, what will happen, or which treatment
        you should receive.
      </p>
      <p>
        For office questions, call{' '}
        <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        . If this is a medical emergency, call{' '}
        <a href="tel:911" className="font-semibold underline underline-offset-4">
          911
        </a>
        .
      </p>
    </ContentLayout>
  )
}
