import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '/', // Disallow all crawling - content not finalized
        },
        // Sitemap will be enabled when ready to allow crawling
        // sitemap: 'https://www.rgassociates.com/sitemap.xml',
    };
}

// Note: When content is finalized and ready for search engines:
// 1. Change 'disallow: '/' to 'allow: '/'
// 2. Uncomment the sitemap line
// 3. Update the domain if needed
