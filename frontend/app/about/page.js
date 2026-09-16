import React from 'react'
import AboutHero from '../components/about/AboutHero'
import ManifestoSection from '../components/about/ManifestoSection'
import ByTheNumbersSection from '../components/about/ByTheNumbersSection'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <ManifestoSection/>
      <ByTheNumbersSection/>
    </div>
  )
}
