import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: "RG Legal Solutions | Expert Legal Services in Jaipur, Rajasthan",
    description: "Leading law firm in Jaipur offering legal consultation, litigation, documentation, and legal research services across India. Expert advocates with 500+ successful cases. Available 24/7.",
    keywords: [
        "legal services jaipur",
        "law firm jaipur",
        "lawyer jaipur",
        "advocate jaipur",
        "legal consultation india",
        "litigation jaipur",
        "best lawyer jaipur",
        "top law firm jaipur",
        "legal advice online",
        "property lawyer jaipur",
        "civil lawyer jaipur",
        "criminal lawyer jaipur",
    ],
    alternates: {
        canonical: 'https://www.rglegalsolutions.in',
    },
    openGraph: {
        title: "RG Legal Solutions | Expert Legal Services in Jaipur",
        description: "Leading law firm offering comprehensive legal services. 500+ successful cases. Expert consultation, litigation, and documentation services across India.",
        url: "https://www.rglegalsolutions.in",
        siteName: "RG Legal Solutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "https://www.rglegalsolutions.in/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "RG Legal Solutions - Expert Legal Services in Jaipur",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RG Legal Solutions | Expert Legal Services in Jaipur",
        description: "Leading law firm offering comprehensive legal services. 500+ successful cases. Expert consultation, litigation, and documentation services.",
        images: ["https://www.rglegalsolutions.in/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // FAQ Schema for homepage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do online legal consultations work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our online consultations are conducted via video call, phone, or email based on your preference. Simply fill out our consultation form, and we'll schedule a convenient time. During the consultation, our experienced advocates will discuss your legal matter, provide initial guidance, and outline the next steps. All consultations are confidential and protected by attorney-client privilege."
                }
            },
            {
                "@type": "Question",
                "name": "What services are available Pan-India vs Jaipur only?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our consultation, documentation, legal notice drafting, legal research, and title search services are available to clients across India through online channels. However, litigation and court representation services are currently limited to Jaipur jurisdiction (Rajasthan High Court and District Courts). We're transparent about our service coverage to ensure you receive the best possible representation."
                }
            },
            {
                "@type": "Question",
                "name": "What are your consultation fees?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Consultation fees vary based on the complexity of your legal matter and the service required. We offer transparent pricing with no hidden costs. Initial consultations start from ₹2,000 for basic matters. We provide detailed fee estimates before you commit to any service. Payment plans and flexible options are available for ongoing cases."
                }
            },
            {
                "@type": "Question",
                "name": "How quickly can I get a consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We guarantee a response within 24-48 hours of receiving your consultation request. For urgent matters, we offer same-day consultations subject to advocate availability. Simply indicate the urgency when filling out the consultation form, and we'll prioritize your request accordingly."
                }
            },
            {
                "@type": "Question",
                "name": "Can you handle cases outside Jaipur?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for consultation, documentation, and research services, we serve clients across India. However, for litigation and court appearances, we currently operate only in Jaipur jurisdiction. If you need court representation in other cities, we can refer you to trusted legal professionals in those areas through our network."
                }
            },
            {
                "@type": "Question",
                "name": "What documents should I prepare for consultation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bring any relevant documents related to your legal matter, such as contracts, agreements, notices, court orders, or correspondence. If you don't have all documents ready, don't worry—we can guide you on what's needed during the initial consultation. You can upload documents securely through our portal or email them to us."
                }
            },
            {
                "@type": "Question",
                "name": "Is my information confidential?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. All information shared with us is protected by attorney-client privilege and strict confidentiality protocols. We use encrypted communication channels, secure document storage, and follow industry best practices for data protection. Your privacy and security are our top priorities."
                }
            },
            {
                "@type": "Question",
                "name": "How do I make payments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept multiple payment methods including bank transfer, UPI, credit/debit cards, and online payment gateways. Payment details will be provided in your fee agreement. For ongoing cases, we offer flexible payment plans. All transactions are secure and receipts are provided for your records."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide legal services in languages other than English?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide legal services in Hindi and English. Our advocates are fluent in both languages and can conduct consultations, draft documents, and communicate in your preferred language to ensure clear understanding of all legal matters."
                }
            },
            {
                "@type": "Question",
                "name": "What is your success rate in litigation cases?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have successfully handled over 500 cases with a high success rate. While outcomes depend on case specifics and evidence, our experienced advocates work diligently to achieve the best possible results. We provide realistic assessments and keep you informed throughout the legal process."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {children}
        </>
    );
}
