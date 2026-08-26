import { practice } from '../data/practice'

export function Logo() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
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
      <span className="min-w-0 text-left">
        <span className="block font-serif text-[1.05rem] font-semibold leading-tight tracking-tight text-navy xl:whitespace-nowrap">
          {practice.legalName}
        </span>
        <span className="mt-0.5 block text-[0.8125rem] font-medium leading-snug text-navy">
          <span className="block">{practice.physician}</span>
          <span className="block">{practice.specialty}</span>
        </span>
      </span>
    </span>
  )
}
