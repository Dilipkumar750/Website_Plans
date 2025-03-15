import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Plans from './Plans'
import Testimonials from './Testimonials'
import Contact from './Contact'
import FAQ from './FAQ'

const Hero = () => {
  return (
    <div>
      <Home />
      <About /> 
      <Services />
      <Plans />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  )
}

export default Hero
