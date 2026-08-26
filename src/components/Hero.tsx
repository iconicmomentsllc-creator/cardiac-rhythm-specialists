import { practice } from '../data/practice'

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-10 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-20">
        <p className="section-label uppercase tracking-[0.08em]">
          Cardiac Electrophysiology
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.25rem,5vw,3.25rem)] font-semibold tracking-tight text-navy lg:leading-[1.15]">
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
          <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
            Call {practice.phoneDisplay}
          </a>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full sm:w-auto"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
          <a href="#about" className="btn-text inline-flex items-center">
            Learn About Dr. Polosajian
          </a>
        </div>
        <p className="mt-8 text-lg font-medium leading-relaxed text-navy">
          {practice.streetAddress}
          <br />
          {practice.city}, {practice.state} {practice.zip}
        </p>
      </div>
    </section>
  )
}
