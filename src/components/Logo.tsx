export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-10 w-10 shrink-0"
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
      <span className="min-w-0 text-left leading-tight">
        <span className="block font-serif text-[1.05rem] font-medium tracking-tight text-navy sm:text-lg">
          Cardiac Rhythm Specialists, Inc.
        </span>
        <span className="mt-0.5 block text-xs font-medium tracking-wide text-teal sm:text-sm">
          Leo Polosajian, MD — Cardiology
        </span>
      </span>
    </span>
  )
}
