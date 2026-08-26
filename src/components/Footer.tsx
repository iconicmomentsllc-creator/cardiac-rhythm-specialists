import { Link, useLocation } from 'react-router-dom'
import { practice } from '../data/practice'

export function Footer() {
  const location = useLocation()

  return (
    <footer className="border-t border-navy/10 bg-cream pb-32 text-navy sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight">{practice.legalName}</p>
          <p className="mt-2 text-lg text-navy">
            {practice.physician} — {practice.specialty}
          </p>
          <a href={practice.phoneTel} className="btn btn-primary mt-5">
            Call {practice.phoneDisplay}
          </a>
          <nav aria-label="Social media" className="mt-6 flex flex-col gap-2">
            <a
              href={practice.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text inline-flex items-center gap-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7.1L15.8 12z" />
              </svg>
              YouTube
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={practice.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text inline-flex items-center gap-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1.1 1.1 0 0 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
              </svg>
              Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>

        <div>
          <p className="text-base font-semibold text-gold">Office</p>
          <address className="mt-3 not-italic text-lg leading-relaxed text-navy">
            {practice.streetAddress}
            <br />
            {practice.city}, {practice.state} {practice.zip}
          </address>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text mt-4 inline-flex items-center"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
        </div>

        <div>
          <p className="text-base font-semibold text-gold">Office hours</p>
          <div className="mt-3 space-y-4 text-lg">
            <div>
              <p className="font-semibold">{practice.weekdayLabel}</p>
              <p>{practice.weekdayHours}</p>
            </div>
            <div>
              <p className="font-semibold">{practice.weekendLabel}</p>
              <p>{practice.weekendHours}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-navy/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-base text-navy sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {practice.legalName}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/accessibility"
              className="inline-flex min-h-14 items-center font-semibold underline-offset-4 hover:underline"
              aria-current={location.pathname === '/accessibility' ? 'page' : undefined}
            >
              Accessibility
            </Link>
            <Link
              to="/privacy"
              className="inline-flex min-h-14 items-center font-semibold underline-offset-4 hover:underline"
              aria-current={location.pathname === '/privacy' ? 'page' : undefined}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="inline-flex min-h-14 items-center font-semibold underline-offset-4 hover:underline"
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
