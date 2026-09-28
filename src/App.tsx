import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { MobileCTA } from './components/layout/MobileCTA'
import { Preloader } from './components/layout/Preloader'
import { PageTransition } from './components/layout/PageTransition'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { DoctorsPage } from './pages/DoctorsPage'
import { DoctorProfilePage } from './pages/DoctorProfilePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BookingPage } from './pages/BookingPage'
import { PatientInformationPage } from './pages/PatientInformationPage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading && <Preloader onComplete={handleLoadingComplete} />}
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/:slug"
              element={
                <PageTransition>
                  <ServiceDetailPage />
                </PageTransition>
              }
            />
            <Route
              path="/doctors"
              element={
                <PageTransition>
                  <DoctorsPage />
                </PageTransition>
              }
            />
            <Route
              path="/doctors/:slug"
              element={
                <PageTransition>
                  <DoctorProfilePage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/patient-information"
              element={
                <PageTransition>
                  <PatientInformationPage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route
              path="/book"
              element={
                <PageTransition>
                  <BookingPage />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </BrowserRouter>
  )
}
