import React from 'react'
import Hero from './components/home/Hero'
import Services from './components/home/Services'
import About from './components/home/About'
import Divider from './components/utils/Divider'
import Process from './components/home/Process'
import Gallery from './components/home/Gallery'
import Testimonials from './components/home/Testimonials'
import FAQ from './components/home/Faq'
import ContactSection from './components/home/ContactSection'

export default function page() {
  return (
    <>
      <Hero />
      <Services />
      <Divider />
      <About />
      <Divider />
      <Process />
      <Divider />
      <Gallery />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <Divider />
      <ContactSection />
      <Divider />
    </>
  )
}
