import { Link } from 'react-router-dom'
import { AppointmentCallPanel } from '../components/AppointmentCallPanel'
import { AppointmentProcess } from '../components/AppointmentProcess'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { MedicalDisclaimer } from '../components/MedicalDisclaimer'
import { practice } from '../data/practice'
import { breadcrumbsFor } from '../seo/structuredData'

export function AppointmentRequestPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <Breadcrumbs items={breadcrumbsFor('/appointment-request')} />
        <header className="max-w-3xl">
          <p className="section-label">Appointments</p>
          <h1 className="mt-3 font-serif text-[clamp(1.875rem,4.5vw,2.75rem)] font-semibold leading-snug tracking-tight text-navy">
            Request an Appointment
          </h1>
          <p className="mt-5 text-xl font-medium leading-relaxed text-navy">
            Appointments are arranged by calling our office. This website cannot book a visit
            online. Staff can help with scheduling and insurance information.
          </p>
        </header>

        <div className="mt-10 max-w-xl">
          <AppointmentCallPanel />
        </div>

        <AppointmentProcess />

        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-navy">
          This website cannot complete scheduling online. Please confirm your coverage and benefits
          with your insurer. If you need the office address or directions, see{' '}
          <Link to="/contact" className="font-semibold underline underline-offset-4">
            contact information
          </Link>
          . For a faster response during office hours, call{' '}
          <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
            {practice.phoneDisplay}
          </a>
          .
        </p>
        <MedicalDisclaimer />
      </div>
    </article>
  )
}
