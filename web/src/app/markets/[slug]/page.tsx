import Link from "next/link";

// Mock data lookup
const getMarket = (slug: string) => {
    return {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        content: `The ${slug.replace(/-/g, ' ')} sector faces unique legal challenges, from regulatory compliance to liability issues. Our team provides specialized counsel to navigate this complex landscape.`,
        challenges: [
            "Regulatory Compliance and Licensing",
            "Contractual Disputes and Liability",
            "Intellectual Property Protection",
            "Labor and Employment Regulations"
        ],
        relatedServices: [
            { title: "Corporate Law", slug: "corporate-law" },
            { title: "Civil Litigation", slug: "civil-litigation" },
            { title: "Intellectual Property", slug: "intellectual-property" }
        ]
    };
};

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const market = getMarket(slug);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-primary-600">Industry Focus</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">{market.title}</h1>

                    <div className="mt-10 max-w-2xl">
                        <p>
                            {market.content}
                        </p>
                    </div>

                    <div className="mt-16 max-w-2xl">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">Key Legal Challenges</h2>
                        <ul role="list" className="mt-8 space-y-8 text-gray-600">
                            {market.challenges.map((challenge, index) => (
                                <li key={index} className="flex gap-x-3">
                                    <svg className="mt-1 h-5 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong className="font-semibold text-gray-900">{challenge}</strong></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Related Services (SEO Loop) */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif">How We Can Help</h2>
                        <p className="mt-4 text-gray-600">We offer targeted legal services to address these specific industry needs:</p>
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {market.relatedServices.map((service, index) => (
                                <Link key={index} href={`/services/${service.slug}`} className="block rounded-lg border border-gray-200 p-4 hover:border-primary-600 hover:bg-primary-50 transition-colors">
                                    <h3 className="font-semibold text-gray-900">{service.title} &rarr;</h3>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
