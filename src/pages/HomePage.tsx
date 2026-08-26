import { useEffect } from 'react'
import { About } from '../components/About'
import { Care } from '../components/Care'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { PatientInfo } from '../components/PatientInfo'

export function HomePage() {
  useEffect(() => {
    document.title = 'Cardiac Rhythm Specialists | Leo Polosajian, MD'
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Care />
      <PatientInfo />
      <Contact />
    </>
  )
}
