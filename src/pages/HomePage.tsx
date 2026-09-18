import { About } from '../components/About'
import { Care } from '../components/Care'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Hero } from '../components/Hero'
import { HowCanWeHelp } from '../components/HowCanWeHelp'
import { MeetPhysician } from '../components/MeetPhysician'
import { PatientInfo } from '../components/PatientInfo'
import { MedicalDisclaimer } from '../components/MedicalDisclaimer'

export function HomePage() {
  return (
    <>
      <Hero />
      <MeetPhysician />
      <HowCanWeHelp />
      <About />
      <Care />
      <Education />
      <PatientInfo />
      <Contact />
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <MedicalDisclaimer compact />
      </div>
    </>
  )
}
