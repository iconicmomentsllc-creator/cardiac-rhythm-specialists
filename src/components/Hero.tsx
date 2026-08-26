import { practice } from '../data/practice'

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="text-base font-semibold text-gold">
          {practice.legalName}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:leading-[1.15]">
          Specialized Care for Your Heart&apos;s Rhythm
        </h1>
        <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-navy">
          {practice.physician} is a cardiologist and electrophysiologist.
        </p>
        <p className="mt-3 max-w-2xl text-xl leading-relaxed text-navy">
          This practice evaluates and treats heart rhythm disorders at our office
          in Reseda, California.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={practice.phoneTel}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-navy px-8 text-lg font-semibold text-white hover:bg-navy-soft"
          >
            Call {practice.phoneDisplay}
          </a>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-navy px-8 text-lg font-semibold text-navy"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
          <a
            href="#about"
            className="inline-flex min-h-14 items-center justify-center px-2 text-lg font-semibold text-navy underline underline-offset-4"
          >
            Learn About Dr. Polosajian
          </a>
        </div>
        <p className="mt-8 text-lg font-medium text-navy">
          {practice.streetAddress}
          <br />
          {practice.city}, {practice.state} {practice.zip}
        </p>
      </div>
    </section>
  )
}
