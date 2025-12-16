"use client";

import { notFound } from "next/navigation";
import { getSubServiceBySlug } from "@/data/subServices";
import { getCategoryBySlug } from "@/data/serviceCategories";
import { ServiceDetailTemplate } from "@/components/services";
import { use } from "react";

interface ServicePageProps {
    params: Promise<{
        category: string;
        service: string;
    }>;
}

export default function ServicePage({ params }: ServicePageProps) {
    const resolvedParams = use(params);
    const category = getCategoryBySlug(resolvedParams.category);
    const service = getSubServiceBySlug(resolvedParams.category, resolvedParams.service);

    if (!category || !service) {
        notFound();
    }

    return (
        <ServiceDetailTemplate
            service={service}
            categoryTitle={category.title}
            categorySlug={resolvedParams.category}
        />
    );
}
