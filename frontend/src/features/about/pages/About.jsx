import React from 'react'
import AboutCapabilities from '../components/AboutCapabilities'
import AboutIntro from '../components/AboutIntro'
import wafer from '../../../assets/images/wafer.png';
import InfoCard from '../../../shared/compoents/InfoCard';
import '../components/about.scss'
function About() {
  return (
    <section className="about-section">
      <div className="about-intro">
        <AboutIntro />
      </div>
      <AboutCapabilities />
    </section>
   
  )
}

export default About