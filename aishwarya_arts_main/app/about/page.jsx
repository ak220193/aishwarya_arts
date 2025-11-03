import React from 'react'
import Hero from '../components/HomePage/Hero'
import AboutVideo from '../components/About/AboutVideo'
import ProfessionalJourney from '../components/About/ProfessionalJourney'
import MissionVision from '../components/About/MissionVision'
import OurTeam from '../components/About/OurTeam'
import WhyChoose from '../components/About/WhyChoose'
import ContactAnimation from '../components/About/ContactAnimation'

const page = () => {
  return (
    <main>
      <Hero/>
      <AboutVideo/>
      <ProfessionalJourney/>
      <MissionVision/>
      <OurTeam/>
      <WhyChoose/>
      <ContactAnimation/>


    </main>
  )
}

export default page