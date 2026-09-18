import { Link } from 'react-router-dom'
import { CONTENT_UPDATED_LABEL, MEDICAL_DISCLAIMER } from '../data/practice'

export function MedicalDisclaimer({
  compact = false,
}: {
  compact?: boolean
}) {
  return (
    <aside
      className={
        compact
          ? 'mt-10 text-base leading-relaxed text-navy'
          : 'mt-12 rounded-2xl border border-navy/10 bg-mist px-5 py-5 text-base leading-relaxed text-navy'
      }
    >
      <p>
        <span className="font-semibold">Medical disclaimer: </span>
        {MEDICAL_DISCLAIMER}
      </p>
      {compact ? null : (
        <p className="mt-3">
          Educational information last updated {CONTENT_UPDATED_LABEL}.{' '}
          <Link to="/medical-disclaimer" className="font-semibold underline underline-offset-4">
            Full medical disclaimer
          </Link>
        </p>
      )}
    </aside>
  )
}
