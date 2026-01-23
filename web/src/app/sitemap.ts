import { MetadataRoute } from 'next';
import { serviceCategories } from '@/data/serviceCategories';
import { allSubServices } from '@/data/subServices';
import { getServerClient } from '@/lib/supabaseServer';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.rglegalsolutions.in';
    const supabase = getServerClient();

    // Fetch all published blog posts
    const { data: posts } = await supabase
        .from('blogs')
        .select('slug, updated_at')
        .eq('is_published', true);

    const blogPages = (posts || []).map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Homepage
    const homepage = {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1.0,
    };

    // Main services page
    const servicesHub = {
        url: `${baseUrl}/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    };

    // Category pages (5)
    const categoryPages = serviceCategories.map((category) => ({
        url: `${baseUrl}/services/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Service detail pages (24)
    const servicePages = allSubServices.map((service) => {
        // Find the category for this service
        const category = serviceCategories.find(cat =>
            cat.subServices.includes(service.id)
        );

        return {
            url: `${baseUrl}/services/${category?.slug}/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };
    });

    // Other important pages
    const otherPages = [
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/attorneys`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.9,
        },
    ];

    return [
        homepage,
        servicesHub,
        ...categoryPages,
        ...servicePages,
        ...blogPages, // Add dynamic blog pages
        ...otherPages,
    ];
}
