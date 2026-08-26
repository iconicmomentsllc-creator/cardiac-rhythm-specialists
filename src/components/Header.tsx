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
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="min-w-0 rounded-sm"
            aria-label="Cardiac Rhythm Specialists, Inc. home"
            onClick={closeMenu}
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                className="inline-flex min-h-12 items-center text-base font-semibold text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={practice.phoneTel}
            className="hidden min-h-14 items-center rounded-full bg-navy px-5 text-base font-semibold text-white hover:bg-navy-soft xl:inline-flex"
          >
            Call {practice.phoneDisplay}
          </a>
        </div>

        <div className="mt-3 flex items-center gap-3 xl:hidden">
          <a
            href={practice.phoneTel}
            className="inline-flex min-h-14 flex-1 items-center justify-center rounded-full bg-navy px-4 text-base font-semibold text-white hover:bg-navy-soft"
          >
            Call {practice.phoneDisplay}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-14 min-w-24 items-center justify-center rounded-full border-2 border-navy/25 px-5 text-base font-semibold text-navy"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={open ? 'border-t border-navy/10 bg-white px-4 py-5 xl:hidden' : 'hidden'}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={sectionHref(item.hash)}
              className="flex min-h-14 items-center rounded-xl px-3 text-lg font-semibold text-navy"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-navy/25 text-lg font-semibold text-navy"
          onClick={() => {
            closeMenu()
            menuButtonRef.current?.focus()
          }}
        >
          Close menu
        </button>
      </div>
    </header>
  )
}
