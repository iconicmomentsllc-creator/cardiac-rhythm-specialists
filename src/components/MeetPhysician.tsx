import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { PhysicianName } from './PhysicianName'
import { SpecialtyPills } from './SpecialtyPills'

export function MeetPhysician() {
  return (
    <section id="meet" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <figure className="physician-portrait">
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
            <p className="section-label">Meet Your Cardiologist</p>
            <h2 className="section-heading mt-4">
              Meet <PhysicianName />
            </h2>
            <p className="hero-role mt-4 text-navy">
              {practice.specialtyLong}
            </p>
            <p className="lede mt-5">
              {practice.physicianInformalFull} provides specialized cardiovascular care with a
              focus on diagnosing and treating heart rhythm disorders. He also evaluates vascular
              conditions and symptoms that may relate to circulation in the legs. His goal is
              to help patients understand their condition, their treatment options,
              and the next steps in their care.
            </p>
            <Link to="/about-dr-polosajian" className="btn-text mt-6 inline-flex items-center">
              Learn About {practice.physicianInformal}
            </Link>
          </div>
        </div>

        <div className="specialty-pills-block">
          <p className="section-label text-center">
            Areas of Expertise
          </p>
          <SpecialtyPills />
        </div>
      </div>
    </section>
  )
}
