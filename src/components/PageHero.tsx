import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? <p className="section-label">{eyebrow}</p> : null}
      <h1 className="physician-name mt-3 font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-semibold leading-snug tracking-tight text-navy">
        {title}
      </h1>
      {intro ? (
        <p className="mt-5 text-xl font-medium leading-relaxed text-navy">{intro}</p>
      ) : null}
      {children}
    </header>
  )
}
