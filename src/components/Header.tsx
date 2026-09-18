import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import { MEDIA_SECTION_PATHS } from '../data/media'
import { practice } from '../data/practice'
import { Logo } from './Logo'

const DESKTOP_NAV_QUERY = '(min-width: 1536px)'

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
  const { settings } = useAccessibility()
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
    const media = window.matchMedia(DESKTOP_NAV_QUERY)
    function onChange(event: MediaQueryListEvent) {
      if (event.matches && settings.textSize < 125) {
        setOpen(false)
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [settings.textSize])

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
    return ['site-header-link', active ? 'is-active' : ''].filter(Boolean).join(' ')
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          to="/"
          className="site-header-brand"
          aria-label="Cardiac Rhythm Specialists, Inc. home"
          aria-current={isActive('/') ? 'page' : undefined}
          onClick={closeMenu}
        >
          <Logo />
        </Link>

        <div className="site-header-desktop">
          <nav aria-label="Primary" className="site-header-nav">
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
          <div className="site-header-cta">
            <Link to="/appointment-request" className="btn btn-secondary site-header-cta-btn">
              Request appointment
            </Link>
            <a href={practice.phoneTel} className="btn btn-primary site-header-cta-btn">
              Call {practice.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="site-header-mobile">
          <Link
            to="/appointment-request"
            className="btn btn-secondary site-header-mobile-btn"
          >
            Request appointment
          </Link>
          <a href={practice.phoneTel} className="btn btn-primary site-header-mobile-btn">
            Call {practice.phoneDisplay}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="btn btn-secondary site-header-menu-btn"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div
        ref={mobileNavRef}
        id="mobile-nav"
        className={open ? 'site-header-panel' : 'hidden'}
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
