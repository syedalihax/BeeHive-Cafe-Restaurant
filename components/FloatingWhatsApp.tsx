'use client'
import React from 'react'
// Lucide react me se standard MessageCircle call kiya hai jo built-in hai
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/923166888716?text=Assalam-o-Alaikum%20BeeHive%20Cafe!%20Mujhe%20order%20karna%20hai.%20%F0%9F%94%9F%F0%9F%8D%95";

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Order via WhatsApp 💬
      </span>
      
      {/* Floating Action Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order via WhatsApp — BeeHive Cafe Quetta"
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-green-500/40 whatsapp-pulse transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        {/* Direct Lucide Icon Call without any custom SVG code */}
        <MessageCircle className="w-8 h-8 text-white stroke-[2]" />
      </a>
    </div>
  )
}