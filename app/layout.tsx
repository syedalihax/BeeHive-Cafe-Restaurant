import React from 'react'
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://beehivecafe.pk'),
  title: {
    default: 'BeeHive Cafe & Restaurant | Best Cafe in New Hazara Town Quetta',
    template: '%s | BeeHive Cafe Quetta',
  },
  description: 'BeeHive Cafe & Restaurant — Quetta ke New Hazara Town ka best cafe. Authentic Afghan & Hazara cuisine, fresh bakery, juices, fast food, home delivery available. Open 12 PM to 2 AM everyday. Call: 0316-6888716',
  keywords: [
    'BeeHive Cafe', 'BeeHive Cafe Quetta', 'beehivecafe.pk',
    'Cafe in Hazara Town', 'Restaurant New Hazara Town Quetta',
    'Quetta food delivery', 'Afghan food Quetta', 'Hazargi cuisine Quetta',
    'SherYakh Quetta', 'Kabuli Omelette', 'best cafe Quetta',
    'home delivery Quetta', 'pizza Quetta', 'fast food Hazara Town',
    'BeeHive restaurant', 'New Hazara Town cafe'
  ],
  authors: [{ name: 'Haxudio Digital Solutions', url: 'https://www.haxudio.com' }],
  creator: 'Haxudio Digital Solutions',
  publisher: 'BeeHive Cafe & Restaurant',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.beehivecafe.pk',
    siteName: 'BeeHive Cafe & Restaurant',
    title: 'BeeHive Cafe & Restaurant | Best Cafe in New Hazara Town Quetta',
    description: 'Authentic Afghan & Hazara cuisine, fresh bakery, fast food. Open 12PM–2AM. Free home delivery in Hazara Town.',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'BeeHive Cafe & Restaurant — New Hazara Town Quetta',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeeHive Cafe & Restaurant Quetta',
    description: 'Best cafe in New Hazara Town Quetta. Authentic food, fresh bakery, fast food & home delivery.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://beehivecafe.pk',
  },
  category: 'restaurant',
  
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="antialiased min-h-screen font-sans bg-brand-black text-white selection:bg-brand-yellow selection:text-brand-dark">
        {/* Skip to Content for Screen Readers */}
        <a 
          href="#main-content" 
          id="skip-link"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-yellow text-brand-dark px-4 py-2 rounded font-semibold z-[100]"
        >
          Skip to main content
        </a>
        
        {children}

        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Restaurant", "CafeOrCoffeeShop", "FoodEstablishment"],
              "name": "BeeHive Cafe & Restaurant",
              "alternateName": "BeeHive Cafe Quetta",
              "url": "https://beehivecafe.pk",
              "logo": "https://beehivecafe.pk/images/logo.png",
              "image": "https://beehivecafe.pk/images/og-image.jpg",
              "description": "BeeHive Cafe & Restaurant — Quetta ke New Hazara Town ka best cafe. Authentic Afghan/Hazara cuisine, fresh bakery, juices, and fast food with home delivery.",
              "telephone": "+923166888716",
              "email": "info@beehivecafe.pk",
              "priceRange": "Rs. 25 – Rs. 2,200",
              "servesCuisine": ["Pakistani", "Afghan", "Hazaragi", "Fast Food", "Bakery"],
              "hasMenu": "https://beehivecafe.pk/#menu",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Start of Mari Colony, Karani Road, Muhalla Jaferia, New Hazara Town",
                "addressLocality": "Quetta",
                "addressRegion": "Balochistan",
                "postalCode": "87300",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.1583,
                "longitude": 66.9421
              },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "12:00",
                "closes": "02:00"
              }],
              "sameAs": [
                "https://www.facebook.com/beehivecafe.pk",
                "https://www.instagram.com/beehivecafe.pk"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "New Hazara Town, Quetta, Pakistan"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "55"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}
