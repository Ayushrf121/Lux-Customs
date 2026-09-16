import HomeHero from './components/home/HomeHero'
import MarqueeStrip from './components/utils/MarqueeStrip'
import WhatWeDoSection from './components/home/WhatWeDoSection'
import GoogleReviewsSection from './components/home/GoogleReviewsSection'
import CtaBanner from './components/home/CTA'
import ManifestoTeaserSection from './components/home/ManifestoTeaserSection'


export default function page() {
  return (
    <>
      <HomeHero/>
      <MarqueeStrip/>
      <WhatWeDoSection/>
      <ManifestoTeaserSection/>
      <GoogleReviewsSection/>
      <CtaBanner/>
    </>
  )
}
