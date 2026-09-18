import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { PhysicianName } from './PhysicianName'

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">About {practice.physicianInformal}</p>
        <h2 className="mt-3 max-w-4xl font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] font-semibold tracking-tight leading-snug text-navy">
          <PhysicianName /> is a cardiologist and cardiac electrophysiologist
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-navy">
          <p>
            Patients are seen by {practice.physicianInformal} at {practice.legalName} in
            Reseda, California.
          </p>
          <p>
            He provides evaluation and treatment of heart rhythm disorders as a
            heart rhythm specialist.
          </p>
          <p>
            If you have been referred for heart rhythm care, or if you are looking
            for a cardiologist and electrophysiologist in Reseda, please call the
            office.
          </p>
        </div>

        <h3 className="mt-10 font-serif text-2xl font-semibold text-navy">
          Practice information
        </h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">
          Verified information about {practice.physicianInformal} is listed below.
          A full explanation of his professional designations is on the about page.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          <li className="rounded-2xl border border-navy/10 bg-white px-6 py-6">
            <p className="text-base font-semibold text-navy">Physician</p>
            <p className="physician-name mt-2 text-xl font-semibold leading-snug text-navy">
              {practice.physician}
            </p>
          </li>
          <li className="rounded-2xl border border-navy/10 bg-white px-6 py-6">
            <p className="text-base font-semibold text-navy">Specialty</p>
            <p className="mt-2 text-xl font-semibold text-navy">{practice.specialtyLong}</p>
          </li>
          <li className="rounded-2xl border border-navy/10 bg-white px-6 py-6">
            <p className="text-base font-semibold text-navy">Focus of care</p>
            <p className="mt-2 text-xl font-semibold text-navy">Heart rhythm disorders</p>
          </li>
          <li className="rounded-2xl border border-navy/10 bg-white px-6 py-6">
            <p className="text-base font-semibold text-navy">Hospital affiliations</p>
            <p className="mt-2 text-xl font-semibold text-navy">
              Providence, Cedars-Sinai Medical Center, and Valley Presbyterian Hospital
            </p>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
            Call {practice.phoneDisplay}
          </a>
          <Link to="/about-dr-polosajian" className="btn btn-secondary w-full sm:w-auto">
            Full physician profile
          </Link>
        </div>
      </div>
    </section>
  )
}
