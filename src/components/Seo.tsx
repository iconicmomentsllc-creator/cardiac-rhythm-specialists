import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { practice } from '../data/practice'
import { GSC_VERIFICATION } from '../seo/site'
import { getSeo } from '../seo/pages'
import { jsonLdGraph } from '../seo/structuredData'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value)
  }
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function upsertJsonLd(data: unknown) {
  let element = document.getElementById('jsonld-graph')
  if (!element) {
    element = document.createElement('script')
    element.id = 'jsonld-graph'
    element.setAttribute('type', 'application/ld+json')
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

function applySeoToDocument(path: string) {
  const seo = getSeo(path)
  document.title = seo.title
  upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: seo.robots })
  upsertLink('canonical', seo.canonical)
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: 'Cardiac Rhythm Specialists, Inc.',
  })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description,
  })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: seo.ogImage })
  upsertMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: practice.photoAlt,
  })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: seo.ogImage })
  if (GSC_VERIFICATION) {
    upsertMeta('meta[name="google-site-verification"]', {
      name: 'google-site-verification',
      content: GSC_VERIFICATION,
    })
  }
  upsertJsonLd(jsonLdGraph(path))
}

export function Seo() {
  const location = useLocation()

  useEffect(() => {
    applySeoToDocument(location.pathname)
  }, [location.pathname])

  return null
}
