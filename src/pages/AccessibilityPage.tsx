import { practice } from '../data/practice'
import { PageIntro } from '../components/PageIntro'

export function AccessibilityPage() {
  return (
    <PageIntro
      eyebrow={practice.legalName}
      title="Accessibility"
      documentTitle="Accessibility | Cardiac Rhythm Specialists"
    >
      <p>
        {practice.legalName} is committed to providing an accessible digital
        experience to the widest possible audience, including people with
        disabilities. This website is associated with our medical office in
        Reseda, California, and is intended to offer equal access to practice
        information and contact options.
      </p>
      <p>
        We use WCAG 2.1 Level AA as our technical accessibility target. That
        includes semantic page structure, keyboard access, a skip-to-main-content
        link, visible focus indicators, form labels, sufficient color contrast,
        text resizing, and respect for reduced-motion preferences. An optional
        accessibility panel is also available; it is a supplement and is not
        required to use this website.
      </p>
      <p>
        We do not claim that this website is fully compliant or guaranteed to
        meet every accessibility need. If you encounter a barrier, or if you
        need information in another format, please tell us so we can help.
      </p>
      <p>
        To report an accessibility barrier or to obtain assistance, call{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        . Office hours are Monday–Friday, 8:30 AM–5:30 PM. Saturday and Sunday
        are closed.
      </p>
      <p>
        {practice.legalName}
        <br />
        {practice.physician}
        <br />
        {practice.streetAddress}
        <br />
        {practice.city}, {practice.state} {practice.zip}
      </p>
    </PageIntro>
  )
}
