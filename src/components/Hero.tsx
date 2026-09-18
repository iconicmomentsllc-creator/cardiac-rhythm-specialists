import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { PhysicianName } from './PhysicianName'

const specialties = [
  { to: '/conditions/atrial-fibrillation', label: 'Atrial Fibrillation' },
  { to: '/conditions/supraventricular-tachycardia', label: 'SVT' },
  { to: '/treatments/cardiac-ablation', label: 'Catheter Ablation' },
  { to: '/treatments/pacemaker', label: 'Pacemakers' },
  { to: '/treatments/implantable-cardioverter-defibrillator', label: 'ICDs' },
  { to: '/testing/holter-monitoring', label: 'Holter Monitoring' },
] as const

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-20">
        <p className="section-label uppercase tracking-[0.08em]">
          Cardiac Electrophysiology
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(2.25rem,5vw,3.25rem)] font-semibold tracking-tight text-navy lg:leading-[1.15]">
          Advanced Heart Rhythm Care in the San Fernando Valley
        </h1>
        <p className="mt-5 max-w-4xl font-serif text-[clamp(1.5rem,3.4vw,2rem)] font-semibold leading-snug text-navy">
          <PhysicianName />
        </p>
        <p className="mt-3 text-xl font-medium leading-relaxed text-navy">
          {practice.physicianTitle}
        </p>
        <p className="mt-4 max-w-2xl text-xl leading-relaxed text-navy">
          Specialized care for heart rhythm disorders, including evaluation and
          treatment of arrhythmias. The Reseda office serves patients from Los
          Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale,
          and North Hollywood.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
            Call {practice.phoneDisplay}
          </a>
          <Link to="/appointment-request" className="btn btn-secondary w-full sm:w-auto">
            Request an appointment
          </Link>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full sm:w-auto"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
          <Link to="/about-dr-polosajian" className="btn-text inline-flex items-center">
            Learn About {practice.physicianInformal}
          </Link>
        </div>
        <p className="mt-8 text-lg font-medium leading-relaxed text-navy">
          {practice.brandName}
          <br />
          {practice.streetAddress}
          <br />
          {practice.city}, {practice.state} {practice.zip}
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {specialties.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="inline-flex min-h-12 items-center rounded-full border border-navy/15 bg-white px-4 text-base font-semibold text-navy hover:border-gold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
