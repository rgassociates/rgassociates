import Link from "next/link";
import type { Metadata } from "next";

// Mock data lookup
const getMarket = (slug: string) => {
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: title,
        content: `The ${title} sector faces unique legal challenges, from regulatory compliance to liability issues. Our team provides specialized counsel to navigate this complex landscape.`,
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const market = getMarket(slug);
    return {
        title: `${market.title} Legal Services | RG Associates`,
        description: `Expert legal counsel for the ${market.title} industry. We handle compliance, disputes, and contracts tailored to your sector's needs.`,
    };
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const market = getMarket(slug);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-6">
                            <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">
                                Industry Focus
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
                            {market.title}
                        </h1>
                        <p className="text-lg leading-8 text-gray-300">
                            Specialized legal expertise for the {market.title} sector.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="text-base leading-7 text-gray-700">
                            <p className="text-lg leading-8 text-gray-600 mb-10">
                                {market.content}
                            </p>

                            <h2 className="text-2xl font-bold tracking-tight text-[#051427] font-serif mb-6">Key Legal Challenges</h2>
                            <ul role="list" className="space-y-4 text-gray-600">
                                {market.challenges.map((challenge, index) => (
                                    <li key={index} className="flex gap-x-3 items-start">
                                        <svg className="mt-1 h-5 w-5 flex-none text-[#D4A646]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong className="font-semibold text-[#051427]">{challenge}</strong></span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Related Services */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold tracking-tight text-[#051427] font-serif mb-6">How We Can Help</h2>
                            <p className="text-gray-600 mb-6">We offer targeted legal services to address these specific industry needs:</p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {market.relatedServices.map((service, index) => (
                                    <Link key={index} href={`/services/${service.slug}`} className="block rounded-xl border border-gray-200 p-6 hover:border-[#D4A646] hover:bg-gray-50 transition-all group">
                                        <h3 className="font-semibold text-[#051427] group-hover:text-[#D4A646] transition-colors flex items-center justify-between">
                                            {service.title}
                                            <span aria-hidden="true">&rarr;</span>
                                        </h3>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-[#051427] font-serif mb-4">
                                Need Industry Expertise?
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Our team understands the nuances of the {market.title} sector. Let's discuss your legal requirements.
                            </p>
                            <Link
                                href="/contact"
                                className="block w-full bg-[#D4A646] text-[#051427] font-bold py-3 px-6 rounded-lg hover:bg-[#E5B657] transition-colors text-center shadow-md"
                            >
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
