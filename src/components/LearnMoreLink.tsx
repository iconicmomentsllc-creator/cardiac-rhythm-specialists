import { EXTERNAL_RESOURCE_DISCLAIMER, type ExternalResource } from '../data/externalResources'

export function LearnMoreLink({
  resource,
  compact = false,
  showDisclaimer = true,
}: {
  resource: ExternalResource
  compact?: boolean
  showDisclaimer?: boolean
}) {
  const visibleLabel = `Learn more about ${resource.topic} from ${resource.source}`

  return (
    <div className={compact ? 'mt-3' : 'mt-8'}>
      <a
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        className={compact ? 'btn-text learn-more-link' : 'btn btn-secondary learn-more-link'}
      >
        {visibleLabel}
        <span className="sr-only"> — opens in a new tab</span>
      </a>
      {showDisclaimer && !compact ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-navy">{EXTERNAL_RESOURCE_DISCLAIMER}</p>
      ) : null}
    </div>
  )
}
