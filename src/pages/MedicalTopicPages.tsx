import { Link } from 'react-router-dom'
import {
  CONDITIONS,
  TREATMENTS,
  conditionGroup,
  topicLabel,
  type MedicalPageContent,
} from '../data/medicalPages'
import { TESTS } from '../data/testingPages'
import { EDUCATION } from '../data/educationPages'
import { BOOKLET_LIST } from '../data/booklets'
import { MULTIMEDIA_LIBRARY } from '../data/multimediaLibrary'
import { EXTERNAL_RESOURCE_DISCLAIMER, EXTERNAL_RESOURCES } from '../data/externalResources'
import { practice } from '../data/practice'
import { ContentLayout, MedicalPageLayout } from '../components/ContentLayout'
import { InstagramCard } from '../components/InstagramCard'
import { LearnMoreLink } from '../components/LearnMoreLink'
import { TopicImages, TopicSections } from '../components/TopicSections'
import { instagramForPath } from '../data/instagram'
import { NotFoundPage } from './NotFoundPage'

function TopicArticle({
  path,
  page,
}: {
  path: string
  page: MedicalPageContent
}) {
  const resource = EXTERNAL_RESOURCES[path]
  const instagram = instagramForPath(path)
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
      {resource ? <LearnMoreLink resource={resource} /> : null}
      {instagram ? (
        <div className="mt-10">
          <InstagramCard item={instagram} headingLevel="h2" />
        </div>
      ) : null}
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
  const published = MULTIMEDIA_LIBRARY.filter((item) => item.to)

  return (
    <MedicalPageLayout
      path="/education/multimedia-library"
      eyebrow={page.eyebrow}
      title={page.h1}
      intro={page.intro}
      related={page.related}
    >
      <TopicSections sections={page.sections} />
      <h2 className="topic-section-heading mt-10">Education topics</h2>
      <ul className="mt-4 grid gap-3">
        {published.map((item) => (
          <li key={item.legacyFile}>
            <Link to={item.to!} className="font-semibold underline underline-offset-4">
              {item.title}
            </Link>
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
          const href = to(item.slug)
          const resource = EXTERNAL_RESOURCES[href]
          return (
            <li key={item.slug} className="hub-item">
              <Heading className="hub-item-title">
                <Link to={href} className="hub-item-link">
                  {title}
                </Link>
              </Heading>
              <p className="hub-item-intro">{item.intro}</p>
              {resource ? <LearnMoreLink resource={resource} compact showDisclaimer={false} /> : null}
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
  const all = Object.values(CONDITIONS)
  const rhythm = all.filter((page) => conditionGroup(page) === 'rhythm')
  const vascular = all.filter((page) => conditionGroup(page) === 'vascular')
  const vascularSymptoms = all.filter((page) => conditionGroup(page) === 'vascular-symptom')

  return (
    <ContentLayout
      path="/conditions"
      eyebrow="Conditions we evaluate"
      title="Heart rhythm and vascular conditions"
      intro="These pages explain heart rhythm conditions from the original Cardiac Rhythm Specialists education library, plus vascular conditions and symptoms Dr. Polosajian evaluates. They are for patients in Reseda and the surrounding Los Angeles area. They are educational and are not a diagnosis."
      showDisclaimer
    >
      <p>
        A cardiac electrophysiologist is a heart rhythm specialist. Evaluation may be appropriate
        for palpitations, irregular heartbeat, atrial fibrillation, syncope, or related symptoms.
        Cardiovascular evaluation may also be appropriate when circulation concerns in the legs are
        part of the question a physician is considering.
      </p>

      <h2 className="topic-section-heading mt-10">Heart rhythm conditions</h2>
      <HubList
        items={rhythm}
        to={(slug) => `/conditions/${slug}`}
        label="Heart rhythm condition pages"
        headingLevel="h3"
      />

      <h2 className="topic-section-heading mt-12">Vascular conditions</h2>
      <p className="mt-3">
        The pages below describe named vascular conditions. They are not the same as symptoms such
        as leg pain or swelling.
      </p>
      <HubList
        items={vascular}
        to={(slug) => `/conditions/${slug}`}
        label="Vascular condition pages"
        headingLevel="h3"
      />

      <h2 className="topic-section-heading mt-12">Symptoms that may warrant a vascular evaluation</h2>
      <p className="mt-3">
        Symptoms such as leg pain, cramping, swelling, skin changes, or non-healing wounds can have
        many causes. A cardiovascular evaluation can help determine whether vascular disease may be
        contributing.
      </p>
      <HubList
        items={vascularSymptoms}
        to={(slug) => `/conditions/${slug}`}
        label="Vascular symptom information pages"
        headingLevel="h3"
      />

      <p className="mt-8 text-base leading-relaxed text-navy">{EXTERNAL_RESOURCE_DISCLAIMER}</p>
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
      <p className="mt-8 text-base leading-relaxed text-navy">{EXTERNAL_RESOURCE_DISCLAIMER}</p>
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
            A topic list from the original education library, with links to current pages, is on the
            multimedia library page.
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
