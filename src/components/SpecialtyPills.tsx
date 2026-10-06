import { Link } from 'react-router-dom'
import { FEATURED_CONDITION_PILLS } from '../data/featuredConditions'

export function SpecialtyPills() {
  return (
    <ul className="specialty-pills">
      {FEATURED_CONDITION_PILLS.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className="specialty-pill"
            aria-label={item.label === 'PAD' ? 'Peripheral artery disease' : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
