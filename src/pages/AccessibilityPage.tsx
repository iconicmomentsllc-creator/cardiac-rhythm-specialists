import { practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

export function AccessibilityPage() {
  return (
    <ContentLayout
      path="/accessibility"
      eyebrow={practice.legalName}
      title="Accessibility"
      intro={`${practice.legalName} is committed to providing a website that is accessible to the widest possible audience, including individuals with disabilities.`}
    >
      <p>
        We continually work to improve the accessibility and usability of our website and strive to
        follow generally recognized accessibility standards, including applicable WCAG 2.2 Level AA
        criteria.
      </p>
      <p>
        This website is associated with our medical office in Reseda, California, and is intended to
        offer equal access to practice information and contact options. An optional accessibility
        panel is also available; it is a supplement and is not required to use this website.
      </p>
      <p>
        If you experience difficulty accessing any portion of this website or need assistance
        obtaining information or services, please contact our office. We will make reasonable
        efforts to provide the information, service, or communication through an accessible
        alternative.
      </p>
      <p>
        We do not claim that this website is fully compliant or guaranteed to meet every
        accessibility need. If you encounter a barrier, or if you need information in another
        format, please tell us so we can help.
      </p>
      <p>
        To report an accessibility barrier or to obtain assistance, call{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>{' '}
        or email{' '}
        <a href={practice.emailMailto} className="font-semibold text-navy underline underline-offset-4">
          {practice.email}
        </a>
        . Office hours are Monday–Friday, 8:30 AM–5:30 PM. Saturday and Sunday are closed. If this
        is a medical emergency, call{' '}
        <a href="tel:911" className="font-semibold text-navy underline underline-offset-4">
          911
        </a>
        .
      </p>
      <p>
        {practice.legalName}
        <br />
        <span className="physician-name">{practice.physician}</span>
        <br />
        {practice.streetAddress}
        <br />
        {practice.city}, {practice.state} {practice.zip}
      </p>
    </ContentLayout>
  )
}
