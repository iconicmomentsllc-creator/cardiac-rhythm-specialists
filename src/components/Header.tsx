import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { MEDIA_SECTION_PATHS } from '../data/media'
import { practice } from '../data/practice'
import { Logo } from './Logo'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about-dr-polosajian', label: 'About' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/testing', label: 'Testing' },
  { to: '/media', label: 'Media' },
  { to: '/patient-resources', label: 'Patient Resources' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [menuPath, setMenuPath] = useState(location.pathname)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLDivElement>(null)

  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => {
    document.body.toggleAttribute('data-nav-open', open)
    return () => {
      document.body.removeAttribute('data-nav-open')
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const root = mobileNavRef.current
    const firstItem = root?.querySelector<HTMLElement>('a[href], button:not([disabled])')
    firstItem?.focus()

    function focusables() {
      const items = [
        menuButtonRef.current,
        ...Array.from(root?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []),
      ]
      return items.filter((item): item is HTMLElement => Boolean(item))
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1536px)')
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
    const dock = document.querySelector('.a11y-dock')
    if (open) {
      main?.setAttribute('inert', '')
      footer?.setAttribute('inert', '')
      dock?.setAttribute('inert', '')
    } else {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
      dock?.removeAttribute('inert')
    }
    return () => {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
      dock?.removeAttribute('inert')
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  function isActive(to: string) {
    if (to === '/') return location.pathname === '/'
    if (to === '/media') {
      return MEDIA_SECTION_PATHS.some((path) => location.pathname === path)
    }
    return location.pathname === to || location.pathname.startsWith(`${to}/`)
  }

  function navClass(to: string) {
    const active = isActive(to)
    return [
      'inline-flex min-h-12 items-center whitespace-nowrap text-base font-semibold text-navy',
      active
        ? 'underline decoration-gold decoration-[1.5px] underline-offset-[10px]'
        : 'hover:underline hover:decoration-gold hover:decoration-[1.5px] hover:underline-offset-[10px]',
    ].join(' ')
  }

    return (
    <header className="z-40 overflow-x-clip border-b border-navy/10 bg-white 2xl:sticky 2xl:top-0">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col gap-3 py-2.5 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:gap-6 2xl:py-3">
          <Link
            to="/"
            className="min-w-0 rounded-sm 2xl:shrink-0"
            aria-label="Cardiac Rhythm Specialists, Inc. home"
            aria-current={isActive('/') ? 'page' : undefined}
            onClick={closeMenu}
          >
            <Logo />
          </Link>

          <div className="hidden min-w-0 items-center gap-5 2xl:flex">
            <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={navClass(item.to)}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/appointment-request"
              className="btn btn-secondary min-h-12 shrink-0 px-4 text-base"
            >
              Request appointment
            </Link>
            <a href={practice.phoneTel} className="btn btn-primary min-h-12 shrink-0 px-4 text-base">
              Call {practice.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col gap-2.5 min-[480px]:flex-row min-[480px]:flex-wrap 2xl:hidden">
            <Link
              to="/appointment-request"
              className="btn btn-secondary min-h-12 w-full min-[480px]:min-w-[12rem] min-[480px]:flex-1 px-3 text-base"
            >
              Request appointment
            </Link>
            <a
              href={practice.phoneTel}
              className="btn btn-primary min-h-12 w-full min-[480px]:min-w-[14rem] min-[480px]:flex-1 px-3 text-base leading-snug"
            >
              Call {practice.phoneDisplay}
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="btn btn-secondary min-h-12 w-full min-[480px]:w-auto px-4 text-base"
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
        ref={mobileNavRef}
        id="mobile-nav"
        className={open ? 'border-t border-navy/10 bg-white 2xl:hidden' : 'hidden'}
      >
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-6">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-14 items-center rounded-xl px-3 text-lg font-semibold text-navy hover:bg-cream"
                aria-current={isActive(item.to) ? 'page' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
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
