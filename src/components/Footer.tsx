import { Link, useLocation } from 'react-router-dom'
import { practice } from '../data/practice'
import { InstagramIcon } from './InstagramIcon'

const careLinks = [
  { to: '/conditions', label: 'Conditions' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/testing', label: 'Testing' },
  { to: '/education', label: 'Patient Education' },
  { to: '/media', label: 'Media' },
] as const

const patientLinks = [
  { to: '/about-dr-polosajian', label: 'About' },
  { to: '/patient-resources', label: 'Patient Resources' },
  { to: '/appointment-request', label: 'Appointment Request' },
  { to: '/new-patients', label: 'New Patients' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
] as const

const legalLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/accessibility', label: 'Accessibility' },
  { to: '/medical-disclaimer', label: 'Medical Disclaimer' },
  { to: '/terms', label: 'Terms of Use' },
] as const

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7.1L15.8 12z" />
    </svg>
  )
}

function FooterNavList({
  label,
  links,
  pathname,
}: {
  label: string
  links: readonly { to: string; label: string }[]
  pathname: string
}) {
  return (
    <nav aria-label={label} className="footer-nav">
      <h2 className="footer-nav-heading">{label}</h2>
      <ul className="footer-link-list">
        {links.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="footer-link"
              aria-current={pathname === item.to ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  const location = useLocation()

  return (
    <footer className="overflow-x-clip border-t border-navy/10 bg-cream pb-8 text-navy print:pb-8">
      <div className="footer-grid mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="footer-brand">
          <h2 className="footer-nav-heading">Practice</h2>
          <p className="mt-3 font-serif text-2xl font-semibold tracking-tight">{practice.brandName}</p>
          <p className="physician-name mt-2 text-lg font-semibold leading-snug text-navy">
            {practice.physician}
          </p>
          <p className="mt-1 text-lg text-navy">{practice.specialtyLong}</p>
          <p className="mt-4 text-lg">
            <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
              {practice.email}
            </a>
          </p>
          <a href={practice.phoneTel} className="btn btn-primary mt-5">
            Call {practice.phoneDisplay}
          </a>
          <nav aria-label="Social media" className="footer-social">
            <a
              href={practice.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text inline-flex items-center gap-3"
            >
              <YouTubeIcon />
              YouTube
              <span className="sr-only">
                {`: ${practice.youtubeName} (opens in a new tab)`}
              </span>
            </a>
            <a
              href={practice.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text inline-flex items-center gap-3"
            >
              <InstagramIcon />
              Instagram
              <span className="sr-only">
                {`: ${practice.instagramHandle} (opens in a new tab)`}
              </span>
            </a>
          </nav>
        </div>

        <FooterNavList label="Care" links={careLinks} pathname={location.pathname} />
        <FooterNavList label="For Patients" links={patientLinks} pathname={location.pathname} />

        <div className="footer-office">
          <h2 className="footer-nav-heading">Visit Us</h2>
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
            className="btn-text mt-3 inline-flex items-center"
          >
            Get Directions
            <span className="sr-only"> to {practice.fullAddress} (opens in a new tab)</span>
          </a>
          <div className="footer-hours">
            <h3 className="footer-hours-heading">Office Hours</h3>
            <p>
              <span className="font-semibold">{practice.weekdayLabel}</span>
              <br />
              {practice.weekdayHours}
            </p>
            <p>
              <span className="font-semibold">{practice.weekendLabel}</span>
              <br />
              {practice.weekendHours}
            </p>
          </div>
        </div>
      </div>
      <div className="footer-legal-bar">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-base text-navy sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {practice.legalName}</p>
          <nav aria-label="Legal" className="footer-legal">
            {legalLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="footer-legal-link"
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
