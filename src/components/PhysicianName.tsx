import { practice } from '../data/practice'

export function PhysicianName({
  className = '',
}: {
  className?: string
}) {
  return (
    <span className={`physician-name ${className}`.trim()}>
      {practice.physician}
    </span>
  )
}
