import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef, type MouseEvent } from 'react'
import { AccessibilityWidget } from '../components/AccessibilityWidget'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Seo } from '../components/Seo'
import { Analytics } from '../components/Analytics'
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
    <div className="site-shell">
      <Seo />
      <Analytics />
      <a href="#main" className="skip-link" onClick={skipToMain}>
        Skip to main content
      </a>
      <aside
        aria-label="Emergency information"
        className="overflow-x-clip border-b border-navy/10 bg-mist px-4 py-2 text-center text-[0.9375rem] leading-snug text-navy sm:text-base"
      >
        <p>
          <span className="font-semibold text-navy">Emergency: </span>
          If this is a medical emergency, call{' '}
          <a href="tel:911" className="font-semibold text-navy underline underline-offset-2">
            911
          </a>
          . For office matters, call{' '}
          <a
            href={practice.phoneTel}
            className="font-semibold text-navy underline underline-offset-2"
          >
            {practice.phoneDisplay}
          </a>
          .
        </p>
      </aside>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  )
}
