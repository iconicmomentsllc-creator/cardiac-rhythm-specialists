import { Link } from 'react-router-dom'
import { practice } from '../data/practice'

export function NotFoundPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <p className="section-label">Page not found</p>
      <h1 className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
        We could not find that page
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-navy">
        The page you requested is not available. You can return to the homepage, contact the
        office, or call during weekday hours.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link to="/" className="btn btn-primary w-full sm:w-auto">
          Home
        </Link>
        <Link to="/contact" className="btn btn-secondary w-full sm:w-auto">
          Contact
        </Link>
        <Link to="/conditions" className="btn btn-secondary w-full sm:w-auto">
          Conditions
        </Link>
        <Link to="/treatments" className="btn btn-secondary w-full sm:w-auto">
          Treatments
        </Link>
        <Link to="/testing" className="btn btn-secondary w-full sm:w-auto">
          Testing
        </Link>
        <Link to="/patient-resources" className="btn btn-secondary w-full sm:w-auto">
          Patient Resources
        </Link>
        <a href={practice.phoneTel} className="btn btn-secondary w-full sm:w-auto">
          Call {practice.phoneDisplay}
        </a>
      </div>
    </article>
  )
}
