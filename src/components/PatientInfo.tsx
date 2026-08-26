import { practice } from '../data/practice'

export function PatientInfo() {
  return (
    <section id="patient-information" className="scroll-mt-28 bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Patient information
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">
            Please call the office
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The office staff can help by phone. Please do not send medical records
            or other sensitive information through the website form.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {practice.officeRequests.map((item) => (
            <li
              key={item}
              className="flex min-h-14 items-center rounded-2xl border border-navy/8 bg-white px-5 text-base font-medium text-navy"
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href={practice.phoneTel}
          className="mt-10 inline-flex min-h-12 items-center rounded-full bg-navy px-6 text-sm font-semibold text-white hover:bg-navy-soft"
        >
          Call {practice.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
