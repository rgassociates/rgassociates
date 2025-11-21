import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.rgassociates.com'; // Replace with actual domain

    // Static pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/attorneys',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // In a real app, we would fetch dynamic slugs here
    // const services = await getServices();
    // const serviceRoutes = services.map(...)

    return [...routes];
}
