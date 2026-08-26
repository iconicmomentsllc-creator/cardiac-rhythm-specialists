import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, type MouseEvent } from 'react'
import { AccessibilityWidget } from '../components/AccessibilityWidget'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { practice } from '../data/practice'

export function SiteLayout() {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector<HTMLElement>(location.hash)
      if (target) {
        target.setAttribute('tabindex', '-1')
        target.scrollIntoView()
        target.focus({ preventScroll: true })
      }
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  function skipToMain(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    mainRef.current?.focus()
    mainRef.current?.scrollIntoView()
  }

  return (
    <div className="min-h-screen bg-white">
      <a href="#main" className="skip-link" onClick={skipToMain}>
        Skip to main content
      </a>
      <p
        role="note"
        className="border-b border-navy/15 bg-mist px-4 py-3 text-center text-base text-navy"
      >
        <span className="font-semibold text-navy">Emergency: </span>
        If this is a medical emergency, call 911. For office matters, call{' '}
        <a
          href={practice.phoneTel}
          className="font-semibold text-navy underline underline-offset-2"
        >
          {practice.phoneDisplay}
        </a>
        .
      </p>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
