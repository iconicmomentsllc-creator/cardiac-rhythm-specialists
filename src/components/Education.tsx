import { Link } from 'react-router-dom'
import { INSTAGRAM_HOME } from '../data/instagram'
import { MEDIA_HOME_LINKS } from '../data/media'
import { practice } from '../data/practice'
import { InstagramCardList } from './InstagramCard'
import { InstagramIcon } from './InstagramIcon'
import { YouTubeFacade } from './YouTubeFacade'

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-current">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.4.4A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7.1L15.8 12z" />
    </svg>
  )
}

export function Education() {
  return (
    <section id="videos" className="scroll-mt-28 border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <p className="section-label">Videos from Dr. Polosajian</p>
        <h2 className="section-heading mt-4">
          Videos &amp; Patient Education
        </h2>
        <p className="lede mt-4">
          Learn more about heart health and cardiac care through educational
          videos from {practice.physicianInformal}. Videos are hosted by YouTube. Use the
          player controls for captions and playback when they are available.
        </p>

        <ul className="mt-10 grid items-stretch gap-10 lg:grid-cols-3 lg:gap-8">
          {practice.featuredVideos.map((video) => (
            <li key={video.id} className="flex min-w-0 flex-col">
              <h3 className="video-title shrink-0 text-xl font-semibold leading-snug text-navy">
                {video.title}
              </h3>
              <div className="media-frame mt-4 aspect-video w-full">
                <YouTubeFacade videoId={video.id} title={video.title} />
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

        <div className="mt-14 max-w-3xl">
          <h3 className="font-serif text-2xl font-semibold text-navy">
            Latest from {practice.physicianInformal}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-navy">
            Short educational videos on Instagram ({practice.instagramHandle}) supplement the
            written pages on this website. They are not a substitute for a medical visit.
          </p>
          <InstagramCardList items={INSTAGRAM_HOME} headingLevel="h4" />
          <a
            href={practice.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-6 gap-3"
          >
            <InstagramIcon />
            View Instagram
            <span className="sr-only"> of {practice.physicianInformal} (opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-16 max-w-3xl border-t border-navy/10 pt-14">
          <p className="section-label">Media library</p>
          <h2 className="section-heading mt-4">
            Explore {practice.physicianInformal}’s Media & Education
          </h2>
          <p className="lede mt-4">
            Browse videos, presentations, articles, and illustrated patient education from Cardiac
            Rhythm Specialists in one place.
          </p>
          <Link to="/media" className="btn btn-primary mt-6">
            Browse the media library
          </Link>
          <nav aria-label="Media and education" className="hub-list">
            <ul>
              {MEDIA_HOME_LINKS.map((item) => (
                <li key={item.to} className="hub-item">
                  <h3 className="hub-item-title">
                    <Link to={item.to} className="hub-item-link">
                      {item.heading}
                    </Link>
                  </h3>
                  <p className="hub-item-intro">{item.body}</p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
