import { practice } from '../data/practice'

export function Hero() {
  return (
    <section id="home" className="relative overflow-x-clip bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold-soft/70" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-10 hidden h-24 w-1/2 max-w-xl text-navy/[0.07] lg:block"
        viewBox="0 0 720 90"
        fill="none"
      >
        <path
          d="M0 48h210l22-28 28 56 24-42 18 14h418"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {practice.legalName}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl lg:text-[3.35rem] lg:leading-[1.15]">
          Specialized Care for Your Heart&apos;s Rhythm
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Cardiac Rhythm Specialists provides focused evaluation and treatment of
          heart rhythm disorders under the care of {practice.physician}.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={practice.phoneTel}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-7 text-base font-semibold text-white hover:bg-navy-soft"
          >
            Call {practice.phoneDisplay}
          </a>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/20 px-7 text-base font-semibold text-navy hover:border-navy"
          >
            Get Directions to Our Reseda Office
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">
          {practice.streetAddress}, {practice.city}, {practice.state} {practice.zip}
        </p>
      </div>
    </section>
  )
}
