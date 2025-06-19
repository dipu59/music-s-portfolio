import React from 'react'
import HeroSection from './components/herosection'
import Card from './components/card'
import GridBackground from './components/backgroundgrid'
import { StickyScrollRevealDemo } from './components/stickyscroll'
import HoverEffrct from './components/hovercards'
import { VortexDemoSecond } from './components/glowingbackground'
import Footer from './components/footter'
function Page() {
  return (
    <div>
      <HeroSection />
      <Card />
      <StickyScrollRevealDemo />
      <GridBackground />
      <HoverEffrct />
      <VortexDemoSecond />
      <Footer/>
    </div>
  )
}

export default Page