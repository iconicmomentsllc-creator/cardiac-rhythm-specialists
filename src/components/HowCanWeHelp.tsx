import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/conditions/atrial-fibrillation',
    title: 'Irregular or Racing Heartbeat',
    body: 'Learn about AFib, arrhythmias and other heart rhythm concerns.',
  },
  {
    to: '/conditions/syncope',
    title: 'Fainting or Dizziness',
    body: 'Learn about syncope evaluation and related heart rhythm testing.',
  },
  {
    to: '/treatments/pacemaker',
    title: 'Pacemaker or Device Care',
    body: 'Learn about pacemakers, defibrillators and cardiac device care.',
  },
  {
    to: '/testing',
    title: 'Monitoring and Tests',
    body: 'Learn about Holter monitors, event monitors, EKGs, and device checks.',
  },
  {
    to: '/appointment-request',
    title: 'I’m Not Sure Where to Start',
    body: 'Call our office to request an appointment. Staff will help with scheduling and insurance information.',
  },
] as const

export function HowCanWeHelp() {
  return (
    <section
      id="how-can-we-help"
      aria-labelledby="how-can-we-help-heading"
      className="scroll-mt-28 border-t border-navy/10 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label uppercase tracking-[0.08em]">Patient Care</p>
        <h2
          id="how-can-we-help-heading"
          className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy"
        >
          How Can We Help?
        </h2>
        <p className="mt-3 max-w-2xl text-xl font-medium leading-relaxed text-navy">
          What brings you in today?
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy">
          Explore common reasons patients visit our practice or contact our office
          if you are unsure where to begin.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((card) => (
            <li key={card.title} className="min-w-0">
              <Link
                to={card.to}
                className="help-card flex h-full min-h-44 flex-col rounded-2xl border border-navy/10 bg-white px-6 py-7 no-underline"
              >
                <h3 className="font-serif text-xl font-semibold leading-snug text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-navy">{card.body}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/conditions" className="btn btn-secondary w-full sm:w-auto">
            View Heart Rhythm Conditions
          </Link>
          <Link to="/treatments" className="btn btn-secondary w-full sm:w-auto">
            View Treatments &amp; Device Care
          </Link>
          <Link to="/testing" className="btn btn-secondary w-full sm:w-auto">
            View Testing &amp; Monitoring
          </Link>
        </div>
      </div>
    </section>
  )
}
