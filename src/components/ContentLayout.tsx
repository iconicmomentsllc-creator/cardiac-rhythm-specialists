import type { ReactNode } from 'react'
import { breadcrumbsFor } from '../seo/structuredData'
import { Breadcrumbs } from './Breadcrumbs'
import { CallToAction } from './CallToAction'
import { MedicalDisclaimer } from './MedicalDisclaimer'
import { PageHero } from './PageHero'
import { RelatedContent } from './RelatedContent'
import type { RelatedLink } from '../data/medicalPages'

export function ContentLayout({
  path,
  eyebrow,
  title,
  intro,
  related,
  children,
  showDisclaimer = false,
  presentation = 'default',
}: {
  path: string
  eyebrow?: string
  title: string
  intro?: string
  related?: RelatedLink[]
  children: ReactNode
  showDisclaimer?: boolean
  presentation?: 'default' | 'topic'
}) {
  const crumbs = breadcrumbsFor(path)
  const isTopic = presentation === 'topic'

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <Breadcrumbs items={crumbs} />
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <div
        className={
          isTopic
            ? 'mt-10 text-lg leading-relaxed text-navy'
            : 'mt-8 space-y-5 text-lg leading-relaxed text-navy'
        }
      >
        {children}
      </div>
      {related ? <RelatedContent links={related} variant={isTopic ? 'topic' : 'default'} /> : null}
      <CallToAction variant={isTopic ? 'topic' : 'default'} />
      {showDisclaimer ? <MedicalDisclaimer /> : null}
    </article>
  )
}

export function MedicalPageLayout({
  path,
  eyebrow,
  title,
  intro,
  related,
  children,
}: {
  path: string
  eyebrow: string
  title: string
  intro: string
  related: RelatedLink[]
  children: ReactNode
}) {
  return (
    <ContentLayout
      path={path}
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      related={related}
      showDisclaimer
      presentation="topic"
    >
      {children}
    </ContentLayout>
  )
}
