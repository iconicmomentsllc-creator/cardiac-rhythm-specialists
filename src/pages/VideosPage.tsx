import { Link } from 'react-router-dom'
import { ContentLayout } from '../components/ContentLayout'
import { VideosPageSections } from '../components/VideosPageSections'
import { practice } from '../data/practice'

export function VideosPage() {
  return (
    <ContentLayout
      path="/videos"
      eyebrow="Education"
      title="Educational videos"
      intro="Current educational videos from Dr. Polosajian are available on YouTube, with keyboard-accessible players on this site."
      related={[
        { to: '/media', label: 'Media library' },
        { to: '/education', label: 'Patient education' },
        { to: '/presentations', label: 'Presentations' },
      ]}
    >
      <VideosPageSections />
      <p>
        Additional current educational videos from Dr. Polosajian are available on{' '}
        <a
          href={practice.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4"
        >
          YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Individual videos from that channel can be added to this page when they are selected for
        the website.
      </p>
      <p>
        Short Instagram education is listed on the{' '}
        <Link to="/media" className="font-semibold underline underline-offset-4">
          media library
        </Link>
        , with links back to the written condition and treatment pages on this site.
      </p>
    </ContentLayout>
  )
}
