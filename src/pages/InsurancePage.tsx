import { practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

export function InsurancePage() {
  return (
    <ContentLayout
      path="/insurance"
      eyebrow="Billing questions"
      title="Insurance"
      intro="Please confirm coverage before you schedule. We do not publish a list of accepted plans on this website until the practice provides an approved current list."
    >
      {/* TODO: Confirm with practice before publishing. Add an approved current insurance participation list. Do not invent payer names. */}
      <p>
        Insurance participation varies by plan. Please contact our office at{' '}
        <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
          {practice.phoneDisplay}
        </a>{' '}
        or your insurance carrier to confirm current coverage and benefits before scheduling.
      </p>
      <p>
        Bring your insurance card to visits. For questions about referrals, authorizations, or
        bills, call the office during weekday hours.
      </p>
      <p>
        This page is not a guarantee of payment, network status, or benefit coverage.
      </p>
    </ContentLayout>
  )
}
