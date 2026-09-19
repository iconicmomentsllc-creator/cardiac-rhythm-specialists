import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { AppointmentCallPanel } from './AppointmentCallPanel'
import { Breadcrumbs } from './Breadcrumbs'
import { LazyMap } from './LazyMap'
import { breadcrumbsFor } from '../seo/structuredData'

export function Contact({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? 'h1' : 'h2'

  return (
    <section id="contact" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {asPage ? <Breadcrumbs items={breadcrumbsFor('/contact')} /> : null}
          <p className="section-label">Contact the office</p>
          <Heading className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
            Phone, address, hours, and directions
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-navy">
            {practice.legalName} is located in Reseda, California, and serves patients from Los
            Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale, and North
            Hollywood. Call{' '}
            <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
              {practice.phoneDisplay}
            </a>{' '}
            to reach the office.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-navy">Phone</h2>
              <a href={practice.phoneTel} className="btn btn-primary mt-4">
                Call {practice.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-navy">Email</h2>
              <p className="mt-3 text-lg">
                <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
                  {practice.email}
                </a>
              </p>
              <p className="mt-3 text-base leading-relaxed text-navy">
                Email is intended for administrative inquiries only. Please do not send medical
                records, protected health information, or other sensitive patient information by
                email.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-navy">Office address</h2>
              <address className="mt-3 not-italic text-lg leading-relaxed text-navy">
                {practice.legalName}
                <br />
                {practice.streetAddress}
                <br />
                {practice.city}, {practice.state} {practice.zip}
              </address>
              <a
                href={practice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5"
              >
                Get Directions
                <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
              </a>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h2 className="font-serif text-2xl font-semibold text-navy">Office hours</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-lg font-semibold text-navy">{practice.weekdayLabel}</p>
                  <p className="mt-1 text-lg text-navy">{practice.weekdayHours}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">{practice.weekendLabel}</p>
                  <p className="mt-1 text-lg text-navy">{practice.weekendHours}</p>
                </div>
              </div>
            </div>

            <LazyMap />
            <p className="text-base leading-relaxed text-navy">
              The map above is provided by Google Maps and may not be fully accessible. If it is
              not usable, use{' '}
              <a
                href={practice.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4"
              >
                Get Directions
                <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
              </a>{' '}
              or call{' '}
              <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
                {practice.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy">Request an appointment</h2>
            <p className="mt-3 text-lg leading-relaxed text-navy">
              Appointments are scheduled by phone. Staff can help with scheduling and insurance
              information.
            </p>
            <div className="mt-6">
              <AppointmentCallPanel />
            </div>
            <p className="mt-6">
              <Link to="/appointment-request" className="font-semibold underline underline-offset-4">
                Appointment information
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
