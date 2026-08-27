const cards = [
  {
    href: '#care',
    title: 'Irregular or Racing Heartbeat',
    body: 'Learn about AFib, arrhythmias and other heart rhythm concerns.',
  },
  {
    href: '#care',
    title: 'Fainting or Dizziness',
    body: 'Learn about evaluation for symptoms that may be related to your heart rhythm.',
  },
  {
    href: '#care',
    title: 'Pacemaker or Device Care',
    body: 'Learn about pacemakers, defibrillators and cardiac device care.',
  },
  {
    href: '#care',
    title: 'Chest Pain or Heart Concerns',
    body: 'Learn about cardiovascular evaluation and diagnostic care.',
  },
  {
    href: '#care',
    title: 'Leg Swelling or Circulation Concerns',
    body: 'Learn about evaluation of vascular and circulation-related concerns.',
  },
  {
    href: '#contact',
    title: 'I’m Not Sure Where to Start',
    body: 'Contact our office and we’ll help you determine the appropriate next step.',
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
              <a
                href={card.href}
                className="help-card flex h-full min-h-44 flex-col rounded-2xl border border-navy/10 bg-white px-6 py-7 no-underline"
              >
                <h3 className="font-serif text-xl font-semibold leading-snug text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-navy">{card.body}</p>
              </a>
            </li>
          ))}
        </ul>

        <a href="#care" className="btn btn-secondary mt-10 w-full sm:w-auto">
          View All Conditions &amp; Treatments
        </a>
      </div>
    </section>
  )
}
