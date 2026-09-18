import { Link } from 'react-router-dom'
import { CONDITIONS, TREATMENTS, topicLabel, type MedicalPageContent } from '../data/medicalPages'
import { TESTS } from '../data/testingPages'
import { EDUCATION } from '../data/educationPages'
import { BOOKLET_LIST } from '../data/booklets'
import { MULTIMEDIA_LIBRARY } from '../data/multimediaLibrary'
import { practice } from '../data/practice'
import { ContentLayout, MedicalPageLayout } from '../components/ContentLayout'
import { TopicImages, TopicSections } from '../components/TopicSections'
import { NotFoundPage } from './NotFoundPage'

function TopicArticle({
  path,
  page,
}: {
  path: string
  page: MedicalPageContent
}) {
  return (
    <MedicalPageLayout
      path={path}
      eyebrow={page.eyebrow}
      title={page.h1}
      intro={page.intro}
      related={page.related}
    >
      <TopicImages images={page.images} />
      <TopicSections sections={page.sections} />
    </MedicalPageLayout>
  )
}

export function ConditionPage({ slug }: { slug: string }) {
  const page = CONDITIONS[slug]
  if (!page) return <NotFoundPage />
  return <TopicArticle path={`/conditions/${page.slug}`} page={page} />
}

export function TreatmentPage({ slug }: { slug: string }) {
  const page = TREATMENTS[slug]
  if (!page) return <NotFoundPage />
  return <TopicArticle path={`/treatments/${page.slug}`} page={page} />
}

export function TestingPage({ slug }: { slug: string }) {
  const page = TESTS[slug]
  if (!page) return <NotFoundPage />
  return <TopicArticle path={`/testing/${page.slug}`} page={page} />
}

export function EducationTopicPage({ slug }: { slug: string }) {
  if (slug === 'multimedia-library') return <MultimediaLibraryPage />
  const page = EDUCATION[slug]
  if (!page) return <NotFoundPage />
  return <TopicArticle path={`/education/${page.slug}`} page={page} />
}

function MultimediaLibraryPage() {
  const page = EDUCATION['multimedia-library']
  if (!page) return <NotFoundPage />
  const recovered = MULTIMEDIA_LIBRARY.filter((item) => item.to)
  const archived = MULTIMEDIA_LIBRARY.filter((item) => !item.to)

  return (
    <MedicalPageLayout
      path="/education/multimedia-library"
      eyebrow={page.eyebrow}
      title={page.h1}
      intro={page.intro}
      related={page.related}
    >
      <TopicSections sections={page.sections} />
      <h2 className="topic-section-heading mt-10">Topics with modern pages</h2>
      <ul className="mt-4 grid gap-3">
        {recovered.map((item) => (
          <li key={item.legacyFile}>
            <Link to={item.to!} className="font-semibold underline underline-offset-4">
              {item.title}
            </Link>
            <span className="text-navy"> — {item.note}</span>
          </li>
        ))}
      </ul>
      <h2 className="topic-section-heading mt-10">
        Flash-only illustrations still in the archive
      </h2>
      <p className="mt-3">
        These items were Flash movies without recovered paragraph text. They are kept in the
        recovered original-site archive. We did not invent replacement medical copy.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        {archived.map((item) => (
          <li key={item.legacyFile}>
            {item.title}. {item.note}
          </li>
        ))}
      </ul>
    </MedicalPageLayout>
  )
}

