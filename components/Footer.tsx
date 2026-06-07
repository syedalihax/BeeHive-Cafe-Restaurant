import React from 'react'
import Logo from './Logo'

const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Deals', id: 'deals' },
  { name: 'Menu', id: 'menu' },
  { name: 'Contact', id: 'contact' },
]

export default function Footer() {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 72 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-brand-black border-t border-white/5 py-12 md:py-16 px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Top: Logo with central Tagline */}
        <div className="flex flex-col items-center gap-4 max-w-sm mb-8">
          <div className="w-14 h-14">
            <Logo />
          </div>
          <p className="font-sans font-medium text-xs md:text-sm text-gray-400 leading-relaxed mt-2 uppercase tracking-widest">
            Taste the Buzz of Quality Food!
          </p>
        </div>

        {/* Middle: Horizontal Quick scroll paths */}
        <nav 
          role="navigation" 
          aria-label="Footer Nav Links" 
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
        >
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.id)
              }}
              className="text-gray-500 hover:text-brand-yellow font-sans font-semibold text-xs md:text-sm tracking-wide uppercase transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Thin Divider element */}
        <div className="w-full max-w-md border-t border-white/5 my-6" />

        {/* Bottom Rights reservations & Developer Credits */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="font-sans text-xs md:text-sm text-gray-500">
            &copy; 2025 BeeHive Cafe &amp; Restaurant. All rights reserved.
          </p>
          <p className="font-sans text-xs md:text-sm text-brand-yellow font-medium mt-1">
            Designed &amp; Developed by{' '}
            <a 
              href="https://haxudio.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-extrabold hover:underline transition-all hover:text-white"
            >
              Haxudio Digital Solutions
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}
