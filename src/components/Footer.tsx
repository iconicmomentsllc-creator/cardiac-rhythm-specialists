import { Link, useLocation } from 'react-router-dom'
import { practice } from '../data/practice'

export function Footer() {
  const location = useLocation()

  return (
    <footer className="border-t border-navy/10 bg-cream pb-28 text-navy sm:pb-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-tight">{practice.legalName}</p>
          <p className="mt-2 text-sm text-muted">
            {practice.physician} — {practice.specialty}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Office</p>
          <address className="mt-3 not-italic text-sm leading-relaxed text-navy">
            {practice.streetAddress}
            <br />
            {practice.city}, {practice.state} {practice.zip}
          </address>
          <a
            href={practice.phoneTel}
            className="mt-3 inline-flex min-h-12 items-center text-sm font-semibold underline underline-offset-4"
          >
            Call {practice.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Office hours</p>
          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">{practice.weekdayLabel}</p>
              <p className="text-muted">{practice.weekdayHours}</p>
            </div>
            <div>
              <p className="font-semibold">{practice.weekendLabel}</p>
              <p className="text-muted">{practice.weekendHours}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {practice.legalName}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/accessibility"
              className="inline-flex min-h-12 items-center font-medium text-navy underline-offset-4 hover:underline"
              aria-current={location.pathname === '/accessibility' ? 'page' : undefined}
            >
              Accessibility
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-12 items-center font-medium text-navy underline-offset-4 hover:underline"
              aria-current={location.pathname === '/privacy' ? 'page' : undefined}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="inline-flex min-h-12 items-center font-medium text-navy underline-offset-4 hover:underline"
              aria-current={location.pathname === '/terms' ? 'page' : undefined}
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
