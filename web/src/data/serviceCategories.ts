import { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
    {
        id: "legal-consultation",
        title: "Legal Consultation",
        slug: "legal-consultation",
        description: "Expert legal advice and consultation across all practice areas. Get clarity on your legal matters with our experienced attorneys.",
        shortDescription: "Professional legal advice across civil, criminal, corporate, and family law matters.",
        icon: "consultation",
        subServices: [
            "civil-litigation-consultation",
            "criminal-defense-consultation",
            "corporate-law-consultation",
            "family-law-consultation",
            "intellectual-property-consultation",
            "real-estate-consultation"
        ]
    },
    {
        id: "legal-notice",
        title: "Legal Notice",
        slug: "legal-notice",
        description: "Professional drafting of legal notices for various disputes. Legally sound, strategically crafted notices to protect your interests.",
        shortDescription: "Expert drafting of legal notices for civil, criminal, corporate, and property disputes.",
        icon: "notice",
        subServices: [
            "civil-notice",
            "criminal-notice",
            "corporate-notice",
            "family-law-notice",
            "property-notice"
        ]
    },
    {
        id: "litigation",
        title: "Litigation",
        slug: "litigation",
        description: "Aggressive court representation across all forums. From district courts to Supreme Court, we fight for your rights.",
        shortDescription: "Comprehensive litigation services in civil, criminal, corporate, and family courts.",
        icon: "litigation",
        subServices: [
            "civil-litigation",
            "criminal-litigation",
            "corporate-litigation",
            "family-court-litigation",
            "property-litigation"
        ]
    },
    {
        id: "legal-research",
        title: "Legal Research",
        slug: "legal-research",
        description: "In-depth legal research and analysis. Case law research, statutory interpretation, and expert legal opinions.",
        shortDescription: "Comprehensive legal research, case analysis, and due diligence services.",
        icon: "research",
        subServices: [
            "case-law-research",
            "statutory-research",
            "due-diligence-reports",
            "legal-opinion"
        ]
    },
    {
        id: "title-search-report",
        title: "Title Search Report",
        slug: "title-search-report",
        description: "Comprehensive property title verification. Identify legal issues, encumbrances, and ownership disputes before purchase.",
        shortDescription: "Thorough title verification for residential, commercial, and agricultural properties.",
        icon: "title-search",
        subServices: [
            "residential-property-title-search",
            "commercial-property-title-search",
            "agricultural-land-verification",
            "encumbrance-certificate"
        ]
    },
    {
        id: "document-registration",
        title: "Document Registration",
        slug: "document-registration",
        description: "Professional document registration services in Jaipur. Expert assistance with property registration, sale deeds, lease agreements, and all legal document registration at Sub-Registrar offices.",
        shortDescription: "Complete document registration services for property, agreements, and legal documents in Jaipur.",
        icon: "document-registration",
        subServices: [
            "property-sale-deed-registration",
            "lease-agreement-registration",
            "gift-deed-registration",
            "power-of-attorney-registration"
        ]
    }
];

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
    return serviceCategories.find(cat => cat.slug === slug);
};

// Helper function to get category by ID
export const getCategoryById = (id: string): ServiceCategory | undefined => {
    return serviceCategories.find(cat => cat.id === id);
};
