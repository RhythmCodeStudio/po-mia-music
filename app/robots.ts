import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/handler/',
        '/admin/',
      ],
    },
    sitemap: 'https://pomiamusic.com/sitemap.xml',
  }
}