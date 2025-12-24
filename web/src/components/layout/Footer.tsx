import Link from 'next/link';
import { serviceCategories } from '@/data/serviceCategories';

const Footer = () => {
    return (
        <footer className="bg-[#051427] text-white border-t border-[#0A1A2F]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-6 pt-12 sm:pt-16 lg:px-8 lg:pt-20">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded bg-accent flex items-center justify-center text-primary-900 font-serif font-bold text-xl">
                                RG
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold text-white tracking-wide">RG Legal Solutions</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Legal Counsel</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-6 text-gray-400 max-w-xs">
                            Providing expert legal counsel with integrity and dedication across India. We stand by your side to secure your future.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-accent">Our Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {serviceCategories.map((category) => (
                                        <li key={category.id}>
                                            <Link
                                                href={`/services/${category.slug}`}
                                                className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                                            >
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href="/services"
                                            className="text-sm leading-6 text-accent hover:text-white transition-colors font-semibold"
                                        >
                                            View All Services →
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-accent">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {[
                                        { name: 'About Us', href: '/about' },
                                        { name: 'Our Attorneys', href: '/attorneys' },
                                        { name: 'Insights', href: '/blog' },
                                        { name: 'Contact', href: '/contact' }
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-accent">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4 text-sm leading-6 text-gray-400">
                                    <li>Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033</li>
                                    <li><a href="tel:09309212401" className="hover:text-white">093092 12401</a></li>
                                    <li><a href="mailto:rgassociatesjaipur@gmail.com" className="hover:text-white break-all">rgassociatesjaipur@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-accent">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/privacy-policy" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-of-use" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                                            Terms of Use
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-6 sm:mt-16 lg:mt-16">
                    <p className="text-xs leading-5 text-gray-500">
                        &copy; {new Date().getFullYear()} RG Legal Solutions. All rights reserved.
                    </p>
                    <p className="mt-2 text-xs leading-5 text-gray-600">
                        <strong>Disclaimer:</strong> The content on this website is for informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by the use of this site.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
