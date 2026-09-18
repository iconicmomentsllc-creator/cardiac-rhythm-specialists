import { useParams } from 'react-router-dom'
import {
  ConditionPage,
  TreatmentPage,
  TestingPage,
  EducationTopicPage,
} from './MedicalTopicPages'
import { BookletPage } from './BookletPage'

export function ConditionRoute() {
  const { slug } = useParams()
  return <ConditionPage slug={slug ?? ''} />
}

export function TreatmentRoute() {
  const { slug } = useParams()
  return <TreatmentPage slug={slug ?? ''} />
}

export function TestingRoute() {
  const { slug } = useParams()
  return <TestingPage slug={slug ?? ''} />
}

export function EducationRoute() {
  const { slug } = useParams()
  return <EducationTopicPage slug={slug ?? ''} />
}

export function BookletRoute() {
  const { slug } = useParams()
  return <BookletPage key={slug} slug={slug ?? ''} />
}
