import React from 'react'
import Hero from '../components/serviceArea/SeviceHero'
import MarqueeStrip from '../components/utils/MarqueeStrip'
import ServicesSection from '../components/serviceArea/ServicesSection'
import HowItWorks from '../components/serviceArea/HowItWorks'

export default function page() {
    return (
        <>
            <Hero />
            <MarqueeStrip />
            <ServicesSection />
            <HowItWorks />
        </>
    )
}
