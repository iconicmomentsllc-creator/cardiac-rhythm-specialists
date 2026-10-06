import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { PhysicianName } from './PhysicianName'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <p className="section-label">
          Cardiac Electrophysiology
        </p>
        <h1 className="display-title mt-5">
          Advanced Heart Rhythm Care in the San Fernando Valley
        </h1>
        <p className="hero-physician">
          <PhysicianName />
        </p>
        <p className="hero-role text-navy">
          {practice.physicianTitle}
        </p>
        <p className="lede mt-5">
          Specialized care for heart rhythm disorders, including evaluation and
          treatment of arrhythmias, and evaluation of vascular conditions such as
          peripheral artery disease. The Reseda office serves patients from Los
          Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale,
          and North Hollywood.
        </p>
        <div className="hero-actions flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={practice.phoneTel} className="btn btn-primary w-full sm:w-auto">
            Call {practice.phoneDisplay}
          </a>
          <Link to="/appointment-request" className="btn btn-secondary w-full sm:w-auto">
            Request an appointment
          </Link>
          <a
            href={practice.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full sm:w-auto"
          >
            Get Directions
            <span className="sr-only"> to our Reseda office (opens in a new tab)</span>
          </a>
        </div>
        <p className="hero-location text-navy">
          {practice.brandName}
          <br />
          {practice.streetAddress}
          <br />
          {practice.city}, {practice.state} {practice.zip}
        </p>
      </div>
    </section>
  )
}
