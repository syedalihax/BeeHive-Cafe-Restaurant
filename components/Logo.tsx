import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number | string
  height?: number | string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full ${className}`}>
      <Image
        src="/images/logo.jpg" // Aapka logo file name aur path
        alt="BeeHive Cafe & Restaurant logo"
        fill
        priority
        className="object-cover" // Is se image circle ke andar perfect fit ho jayegi
      />
    </div>
  )
}