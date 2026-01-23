import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "Contact RG Legal Solutions | Legal Consultation in Jaipur",
    description: "Contact RG Legal Solutions for expert legal consultation. Visit our Jaipur office, call +91 9309212401, or email us. Available 10 AM to 8 PM, 7 days a week. Free initial consultation.",
    keywords: [
        "contact lawyer jaipur",
        "legal consultation jaipur",
        "law firm contact jaipur",
        "lawyer near me jaipur",
        "legal advice jaipur",
        "book consultation jaipur",
        "pratap nagar lawyer",
        "sanganer lawyer",
    ],
    alternates: {
        canonical: 'https://www.rglegalsolutions.in/contact',
    },
    openGraph: {
        title: "Contact RG Legal Solutions | Legal Consultation in Jaipur",
        description: "Contact us for expert legal consultation. Visit our Jaipur office or call +91 9309212401. Available 10 AM to 8 PM daily.",
        url: "https://www.rglegalsolutions.in/contact",
        siteName: "RG Legal Solutions",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Contact RG Legal Solutions | Legal Consultation in Jaipur",
        description: "Contact us for expert legal consultation. Call +91 9309212401 or visit our Jaipur office.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // LocalBusiness Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.rglegalsolutions.in/contact#localbusiness",
        "name": "RG Legal Solutions",
        "image": "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
        "logo": "https://www.rglegalsolutions.in/RGlogowithoutbg.webp",
        "url": "https://www.rglegalsolutions.in",
        "telephone": "+919309212401",
        "email": "info@rglegalsolutions.in",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302033",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.807037",
            "longitude": "75.836110"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "10:00",
            "closes": "20:00"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Jaipur"
            },
            {
                "@type": "State",
                "name": "Rajasthan"
            },
            {
                "@type": "Country",
                "name": "India"
            }
        ]
    };

    // ContactPage Schema
    const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact RG Legal Solutions",
        "description": "Contact page for RG Legal Solutions - Expert legal services in Jaipur",
        "url": "https://www.rglegalsolutions.in/contact"
    };

    return (
        <>
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="contact-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            {children}
        </>
    );
}
