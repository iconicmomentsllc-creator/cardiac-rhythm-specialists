import { useState } from 'react'
import { practice } from '../data/practice'

export function YouTubeFacade({
  videoId,
  title,
}: {
  videoId: string
  title: string
}) {
  const [play, setPlay] = useState(false)
  const label = `Play educational video: ${title}`

  if (play) {
    return (
      <iframe
        title={`Educational video from ${practice.physicianInformal}: ${title}`}
        src={`https://www.youtube.com/embed/${videoId}?rel=0&cc_load_policy=1&autoplay=1`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    )
  }

  return (
    <button
      type="button"
      className="absolute inset-0 flex h-full w-full items-center justify-center bg-navy"
      onClick={() => setPlay(true)}
      aria-label={label}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-80"
      />
      <span className="absolute inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-navy px-4 text-base font-semibold text-white">
        Play
      </span>
    </button>
  )
}
