import { practice } from '../data/practice'

export function PatientInfo() {
  return (
    <section id="patient-information" className="scroll-mt-28 bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-base font-semibold text-gold">Patient information</p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
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

        <a
          href={practice.phoneTel}
          className="mt-10 inline-flex min-h-14 items-center rounded-full bg-navy px-8 text-lg font-semibold text-white hover:bg-navy-soft"
        >
          Call {practice.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
