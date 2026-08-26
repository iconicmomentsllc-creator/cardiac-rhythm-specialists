import { practice } from '../data/practice'

export function PatientInfo() {
  return (
    <section id="patient-information" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Patient information</p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
          How to request appointments and office help
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy">
          Please call the office. Staff can help with the requests listed below.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">
          Do not send medical records or other sensitive information through the
          website form.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practice.officeRequests.map((item) => (
            <li
              key={item}
              className="flex min-h-16 items-center rounded-2xl border border-navy/10 bg-white px-5 text-lg font-semibold text-navy"
            >
              {item}
            </li>
          ))}
        </ul>

        <a href={practice.phoneTel} className="btn btn-primary mt-10">
          Call {practice.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
