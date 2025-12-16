export interface ServiceCategory {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    icon: string; // SVG path or icon identifier
    subServices: string[]; // Array of sub-service IDs
}

export interface SubService {
    id: string;
    categoryId: string;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    content: ServiceContent;
    relatedPracticeAreas: string[];
    metadata: ServiceMetadata;
}

export interface ServiceContent {
    overview: string;
    keyFeatures: string[];
    process: ProcessStep[];
    faqs: FAQ[];
    pricing?: PricingInfo;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface PricingInfo {
    startingPrice?: string;
    priceRange?: string;
    note: string;
}

export interface ServiceMetadata {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
}
