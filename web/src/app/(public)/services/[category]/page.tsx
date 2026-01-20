import { notFound } from "next/navigation";
import { getCategoryBySlug, serviceCategories } from "@/data/serviceCategories";
import { getSubServicesByCategory } from "@/data/subServices";
import CategoryPageClient from "./CategoryPageClient";

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

// Generate static params for all service categories
export async function generateStaticParams() {
    return serviceCategories.map((category) => ({
        category: category.slug,
    }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const category = getCategoryBySlug(resolvedParams.category);

    if (!category) {
        notFound();
    }

    const services = getSubServicesByCategory(category.id);

    return (
        <CategoryPageClient
            category={category}
            services={services}
            categorySlug={resolvedParams.category}
        />
    );
}
