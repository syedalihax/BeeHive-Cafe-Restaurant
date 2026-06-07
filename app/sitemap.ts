import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { 
      url: 'https://beehivecafe.pk', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 1.0 
    },
    { 
      url: 'https://beehivecafe.pk/#about', 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.8 
    },
    { 
      url: 'https://beehivecafe.pk/#menu', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: 'https://beehivecafe.pk/#deals', 
      lastModified: new Date(), 
      changeFrequency: 'weekly', 
      priority: 0.9 
    },
    { 
      url: 'https://beehivecafe.pk/#contact', 
      lastModified: new Date(), 
      changeFrequency: 'monthly', 
      priority: 0.7 
    },
  ]
}
