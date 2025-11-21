import Link from "next/link";

// Mock data lookup
const getService = (slug: string) => {
    // In a real app, this would fetch from Supabase based on the slug
    return {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        content: `This is a detailed guide on ${slug.replace(/-/g, ' ')}. It covers the legal framework, common challenges, and how RG Associates can assist you.`,
        faqs: [
            { question: "What is the process for this legal matter?", answer: "The process typically involves initial consultation, filing of necessary documents, and court proceedings if required." },
            { question: "How long does it take to resolve?", answer: "Timelines vary significantly based on the complexity of the case and court schedules." },
        ],
        relatedMarkets: ["Healthcare", "Real Estate"],
    };
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getService(slug);

    return (
        <div className="bg-white pb-24 sm:pb-32">
            {/* Hero Header */}
            <div className="relative bg-primary-900 py-20 sm:py-24 mb-16">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900" />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <p className="text-base font-semibold leading-7 text-accent uppercase tracking-wider">Practice Area</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl font-serif">{service.title}</h1>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">

                    <div className="max-w-2xl">
                        <p className="text-lg leading-8 text-gray-600">
                            {service.content}
                        </p>
                        <p className="mt-6 text-gray-600">
                            At RG Associates, we understand the nuances of {service.title} and provide tailored legal strategies to protect your interests.
                        </p>
                    </div>

                    {/* FAQs Section (Schema Markup target) */}
                    <div className="mt-16 max-w-2xl">
                        <h2 className="text-2xl font-bold tracking-tight text-primary-900 font-serif">Frequently Asked Questions</h2>
                        <dl className="mt-10 space-y-8 divide-y divide-gray-200">
                            {service.faqs.map((faq, index) => (
                                <div key={index} className="pt-8 lg:mt-4 lg:pt-0">
                                    <dt className="text-base font-bold leading-7 text-primary-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Related Markets (Hub and Spoke) */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold tracking-tight text-primary-900 font-serif">Related Industries</h2>
                        <div className="mt-6 flex gap-4">
                            {service.relatedMarkets.map((market, index) => (
                                <span key={index} className="inline-flex items-center rounded-sm bg-neutral-100 px-3 py-1 text-xs font-medium text-primary-900 ring-1 ring-inset ring-gray-200">
                                    {market}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft CTA */}
                    <div className="mt-16 bg-primary-50 rounded-sm p-8 border border-primary-100">
                        <h3 className="text-lg font-bold text-primary-900 font-serif">Need guidance on {service.title}?</h3>
                        <p className="mt-2 text-gray-600">
                            Download our free procedural checklist to understand the steps involved.
                        </p>
                        <div className="mt-6">
                            <button className="rounded-sm bg-primary-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition-colors">
                                Download Checklist
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
