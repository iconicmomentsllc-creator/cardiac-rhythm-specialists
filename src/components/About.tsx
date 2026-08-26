import { practice } from '../data/practice'

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-cream">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-[1.75rem] border border-navy/8 bg-white p-6 shadow-[0_20px_50px_rgba(20,32,51,0.04)]">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] bg-mist px-6 py-8">
              <div className="mx-auto mt-6 h-28 w-28 rounded-full border border-navy/10 bg-white" aria-hidden="true" />
              <div>
                <p className="font-serif text-3xl tracking-tight text-navy">
                  {practice.physician}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                  {practice.specialty}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            About
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">
            {practice.physician}
          </h2>
          <p className="mt-2 text-lg font-medium text-teal">{practice.specialty}</p>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
            <p>
              {practice.legalName} is a cardiology practice in Reseda, California.
              Patients are seen by {practice.physician}, who provides focused
              evaluation and treatment of heart rhythm disorders.
            </p>
            <p>
              If you are looking for a cardiologist in Reseda, CA, or have been
              referred for heart rhythm care, please call the office to make
              arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
