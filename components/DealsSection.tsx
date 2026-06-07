import React from 'react'
import { Check } from 'lucide-react'
import FadeUp from './FadeUp'

interface DealItem {
  name: string
  price: string
  badge: string
  items: string[]
  whatsappLink: string
}

const dealsData: DealItem[] = [
  {
    name: "BeeHive Family (Large)",
    price: "Rs. 2,200",
    badge: "Best Value",
    items: [
      "1 Large Pizza",
      "1 Medium Pizza",
      "12 Wings",
      "6 Samosas",
      "2 French Fries",
      "Drink 2.5 Liters"
    ],
    whatsappLink: "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20BeeHive%20Family%20Large%20Deal%20(Rs.%202200)%20order%20karna%20hai."
  },
  {
    name: "BeeHive Family (Medium)",
    price: "Rs. 1,800",
    badge: "Family Deal",
    items: [
      "2 Medium Pizzas",
      "10 Wings",
      "5 Samosas",
      "1 French Fries",
      "Drink 1.5 Liters"
    ],
    whatsappLink: "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20BeeHive%20Family%20Medium%20Deal%20(Rs.%201800)%20order%20karna%20hai."
  },
  {
    name: "BeeHive Squad",
    price: "Rs. 1,200",
    badge: "Squad Deal",
    items: [
      "2 Small Pizzas",
      "8 Wings",
      "1 French Fries",
      "4 Drinks"
    ],
    whatsappLink: "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20BeeHive%20Squad%20Deal%20(Rs.%201200)%20order%20karna%20hai."
  },
  {
    name: "BeeHive Close Friends",
    price: "Rs. 700",
    badge: "Duo Deal",
    items: [
      "1 Medium Pizza",
      "1 French Fries",
      "2 Drinks"
    ],
    whatsappLink: "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20BeeHive%20Close%20Friends%20Deal%20(Rs.%20700)%20order%20karna%20hai."
  }
]

export default function DealsSection() {
  return (
    <section 
      id="deals" 
      role="region"
      aria-label="Deals and Packages Section"
      className="bg-brand-dark py-24 md:py-32 px-6 md:px-12 relative"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header content and subhead description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp delay={0.0}>
            <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight">
              🔥 Special Deals &amp; Offers
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-sans text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              Apne ghar waalon ke saath enjoy karein BeeHive ke exclusive family bundles! Hum laye hain behtareen discounts aur fresh zaoqe jo aapke doston aur parivaar ke dilon me mithas ghol dein ge.
            </p>
          </FadeUp>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealsData.map((deal, index) => (
            <FadeUp 
              key={deal.name} 
              delay={index * 0.1}
              className="h-full flex"
            >
              <div className="bg-[#2D2A2A] rounded-2xl p-6 border border-brand-yellow/10 hover:border-brand-yellow/45 transition-all duration-300 hover:scale-[1.03] flex flex-col w-full shadow-lg relative group">
                {/* Visual Top Highlight Badge */}
                <span className="bg-brand-yellow text-brand-dark font-sans font-extrabold text-[10px] md:text-xs uppercase px-3 py-1 rounded-full w-fit tracking-wide shadow-sm">
                  {deal.badge}
                </span>

                {/* Deal Brand Title */}
                <h3 className="text-white font-sans font-black text-lg md:text-xl mt-4 tracking-tight leading-snug">
                  {deal.name}
                </h3>

                {/* High contrast Price tag */}
                <div className="text-brand-yellow font-sans font-black text-2xl md:text-3xl mt-2 tracking-tight">
                  {deal.price}
                </div>

                <div className="border-t border-white/10 my-5" />

                {/* Pack Items checklist */}
                <ul className="space-y-3 mb-6" aria-label={`Included in ${deal.name}`}>
                  {deal.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <Check size={16} className="text-brand-green font-bold" />
                      </span>
                      <span className="text-gray-300 text-xs md:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Fast Checkout CTA button */}
                <a 
                  href={deal.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-brand-green hover:bg-green-600 text-white w-full py-3 md:py-3.5 rounded-xl font-sans font-bold text-sm text-center transition-colors duration-300 shadow-md shadow-brand-green/10"
                >
                  Order on WhatsApp 💬
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
