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
          title="Advanced Silicon Wafer Manufacturing"
          subtitle="Engineered for consistency, purity, and performance."
          description="Supplying industry-grade silicon wafers to semiconductor and technology manufacturers."

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