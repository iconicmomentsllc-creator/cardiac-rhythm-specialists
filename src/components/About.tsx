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
    <section id="about" className="scroll-mt-28 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <figure className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-navy/10 bg-white lg:max-w-none">
              <img
                src={practice.photoSrc}
                alt="Leo Polosajian, MD"
                width={170}
                height={226}
                className="h-auto w-full object-cover object-[center_20%]"
              />
            </figure>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base font-semibold text-gold">About Dr. Polosajian</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {practice.physician} is a cardiologist and electrophysiologist
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy">
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
            <p className="mt-3 text-lg leading-relaxed text-navy">
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

            <a
              href={practice.phoneTel}
              className="mt-8 inline-flex min-h-14 items-center rounded-full bg-navy px-8 text-lg font-semibold text-white hover:bg-navy-soft"
            >
              Call {practice.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
