import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { ContentLayout } from '../components/ContentLayout'

const resourceLinks = [
  { to: '/appointment-request', label: 'Appointment request', body: 'Call the office to request a visit. Staff will help with scheduling.' },
  { to: '/patient-forms', label: 'Patient forms', body: 'Print forms to bring to the office when asked.' },
  { to: '/new-patients', label: 'Preparing for your visit', body: 'What to bring and how to schedule.' },
  { to: '/faq', label: 'Frequently asked questions', body: 'Heart rhythm and office questions in plain language.' },
  { to: '/medical-records', label: 'Medical records', body: 'How to ask the office about records.' },
  { to: '/prescription-refills', label: 'Prescription refills', body: 'Call the office for refill questions.' },
  { to: '/lab-test-information', label: 'Lab and test information', body: 'How to ask about results.' },
  { to: '/education', label: 'Patient education', body: 'Recovered educational topics and illustrated booklets.' },
  { to: '/media', label: 'Media', body: 'Videos, presentations, articles, and educational multimedia from Dr. Polosajian.' },
  { to: '/education/multimedia-library', label: 'Original education library', body: 'Map of the old multimedia library to modern pages.' },
  { to: '/presentations', label: 'Presentations', body: 'Recovered historical presentation images.' },
  { to: '/articles', label: 'Articles', body: 'A recovered 2010 magazine article, kept as historical material.' },
  { to: '/videos', label: 'Videos', body: 'Educational videos from Dr. Polosajian.' },
  { to: '/photos', label: 'Photos', body: 'Physician photographs and educational images.' },
  { to: '/insurance', label: 'Insurance', body: 'Call the office or your insurer to confirm coverage.' },
] as const

