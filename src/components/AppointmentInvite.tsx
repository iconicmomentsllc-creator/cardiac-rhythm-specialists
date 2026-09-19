import { Link } from 'react-router-dom'
import { AppointmentCallPanel } from './AppointmentCallPanel'

export function AppointmentInvite() {
  return (
    <section
      id="request-appointment"
      aria-labelledby="appointment-invite-heading"
      className="scroll-mt-28 border-t border-navy/10 bg-mist"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Appointments</p>
        <h2
          id="appointment-invite-heading"
          className="mt-3 max-w-3xl font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy"
        >
          Ready to Schedule Your Visit?
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy">
          Appointments are scheduled by calling our office. Staff can help with scheduling and
          insurance information.
        </p>
        <div className="mt-10 max-w-xl">
          <AppointmentCallPanel />
        </div>
        <p className="mt-8">
          <Link to="/appointment-request" className="btn btn-secondary w-full sm:w-auto">
            Appointment Information
          </Link>
        </p>
      </div>
    </section>
  )
}
