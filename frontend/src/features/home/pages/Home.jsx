import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../../../shared/compoents/NavBar'
import About from '../../about/pages/About'
function Home() {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <About/> 
    </>
  )
}

export default Home