import { practice } from '../data/practice'

export function AppointmentCallPanel() {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
      <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
        Call to Request an Appointment
      </a>
      <p className="mt-5">
        <a
          href={practice.phoneTel}
          className="text-2xl font-semibold tracking-tight text-navy underline-offset-4 hover:underline"
        >
          {practice.phoneDisplay}
        </a>
      </p>
      <p className="mt-2 text-lg leading-relaxed text-navy">
        Use this number to request an appointment. On a mobile phone, you can tap to call.
      </p>
      <div className="mt-8 grid gap-5 border-t border-navy/10 pt-6 sm:grid-cols-2">
        <div>
          <p className="text-base font-semibold text-navy">{practice.weekdayLabel}</p>
          <p className="mt-1 text-lg text-navy">{practice.weekdayHours}</p>
        </div>
        <div>
          <p className="text-base font-semibold text-navy">{practice.weekendLabel}</p>
          <p className="mt-1 text-lg text-navy">{practice.weekendHours}</p>
        </div>
      </div>
    </div>
  )
}
