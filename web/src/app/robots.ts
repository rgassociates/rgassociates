import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/static/', '/private/'],
            },
            // Allow AI crawlers for better discoverability
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'anthropic-ai', 'ClaudeBot'],
                allow: '/',
            },
        ],
        sitemap: 'https://www.rglegalsolutions.in/sitemap.xml',
    };
}

// Note: When content is finalized and ready for search engines:
// 1. Change 'disallow: '/' to 'allow: '/'
// 2. Uncomment the sitemap line
// 3. Update the domain if needed
