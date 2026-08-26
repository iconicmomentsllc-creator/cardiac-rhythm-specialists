import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { practice } from '../data/practice'
import { Logo } from './Logo'

const navItems = [
  { hash: 'about', label: 'About' },
  { hash: 'care', label: 'Heart Rhythm Care' },
  { hash: 'videos', label: 'Videos' },
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
    return onHome ? `#${hash}` : `${import.meta.env.BASE_URL}#${hash}`
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
                className="inline-flex min-h-12 items-center text-base font-semibold text-navy hover:underline hover:decoration-gold hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={practice.phoneTel}
            className="btn btn-primary hidden px-5 text-base max-xl:hidden xl:inline-flex"
          >
            Call {practice.phoneDisplay}
          </a>
        </div>

        <div className="mt-3 flex items-stretch gap-3 xl:hidden">
          <a
            href={practice.phoneTel}
            className="btn btn-primary min-w-0 flex-1 px-3 text-base"
          >
            Call {practice.phoneDisplay}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="btn btn-secondary shrink-0 px-4 text-base"
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
              className="flex min-h-14 items-center rounded-xl px-3 text-lg font-semibold text-navy hover:bg-cream"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn-secondary mt-4 w-full"
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
