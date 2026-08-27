import { useEffect } from 'react'
import type { ReactNode } from 'react'

export function PageIntro({
  title,
  eyebrow,
  children,
  documentTitle,
  description,
}: {
  title: string
  eyebrow: string
  children: ReactNode
  documentTitle: string
  description?: string
}) {
  useEffect(() => {
    document.title = documentTitle
    const meta = document.querySelector('meta[name="description"]')
    const previous = meta?.getAttribute('content') ?? null
    if (meta && description) {
      meta.setAttribute('content', description)
    }
    return () => {
      document.title = 'Cardiac Rhythm Specialists | Leo Polosajian, MD'
      if (meta && previous) {
        meta.setAttribute('content', previous)
      }
    }
  }, [documentTitle, description])

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <p className="section-label">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
        {title}
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy">
        {children}
      </div>
    </article>
  )
}
