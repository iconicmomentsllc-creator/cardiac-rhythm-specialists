import { useEffect } from 'react'
import { About } from '../components/About'
import { Care } from '../components/Care'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Hero } from '../components/Hero'
import { HowCanWeHelp } from '../components/HowCanWeHelp'
import { MeetPhysician } from '../components/MeetPhysician'
import { PatientInfo } from '../components/PatientInfo'

export function HomePage() {
  useEffect(() => {
    document.title = 'Cardiac Rhythm Specialists | Leo Polosajian, MD'
  }, [])

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
    </>
  )
}
