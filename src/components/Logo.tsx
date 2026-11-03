import { practice } from '../data/practice'

export function Logo() {
  return (
    <span className="site-logo">
      <img
        src="/crs-logo.png"
        alt="CRS – Cardiac Rhythm Specialists, Inc."
        width={986}
        height={235}
        className="site-logo-image"
        decoding="async"
        fetchPriority="high"
      />
      <span className="site-logo-text">
        <span className="physician-name site-logo-physician">{practice.physician}</span>
        <span className="site-logo-specialty">{practice.specialty}</span>
      </span>
    </span>
  )
}
