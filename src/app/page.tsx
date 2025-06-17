import React from 'react'
import HeroSection from './components/herosection'
import Card from './components/card'
import GridBackground from './components/backgroundgrid'
import { StickyScrollRevealDemo } from './components/stickyscroll'
import HoverEffrct from './components/hovercards'
function Page() {
  return (
    <div>
      <HeroSection />
      <Card />
      <StickyScrollRevealDemo />
      <GridBackground />
      <HoverEffrct/>
    </div>
  )
}

export default Page