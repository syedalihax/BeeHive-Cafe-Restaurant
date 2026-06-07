'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import FadeUp from './FadeUp'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false, loading: () => <div className="space-y-4" /> }
)

interface MenuItem {
  name: string
  price: string
}

const categories = [
  "Ice Cream & SherYakh",
  "Breakfast",
  "Bakeries",
  "Juice Bar"
]

const menuData: Record<number, MenuItem[]> = {
  0: [
    { name: "Ice Cream & SherYakh Varieties", price: "Rs. 150" }
  ],
  1: [
    { name: "Special BeeHive Breakfast", price: "Rs. 250" },
    { name: "Alo Paratha", price: "Rs. 130" },
    { name: "Chawl Chole", price: "Rs. 120" },
    { name: "Kabuli Omelette", price: "Rs. 100" },
    { name: "Potato + Egg", price: "Rs. 100" },
    { name: "Alo Kabab (Koko)", price: "Rs. 100" },
    { name: "Hot Milk + Egg", price: "Rs. 80" },
    { name: "Half-Fry", price: "Rs. 50" },
    { name: "Full-Fry", price: "Rs. 50" },
    { name: "Omelette", price: "Rs. 50" },
    { name: "Plain Paratha", price: "Rs. 50" },
    { name: "Boiled Egg", price: "Rs. 25" }
  ],
  2: [
    { name: "Milk Cakes", price: "Rs. 150" },
    { name: "Fruit Cakes", price: "Rs. 130" },
    { name: "Chocolate Cakes", price: "Rs. 100" },
    { name: "Fresh Cream Pastry", price: "Rs. 100" },
    { name: "Cupcakes", price: "Rs. 50–60" },
    { name: "Chocolate Donuts", price: "Rs. 40" },
    { name: "Sugar Donuts", price: "Rs. 40" }
  ],
  3: [
    { name: "Special BeeHive Juice", price: "Rs. 250" },
    { name: "Mix Juice", price: "Rs. 250" },
    { name: "Pomegranate Juice", price: "Rs. 250" },
    { name: "Kabuli Majon", price: "Rs. 200" },
    { name: "Pineapple Juice", price: "Rs. 200" },
    { name: "Banana Juice", price: "Rs. 150" },
    { name: "Mango Juice", price: "Rs. 150" },
    { name: "Apple Juice", price: "Rs. 150" },
    { name: "Chako Juice", price: "Rs. 150" },
    { name: "Kiwi Juice", price: "Rs. 150" }
  ]
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section 
      id="menu" 
      role="region"
      aria-label="Food and Beverage Menu"
      className="bg-[#1A1818] py-24 md:py-32 px-6 md:px-12 relative"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Top Free Delivery Banner */}
        <FadeUp delay={0.0}>
          <div className="w-full bg-brand-yellow text-brand-dark text-center py-4 px-6 font-sans font-black text-base md:text-lg rounded-xl mb-16 shadow-lg shadow-brand-yellow/10">
            🏍️ Free Home Delivery inside Hazara Town only!
          </div>
        </FadeUp>

        {/* Header Titles */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
              Our Menu
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="font-sans text-gray-400 text-sm md:text-base mt-3">
              Humare dastar Khwan se behtareen pakwaan — chuninda masaalon aur taaza ingredients se bane lajawab khane.
            </p>
          </FadeUp>
        </div>

        {/* Categories Tab Selector Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => {
            const isActive = activeTab === index
            return (
              <button
                key={category}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs md:text-sm tracking-wide transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                    : 'bg-[#2D2A2A] text-gray-400 hover:text-brand-yellow hover:bg-[#3d3939]'
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Tab Item Content Grid */}
        <MotionDiv
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          role="tabpanel"
        >
          {menuData[activeTab]?.map((item) => (
            <div 
              key={item.name}
              className="bg-[#252222] rounded-xl p-5 border border-brand-yellow/5 hover:border-brand-yellow/30 transition-colors duration-300 flex justify-between items-center group shadow"
            >
              <span className="text-white font-sans font-semibold text-sm md:text-base group-hover:text-brand-yellow transition-colors leading-snug">
                {item.name}
              </span>
              <span className="text-brand-yellow font-sans font-extrabold text-sm md:text-base whitespace-nowrap ml-3 pl-2 border-l border-white/5">
                {item.price}
              </span>
            </div>
          ))}
        </MotionDiv>

      </div>
    </section>
  )
}
