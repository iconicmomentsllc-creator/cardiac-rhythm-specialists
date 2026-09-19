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
        Watch more current videos on the{' '}
        <Link to="/media" className="font-semibold underline underline-offset-4">
          media library
        </Link>
        , the{' '}
        <Link to="/" className="font-semibold underline underline-offset-4">
          homepage
        </Link>
        , or on{' '}
        <a
          href={practice.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-4"
        >
          YouTube
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </ContentLayout>
  )
}
