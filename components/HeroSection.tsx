import React from 'react'
import Image from 'next/image'
import FadeUp from './FadeUp'

export default function HeroSection() {
  const whatsappOrderUrl = "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20order%20karna%20hai.%20%F0%9F%94%9F%F0%9F%8D%95"

  return (
    <section 
      id="home"
      role="region"
      aria-label="Hero Section"
      className="min-h-screen relative flex flex-col lg:flex-row items-stretch overflow-hidden pt-[72px] bg-[#0F0D0D]"
    >
      {/* Left Column (Hero Section) */}
      <div className="relative w-full lg:w-[65%] flex items-center min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Background Image - LCP Element */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80" 
            fill
            priority={true} 
            fetchPriority="high" 
            alt="BeeHive Cafe &amp; Restaurant Quetta warm modern interior atmosphere"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAgH/8QAIRAAAgIBBAMAAAAAAAAAAAAAAQIDBAUGETFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcouSnfh47rzer/ABYAChALiAAA/9k="
          />
          {/* Responsive Ambient Linear Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0D0D] via-[#0F0D0D]/90 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:pl-16 py-16 flex flex-col justify-center">
          
          {/* Hot Location Badge */}
          <FadeUp delay={0.0}>
            <span className="inline-flex items-center gap-1.5 bg-[#F5C21B]/10 border border-[#F5C21B]/30 text-brand-yellow rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              🐝 New Hazara Town, Quetta
            </span>
          </FadeUp>

          {/* Playfair Typography Headline */}
          <FadeUp delay={0.1}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Taste the Buzz of<br />
              <span className="text-brand-yellow">Quality Food!</span>
            </h1>
          </FadeUp>

          {/* Poppins Subtitle */}
          <FadeUp delay={0.2}>
            <p className="font-sans text-base md:text-lg text-gray-300 max-w-xl mt-5 leading-relaxed">
              Quetta ka sab se unique cafe — jahan modern fast food aur authentic Afghan/Hazargi delicacies ka behtareen sangam hai. Saaf suthra, taaza aur behtareen zaiqa jo aapka dil jeet le.
            </p>
          </FadeUp>

          {/* Delivery Characteristics Badges Row */}
          <FadeUp delay={0.25}>
            <div className="mt-5 flex gap-4 flex-wrap">
              <span className="text-[#7CB342] text-sm md:text-base font-bold flex items-center gap-1">
                ✅ Dine-in
              </span>
              <span className="text-[#7CB342] text-sm md:text-base font-bold flex items-center gap-1">
                ✅ Takeout
              </span>
              <span className="text-[#7CB342] text-sm md:text-base font-bold flex items-center gap-1">
                ✅ Home Delivery
              </span>
            </div>
          </FadeUp>

          {/* Hero CTA Button Layout */}
          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap">
              <a 
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7CB342] hover:bg-[#689f38] text-white px-8 py-4 rounded-full font-bold text-center text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#7CB342]/20"
              >
                Order on WhatsApp →
              </a>
              <a 
                href="#menu"
                className="border-2 border-white text-white hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow px-8 py-4 rounded-full font-bold text-center text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                View Menu ↓
              </a>
            </div>
          </FadeUp>

          {/* Ambient Stat Pills Footer Info Row */}
          <FadeUp delay={0.4}>
            <div className="mt-12 flex gap-4 flex-wrap items-center">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white text-xs md:text-sm font-medium flex items-center gap-2">
                <span aria-hidden="true">⏰</span> 12PM – 2AM Everyday
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white text-xs md:text-sm font-medium flex items-center gap-2">
                <span aria-hidden="true">🚴</span> Free Delivery inside Hazara Town
              </div>
              <a 
                href="tel:+923166888716"
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 text-white text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-brand-yellow hover:text-brand-dark transition-colors duration-200"
              >
                <span aria-hidden="true">📞</span> 0316-6888716
              </a>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* Right Column (35% Side Dashboard) - Perfect Matching Layout Pattern */}
      <div className="hidden lg:flex lg:w-[35%] bg-[#1A1818] border-l border-white/5 p-8 flex-col gap-6 justify-center">
        {/* Special Deal Card */}
        <div className="bg-[#2D2A2A] rounded-2xl p-5 border border-brand-yellow/20 relative group transition-all duration-300 hover:border-brand-yellow/45 shadow-lg">
          <div className="absolute -top-3 right-4 bg-brand-yellow text-brand-dark text-[10px] font-black px-3 py-1 rounded-full uppercase">Best Value</div>
          <h3 className="text-white font-bold text-lg mb-1 font-serif">BeeHive Family (Large)</h3>
          <p className="text-brand-yellow text-2xl font-black mb-4">Rs. 2,200</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 text-xs text-gray-300">
              <span className="text-[#7CB342]">✔</span> 1 Large Pizza + 1 Medium Pizza
            </li>
            <li className="flex items-center gap-2 text-xs text-gray-300">
              <span className="text-[#7CB342]">✔</span> 12 Wings + 6 Samosas
            </li>
            <li className="flex items-center gap-2 text-xs text-gray-300">
              <span className="text-[#7CB342]">✔</span> 2 French Fries + 2.5L Drink
            </li>
          </ul>
          <a 
            href="https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20BeeHive%20Family%20Large%20Deal%20(Rs.%202200)%20order%20karna%20hai."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#7CB342] hover:bg-[#689f38] text-white py-2.5 rounded-lg text-sm font-bold text-center block transition-colors shadow-md"
          >
            Claim Deal
          </a>
        </div>

        {/* Specialties Mini List */}
        <div className="flex flex-col">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-serif text-xl font-black text-white">Specialties</h2>
            <a href="#menu" className="text-xs text-brand-yellow font-semibold hover:underline">See All</a>
          </div>
          <div className="space-y-3">
            <div className="bg-[#252222] p-3 rounded-xl flex justify-between items-center border border-transparent hover:border-white/10 transition-colors">
              <div>
                <p className="text-sm font-semibold text-white">Authentic SherYakh</p>
                <p className="text-[10px] text-gray-500">Traditional Afghan delight</p>
              </div>
              <p className="text-brand-yellow font-bold text-sm">Rs. 150</p>
            </div>
            <div className="bg-[#252222] p-3 rounded-xl flex justify-between items-center border border-transparent hover:border-white/10 transition-colors">
              <div>
                <p className="text-sm font-semibold text-white">Kabuli Omelette</p>
                <p className="text-[10px] text-gray-500">Signature breakfast item</p>
              </div>
              <p className="text-brand-yellow font-bold text-sm">Rs. 100</p>
            </div>
            <div className="bg-[#252222] p-3 rounded-xl flex justify-between items-center border border-transparent hover:border-white/10 transition-colors">
              <div>
                <p className="text-sm font-semibold text-white">BeeHive Special Juice</p>
                <p className="text-[10px] text-gray-500">Fresh fruit blend</p>
              </div>
              <p className="text-brand-yellow font-bold text-sm">Rs. 250</p>
            </div>
          </div>
        </div>

        {/* Location Box */}
        <div className="bg-[#B06433] rounded-2xl p-4 flex gap-3 items-center text-white shadow-md">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            📍
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Find Us</p>
            <p className="text-[11px] leading-tight font-medium">Start of Mari Colony, Karani Rd, New Hazara Town</p>
          </div>
        </div>
      </div>
    </section>
  )
}
