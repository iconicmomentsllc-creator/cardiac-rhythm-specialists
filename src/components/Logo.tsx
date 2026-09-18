import { practice } from '../data/practice'

export function Logo() {
  return (
    <span className="site-logo">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="site-logo-mark"
      >
        <rect width="40" height="40" rx="10" className="fill-navy" />
        <path
          d="M5 21h6.2l2.2-8 3.2 16 3-11.5L22 21h13"
          fill="none"
          stroke="#7eb8bc"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="site-logo-text">
        <span className="site-logo-name">{practice.brandName}</span>
        <span className="site-logo-meta">
          <span className="physician-name site-logo-physician">{practice.physician}</span>
          <span className="site-logo-specialty">{practice.specialty}</span>
        </span>
      </span>
    </span>
  )
}
