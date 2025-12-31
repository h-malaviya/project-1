import React from 'react'
import InfoCard from '../../../shared/compoents/InfoCard'
import './hero.scss'
import wafer from '../../../assets/images/wafer.png'
function HeroSection() {
  return (
     <section className="hero">

      <div className="hero__content">
        <InfoCard
          variant="hero"
          title="Engineering the Foundation of Tomorrow’s Technology"
          subtitle="High-purity silicon wafers engineered for precision, performance, and scale."
          description="From advanced semiconductor devices to solar energy and MEMS applications, we manufacture industry-grade silicon wafers that meet the most demanding global standards."
          cta={
            <div className="hero__actions">
              <button className="btn btn-primary">
                Explore Our Technology
              </button>
              <button className="btn btn-outline">
                Contact Sales
              </button>
            </div>
          }
        />
      </div>

      <div className="hero__media">
        <img src={wafer} alt="Silicon Wafer" />
      </div>
    </section>
  )
}

export default HeroSection