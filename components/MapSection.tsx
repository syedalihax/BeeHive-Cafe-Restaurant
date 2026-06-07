import React from 'react'
import { MapPin } from 'lucide-react'
import FadeUp from './FadeUp'

export default function MapSection() {
  const mapDirectionsUrl = "https://maps.app.goo.gl/GCuJtVVsswW525KT6"

  return (
    <section 
      id="location" 
      role="region"
      aria-label="Location Map Section"
      className="bg-brand-dark py-24 px-6 md:px-12 relative"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <FadeUp delay={0.0}>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
              📍 Find Us
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-gray-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Start of Mari Colony, Karani Road, Muhalla Jaferia, New Hazara Town, Quetta, Pakistan
            </p>
          </FadeUp>
        </div>

        {/* Embedded Interactive Map Container */}
        <FadeUp delay={0.2} className="w-full">
          <div className="rounded-2xl overflow-hidden border-2 border-brand-yellow/30 shadow-2xl bg-brand-black relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.847!2d66.9400!3d30.1580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2f37b6543a7c1%3A0x4d82748b7f3a9d2e!2sNew%20Hazara%20Town%2C%20Quetta%2C%20Balochistan!5e0!3m2!1sen!2spk!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(15%) invert(5%) brightness(95%) contrast(95%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BeeHive Cafe &amp; Restaurant Location — New Hazara Town Quetta"
              className="w-full"
            />
          </div>
        </FadeUp>

        {/* Get Directions External Link Button */}
        <FadeUp delay={0.3}>
          <a 
            href={mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-dark font-sans font-extrabold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full mt-10 inline-flex items-center gap-2 hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-yellow/10 hover:scale-105 active:scale-95"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </FadeUp>

      </div>
    </section>
  )
}
