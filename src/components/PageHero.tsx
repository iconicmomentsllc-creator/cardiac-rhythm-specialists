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
      <h1 className="page-title physician-name mt-4">
        {title}
      </h1>
      {intro ? (
        <p className="mt-5 text-xl font-medium leading-relaxed text-navy">{intro}</p>
      ) : null}
      {children}
    </header>
  )
}