function HubList({
  items,
  to,
  label,
  headingLevel: Heading = 'h2',
}: {
  items: MedicalPageContent[]
  to: (slug: string) => string
  label: string
  headingLevel?: 'h2' | 'h3'
}) {
  return (
    <nav aria-label={label} className="hub-list">
      <ul>
        {items.map((item) => {
          const title = topicLabel(item)
          return (
            <li key={item.slug} className="hub-item">
              <Heading className="hub-item-title">
                <Link to={to(item.slug)} className="hub-item-link">
                  {title}
                </Link>
              </Heading>
              <p className="hub-item-intro">{item.intro}</p>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function LinkHub({
  items,
  label,
  headingLevel: Heading = 'h3',
}: {
  items: { to: string; title: string; intro: string }[]
  label: string
  headingLevel?: 'h2' | 'h3'
}) {
  return (
    <nav aria-label={label} className="hub-list">
      <ul>
        {items.map((item) => (
          <li key={item.to} className="hub-item">
            <Heading className="hub-item-title">
              <Link to={item.to} className="hub-item-link">
                {item.title}
              </Link>
            </Heading>
            <p className="hub-item-intro">{item.intro}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ConditionsIndexPage() {
  return (
    <ContentLayout
      path="/conditions"
      eyebrow="Heart rhythm conditions"
      title="Heart rhythm conditions"
      intro="These pages explain conditions that were part of the original Cardiac Rhythm Specialists education library. They are for patients in Reseda and the surrounding Los Angeles area. They are educational and are not a diagnosis."
      showDisclaimer
    >
      <p>
        A cardiac electrophysiologist is a heart rhythm specialist. Evaluation may be appropriate
        for palpitations, irregular heartbeat, atrial fibrillation, syncope, or related symptoms.
      </p>
      <HubList
        items={Object.values(CONDITIONS)}
        to={(slug) => `/conditions/${slug}`}
        label="Heart rhythm condition pages"
      />
      <p className="mt-8">
        Related reading:{' '}
        <Link to="/treatments" className="font-semibold underline underline-offset-4">
          treatments and procedures
        </Link>{' '}
        and{' '}
        <Link to="/testing" className="font-semibold underline underline-offset-4">
          testing and monitoring
        </Link>
        .
      </p>
    </ContentLayout>
  )
}

export function TreatmentsIndexPage() {
  return (
    <ContentLayout
      path="/treatments"
      eyebrow="Treatments and procedures"
      title="Treatments and procedures"
      intro="These pages recover the original site’s treatment topics, including ablation, device implantation, and electrophysiology studies. Whether a procedure is appropriate is a physician decision."
      showDisclaimer
    >
      <p>
        Recovered Treatments education said the underlying cause of an arrhythmia is the basis for
        selecting care, along a continuum from less to more invasive: lifestyle changes, medication,
        devices, ablation, and surgery, including pacemakers and defibrillators. The least invasive
        option that effectively controls the arrhythmia is generally preferred. That is educational
        background, not a prescription.
      </p>
      <p>
        Treatment varies by the individual. These pages do not promise a result or state that every
        listed procedure is scheduled through this office. Please call to ask about evaluation.
      </p>
      <HubList
        items={Object.values(TREATMENTS)}
        to={(slug) => `/treatments/${slug}`}
        label="Treatment and procedure pages"
      />
    </ContentLayout>
  )
}

export function TestingIndexPage() {
  return (
    <ContentLayout
      path="/testing"
      eyebrow="Testing and monitoring"
      title="Testing and monitoring"
      intro="Holter monitoring, event monitoring, electrocardiograms, echocardiography, tilt-table testing, and cardiac device follow-up were part of the original Cardiac Rhythm Specialists education library."
      showDisclaimer
    >
      <HubList
        items={Object.values(TESTS)}
        to={(slug) => `/testing/${slug}`}
        label="Testing and monitoring pages"
      />
    </ContentLayout>
  )
}

export function EducationIndexPage() {
  const educationTopics = Object.values(EDUCATION).filter((page) => page.slug !== 'multimedia-library')
  const multimedia = EDUCATION['multimedia-library']

  return (
    <ContentLayout
      path="/education"
      eyebrow="Patient education"
      title="Patient education"
      intro="Learn about how the heart works, the electrical system that times each beat, and illustrated booklets recovered from the original Cardiac Rhythm Specialists website."
      showDisclaimer
    >
      <h2 className="topic-section-heading">Educational topics</h2>
      <HubList
        items={educationTopics}
        to={(slug) => `/education/${slug}`}
        label="Patient education pages"
        headingLevel="h3"
      />

      <h2 className="topic-section-heading mt-12">Illustrated booklets</h2>
      <p className="mt-3">
        These booklets previously required Flash. They are now available as accessible page
        sequences. The artwork is educational and may reflect older material.
      </p>
      <LinkHub
        label="Illustrated education booklets"
        items={BOOKLET_LIST.map((booklet) => ({
          to: `/education/booklets/${booklet.slug}`,
          title: booklet.title,
          intro: booklet.description,
        }))}
      />

      {multimedia ? (
        <>
          <h2 className="topic-section-heading mt-12">Multimedia education</h2>
          <p className="mt-3">
            The original site’s full topic list, including Flash-only illustrations that were not
            converted into public pages, is kept on the multimedia library page.
          </p>
          <LinkHub
            label="Multimedia education"
            items={[
              {
                to: '/education/multimedia-library',
                title: topicLabel(multimedia),
                intro: multimedia.intro,
              },
            ]}
          />
        </>
      ) : null}

      <h2 className="topic-section-heading mt-12">Videos, presentations, and articles</h2>
      <p className="mt-3">
        Educational videos from {practice.physicianInformal}, historical presentations, and a
        recovered magazine article are collected on the{' '}
        <Link to="/media" className="font-semibold underline underline-offset-4">
          media library
        </Link>
        .
      </p>
    </ContentLayout>
  )
}
