import { Link, useLocation } from 'react-router-dom'
import {
  instagramWatchUrl,
  type InstagramEducationItem,
} from '../data/instagram'
import { practice } from '../data/practice'
import { InstagramIcon } from './InstagramIcon'
import { InstagramEmbed } from './InstagramEmbed'

export function InstagramCard({
  item,
  headingLevel: Heading = 'h3',
}: {
  item: InstagramEducationItem
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  const location = useLocation()
  const watchUrl = instagramWatchUrl(item)
  const isCurrentPage = location.pathname === item.relatedTo

  return (
    <article className="instagram-card">
      <p className="section-label">Instagram</p>
      <Heading className="mt-2 font-serif text-xl font-semibold leading-snug text-navy">
        {item.title}
      </Heading>
      <p className="mt-3 text-lg leading-relaxed text-navy">{item.summary}</p>
      {item.permalink ? <InstagramEmbed item={item} /> : null}
      {isCurrentPage ? (
        <p className="mt-4 text-lg leading-relaxed text-navy">
          The written education on this page is the practice’s detailed guide. Instagram is a short
          video supplement.
        </p>
      ) : (
        <p className="mt-4 text-lg leading-relaxed text-navy">
          Read the practice page:{' '}
          <Link to={item.relatedTo} className="font-semibold underline underline-offset-4">
            {item.relatedLabel}
          </Link>
          .
        </p>
      )}
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-text mt-2 inline-flex items-center gap-3"
      >
        <InstagramIcon />
        Watch on Instagram
        <span className="sr-only">
          {` — ${item.title} from ${practice.physicianInformal} (opens in a new tab)`}
        </span>
      </a>
    </article>
  )
}

export function InstagramCardList({
  items,
  headingLevel = 'h3',
}: {
  items: readonly InstagramEducationItem[]
  headingLevel?: 'h2' | 'h3' | 'h4'
}) {
  return (
    <ul className="instagram-card-list">
      {items.map((item) => (
        <li key={item.id}>
          <InstagramCard item={item} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}
