import { useState } from 'react'
import { practice } from '../data/practice'

export function LazyMap() {
  const [showMap, setShowMap] = useState(false)

  if (!showMap) {
    return (
      <div className="overflow-hidden rounded-2xl border border-navy/10 bg-mist p-6">
        <p className="text-lg leading-relaxed text-navy">
          Interactive Google Map is optional. Load it if you want a map preview, or use Get
          Directions.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-secondary w-full sm:w-auto" onClick={() => setShowMap(true)}>
            Load map
          </button>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10">
      <iframe
        title={`Map of ${practice.legalName} at ${practice.fullAddress}`}
        src={practice.mapsEmbedUrl}
        className="h-64 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
