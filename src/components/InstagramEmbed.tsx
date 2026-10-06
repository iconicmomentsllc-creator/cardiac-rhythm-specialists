import { useState } from 'react'
import { instagramWatchUrl, type InstagramEducationItem } from '../data/instagram'
import { practice } from '../data/practice'

function embedSrc(permalink: string) {
  const trimmed = permalink.replace(/\/$/, '')
  return `${trimmed}/embed`
}

export function InstagramEmbed({ item }: { item: InstagramEducationItem }) {
  const [load, setLoad] = useState(false)
  const permalink = item.permalink
  if (!permalink) return null

  const title = `Instagram video from ${practice.physicianInformal}: ${item.title}`

  if (!load) {
    return (
      <div className="instagram-embed-frame mt-4">
        <button
          type="button"
          className="instagram-embed-button"
          onClick={() => setLoad(true)}
          aria-label={`Load Instagram video: ${item.title}`}
        >
          Play Instagram video
        </button>
      </div>
    )
  }

  return (
    <div className="instagram-embed-frame mt-4">
      <iframe
        title={title}
        src={embedSrc(permalink)}
        className="instagram-embed-iframe"
        loading="lazy"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <p className="mt-3 text-base leading-relaxed text-navy">
        If the video does not load,{' '}
        <a
          href={instagramWatchUrl(item)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4"
        >
          open it on Instagram
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </div>
  )
}
