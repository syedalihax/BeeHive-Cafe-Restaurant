'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Deals', id: 'deals' },
  { name: 'Menu', id: 'menu' },
  { name: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll detection for sticky background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Intersection Observer for active nav state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Target middle of viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (id: string) => {
    setIsOpen(false)
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
    <nav 
      role="navigation"
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 w-full h-[72px] z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#221F1F] backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-[#0F0D0D]/90 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Brand Logo and Name */}
      <a 
        onClick={() => handleLinkClick('home')} 
        href="#home"
        className="flex items-center gap-3 cursor-pointer group"
        aria-label="BeeHive Cafe & Restaurant homepage"
      >
        <Logo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
        <div className="flex flex-col">
          <span className="font-sans font-black text-xl tracking-tight leading-none text-white transition-colors group-hover:text-brand-yellow">
            BeeHive
          </span>
          <span className="font-serif italic text-[11px] text-gray-300 leading-none mt-1">
            Cafe &amp; Restaurant
          </span>
        </div>
      </a>

      {/* Desktop/Large Screen Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.id)
              }}
              className={`text-sm font-semibold tracking-wide uppercase py-1 border-b-2 transition-all duration-300 ${
                isActive 
                  ? 'text-brand-yellow border-brand-yellow' 
                  : 'text-gray-300 border-transparent hover:text-brand-yellow'
              }`}
            >
              {link.name}
            </a>
          )
        })}
        {/* Reservation/Order quick item */}
        <a
          href="https://wa.me/923166888716"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#7CB342] hover:bg-[#689f38] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#7CB342]/20 hover:scale-105 active:scale-95"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Hamburger Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden p-2 text-white hover:text-brand-yellow focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Drawer Overlay Dialog */}
      <div
        id="mobile-menu"
        className={`fixed top-[72px] left-0 w-full bg-brand-dark/95 border-b border-white/10 backdrop-blur-lg flex flex-col md:hidden transition-all duration-300 ease-in-out md:pointer-events-none md:opacity-0 ${
          isOpen ? 'opacity-100 translate-y-0 h-auto py-8 px-6 shadow-2xl' : 'opacity-0 -translate-y-4 h-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(link.id)
                }}
                className={`text-lg font-bold uppercase transition-colors duration-200 py-1 ${
                  isActive ? 'text-brand-yellow' : 'text-gray-300 hover:text-brand-yellow'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <a
            href="https://wa.me/923166888716"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-white font-bold text-sm uppercase tracking-wide py-3 px-6 rounded-full w-full max-w-xs mx-auto hover:bg-green-600 transition-colors duration-200 shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
