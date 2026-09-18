import { Link } from 'react-router-dom'
import { practice } from '../data/practice'
import { physicianBiography } from '../data/physician'
import { ContentLayout } from '../components/ContentLayout'
import { CredentialList } from '../components/CredentialList'
import { PracticeContact } from '../components/PracticeContact'

export function AboutPhysicianPage() {
  return (
    <ContentLayout
      path="/about-dr-polosajian"
      eyebrow="About the physician"
      title={practice.physician}
      intro={`${practice.physicianTitle} at ${practice.legalName} in Reseda, California. Heart rhythm care for patients in Los Angeles, the San Fernando Valley, Thousand Oaks, Simi Valley, Glendale, and North Hollywood is provided from the Reseda office.`}
    >
      <section>
        <h2 className="font-serif text-2xl font-semibold text-navy">
          About {practice.physicianInformalFull}
        </h2>
        {physicianBiography.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-3">
            {paragraph}
          </p>
        ))}
      </section>

      <div className="mt-10">
        <CredentialList />
      </div>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Hospital affiliations</h2>
        <p className="mt-3">Current confirmed hospital affiliations are:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {practice.hospitalAffiliations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p className="mt-3">
          Affiliation means hospital relationships used in care. It does not mean there is a
          separate Cardiac Rhythm Specialists office at each hospital.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Clinical focus</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          {physicianBiography.clinicalInterests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link to="/conditions" className="font-semibold underline underline-offset-4">
              Heart rhythm conditions
            </Link>
          </li>
          <li>
            <Link to="/treatments" className="font-semibold underline underline-offset-4">
              Treatments and procedures
            </Link>
          </li>
          <li>
            <Link to="/testing" className="font-semibold underline underline-offset-4">
              Testing and monitoring
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Training</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Cardiac electrophysiology fellowship, Cedars-Sinai Medical Center</li>
          <li>Cardiology fellowship, University of Connecticut</li>
          <li>Internal medicine residency, Columbia University’s St. Luke’s-Roosevelt Hospital, New York City</li>
          <li>Master’s degree in biomedical sciences, Barry University, Florida</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Languages</h2>
        <p className="mt-3">
          The original practice biography stated that {practice.physicianInformal} is fluent in
          English and Armenian.
        </p>
      </section>

      <section>
        <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">Service area</h2>
        <p className="mt-3">
          The office is in Reseda. Patients also come from {practice.serviceAreas.join(', ')}.
        </p>
      </section>

      <figure className="mt-10 max-w-xs">
        <img
          src={practice.photoSrc}
          alt={practice.photoAlt}
          width={340}
          height={452}
          decoding="async"
          className="aspect-[170/226] h-auto w-full rounded-2xl border border-navy/10 object-cover object-[center_18%]"
        />
      </figure>

      <PracticeContact heading="Office location" />
    </ContentLayout>
  )
}
