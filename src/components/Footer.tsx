import { Link, useLocation } from 'react-router-dom'
import { practice } from '../data/practice'

const footerLinks = [
  { to: '/about-dr-polosajian', label: 'About' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/testing', label: 'Testing' },
  { to: '/patient-resources', label: 'Patient Resources' },
  { to: '/appointment-request', label: 'Appointment Request' },
  { to: '/new-patients', label: 'New Patients' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/education', label: 'Patient Education' },
  { to: '/media', label: 'Media' },
  { to: '/contact', label: 'Contact' },
] as const

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/accessibility', label: 'Accessibility' },
  { to: '/medical-disclaimer', label: 'Medical Disclaimer' },
  { to: '/terms', label: 'Terms of Use' },
  { to: '/faq', label: 'FAQ' },
] as const

export function Footer() {
  const location = useLocation()

  return (
    <footer className="overflow-x-clip border-t border-navy/10 bg-cream pb-8 text-navy print:pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight">{practice.brandName}</p>
          <p className="physician-name mt-2 text-lg font-semibold leading-snug text-navy">
            {practice.physician}
          </p>
          <p className="mt-1 text-lg text-navy">{practice.specialtyLong}</p>
          <p className="mt-3 text-lg">
            <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
              {practice.email}
            </a>
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
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
              </svg>
              Instagram
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>

        <div>
          <p className="text-base font-semibold text-navy">Office</p>
          <address className="mt-3 not-italic text-lg leading-relaxed text-navy">
            {practice.brandName}
            <br />
            {practice.streetAddress}
            <br />
            {practice.city}, {practice.state} {practice.zip}
            <br />
            <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
              {practice.phoneDisplay}
            </a>
            <br />
            <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
              {practice.email}
            </a>
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
          <nav aria-label="Footer" className="mt-6 flex flex-col gap-1">
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-base font-semibold text-navy">Office hours</p>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-base text-navy sm:px-6">
          <p>© {new Date().getFullYear()} {practice.legalName}</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="inline-flex min-h-14 items-center font-semibold underline underline-offset-4"
                aria-current={location.pathname === item.to ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="hidden print:block border-t border-navy/10 px-6 py-6 text-navy">
        <p className="font-semibold">{practice.brandName}</p>
        <p className="physician-name mt-1 font-semibold">{practice.physician}</p>
        <p>{practice.physicianTitle}</p>
        <p className="mt-2">
          {practice.streetAddress}, {practice.city}, {practice.state} {practice.zip}
        </p>
        <p>{practice.phoneDisplay}</p>
      </div>
    </footer>
  )
}
