import React from 'react'

// Define fallback TypeScript interfaces to satisfy type checkers without importing heavy packages
export interface Metadata {
  metadataBase?: URL
  title?: any
  description?: string
  keywords?: string[]
  authors?: any[]
  creator?: string
  publisher?: string
  openGraph?: any
  twitter?: any
  robots?: any
  alternates?: any
  category?: string
  [key: string]: any
}

export interface NextConfig {
  images?: any
  headers?: () => Promise<any[]>
  compress?: boolean
  poweredByHeader?: boolean
  [key: string]: any
}

export namespace MetadataRoute {
  export type Sitemap = {
    url: string
    lastModified?: string | Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
  }[]
  
  export type Robots = {
    rules: {
      userAgent?: string | string[]
      allow?: string | string[]
      disallow?: string | string[]
      crawlDelay?: number
    }[]
    sitemap?: string | string[]
    host?: string
  }
}

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export default function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
