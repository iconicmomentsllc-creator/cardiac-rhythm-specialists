const links = [
  { href: '#about', label: 'Learn About Dr. Polosajian' },
  { href: '#care', label: 'Heart Rhythm Care' },
  { href: '#videos', label: 'Videos & Patient Education' },
  { href: '#patient-information', label: 'Patient Information' },
  { href: '#contact', label: 'Contact the Office' },
] as const

export function QuickStart() {
  return (
    <section aria-labelledby="quick-start-heading" className="border-t border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 id="quick-start-heading" className="font-serif text-3xl font-semibold text-navy">
          How can we help you?
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex min-h-16 items-center rounded-2xl border-2 border-navy/15 bg-white px-5 text-lg font-semibold text-navy hover:border-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
