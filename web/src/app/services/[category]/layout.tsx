import { Metadata } from 'next';
import { getCategoryBySlug } from '@/data/serviceCategories';
import { notFound } from 'next/navigation';

interface CategoryLayoutProps {
    children: React.ReactNode;
    params: Promise<{
        category: string;
    }>;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const category = getCategoryBySlug(resolvedParams.category);

    if (!category) {
        return {
            title: 'Service Not Found | RG Associates',
        };
    }

    const metaTitle = `${category.title} Services in Jaipur | RG Associates - Expert Legal Counsel`;
    const metaDescription = `${category.description} Professional ${category.title.toLowerCase()} services with ${category.subServices.length} specialized offerings. Contact RG Associates for expert legal guidance.`;

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: [
            category.title.toLowerCase(),
            `${category.title.toLowerCase()} services`,
            `${category.title.toLowerCase()} jaipur`,
            'legal services jaipur',
            'rg associates',
            'lawyers jaipur',
            'legal counsel',
            ...category.subServices.map(s => s.toLowerCase())
        ],
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: `https://rgassociates.com/services/${resolvedParams.category}`,
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
            canonical: `/services/${resolvedParams.category}`,
        },
    };
}

export default function CategoryLayout({ children }: CategoryLayoutProps) {
    return <>{children}</>;
}
