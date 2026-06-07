import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { 
        userAgent: '*', 
        allow: '/', 
        disallow: ['/api/', '/_next/'] 
      }
    ],
    sitemap: 'https://beehivecafe.pk/sitemap.xml',
    host: 'https://beehivecafe.pk',
  }
}
