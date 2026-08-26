import { useEffect } from 'react'
import type { ReactNode } from 'react'

export function PageIntro({
  title,
  eyebrow,
  children,
  documentTitle,
}: {
  title: string
  eyebrow: string
  children: ReactNode
  documentTitle: string
}) {
  useEffect(() => {
    document.title = documentTitle
    return () => {
      document.title = 'Cardiac Rhythm Specialists | Leo Polosajian, MD'
    }
  }, [documentTitle])

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-base font-semibold text-gold">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-navy">
        {title}
      </h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy">
        {children}
      </div>
    </article>
  )
}
