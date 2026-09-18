import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { PhysicianName } from './PhysicianName'

export function MeetPhysician() {
  return (
    <section id="meet" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-[18.5rem] overflow-hidden rounded-2xl border border-navy/10 bg-white lg:mx-0">
              <img
                src={practice.photoSrc}
                alt={practice.photoAlt}
                width={170}
                height={226}
                fetchPriority="high"
                decoding="async"
                className="aspect-[170/226] h-auto w-full object-cover object-[center_18%]"
              />
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="section-label uppercase tracking-[0.08em]">Meet Your Cardiologist</p>
            <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.5rem,3.6vw,2.25rem)] font-semibold tracking-tight leading-snug text-navy">
              Meet <PhysicianName />
            </h2>
            <p className="mt-3 text-xl font-medium leading-relaxed text-navy">
              {practice.specialtyLong}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy">
              {practice.physicianInformalFull} provides specialized cardiovascular care with a
              focus on diagnosing and treating heart rhythm disorders. His goal is
              to help patients understand their condition, their treatment options,
              and the next steps in their care.
            </p>
            <Link to="/about-dr-polosajian" className="btn btn-primary mt-8 w-full sm:w-auto">
              Learn About {practice.physicianInformal}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
