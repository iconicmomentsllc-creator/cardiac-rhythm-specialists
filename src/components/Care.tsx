import { Link } from 'react-router-dom'
import { practice } from '../data/practice'

const services = [
  {
    to: '/conditions',
    title: 'Cardiology visits',
    body: `Office visits with ${practice.physicianInformal} for heart and heart rhythm concerns.`,
  },
  {
    to: '/conditions/heart-palpitations',
    title: 'Heart rhythm evaluation',
    body: 'Evaluation of palpitations, irregular heartbeat, and related symptoms.',
  },
  {
    to: '/treatments',
    title: 'Treatment planning',
    body: 'Care planning for heart rhythm disorders after evaluation.',
  },
] as const

const primaryConditions = [
  {
    to: '/conditions/arrhythmias',
    title: 'Irregular heartbeat',
    body: 'A heartbeat that feels uneven, skipped, or out of rhythm.',
  },
  {
    to: '/conditions/heart-palpitations',
    title: 'Palpitations',
    body: 'A feeling that the heart is racing, fluttering, or skipping beats.',
  },
  {
    to: '/conditions/arrhythmias',
    title: 'Fast or slow heart rate',
    body: 'A pulse that seems too fast, too slow, or hard to explain.',
  },
] as const

export function Care() {
  return (
    <section id="care" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Heart rhythm care</p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
          Conditions and services we help with
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy">
          {practice.brandName} provides cardiology care focused on heart rhythm
          disorders at our office in Reseda.
        </p>

        <h3 className="mt-12 font-serif text-2xl font-semibold text-navy">
          Common heart rhythm concerns
        </h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {primaryConditions.map((item) => (
            <li key={item.title} className="min-w-0">
              <Link
                to={item.to}
                className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white px-6 py-6 no-underline hover:border-gold"
              >
                <h4 className="font-serif text-xl font-semibold text-navy">{item.title}</h4>
                <p className="mt-3 text-lg leading-relaxed text-navy">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>

        <details className="disclosure mt-6 rounded-2xl bg-white">
          <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 px-5 py-3 text-lg font-semibold text-navy">
            <span className="details-closed">View More Conditions We Evaluate</span>
            <span className="details-open">Hide Additional Conditions</span>
          </summary>
          <div className="border-t border-navy/10 px-5 py-5">
            <ul className="list-disc space-y-4 pl-6 text-lg leading-relaxed text-navy">
              <li>
                <Link to="/conditions/atrial-fibrillation" className="font-semibold underline underline-offset-4">
                  Atrial fibrillation (AFib)
                </Link>{' '}
                and other named rhythm disorders, as referred
              </li>
              <li>
                Lightheaded or fainting spells that may be related to heart rhythm
              </li>
              <li>
                An irregular heartbeat found on a test, monitor, or hospital visit
              </li>
              <li>
                Heart rhythm questions after a referral from another doctor
              </li>
            </ul>
            <p className="mt-5 text-lg leading-relaxed text-navy">
              If you are not sure whether your concern belongs here, call the
              office. The staff can help you take the next step.
            </p>
          </div>
        </details>

        <h3 className="mt-14 font-serif text-2xl font-semibold text-navy">
          How we can help
        </h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <li key={item.title} className="min-w-0">
              <Link
                to={item.to}
                className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white px-6 py-6 no-underline hover:border-gold"
              >
                <h4 className="font-serif text-xl font-semibold text-navy">{item.title}</h4>
                <p className="mt-3 text-lg leading-relaxed text-navy">{item.body}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
            Call {practice.phoneDisplay}
          </a>
          <Link to="/conditions" className="btn btn-secondary w-full sm:w-auto">
            Conditions
          </Link>
          <Link to="/contact" className="btn btn-secondary w-full sm:w-auto">
            Contact the Office
          </Link>
        </div>
      </div>
    </section>
  )
}
