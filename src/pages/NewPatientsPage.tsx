import { practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

export function NewPatientsPage() {
  return (
    <ContentLayout
      path="/new-patients"
      eyebrow="Patient information"
      title="New patients"
      intro="We want the first visit to be as straightforward as possible. Please call the office to schedule. This website is not a patient portal."
    >
      <section>
        <h2 className="font-serif text-2xl font-semibold text-navy">Your physician</h2>
        <p className="physician-name mt-3 text-xl font-semibold leading-snug">
          {practice.physician}
        </p>
        <p className="mt-2 text-lg font-medium">{practice.physicianTitle}</p>
        <p className="mt-3">
          New patients are seen by {practice.physicianInformal} at our Reseda office. Please call
          to schedule. Staff can tell you what to expect before the visit.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Scheduling</h2>
        <p className="mt-3">
          Call{' '}
          <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
            {practice.phoneDisplay}
          </a>{' '}
          Monday–Friday, {practice.weekdayHours}. Saturday and Sunday are closed. Tell the staff if
          you are a new patient, if another physician referred you, or if you have recent heart
          tests.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">What to bring</h2>
        <p className="mt-3">When you can, please bring:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>A current medication list, including doses and over-the-counter products</li>
          <li>A photo ID</li>
          <li>Your insurance card</li>
          <li>Relevant medical records, EKGs, monitor reports, or hospital paperwork you have</li>
          <li>Referral information if you were given any (we do not state that a referral is always required)</li>
        </ul>
        <p className="mt-3">
          Do not email records through the website form. Call the office about medical records
          requests.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Arrival</h2>
        <p className="mt-3">
          Plan extra time for parking and check-in. The office is at {practice.streetAddress},{' '}
          {practice.city}, {practice.state} {practice.zip}. If you may be late, please call.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Office requests we can help with</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {practice.officeRequests.map((item) => (
            <li
              key={item}
              className="flex min-h-14 items-center rounded-2xl border border-navy/10 px-5 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </ContentLayout>
  )
}
