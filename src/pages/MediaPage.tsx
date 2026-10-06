import { Link } from 'react-router-dom'
import { ContentLayout } from '../components/ContentLayout'
import { InstagramCardList } from '../components/InstagramCard'
import { YouTubeFacade } from '../components/YouTubeFacade'
import { INSTAGRAM_LATEST } from '../data/instagram'
import { MEDIA_HUB_SECTIONS } from '../data/media'
import { practice } from '../data/practice'

const additionalMedia = MEDIA_HUB_SECTIONS.filter((item) => item.to !== '/videos')

const heartRhythmLinks = [
  { to: '/conditions/atrial-fibrillation', label: 'Atrial fibrillation', body: 'Written patient education about AFib, symptoms, evaluation, and care discussions.' },
  { to: '/conditions/arrhythmias', label: 'Arrhythmias', body: 'An overview of irregular, fast, or slow heart rhythms.' },
  { to: '/conditions/heart-palpitations', label: 'Heart palpitations', body: 'What palpitations are and when evaluation may be discussed.' },
  { to: '/treatments/pacemaker', label: 'Pacemakers', body: 'How pacemakers are used in heart-rhythm care.' },
  { to: '/treatments/cardiac-ablation', label: 'Catheter ablation', body: 'Educational information about ablation for selected arrhythmias.' },
] as const

const vascularLinks = [
  { to: '/conditions/peripheral-artery-disease', label: 'Peripheral artery disease', body: 'Patient education about PAD and circulation in the legs.' },
  { to: '/conditions/peripheral-vascular-disease', label: 'Peripheral vascular disease', body: 'How PVD relates to PAD and other circulation concerns.' },
  { to: '/conditions/vascular-symptoms', label: 'Vascular symptoms', body: 'Leg pain, cramps, or wounds that may warrant a vascular evaluation.' },
  { to: '/conditions/deep-vein-thrombosis', label: 'Deep vein thrombosis', body: 'Educational information about blood clots in the veins.' },
] as const

function EducationLinkList({
  items,
  label,
}: {
  items: readonly { to: string; label: string; body: string }[]
  label: string
}) {
  return (
    <nav aria-label={label} className="hub-list">
      <ul>
        {items.map((item) => (
          <li key={item.to} className="hub-item">
            <h3 className="hub-item-title">
              <Link to={item.to} className="hub-item-link">
                {item.label}
              </Link>
            </h3>
            <p className="hub-item-intro">{item.body}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MediaPage() {
  return (
    <ContentLayout
      path="/media"
      eyebrow="Patient Education"
      title="Media"
      intro={`A curated library of educational videos, Instagram explainers, and historical practice media from ${practice.physicianInformal} and Cardiac Rhythm Specialists.`}
      related={[
        { to: '/testimonials', label: 'Testimonials' },
        { to: '/photos', label: 'Photos' },
        { to: '/patient-resources', label: 'Patient resources' },
      ]}
    >
      <p>
        Current educational videos are available here and on YouTube. Instagram clips are a short-form
        supplement, not a substitute for the written pages on this website. Presentations, magazine PDFs,
        thank-you notes, and recovered illustrations are historical material from the original
        website. They are not presented as current medical guidelines.
      </p>

      <section aria-labelledby="featured-videos-heading" className="media-library-section">
        <h2 id="featured-videos-heading" className="font-serif text-2xl font-semibold text-navy">
          Featured Videos
        </h2>
        <p>
          Selected YouTube education from {practice.physicianInformal}. Players load only after you choose
          Play. Use the YouTube controls for captions when they are available.
        </p>
        <ul className="mt-6 grid items-stretch gap-10">
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
        <p className="mt-6">
          <Link to="/videos" className="font-semibold underline underline-offset-4">
            All educational videos
          </Link>
          {' · '}
          <a
            href={practice.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            YouTube channel
            <span className="sr-only"> {practice.youtubeHandle} (opens in a new tab)</span>
          </a>
        </p>
      </section>

      <section aria-labelledby="latest-instagram-heading" className="media-library-section">
        <h2 id="latest-instagram-heading" className="font-serif text-2xl font-semibold text-navy">
          Latest from {practice.physicianInformal}
        </h2>
        <p>
          Newer educational posts from {practice.instagramHandle} complement selected topics on this
          website. Open Instagram to watch the video. The linked pages below are the practice’s
          written patient education.
        </p>
        <InstagramCardList items={INSTAGRAM_LATEST} />
        <a
          href={practice.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mt-6"
        >
          View {practice.instagramHandle} on Instagram
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>

      <section aria-labelledby="heart-rhythm-media-heading" className="media-library-section">
        <h2 id="heart-rhythm-media-heading" className="font-serif text-2xl font-semibold text-navy">
          Heart Rhythm Education
        </h2>
        <p>
          Start with these permanent pages. Instagram and YouTube are supplementary, not a replacement
          for the condition and treatment information on this site.
        </p>
        <EducationLinkList items={heartRhythmLinks} label="Heart rhythm education pages" />
      </section>

      <section aria-labelledby="vascular-media-heading" className="media-library-section">
        <h2 id="vascular-media-heading" className="font-serif text-2xl font-semibold text-navy">
          Vascular / PAD Education
        </h2>
        <p>
          Written vascular education from the practice, including peripheral artery disease. Instagram
          videos about circulation are a short supplement to these pages.
        </p>
        <EducationLinkList items={vascularLinks} label="Vascular and PAD education pages" />
      </section>

      <section aria-labelledby="additional-media-heading" className="media-library-section">
        <h2 id="additional-media-heading" className="font-serif text-2xl font-semibold text-navy">
          Additional Media
        </h2>
        <p>
          Historical presentations, articles, photos, testimonials, and the illustrated education
          library.
        </p>
        <nav aria-label="Additional media sections" className="hub-list">
          <ul>
            {additionalMedia.map((item) => (
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
      </section>
    </ContentLayout>
  )
}
