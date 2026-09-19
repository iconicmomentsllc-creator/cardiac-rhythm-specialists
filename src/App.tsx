import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { AboutPhysicianPage } from './pages/AboutPhysicianPage'
import { ContactPage } from './pages/ContactPage'
import { DisclaimerPage } from './pages/DisclaimerPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { InsurancePage } from './pages/InsurancePage'
import { NewPatientsPage } from './pages/NewPatientsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import {
  ConditionsIndexPage,
  TreatmentsIndexPage,
  TestingIndexPage,
  EducationIndexPage,
} from './pages/MedicalTopicPages'
import {
  ConditionRoute,
  TreatmentRoute,
  TestingRoute,
  EducationRoute,
  BookletRoute,
} from './pages/TopicRoutes'
import {
  PatientResourcesPage,
  AppointmentRequestPage,
  PatientFormsPage,
  MedicalRecordsPage,
  PrescriptionRefillsPage,
  LabTestInformationPage,
  PhotosPage,
  PresentationsPage,
  ArticlesPage,
} from './pages/ResourcePages'
import { VideosPage } from './pages/VideosPage'
import { MediaPage } from './pages/MediaPage'
import { LEGACY_REDIRECTS } from './data/legacyRedirects'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-dr-polosajian" element={<AboutPhysicianPage />} />
        <Route path="/conditions" element={<ConditionsIndexPage />} />
        <Route path="/conditions/:slug" element={<ConditionRoute />} />
        <Route path="/treatments" element={<TreatmentsIndexPage />} />
        <Route path="/treatments/:slug" element={<TreatmentRoute />} />
        <Route path="/testing" element={<TestingIndexPage />} />
        <Route path="/testing/:slug" element={<TestingRoute />} />
        <Route path="/education" element={<EducationIndexPage />} />
        <Route path="/education/booklets/:slug" element={<BookletRoute />} />
        <Route path="/education/:slug" element={<EducationRoute />} />
        <Route path="/patient-resources" element={<PatientResourcesPage />} />
        <Route path="/appointment-request" element={<AppointmentRequestPage />} />
        <Route path="/patient-forms" element={<PatientFormsPage />} />
        <Route path="/medical-records" element={<MedicalRecordsPage />} />
        <Route path="/prescription-refills" element={<PrescriptionRefillsPage />} />
        <Route path="/lab-test-information" element={<LabTestInformationPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/presentations" element={<PresentationsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/new-patients" element={<NewPatientsPage />} />
        <Route path="/insurance" element={<InsurancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/medical-disclaimer" element={<DisclaimerPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {LEGACY_REDIRECTS.map((item) => (
          <Route key={item.from} path={item.from} element={<Navigate to={item.to} replace />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
