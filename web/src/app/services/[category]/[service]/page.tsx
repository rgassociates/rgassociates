import { notFound } from "next/navigation";
import { getSubServiceBySlug, allSubServices } from "@/data/subServices";
import { getCategoryBySlug } from "@/data/serviceCategories";
import { ServiceDetailTemplate } from "@/components/services";

interface ServicePageProps {
    params: Promise<{
        category: string;
        service: string;
    }>;
}

// Generate static params for all service pages at build time
export async function generateStaticParams() {
    // Get all unique category-service combinations
    const params = allSubServices.map((service) => ({
        category: service.categoryId,
        service: service.slug,
    }));

    return params;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const resolvedParams = await params;
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
