import { Link } from 'react-router-dom'
import { EXTERNAL_RESOURCE_DISCLAIMER, EXTERNAL_RESOURCES } from '../data/externalResources'
import { practice } from '../data/practice'
import { LearnMoreLink } from './LearnMoreLink'

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

const vascularConditions = [
  {
    to: '/conditions/peripheral-artery-disease',
    title: 'Peripheral artery disease (PAD)',
    body: 'A named arterial condition that can affect blood flow to the legs. This card is information, not a diagnosis.',
  },
  {
    to: '/conditions/varicose-veins',
    title: 'Varicose veins',
    body: 'Enlarged leg veins are a venous condition. Visible veins or aching do not, by themselves, diagnose vein disease.',
  },
  {
    to: '/conditions/deep-vein-thrombosis',
    title: 'Deep vein thrombosis (DVT)',
    body: 'A blood clot in a deep vein is a named condition. Leg swelling or pain has many causes and is not a diagnosis of DVT.',
  },
] as const

function InfoCard({
  title,
  body,
  to,
  readLabel,
}: {
  title: string
  body: string
  to: string
  readLabel: string
}) {
  const resource = EXTERNAL_RESOURCES[to]

  return (
    <article className="condition-card flex h-full flex-col px-6 py-7">
      <h4 className="font-serif text-xl font-semibold text-navy">{title}</h4>
      <p className="mt-3 flex-1 text-lg leading-relaxed text-navy">{body}</p>
      <p className="mt-5">
        <Link to={to} className="btn-text">
          {readLabel}
        </Link>
      </p>
      {resource ? <LearnMoreLink resource={resource} compact showDisclaimer={false} /> : null}
    </article>
  )
}

export function Care() {
  return (
    <section id="care" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Heart rhythm and vascular care</p>
        <h2 className="section-heading mt-4">
          Conditions and services we help with
        </h2>
        <p className="lede mt-4">
          {practice.brandName} provides cardiology care focused on heart rhythm
          disorders at our office in Reseda. {practice.physicianInformal} also evaluates
          vascular conditions and symptoms that may relate to circulation in the legs.
        </p>

        <h3 className="mt-12 font-serif text-2xl font-semibold text-navy">
          Common heart rhythm concerns
        </h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {primaryConditions.map((item) => (
            <li key={item.title} className="min-w-0">
              <InfoCard
                title={item.title}
                body={item.body}
                to={item.to}
                readLabel={`Read about ${item.title.toLowerCase()}`}
              />
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-serif text-2xl font-semibold text-navy">Vascular conditions</h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">
          These are named conditions. Use the page link to read our educational material, then the
          Learn more link for additional reading from a national organization.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {vascularConditions.map((item) => (
            <li key={item.title} className="min-w-0">
              <InfoCard
                title={item.title}
                body={item.body}
                to={item.to}
                readLabel="Read this educational page"
              />
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-serif text-2xl font-semibold text-navy">
          Symptoms that may warrant a vascular evaluation
        </h3>
        <article className="condition-card mt-6 max-w-3xl px-6 py-7">
          <p className="text-lg leading-relaxed text-navy">
            Symptoms such as leg pain, cramping, swelling, skin changes, or non-healing wounds can
            have many causes. A cardiovascular evaluation can help determine whether vascular
            disease may be contributing.
          </p>
          <p className="mt-5">
            <Link to="/conditions/vascular-symptoms" className="btn-text">
              Read about symptoms that may warrant a vascular evaluation
            </Link>
          </p>
        </article>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-navy">
          {EXTERNAL_RESOURCE_DISCLAIMER}
        </p>

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
              <li>
                <Link to="/conditions/peripheral-vascular-disease" className="font-semibold underline underline-offset-4">
                  Peripheral vascular disease (PVD)
                </Link>
                , a broader term that can include arterial or venous circulation problems
              </li>
              <li>
                <Link to="/conditions/limb-ischemia" className="font-semibold underline underline-offset-4">
                  Limb ischemia
                </Link>
                {' '}
                and chronic limb-threatening ischemia, when a physician is considering reduced
                arterial blood flow
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
                className="condition-card flex h-full flex-col px-6 py-7 no-underline"
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
