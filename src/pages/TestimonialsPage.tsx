import { ContentLayout } from '../components/ContentLayout'
import {
  HANDWRITTEN_NOTES,
  HANDWRITTEN_NOTES_IMAGE,
  MARCH_2010_LETTER,
  MARCH_2010_LETTER_IMAGE,
  TESTIMONIALS_INTRO,
} from '../data/testimonials'

export function TestimonialsPage() {
  return (
    <ContentLayout
      path="/testimonials"
      eyebrow="Patient comments"
      title="Testimonials"
      intro={TESTIMONIALS_INTRO}
      showDisclaimer
      related={[
        { to: '/photos', label: 'Photos' },
        { to: '/media', label: 'Media library' },
        { to: '/articles', label: 'Articles' },
      ]}
    >
      <p>
        The original website published these comments as scans. The wording below follows the
        original notes and letter, including original spelling. The address on the 2010 letter is
        historical and is not the current office address.
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-navy">Handwritten notes</h2>
        <figure className="mt-6">
          <img
            src={HANDWRITTEN_NOTES_IMAGE.src}
            alt={HANDWRITTEN_NOTES_IMAGE.alt}
            width={HANDWRITTEN_NOTES_IMAGE.width}
            height={HANDWRITTEN_NOTES_IMAGE.height}
            decoding="async"
            className="h-auto w-full max-w-3xl rounded-xl border border-navy/10 bg-white object-contain"
          />
          <figcaption className="mt-3 text-base text-navy">{HANDWRITTEN_NOTES_IMAGE.caption}</figcaption>
        </figure>
        <ul className="mt-8 grid gap-6">
          {HANDWRITTEN_NOTES.map((note) => (
            <li key={note.id}>
              <blockquote className="condition-card px-6 py-6">
                <p>{note.quote}</p>
                <footer className="mt-4 font-semibold text-navy">
                  <cite className="not-italic">{note.signedAs}</cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-navy">Letter dated March 2, 2010</h2>
        <figure className="mt-6">
          <img
            src={MARCH_2010_LETTER_IMAGE.src}
            alt={MARCH_2010_LETTER_IMAGE.alt}
            width={MARCH_2010_LETTER_IMAGE.width}
            height={MARCH_2010_LETTER_IMAGE.height}
            decoding="async"
            className="h-auto w-full max-w-3xl rounded-xl border border-navy/10 bg-white object-contain"
          />
          <figcaption className="mt-3 text-base text-navy">{MARCH_2010_LETTER_IMAGE.caption}</figcaption>
        </figure>
        <blockquote className="condition-card mt-8 px-6 py-6">
          <p className="font-semibold">{MARCH_2010_LETTER.date}</p>
          <p className="mt-4">
            {MARCH_2010_LETTER.letterhead.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-4">{MARCH_2010_LETTER.greeting}</p>
          {MARCH_2010_LETTER.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4">
              {paragraph}
            </p>
          ))}
          <footer className="mt-4 font-semibold text-navy">
            <cite className="not-italic">{MARCH_2010_LETTER.signedAs}</cite>
          </footer>
        </blockquote>
      </section>
    </ContentLayout>
  )
}
