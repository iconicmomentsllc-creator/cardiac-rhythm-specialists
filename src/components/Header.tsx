import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { practice } from '../data/practice'
import { Logo } from './Logo'

const navItems = [
  { hash: 'about', label: 'About' },
  { hash: 'care', label: 'Heart Rhythm Care' },
  { hash: 'patient-information', label: 'Patient Information' },
  { hash: 'contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  function sectionHref(hash: string) {
    return onHome ? `#${hash}` : `/#${hash}`
  }

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="min-w-0 rounded-sm"
          aria-label="Cardiac Rhythm Specialists, Inc. home"
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className="text-sm font-semibold text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={practice.phoneTel}
            className="text-sm font-semibold text-navy"
          >
            {practice.phoneDisplay}
          </a>
          <a
            href={practice.phoneTel}
            className="inline-flex min-h-12 items-center rounded-full bg-navy px-4 text-sm font-semibold text-white hover:bg-navy-soft"
          >
            Call {practice.phoneDisplay}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border-2 border-navy/20 text-navy xl:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={open ? 'border-t border-navy/10 bg-white px-4 py-4 xl:hidden' : 'hidden'}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className="flex min-h-12 items-center rounded-md px-2 text-base font-semibold text-navy"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-3 grid gap-2">
          <a
            href={practice.phoneTel}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-4 text-center text-sm font-semibold text-white"
          >
            Call {practice.phoneDisplay}
          </a>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-navy/20 px-4 text-center text-sm font-semibold text-navy"
          >
            Get Directions to Our Reseda Office
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </header>
  )
}
