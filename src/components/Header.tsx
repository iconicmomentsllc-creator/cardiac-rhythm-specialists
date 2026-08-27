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

const headerCallClass =
  'btn btn-primary min-h-12 whitespace-nowrap px-4 text-base'

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const activeHash = location.hash.replace('#', '')

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

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)')
    function onChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setOpen(false)
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const main = document.getElementById('main')
    const footer = document.querySelector('footer')
    if (open) {
      main?.setAttribute('inert', '')
      footer?.setAttribute('inert', '')
    } else {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
    return () => {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [open])

  function sectionHref(hash: string) {
    return onHome ? `#${hash}` : `${import.meta.env.BASE_URL}#${hash}`
  }

  function closeMenu() {
    setOpen(false)
  }

  function navClass(hash: string) {
    const active = activeHash === hash
    return [
      'inline-flex min-h-12 items-center whitespace-nowrap text-base font-semibold text-navy',
      active
        ? 'underline decoration-gold decoration-[1.5px] underline-offset-[10px]'
        : 'hover:underline hover:decoration-gold hover:decoration-[1.5px] hover:underline-offset-[10px]',
    ].join(' ')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col gap-2.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-3">
          <Link
            to="/"
            className="min-w-0 rounded-sm xl:shrink-0"
            aria-label="Cardiac Rhythm Specialists, Inc. home"
            aria-current={onHome && !activeHash ? 'page' : undefined}
            onClick={closeMenu}
          >
            <Logo />
          </Link>

          <div className="hidden min-w-0 items-center gap-7 xl:flex">
            <nav aria-label="Primary" className="flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.hash}
                  href={sectionHref(item.hash)}
                  className={navClass(item.hash)}
                  aria-current={activeHash === item.hash ? 'location' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href={practice.phoneTel} className={`${headerCallClass} shrink-0`}>
              Call {practice.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-2.5 xl:hidden">
            <a href={practice.phoneTel} className={`${headerCallClass} min-w-0 flex-1 sm:flex-none`}>
              Call {practice.phoneDisplay}
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="btn btn-secondary min-h-12 shrink-0 px-4 text-base"
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={open ? 'border-t border-navy/10 bg-white xl:hidden' : 'hidden'}
      >
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={sectionHref(item.hash)}
                className="flex min-h-14 items-center rounded-xl px-3 text-lg font-semibold text-navy hover:bg-cream"
                aria-current={activeHash === item.hash ? 'location' : undefined}
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
      </div>
    </header>
  )
}
