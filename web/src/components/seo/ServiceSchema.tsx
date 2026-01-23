import Script from 'next/script';
import { SubService } from '@/types/services';

interface ServiceSchemaProps {
    service: SubService;
    categoryTitle: string;
    categorySlug: string;
}

export default function ServiceSchema({ service, categoryTitle, categorySlug }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LegalService",
            "name": "RG Legal Solutions",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar",
                "addressLocality": "Jaipur",
                "addressRegion": "Rajasthan",
                "postalCode": "302033",
                "addressCountry": "IN"
            },
            "telephone": "+91-9309212401",
            "email": "info@rglegalsolutions.in",
            "url": "https://rglegalsolutions.in"
        },
        "serviceType": categoryTitle,
        "areaServed": {
            "@type": "City",
            "name": "Jaipur"
        },
        "offers": service.content.pricing ? {
            "@type": "Offer",
            "price": service.content.pricing.startingPrice || service.content.pricing.priceRange,
            "priceCurrency": "INR",
            "description": service.content.pricing.note
        } : undefined,
        "url": `https://rglegalsolutions.in/services/${categorySlug}/${service.slug}`
    };

    // Add FAQ schema if FAQs exist
    const faqSchema = service.content.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.content.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Breadcrumb schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rglegalsolutions.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://rglegalsolutions.in/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": categoryTitle,
                "item": `https://rglegalsolutions.in/services/${categorySlug}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": service.title,
                "item": `https://rglegalsolutions.in/services/${categorySlug}/${service.slug}`
            }
        ]
    };

    return (
        <>
            {/* Service Schema */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* FAQ Schema */}
            {faqSchema && (
                <Script
                    id="faq-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Breadcrumb Schema */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
