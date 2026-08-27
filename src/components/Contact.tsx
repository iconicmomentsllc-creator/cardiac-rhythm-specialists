import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { practice } from '../data/practice'

type Field = 'name' | 'phone' | 'email' | 'topic'
type Errors = Partial<Record<Field, string>>

const fieldOrder: Field[] = ['name', 'phone', 'email', 'topic']

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const ids = useId()
  const warningId = `${ids}-warning`
  const successRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const topicRef = useRef<HTMLSelectElement>(null)
  const fieldRefs = {
    name: nameRef,
    phone: phoneRef,
    email: emailRef,
    topic: topicRef,
  }

  useEffect(() => {
    if (submitted) successRef.current?.focus()
  }, [submitted])

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const next: Errors = {}
    if (!String(data.get('name') ?? '').trim()) next.name = 'Enter your full name.'
    if (!String(data.get('phone') ?? '').trim()) next.phone = 'Enter a phone number.'
    const email = String(data.get('email') ?? '').trim()
    if (!email) next.email = 'Enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'
    if (!String(data.get('topic') ?? '').trim()) next.topic = 'Select a topic.'
    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validate(event.currentTarget)
    setErrors(next)
    const firstError = fieldOrder.find((field) => next[field])
    if (firstError) {
      fieldRefs[firstError].current?.focus()
      return
    }
    setSubmitted(true)
  }

  function fieldError(field: Field) {
    const errorId = `${ids}-${field}-error`
    return errors[field] ? (
      <p id={errorId} className="mt-1 text-base font-medium text-navy">
        {errors[field]}
      </p>
    ) : null
  }

  function describedBy(field: Field, extra?: string) {
    const parts = [
      extra,
      errors[field] ? `${ids}-${field}-error` : null,
    ].filter(Boolean)
    return parts.length ? parts.join(' ') : undefined
  }

  return (
    <section id="contact" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="section-label">Contact the office</p>
          <h2 className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
            Phone, address, hours, and directions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy">
            {practice.legalName} is located in Reseda, California. The fastest way
            to reach us is to call{' '}
            <a
              href={practice.phoneTel}
              className="font-semibold underline underline-offset-4"
            >
              {practice.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-base font-semibold text-gold">Phone</h3>
              <a href={practice.phoneTel} className="btn btn-primary mt-4">
                Call {practice.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="text-base font-semibold text-gold">Office address</h3>
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
              <h3 className="text-base font-semibold text-gold">Office hours</h3>
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

            <div className="overflow-hidden rounded-2xl border border-navy/10">
              <iframe
                title={`Map of ${practice.legalName} at ${practice.fullAddress}`}
                src={practice.mapsEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-base leading-relaxed text-navy">
              The map above is provided by Google Maps and may not be fully
              accessible. If it is not usable, use{' '}
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
            <h3 className="font-serif text-2xl font-semibold text-navy">Send a message</h3>
            <p
              id={warningId}
              role="note"
              className="mt-3 rounded-xl border-2 border-[var(--color-ui-border)] bg-white px-4 py-3 text-base leading-relaxed text-navy"
            >
              Please do not use this form for medical emergencies or to submit
              sensitive medical information. If you are experiencing a medical
              emergency, call{' '}
              <a href="tel:911" className="font-semibold underline underline-offset-4">
                911
              </a>
              .
            </p>
            <p className="mt-3 text-base leading-relaxed text-navy">
              This form is not a secure channel for protected health information.
              Please call the office for appointments and other requests.
            </p>

            {submitted ? (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                className="mt-8 rounded-xl border-2 border-[var(--color-ui-border)] bg-white p-5"
              >
                <p className="text-lg font-semibold text-navy">
                  Thank you. Your request was received on this page.
                </p>
                <p className="mt-2 text-lg leading-relaxed text-navy">
                  Please call{' '}
                  <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
                    {practice.phoneDisplay}
                  </a>{' '}
                  to complete your request. This form does not send information to the office.
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate aria-describedby={warningId}>
                {fieldOrder.some((field) => errors[field]) ? (
                  <div role="alert" className="rounded-xl border-2 border-[var(--color-ui-border)] bg-white px-4 py-3">
                    <p className="font-semibold text-navy">Please correct the following:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-base text-navy">
                      {fieldOrder.map((field) =>
                        errors[field] ? (
                          <li key={field}>
                            <a
                              href={`#${ids}-${field}`}
                              className="font-semibold underline underline-offset-4"
                            >
                              {errors[field]}
                            </a>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  </div>
                ) : null}
                <div>
                  <label htmlFor={`${ids}-name`} className="block text-base font-semibold text-navy">
                    Full name (required)
                  </label>
                  <input
                    ref={nameRef}
                    id={`${ids}-name`}
                    required
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={describedBy('name')}
                    name="name"
                    className="site-input mt-1.5"
                  />
                  {fieldError('name')}
                </div>
                <div>
                  <label htmlFor={`${ids}-phone`} className="block text-base font-semibold text-navy">
                    Phone (required)
                  </label>
                  <input
                    ref={phoneRef}
                    id={`${ids}-phone`}
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={errors.phone ? true : undefined}
                    aria-describedby={describedBy('phone')}
                    name="phone"
                    className="site-input mt-1.5"
                  />
                  {fieldError('phone')}
                </div>
                <div>
                  <label htmlFor={`${ids}-email`} className="block text-base font-semibold text-navy">
                    Email (required)
                  </label>
                  <input
                    ref={emailRef}
                    id={`${ids}-email`}
                    required
                    type="email"
                    aria-required="true"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={describedBy('email')}
                    name="email"
                    autoComplete="email"
                    className="site-input mt-1.5"
                  />
                  {fieldError('email')}
                </div>
                <div>
                  <label htmlFor={`${ids}-topic`} className="block text-base font-semibold text-navy">
                    How can we help? (required)
                  </label>
                  <select
                    ref={topicRef}
                    id={`${ids}-topic`}
                    required
                    name="topic"
                    defaultValue=""
                    aria-required="true"
                    aria-invalid={errors.topic ? true : undefined}
                    aria-describedby={describedBy('topic')}
                    className="site-input mt-1.5"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="appointment">Appointment</option>
                    <option value="referral">Referral</option>
                    <option value="general">General office question</option>
                  </select>
                  {fieldError('topic')}
                </div>
                <div>
                  <label htmlFor={`${ids}-message`} className="block text-base font-semibold text-navy">
                    Message (optional)
                  </label>
                  <textarea
                    id={`${ids}-message`}
                    name="message"
                    rows={4}
                    aria-describedby={`${ids}-message-hint`}
                    className="site-input mt-1.5 min-h-32 py-3"
                  />
                  <p id={`${ids}-message-hint`} className="mt-1 text-base text-navy">
                    Do not include sensitive medical information.
                  </p>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message to the Office
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
