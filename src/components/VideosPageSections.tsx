import {
  featuredVideos,
  educationalLibraryVideos,
  educationalLibraryHeading,
  historicalPracticeVideos,
  historicalPracticeHeading,
  historicalPracticeCaption,
} from '../data/videoLibrary'
import { YouTubeFacade } from './YouTubeFacade'

export function VideosPageSections() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="featured-videos-heading" className="space-y-6">
        <header className="space-y-3">
          <p className="text-base font-semibold tracking-wide text-gold">Current</p>
          <h2 id="featured-videos-heading" className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Featured Videos
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-navy">
            Current educational videos from Dr. Polosajian.
          </p>
        </header>
        <ul className="grid items-stretch gap-12">
          {featuredVideos.map((video) => (
            <li key={video.id} className="flex min-w-0 flex-col">
              <h3 className="video-title shrink-0 text-2xl font-semibold leading-snug text-navy">
                {video.title}
              </h3>
              <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                <YouTubeFacade videoId={video.id} title={video.title} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {educationalLibraryVideos.length > 0 ? (
        <section aria-labelledby="educational-library-heading" className="space-y-6 border-t border-navy/10 pt-16">
          <header className="space-y-3">
            <p className="text-base font-semibold tracking-wide text-gold">Library</p>
            <h2 id="educational-library-heading" className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              {educationalLibraryHeading}
            </h2>
          </header>
          <ul className="grid items-stretch gap-12">
            {educationalLibraryVideos.map((video) => (
              <li key={video.id} className="flex min-w-0 flex-col">
                <h3 className="video-title shrink-0 text-2xl font-semibold leading-snug text-navy">
                  {video.title}
                </h3>
                {video.publisherCredit ? (
                  <p className="mt-2 text-base leading-relaxed text-navy">{video.publisherCredit}</p>
                ) : null}
                <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                  <YouTubeFacade videoId={video.youtubeId} title={video.title} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {historicalPracticeVideos.length > 0 ? (
        <section aria-labelledby="historical-practice-heading" className="space-y-6 border-t border-navy/10 pt-16">
          <header className="space-y-3">
            <p className="text-base font-semibold tracking-wide text-gold">Archival</p>
            <h2 id="historical-practice-heading" className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              {historicalPracticeHeading}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-navy">{historicalPracticeCaption}</p>
          </header>
          <ul className="grid items-stretch gap-12">
            {historicalPracticeVideos.map((video) => (
              <li key={video.id} className="flex min-w-0 flex-col">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy">
                  <video
                    className="absolute inset-0 h-full w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    aria-label={historicalPracticeHeading}
                  >
                    <source src={video.src} type={video.mimeType} />
                    <track kind="captions" src={video.captionsSrc} srcLang="en" label="English" default />
                    Your browser cannot play this historical video.
                  </video>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
