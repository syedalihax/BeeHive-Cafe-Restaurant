import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import DealsSection from '../components/DealsSection'
import MenuSection from '../components/MenuSection'
import MapSection from '../components/MapSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main Semantic Accessibility Layout Wrapper */}
      <main id="main-content" role="main" className="outline-none">
        
        {/* LCP Atmosphere Section */}
        <HeroSection />

        {/* Corporate Story Details */}
        <AboutSection />

        {/* Highlighted Combo Offerings */}
        <DealsSection />

        {/* Categories Pricing Section */}
        <MenuSection />

        {/* Embedded Dark Theme Vector Map directions */}
        <MapSection />

        {/* Call to Actions + Social handles */}
        <ContactSection />
        
      </main>

      {/* Bottom Sticky Footing Credits */}
      <Footer />

      {/* Speed Dial floating Chat */}
      <FloatingWhatsApp />
    </>
  )
}
