'use client'
import React from 'react'

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
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="#FFFFFF"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378.002 12.038.002c3.223.001 6.253 1.257 8.533 3.539 2.279 2.28 3.532 5.312 3.528 8.535-.01 6.666-5.384 12.034-12.041 12.034-1.996-.001-3.959-.496-5.711-1.438L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.868-9.848.004-2.63-1.018-5.101-2.88-6.965C16.578 1.93 14.113.905 11.48.905c-5.44 0-9.866 4.418-9.873 9.851-.001 1.77.472 3.5 1.369 5.01L1.93 22.1l6.452-1.691c1.517.828 3.076 1.265 4.673 1.267h.007v-.004zm11.516-7.857c-.312-.156-1.847-.91-2.128-1.012-.281-.102-.485-.152-.69.155-.203.308-.781.983-.958 1.187-.176.204-.353.23-.665.074-1.045-.523-1.748-.865-2.437-2.048-.182-.314.182-.292.52-.968.106-.213.053-.4-.027-.556-.08-.156-.69-1.66-.945-2.276-.248-.596-.5-.515-.688-.524-.179-.01-.384-.012-.59-.012-.206 0-.54.078-.822.385-.282.308-1.077 1.053-1.077 2.569 0 1.515 1.102 2.977 1.258 3.186.155.207 2.169 3.321 5.255 4.654.733.317 1.306.507 1.751.648.738.234 1.41.201 1.942.122.593-.088 1.847-.756 2.109-1.449.262-.693.262-1.288.184-1.413-.076-.123-.281-.179-.593-.335z"/>
        </svg>
      </a>
    </div>
  )
}
