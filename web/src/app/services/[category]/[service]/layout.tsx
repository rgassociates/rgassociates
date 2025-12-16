import { Metadata } from 'next';
import { getSubServiceBySlug } from '@/data/subServices';
import { getCategoryBySlug } from '@/data/serviceCategories';

interface ServiceLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        category: string;
        service: string;
    }>;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; service: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const category = getCategoryBySlug(resolvedParams.category);
    const service = getSubServiceBySlug(resolvedParams.category, resolvedParams.service);

    if (!category || !service) {
        return {
            title: 'Service Not Found | RG Associates',
        };
    }

    // Use the service's metadata if available
    const metaTitle = service.metadata?.metaTitle || `${service.title} | ${category.title} | RG Associates`;
    const metaDescription = service.metadata?.metaDescription || service.description;
    const keywords = service.metadata?.keywords || [service.title.toLowerCase(), category.title.toLowerCase()];

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: [
            ...keywords,
            'rg associates',
            'lawyers jaipur',
            'legal services jaipur',
            'legal counsel india'
        ],
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: `https://rgassociates.com/services/${resolvedParams.category}/${resolvedParams.service}`,
            siteName: 'RG Associates',
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
        },
        alternates: {
            canonical: `/services/${resolvedParams.category}/${resolvedParams.service}`,
        },
    };
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
    return <>{children}</>;
}
