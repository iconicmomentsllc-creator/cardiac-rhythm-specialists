import { Link } from 'react-router-dom'
import { ContentLayout } from '../components/ContentLayout'
import { MEDIA_HUB_SECTIONS } from '../data/media'
import { practice } from '../data/practice'

export function MediaPage() {
  return (
    <ContentLayout
      path="/media"
      eyebrow="Media library"
      title="Media"
      intro={`Videos, presentations, articles, and recovered educational material from ${practice.physicianInformal} and Cardiac Rhythm Specialists.`}
      related={[
        { to: '/photos', label: 'Photos' },
        { to: '/patient-resources', label: 'Patient resources' },
      ]}
    >
      <p>
        Current educational videos are available here and on YouTube. Presentations, magazine PDFs,
        and recovered illustrations are historical material from the original website. They are not
        presented as current medical guidelines.
      </p>
      <nav aria-label="Media sections" className="hub-list">
        <ul>
          {MEDIA_HUB_SECTIONS.map((item) => (
            <li key={item.to} className="hub-item">
              <h2 className="hub-item-title">
                <Link to={item.to} className="hub-item-link">
                  {item.heading}
                </Link>
              </h2>
              <p className="hub-item-intro">{item.body}</p>
            </li>
          ))}
        </ul>
      </nav>
    </ContentLayout>
  )
}
