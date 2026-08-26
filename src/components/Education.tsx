import { practice } from '../data/practice'

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7.1L15.8 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" />
    </svg>
  )
}

export function Education() {
  return (
    <section id="videos" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Videos from Dr. Polosajian</p>
        <h2 className="mt-3 max-w-3xl font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-semibold tracking-tight text-navy">
          Videos &amp; Patient Education
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy">
          Learn more about heart health and cardiac care through educational
          videos from Leo Polosajian, MD.
        </p>

        <ul className="mt-10 grid items-stretch gap-10 lg:grid-cols-3 lg:gap-8">
          {practice.featuredVideos.map((video) => (
            <li key={video.id} className="flex min-w-0 flex-col">
              <h3 className="video-title shrink-0 text-xl font-semibold leading-snug text-navy">
                {video.title}
              </h3>
              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                <iframe
                  title={`Educational video from Leo Polosajian, MD: ${video.title}`}
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </li>
          ))}
        </ul>

        <a
          href={practice.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-10 gap-3"
        >
          <YouTubeIcon />
          Watch More on YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <div className="mt-14 max-w-2xl">
          <h3 className="font-serif text-2xl font-semibold text-navy">
            Follow Dr. Leo on Instagram
          </h3>
          <p className="mt-3 text-xl font-semibold text-navy">{practice.instagramHandle}</p>
          <p className="mt-3 text-lg leading-relaxed text-navy">
            See additional heart-health education from {practice.physician} on
            Instagram.
          </p>
          <a
            href={practice.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6 gap-3"
          >
            <InstagramIcon />
            View Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
