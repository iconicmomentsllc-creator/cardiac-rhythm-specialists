import { practice } from '../data/practice'
import { Breadcrumbs } from './Breadcrumbs'
import { InquiryForm } from './InquiryForm'
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
            Phone, address, hours, and contact form
          </Heading>
          <p className="mt-4 text-lg leading-relaxed text-navy">
            {practice.legalName} is located in Reseda, California, and serves patients from Los
            Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale, and North
            Hollywood. Call{' '}
            <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
              {practice.phoneDisplay}
            </a>{' '}
            or email{' '}
            <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
              {practice.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-base font-semibold text-navy">Phone</h3>
              <a href={practice.phoneTel} className="btn btn-primary mt-4">
                Call {practice.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-base font-semibold text-navy">Email</h3>
              <p className="mt-3 text-lg">
                <a href={practice.emailMailto} className="font-semibold underline underline-offset-4">
                  {practice.email}
                </a>
              </p>
              <p className="mt-2 text-base leading-relaxed text-navy">
                Website forms also route to this address. Do not email detailed medical information.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-base font-semibold text-navy">Office address</h3>
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
              <h3 className="text-base font-semibold text-navy">Office hours</h3>
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

          <div className="rounded-2xl border border-navy/10 bg-white p-6 sm:p-8">
            <InquiryForm
              formType="contact"
              heading="Send a message"
              headingLevel={asPage ? 'h2' : 'h3'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
