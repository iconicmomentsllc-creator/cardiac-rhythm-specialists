import { practice } from '../data/practice'

const credentials = [
  {
    heading: 'Physician',
    detail: practice.physician,
  },
  {
    heading: 'Specialty',
    detail: practice.specialty,
  },
  {
    heading: 'Focus of care',
    detail: 'Heart rhythm disorders',
  },
  {
    heading: 'Office',
    detail: `${practice.city}, ${practice.state}`,
  },
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-28 border-t border-navy/10 bg-white">
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
            <p className="section-label">About Dr. Polosajian</p>
            <h2 className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
              {practice.physician} is a cardiologist and electrophysiologist
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-navy">
              <p>
                Patients are seen by {practice.physician} at {practice.legalName} in
                Reseda, California.
              </p>
              <p>
                He provides evaluation and treatment of heart rhythm disorders.
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
              Verified information about Dr. Polosajian is listed below. Additional
              training details can be confirmed by calling the office.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {credentials.map((item) => (
                <li
                  key={item.heading}
                  className="rounded-2xl border border-navy/10 bg-white px-6 py-6"
                >
                  <p className="text-base font-semibold text-gold">{item.heading}</p>
                  <p className="mt-2 text-xl font-semibold text-navy">{item.detail}</p>
                </li>
              ))}
            </ul>

            <a href={practice.phoneTel} className="btn btn-primary mt-8">
              Call {practice.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
