import type { MedicalPageImage, MedicalSection } from '../data/medicalPages'

const LIBRARY_CAPTION = 'Illustration from the practice’s former education library.'
const WIDE_RATIO = 2.5

function isWideStrip(image: MedicalPageImage) {
  return image.width / Math.max(image.height, 1) > WIDE_RATIO
}

export function TopicImages({ images }: { images?: MedicalPageImage[] }) {
  if (!images?.length) return null

  const uniqueCaptions = images
    .map((image) => image.caption?.trim())
    .filter((caption, index): caption is string => {
      const alt = images[index]?.alt.trim()
      return Boolean(caption) && caption !== alt
    })
  const visibleCaption = uniqueCaptions.length === 1 ? uniqueCaptions[0] : LIBRARY_CAPTION
  const stackImages = images.some(isWideStrip)

  return (
    <figure className="topic-media">
      <ul
        className={`topic-media-list${images.length > 1 && !stackImages ? ' topic-media-list--split' : ''}`}
      >
        {images.map((image) => {
          const wide = isWideStrip(image)
          return (
            <li
              key={image.src}
              className={wide ? 'topic-media-item topic-media-item--wide' : 'topic-media-item'}
            >
              <div className={wide ? 'topic-media-frame topic-media-frame--wide' : 'topic-media-frame'}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className={wide ? 'topic-media-image topic-media-image--wide' : 'topic-media-image'}
                />
              </div>
            </li>
          )
        })}
      </ul>
      <figcaption className="topic-media-caption">{visibleCaption}</figcaption>
    </figure>
  )
}

export function TopicSections({
  sections,
}: {
  sections: MedicalSection[]
}) {
  return (
    <div className="topic-sections">
      {sections.map((section) => (
        <section key={section.heading} className="topic-section">
          <h2 className="topic-section-heading">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}
