import { practice } from '../data/practice'
import { PageIntro } from '../components/PageIntro'

export function TermsPage() {
  return (
    <PageIntro
      eyebrow={practice.legalName}
      title="Terms of Use"
      documentTitle="Terms of Use | Cardiac Rhythm Specialists"
      description={`Terms of use for the ${practice.legalName} website. Website content is not medical advice. For office requests, call ${practice.phoneDisplay}.`}
    >
      <p>
        By using this website, you agree to these terms. The information on this
        site is for general educational and contact purposes related to{' '}
        {practice.legalName} and {practice.physician}.
      </p>
      <p>
        Website content is not medical advice, a diagnosis, or a substitute for
        consultation with a qualified physician. If you are experiencing a
        medical emergency, call{' '}
        <a href="tel:911" className="font-semibold text-navy underline underline-offset-4">
          911
        </a>
        .
      </p>
      <p>
        This website describes a single office location in Reseda, California.
        Appointments and other office requests should be made by telephone at{' '}
        <a href={practice.phoneTel} className="font-semibold text-navy underline underline-offset-4">
          {practice.phoneDisplay}
        </a>
        .
      </p>
      <p>
        We may update this website from time to time. If you have questions about
        these terms, please call the office.
      </p>
    </PageIntro>
  )
}