export function PatientResourcesPage() {
  return (
    <ContentLayout
      path="/patient-resources"
      eyebrow="For patients"
      title="Patient resources"
      intro="Find appointment help, printable forms, and education in one place, with current office contact information."
    >
      <p>This website is not a patient portal. For most requests, calling the office is still the fastest option.</p>
      <ul className="mt-8 grid gap-4">
        {resourceLinks.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="block rounded-2xl border border-navy/10 px-6 py-6 no-underline hover:border-gold"
            >
              <h2 className="font-serif text-xl font-semibold text-navy">{item.label}</h2>
              <p className="mt-2 text-lg leading-relaxed text-navy">{item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ContentLayout>
  )
}

export function PatientFormsPage() {
  return (
    <ContentLayout
      path="/patient-forms"
      eyebrow="Patient forms"
      title="Patient forms"
      intro="The original website provided printable forms. One recovered new-patient intake PDF is available here. Other listed forms were placeholders on the old site and are not republished until the office provides current files."
    >
      <ul className="mt-4 list-disc space-y-3 pl-6">
        <li>
          <a
            href="/forms/new-patient-intake-form.pdf"
            className="font-semibold underline underline-offset-4"
          >
            New patient intake form (PDF)
          </a>
          . Print, complete, and bring it if the office asked you to do so. If you will complete it
          at the office, plan extra check-in time.
        </li>
        <li>
          New patient history, privacy-notice, and records-release PDFs from the old site were not
          attached to working files. Call the office if you need a current form.
        </li>
      </ul>
      <p className="mt-6">
        Adobe Acrobat Reader or another PDF reader is needed to open these files. Completing a form
        online does not send it to the office.
      </p>
    </ContentLayout>
  )
}

export function MedicalRecordsPage() {
  return (
    <ContentLayout
      path="/medical-records"
      eyebrow="Medical records"
      title="Medical records"
      intro="Ask the office about medical records by phone. Please do not send records or other sensitive patient information by email."
    >
      <p>
        Call{' '}
        <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
          {practice.phoneDisplay}
        </a>{' '}
        for records questions. Staff can tell you what is needed for a request.
      </p>
      <p>
        Recovered pages mentioned a records-release form that is not currently attached as a working
        file. Use the current process the office gives you.
      </p>
    </ContentLayout>
  )
}

export function PrescriptionRefillsPage() {
  return (
    <ContentLayout
      path="/prescription-refills"
      eyebrow="Prescriptions"
      title="Prescription refills"
      intro="Prescription refill questions should go through the office by phone. Please do not send medication names, doses, or pharmacy details by email."
    >
      <p>
        Call{' '}
        <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
          {practice.phoneDisplay}
        </a>{' '}
        during weekday hours. Allow time for the office and your pharmacy to coordinate.
      </p>
      <p>
        Older anticoagulation (Coumadin) instructions from the recovered website are not republished
        here. Medication plans must come from your current physician.
      </p>
    </ContentLayout>
  )
}

export function LabTestInformationPage() {
  return (
    <ContentLayout
      path="/lab-test-information"
      eyebrow="Tests and labs"
      title="Lab and test information"
      intro="Ask the office how to receive lab or test results. Results are not posted through a patient portal on this website."
    >
      <p>
        Call{' '}
        <a href={practice.phoneTel} className="font-semibold underline underline-offset-4">
          {practice.phoneDisplay}
        </a>{' '}
        for results questions. Do not use the website for urgent symptoms. Please do not send test
        results or other sensitive patient information by email.
      </p>
      <p>
        Educational pages about Holter monitors, event monitors, EKGs, and echocardiograms are in{' '}
        <Link to="/testing" className="font-semibold underline underline-offset-4">
          testing and monitoring
        </Link>
        .
      </p>
    </ContentLayout>
  )
}

export function PhotosPage() {
  return (
    <ContentLayout
      path="/photos"
      eyebrow="Practice photos"
      title="Photos"
      intro="The recovered site included physician photographs and educational illustrations. Identifiable patient letters and testimonials are not published here pending privacy review."
      related={[
        { to: '/media', label: 'Media library' },
        { to: '/education', label: 'Patient education' },
        { to: '/presentations', label: 'Presentations' },
      ]}
    >
      <figure className="mt-6 max-w-xs">
        <img
          src={practice.photoSrc}
          alt={practice.photoAlt}
          width={340}
          height={452}
          decoding="async"
          className="aspect-[170/226] h-auto w-full rounded-2xl border border-navy/10 object-cover object-[center_18%]"
        />
      </figure>
      <p className="mt-6">
        Educational illustrations are placed on the condition, treatment, and testing pages where
        they help explain a topic. See{' '}
        <Link to="/education" className="font-semibold underline underline-offset-4">
          patient education
        </Link>
        . Historical presentation images are on{' '}
        <Link to="/presentations" className="font-semibold underline underline-offset-4">
          presentations
        </Link>
        .
      </p>
    </ContentLayout>
  )
}

export function PresentationsPage() {
  return (
    <ContentLayout
      path="/presentations"
      eyebrow="Historical material"
      title="Presentations"
      intro="The original website published presentation and flyer images. They are shown here as historical practice material. Dates, hospital names, and event details on these images may no longer be current."
      showDisclaimer
      related={[
        { to: '/media', label: 'Media library' },
        { to: '/articles', label: 'Articles' },
        { to: '/videos', label: 'Videos' },
      ]}
    >
      <p>
        Current hospital affiliations used on this website are Providence, Cedars-Sinai Medical
        Center, and Valley Presbyterian Hospital. A hospital named on an older flyer is not added
        as a current affiliation because of that flyer.
      </p>
      <figure className="mt-8">
        <img
          src="/presentations/symposium-dr-leo.jpg"
          alt="Historical symposium presentation featuring Dr. Leo Polosajian, recovered from the original Cardiac Rhythm Specialists website"
          width={750}
          height={971}
          decoding="async"
          className="h-auto w-full max-w-3xl rounded-xl border border-navy/10 bg-white object-contain"
        />
        <figcaption className="mt-3 text-base text-navy">
          Recovered symposium image from the original presentations page.
        </figcaption>
      </figure>
      <figure className="mt-10">
        <img
          src="/presentations/los-robles-flyer.jpg"
          alt="Historical educational flyer recovered from the original Cardiac Rhythm Specialists presentations page"
          width={750}
          height={904}
          decoding="async"
          className="h-auto w-full max-w-3xl rounded-xl border border-navy/10 bg-white object-contain"
        />
        <figcaption className="mt-3 text-base text-navy">
          Recovered flyer image. Please treat event and affiliation details on the flyer as
          historical until the office confirms them.
        </figcaption>
      </figure>
    </ContentLayout>
  )
}

export function ArticlesPage() {
  return (
    <ContentLayout
      path="/articles"
      eyebrow="Historical material"
      title="Articles"
      intro="The original website linked a November 2010 magazine PDF. It is provided here as recovered historical material, not as a current medical guideline."
      showDisclaimer
      related={[
        { to: '/media', label: 'Media library' },
        { to: '/education', label: 'Patient education' },
        { to: '/presentations', label: 'Presentations' },
      ]}
    >
      <p>
        <a
          href="/articles/november-2010-yhc-magazine.pdf"
          className="font-semibold underline underline-offset-4"
        >
          November 2010 YHC magazine PDF
        </a>
        . A PDF reader is needed to open the file. Content, statistics, and recommendations in a
        2010 article may be outdated.
      </p>
      <p>
        Current patient education on this website is on the{' '}
        <Link to="/education" className="font-semibold underline underline-offset-4">
          education
        </Link>{' '}
        and{' '}
        <Link to="/conditions" className="font-semibold underline underline-offset-4">
          conditions
        </Link>{' '}
        pages.
      </p>
    </ContentLayout>
  )
}
