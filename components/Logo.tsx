import React from 'react'

interface LogoProps {
  className?: string
  width?: number | string
  height?: number | string
}

export default function Logo({ className = '', width = '100%', height = '100%' }: LogoProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width, height }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%" aria-label="BeeHive Cafe & Restaurant logo">
        {/* Yellow Circle Backing */}
        <circle cx="250" cy="250" r="235" fill="#F5C21B" />
        
        {/* Concentric White Border */}
        <circle cx="250" cy="250" r="220" fill="none" stroke="#FFFFFF" strokeWidth="6" />

        {/* Semi-transparent Hexagon Backing */}
        <path d="M 250,60 L 370,130 L 370,270 L 250,340 L 130,270 L 130,130 Z" fill="#FFFFFF" fillOpacity="0.12" />
        <path d="M 250,65 L 360,130 L 360,265 L 250,330 L 140,265 L 140,130 Z" fill="none" stroke="#FFFFFF" strokeWidth="4" />

        {/* Leafy / Bean Shapes - Coffee beans left */}
        <g transform="translate(170, 195) rotate(-30)">
          <ellipse cx="0" cy="0" rx="14" ry="24" fill="#B06433" />
          <path d="M -14,0 Q 0,-6 14,0 Q 0,6 -14,0" fill="none" stroke="#6F3919" strokeWidth="2" />
        </g>
        <g transform="translate(165, 235) rotate(-60)">
          <ellipse cx="0" cy="0" rx="14" ry="24" fill="#B06433" />
          <path d="M -14,0 Q 0,-6 14,0 Q 0,6 -14,0" fill="none" stroke="#6F3919" strokeWidth="2" />
        </g>

        {/* Coffee Bean Right */}
        <g transform="translate(330, 235) rotate(45)">
          <ellipse cx="0" cy="0" rx="14" ry="24" fill="#B06433" />
          <path d="M -14,0 Q 0,-6 14,0 Q 0,6 -14,0" fill="none" stroke="#6F3919" strokeWidth="2" />
        </g>

        {/* Burger Bun Dome */}
        <path d="M 180,115 Q 180,75 250,75 Q 320,75 320,115 Z" fill="#B06433" />
        <ellipse cx="250" cy="115" rx="70" ry="10" fill="#B06433" />
        
        {/* Red Straw */}
        <rect x="215" y="55" width="8" height="30" fill="#E53935" transform="rotate(-15, 220, 70)" />
        
        {/* Seeds */}
        <ellipse cx="210" cy="95" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(30, 210, 95)" />
        <ellipse cx="230" cy="102" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(-15, 230, 102)" />
        <ellipse cx="250" cy="90" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(5, 250, 90)" />
        <ellipse cx="270" cy="100" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(45, 270, 100)" />
        <ellipse cx="290" cy="92" rx="1.5" ry="3" fill="#FFFFFF" transform="rotate(-30, 290, 92)" />

        {/* Cucumber Salad Slice wavy border */}
        <path d="M 183,121 C 200,128 220,116 235,123 C 250,130 270,118 285,123 C 300,128 310,120 317,121" fill="none" stroke="#7CB342" strokeWidth="10" strokeLinecap="round" />

        {/* Stack Layers - Rim */}
        <path d="M 181,123 L 319,123 L 313,165 L 187,165 Z" fill="#FFFFFF" />

        {/* Black central Stripe with Yellow Fork Logo */}
        <path d="M 187,165 L 313,165 L 306,207 L 194,207 Z" fill="#221F1F" />
        <g transform="translate(250,186)">
          <path d="M -35,-10 L 35,-10 L 30,2 L -30,2 Z" fill="#F5C21B" />
          <rect x="-35" y="-10" width="70" height="4" fill="#221F1F" />
          <rect x="-24" y="-10" width="6" height="12" fill="#221F1F" />
          <rect x="-6" y="-10" width="12" height="12" fill="#221F1F" />
          <rect x="18" y="-10" width="6" height="12" fill="#221F1F" />
          <path d="M -10,2 L 10,2 L 20,4 L -20,4 Z" fill="#F5C21B" />
        </g>

        {/* White central Stripe with Yellow Spoon Logo */}
        <path d="M 194,207 L 306,207 L 299,249 L 201,249 Z" fill="#FFFFFF" />
        <g transform="translate(250,228)">
          <ellipse cx="10" cy="0" rx="36" ry="12" fill="#F5C21B" />
          <rect x="-42" y="-3" width="30" height="6" fill="#F5C21B" />
        </g>

        {/* Black base strip */}
        <path d="M 201,249 L 299,249 L 292,280 L 208,280 Z" fill="#221F1F" />

        {/* Brand Main Text */}
        <text x="250" y="365" fontFamily="'Poppins', sans-serif" fontWeight="900" fontSize="64" fill="#0F0D0D" textAnchor="middle" letterSpacing="-1">BeeHive</text>

        {/* Brand Secondary Text */}
        <text x="250" y="415" fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="bold" fontSize="34" fill="#FFFFFF" text-anchor="middle" letterSpacing="1">Cafe &amp; Restaurant</text>
      </svg>
    </div>
  )
}
