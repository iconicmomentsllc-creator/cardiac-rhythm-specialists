import { practice } from '../data/practice'

export function MeetPhysician() {
  return (
    <section id="meet" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-[18.5rem] overflow-hidden rounded-2xl border border-navy/10 bg-white lg:mx-0">
              <img
                src={practice.photoSrc}
                alt="Leo Polosajian, MD"
                width={170}
                height={226}
                className="aspect-[170/226] h-auto w-full object-cover object-[center_18%]"
              />
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="section-label uppercase tracking-[0.08em]">Meet Your Cardiologist</p>
            <h2 className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
              Meet Leo Polosajian, MD
            </h2>
            <p className="mt-3 text-xl font-medium leading-relaxed text-navy">
              Cardiology &amp; Cardiac Electrophysiology
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy">
              Dr. Leo Polosajian provides specialized cardiovascular care with a
              focus on diagnosing and treating heart rhythm disorders. His goal is
              to help patients understand their condition, their treatment options,
              and the next steps in their care.
            </p>
            <a href="#about" className="btn btn-primary mt-8 w-full sm:w-auto">
              Learn About Dr. Polosajian
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
