import { Hero } from '../components/home/Hero'
import { TrustStrip } from '../components/home/TrustStrip'
import { Intro } from '../components/home/Intro'
import { Services } from '../components/home/Services'
import { FeaturedService } from '../components/home/FeaturedService'
import { Doctors } from '../components/home/Doctors'
import { WhyLumora } from '../components/home/WhyLumora'
import { WhyPatientsReturn } from '../components/home/WhyPatientsReturn'
import { Gallery } from '../components/home/Gallery'
import { Testimonials } from '../components/home/Testimonials'
import { PatientJourney } from '../components/home/PatientJourney'
import { Location } from '../components/home/Location'
import { PatientInfo } from '../components/home/PatientInfo'
import { ClosingCTA } from '../components/home/ClosingCTA'
import { GetInTouch } from '../components/home/GetInTouch'

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Intro />
      <Services />
      <FeaturedService />
      <Doctors />
      <WhyLumora />
      <WhyPatientsReturn />
      <Gallery />
      <Testimonials />
      <PatientJourney />
      <Location />
      <PatientInfo />
      <ClosingCTA />
      <GetInTouch />
    </>
  )
}
