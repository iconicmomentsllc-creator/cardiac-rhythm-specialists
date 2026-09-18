import { practice } from '../data/practice'

export function PracticeContact({ heading = 'Office' }: { heading?: string }) {
  return (
    <section className="mt-12 rounded-2xl border border-navy/10 bg-white p-6" aria-labelledby="practice-contact-heading">
      <h2 id="practice-contact-heading" className="font-serif text-2xl font-semibold text-navy">
        {heading}
      </h2>
      <address className="mt-4 not-italic text-lg leading-relaxed text-navy">
        <p className="font-semibold">{practice.brandName}</p>
        <p className="physician-name">{practice.physician}</p>
        <p>{practice.specialtyLong}</p>
        <p className="mt-3">{practice.streetAddress}</p>
        <p>
          {practice.city}, {practice.state} {practice.zip}
        </p>
      </address>
      <a href={practice.phoneTel} className="btn btn-primary mt-5">
        Call {practice.phoneDisplay}
      </a>
      <p className="mt-4">
        <a
          href={practice.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-text inline-flex items-center"
        >
          Get Directions
          <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
        </a>
      </p>
    </section>
  )
}
