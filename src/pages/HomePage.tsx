import { useEffect } from 'react'
import { About } from '../components/About'
import { Care } from '../components/Care'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Hero } from '../components/Hero'
import { PatientInfo } from '../components/PatientInfo'
import { QuickStart } from '../components/QuickStart'

export function HomePage() {
  useEffect(() => {
    document.title = 'Cardiac Rhythm Specialists | Leo Polosajian, MD'
  }, [])

  return (
    <>
      <Hero />
      <QuickStart />
      <About />
      <Care />
      <Education />
      <PatientInfo />
      <Contact />
    </>
  )
}
