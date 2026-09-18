import { Link } from 'react-router-dom'
import { practice } from '../data/practice'

export function CallToAction({
  heading = 'Talk with our Reseda office',
  body = 'Call to ask about appointments, referrals, or heart rhythm evaluation. Staff can help you take the next step.',
  variant = 'default',
}: {
  heading?: string
  body?: string
  variant?: 'default' | 'topic'
}) {
  return (
    <aside
      className={
        variant === 'topic'
          ? 'mt-14 rounded-xl border border-navy/10 bg-cream px-6 py-8'
          : 'mt-12 rounded-xl border border-navy/10 bg-mist px-6 py-8'
      }
    >
      <h2 className="font-serif text-2xl font-semibold text-navy">{heading}</h2>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">{body}</p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
          Call {practice.phoneDisplay}
        </a>
        <Link to="/appointment-request" className="btn btn-secondary w-full sm:w-auto">
          Request an appointment
        </Link>
        <Link to="/contact" className="btn btn-secondary w-full sm:w-auto">
          Office address and hours
        </Link>
      </div>
    </aside>
  )
}
