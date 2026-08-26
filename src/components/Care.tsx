import { practice } from '../data/practice'

const careItems = [
  {
    title: 'Cardiology consultation',
    body: `Office visits with ${practice.physician} for cardiology and heart rhythm concerns.`,
  },
  {
    title: 'Heart rhythm evaluation',
    body: 'Evaluation of palpitations, irregular heartbeat, and other rhythm-related symptoms.',
  },
  {
    title: 'Cardiac electrophysiology care',
    body: 'Focused assessment and treatment planning for heart rhythm disorders.',
  },
] as const

export function Care() {
  return (
    <section id="care" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Heart rhythm care
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy sm:text-4xl">
            Thoughtful care for heart rhythm disorders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {practice.brandName} provides cardiology care centered on cardiac
            electrophysiology and the evaluation and treatment of heart rhythm
            disorders at our office in Reseda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {careItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-navy/8 bg-mist/70 p-7"
            >
              <div className="mb-5 h-px w-10 bg-gold-soft" />
              <h3 className="font-serif text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
