import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BOOKLETS } from '../data/booklets'
import { ContentLayout } from '../components/ContentLayout'
import { NotFoundPage } from './NotFoundPage'

export function BookletPage({ slug }: { slug: string }) {
  const booklet = BOOKLETS[slug]
  const liveId = useId()
  const headingId = `${liveId}-heading`
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [index, setIndex] = useState(0)
  const skipInitialFocus = useRef(true)

  useEffect(() => {
    if (skipInitialFocus.current) {
      skipInitialFocus.current = false
      return
    }
    headingRef.current?.focus()
  }, [index])

  if (!booklet) return <NotFoundPage />

  const page = booklet.pages[index]
  const pageCount = booklet.pages.length
  const current = index + 1
  const pageTitle = page?.heading?.trim() || `Booklet page ${current}`

  function previous() {
    setIndex((value) => Math.max(0, value - 1))
  }

  function next() {
    setIndex((value) => Math.min(pageCount - 1, value + 1))
  }

  return (
    <ContentLayout
      path={`/education/booklets/${booklet.slug}`}
      eyebrow="Illustrated education"
      title={booklet.title}
      intro={booklet.description}
      showDisclaimer
      related={[
        { to: '/education', label: 'Patient education' },
        { to: '/media', label: 'Media library' },
        { to: '/conditions', label: 'Conditions' },
        { to: '/appointment-request', label: 'Appointment request' },
      ]}
    >
      <p>
        This booklet originally used Flash. The original illustrated pages are shown here, with a
        text version recovered from those images so the wording is available without relying on the
        picture alone. The material is educational and may reflect older artwork.
      </p>
      {page ? (
        <article className="mt-8" aria-labelledby={headingId}>
          <h2
            ref={headingRef}
            id={headingId}
            tabIndex={-1}
            className="font-serif text-2xl font-semibold text-navy"
          >
            {pageTitle}
          </h2>
          <p className="mt-2 text-base text-navy" aria-live="polite">
            Page {current} of {pageCount}.
          </p>
          <figure className="mt-6">
            <img
              src={page.src}
              alt={page.alt}
              width={800}
              height={600}
              decoding="async"
              className="h-auto w-full rounded-2xl border border-navy/10 bg-white"
            />
            <figcaption id={liveId} className="mt-3 text-base text-navy">
              Original booklet illustration for this page.
            </figcaption>
          </figure>
          <div className="mt-8 space-y-4">
            {renderRecoveredText(page.paragraphs, pageTitle)}
            {page.captions.length > 0 ? (
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy">Printed captions</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  {page.captions.map((caption, captionIndex) => (
                    <li key={`${current}-caption-${captionIndex}`}>{caption}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {page.status === 'needs-review' ? (
              <aside className="rounded-2xl border-2 border-[var(--color-ui-border)] bg-mist px-5 py-4">
                <p className="font-semibold text-navy">Needs physician or manual review</p>
                <p className="mt-2">
                  {page.reviewNote ??
                    'Some wording on this page could not be recovered reliably from the scan. The original image is shown above. Do not guess missing medical text.'}
                </p>
              </aside>
            ) : page.reviewNote ? (
              <p className="text-base text-navy">{page.reviewNote}</p>
            ) : null}
          </div>
        </article>
      ) : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" className="btn btn-secondary" onClick={previous} disabled={index === 0}>
          Previous page
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={next}
          disabled={index === pageCount - 1}
        >
          Next page
        </button>
      </div>
      <h3 className="mt-10 font-serif text-xl font-semibold text-navy">All pages in this booklet</h3>
      <ol className="mt-4 list-decimal space-y-2 pl-6">
        {booklet.pages.map((item, pageIndex) => (
          <li key={item.src}>
            <button
              type="button"
              className="btn-text min-h-11 text-left"
              onClick={() => setIndex(pageIndex)}
              aria-current={pageIndex === index ? 'page' : undefined}
            >
              {item.heading.trim() || `Page ${pageIndex + 1}`}
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-8">
        Return to{' '}
        <Link to="/education" className="font-semibold underline underline-offset-4">
          patient education
        </Link>
        .
      </p>
    </ContentLayout>
  )
}

function looksLikePrintedHeading(text: string) {
  const trimmed = text.trim()
  if (!trimmed || trimmed.startsWith('• ')) return false
  if (trimmed.length > 80) return false
  if (/[.!?]$/.test(trimmed)) return false
  return true
}

function renderRecoveredText(paragraphs: string[], pageHeading: string) {
  const blocks: ReactNode[] = []
  let index = 0

  while (index < paragraphs.length) {
    const paragraph = paragraphs[index]
    if (!paragraph) {
      index += 1
      continue
    }
    if (index === 0 && paragraph === pageHeading) {
      index += 1
      continue
    }

    if (paragraph.startsWith('• ')) {
      const items: string[] = []
      while (index < paragraphs.length) {
        const bullet = paragraphs[index]
        if (!bullet?.startsWith('• ')) break
        items.push(bullet.slice(2))
        index += 1
      }
      blocks.push(
        <ul key={`list-${blocks.length}`} className="list-disc space-y-2 pl-6">
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>,
      )
      continue
    }

    if (looksLikePrintedHeading(paragraph)) {
      blocks.push(
        <h3 key={`heading-${blocks.length}`} className="font-serif text-xl font-semibold text-navy">
          {paragraph}
        </h3>,
      )
    } else {
      blocks.push(<p key={`p-${blocks.length}`}>{paragraph}</p>)
    }
    index += 1
  }

  return blocks
}
