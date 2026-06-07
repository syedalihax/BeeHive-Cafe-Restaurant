import React from 'react'
import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from 'lucide-react'
import FadeUp from './FadeUp'

export default function ContactSection() {
  const whatsappOrderUrl = "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20order%20karna%20hai.%20%F0%9F%94%9F%F0%9F%8D%95"

  return (
    <section 
      id="contact" 
      role="region"
      aria-label="Contact Inquiries Section"
      className="bg-gradient-to-br from-brand-brown to-[#8B4E28] py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeUp delay={0.0}>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
              Get In Touch
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-white/80 text-sm md:text-base mt-3">
              Humse raabta karein! Hum aapki queries ka jald se jald jawab dene aur behtareen delivery service faraham karne ke liye tayyar hain.
            </p>
          </FadeUp>
        </div>

        {/* Form and Contacts Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: 4 Info Cards */}
          <div className="space-y-4">
            
            {/* Card 1: Phone */}
            <FadeUp delay={0.1}>
              <div className="bg-black/20 hover:bg-black/25 transition-colors duration-200 rounded-2xl p-6 flex items-start gap-4 shadow border border-white/5">
                <span className="text-brand-yellow p-1" aria-hidden="true">
                  <Phone size={24} />
                </span>
                <div>
                  <h3 className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-wide">
                    Call Us
                  </h3>
                  <a 
                    href="tel:+923166888716" 
                    className="text-white text-lg font-black hover:underline mt-1 block"
                  >
                    0316-6888716
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 2: Email */}
            <FadeUp delay={0.2}>
              <div className="bg-black/20 hover:bg-black/25 transition-colors duration-200 rounded-2xl p-6 flex items-start gap-4 shadow border border-white/5">
                <span className="text-brand-yellow p-1" aria-hidden="true">
                  <Mail size={24} />
                </span>
                <div>
                  <h3 className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-wide">
                    Email Inquiries
                  </h3>
                  <a 
                    href="mailto:info@beehivecafe.pk" 
                    className="text-white text-base md:text-lg font-bold hover:underline mt-1 block"
                  >
                    info@beehivecafe.pk
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Card 3: Clock */}
            <FadeUp delay={0.3}>
              <div className="bg-black/20 hover:bg-black/25 transition-colors duration-200 rounded-2xl p-6 flex items-start gap-4 shadow border border-white/5">
                <span className="text-brand-yellow p-1" aria-hidden="true">
                  <Clock size={24} />
                </span>
                <div>
                  <h3 className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-wide">
                    Opening Hours
                  </h3>
                  <p className="text-white text-base md:text-lg font-bold mt-1">
                    9:00 PM – 2:00 AM (Everyday)
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Card 4: Address */}
            <FadeUp delay={0.4}>
              <div className="bg-black/20 hover:bg-black/25 transition-colors duration-200 rounded-2xl p-6 flex items-start gap-4 shadow border border-white/5">
                <span className="text-brand-yellow p-1" aria-hidden="true">
                  <MapPin size={24} />
                </span>
                <div>
                  <h3 className="text-brand-yellow font-sans font-bold text-sm uppercase tracking-wide">
                    Our Location
                  </h3>
                  <p className="text-white text-sm md:text-base font-semibold leading-relaxed mt-1">
                    Start of Mari Colony, Karani Road, Muhalla Jaferia, New Hazara Town, Quetta, Pakistan
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>

          {/* Right Column: WhatsApp Call To Action + Social Media Links */}
          <div className="flex flex-col items-center justify-center p-8 bg-black/10 rounded-3xl border border-white/5 shadow-2xl">
            <FadeUp delay={0.2} className="text-center">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Hungry? Order Directly!
              </h3>
              <p className="font-sans text-white/80 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                Click niche diye gaye button per click karein aur apna orders direct WhatsApp per book karein. Free deliver inside Hazara Town!
              </p>
            </FadeUp>

            {/* Large Conversion Click WhatsApp Button */}
            <FadeUp delay={0.3}>
              <a 
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green hover:bg-green-600 text-white px-7 py-4 rounded-full text-lg md:text-xl font-black shadow-2xl shadow-brand-green/20 hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
              >
                Order via WhatsApp 💬
              </a>
            </FadeUp>

            {/* Social Rows follow us */}
            <FadeUp delay={0.4} className="mt-12 flex flex-col items-center gap-4">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#F5C21B]">
                Follow Us On Social Media
              </span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://facebook.com/beehivecafe.pk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 hover:bg-brand-yellow/20 hover:text-brand-yellow text-white p-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  aria-label="Follow BeeHive Cafe and Restaurant on Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://instagram.com/beehivecafe.pk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 hover:bg-brand-yellow/20 hover:text-brand-yellow text-white p-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  aria-label="Follow BeeHive Cafe and Restaurant on Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  )
}
