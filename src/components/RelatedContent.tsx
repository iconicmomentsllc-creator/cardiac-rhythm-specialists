import { Link } from 'react-router-dom'
import type { RelatedLink } from '../data/medicalPages'

export function RelatedContent({
  heading = 'Related information',
  links,
  variant = 'default',
}: {
  heading?: string
  links: RelatedLink[]
  variant?: 'default' | 'topic'
}) {
  if (!links.length) return null

  return (
    <section className="mt-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="topic-section-heading">
        {heading}
      </h2>
      {variant === 'topic' ? (
        <ul className="mt-2">
          {links.map((link) => (
            <li key={link.to} className="border-b border-navy/10">
              <Link
                to={link.to}
                className="flex min-h-14 items-center py-3 font-semibold text-navy underline underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="flex min-h-14 items-center rounded-xl border border-navy/10 px-4 font-semibold text-navy underline underline-offset-4 hover:border-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
