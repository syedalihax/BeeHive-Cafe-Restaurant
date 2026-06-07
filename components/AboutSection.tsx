import React from 'react'
import Image from 'next/image'
import FadeUp from './FadeUp'

export default function AboutSection() {
  return (
    <section 
      id="about" 
      role="region"
      aria-label="About Us Section"
      className="bg-brand-brown py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Café Aesthetic Image */}
        <FadeUp delay={0.0} className="w-full h-full flex justify-center">
          <div className="relative w-full max-w-[600px] aspect-[6/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            {/* TODO: Replace with actual BeeHive Cafe photo */}
            <Image 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
              width={600}
              height={500}
              loading="lazy"
              alt="BeeHive Cafe &amp; Restaurant warm bakery display interior New Hazara Town Quetta"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAgH/8QAIRAAAgIBBAMAAAAAAAAAAAAAAQIDBAUGETFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcouSnfh47rzer/ABYAChALiAAA/9k="
            />
          </div>
        </FadeUp>

        {/* Right Column - Authentic Visual Copy */}
        <div className="flex flex-col">
          <FadeUp delay={0.1}>
            <span className="text-brand-yellow font-sans font-bold tracking-widest text-xs uppercase mb-3 block">
              OUR STORY
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Where Tradition<br />
              Meets Taste
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <p className="font-sans text-white/90 text-base md:text-lg leading-relaxed mb-8">
              Welcome to BeeHive Cafe &amp; Restaurant – Jahan tradition aur taste ek sath milte hain! Quetta ke dil (New Hazara Town) me mojood, BeeHive sirf ek cafe nahi, balkeh khane ke shaukeen logon ke liye ek aisi jagah hai jahan hum aapko modern fast food, fresh bakery items aur hamari special traditional delicacies (jaise authentic SherYakh aur Kabuli Omelette) ka behtareen zaiqa pesh karte hain. Hamara maqsad aapko fresh, saaf-suthra aur lajawab khana dena hai, taake aap har bite ko enjoy karein.
            </p>
          </FadeUp>

          {/* Quick Features Row */}
          <FadeUp delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <span className="bg-brand-yellow text-brand-dark font-sans font-bold px-5 py-2.5 rounded-full text-xs md:text-sm shadow-md flex items-center gap-2">
                🍕 Fast Food
              </span>
              <span className="bg-brand-yellow text-brand-dark font-sans font-bold px-5 py-2.5 rounded-full text-xs md:text-sm shadow-md flex items-center gap-2">
                🥐 Fresh Bakery
              </span>
              <span className="bg-brand-yellow text-brand-dark font-sans font-bold px-5 py-2.5 rounded-full text-xs md:text-sm shadow-md flex items-center gap-2">
                🍵 Authentic Hazaragi Cuisine
              </span>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}
