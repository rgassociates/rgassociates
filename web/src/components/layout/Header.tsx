"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCategories } from '@/data/serviceCategories';
import { getSubServiceById } from '@/data/subServices';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

    // Handle scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Attorneys', href: '/attorneys' },
        { name: 'Insights', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#FAFAFA]/95 backdrop-blur-lg shadow-xl border-b border-gray-200 py-3'
                : 'bg-[#FAFAFA] py-5 shadow-md border-b border-gray-100'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        {/* Logo Image with Smooth Zoom */}
                        <motion.img
                            src="/rglegalsolutions.webp"
                            alt="RG Legal Solutions Logo"
                            className="h-12 object-contain"
                            whileHover={{
                                scale: 1.08,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800 hover:text-[#D4A646]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        item.hasDropdown ? (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className="text-sm font-semibold leading-6 text-gray-800 hover:text-[#D4A646] transition-colors relative group flex items-center gap-1"
                                >
                                    {item.name}
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                </Link>

                                {/* Services Mega Menu */}
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 top-full mt-3 w-80"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-900/5 p-6">
                                                <div className="mb-4">
                                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Our Services</h3>
                                                    <p className="text-xs text-gray-600">Comprehensive legal solutions for every need</p>
                                                </div>
                                                {/* Vertical list of all services */}
                                                <div className="space-y-2">
                                                    {serviceCategories.map((category) => (
                                                        <div key={category.id} className="group relative">
                                                            <Link
                                                                href={`/services/${category.slug}`}
                                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                            >
                                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#D4A646]/10 flex items-center justify-center group-hover:bg-[#D4A646]/20 transition-colors">
                                                                    <svg className="h-5 w-5 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-[#D4A646] transition-colors">
                                                                        {category.title}
                                                                    </p>
                                                                    <p className="text-xs text-gray-600 mt-0.5">
                                                                        {category.subServices.length} services
                                                                    </p>
                                                                </div>
                                                                <svg className="h-5 w-5 text-gray-400 group-hover:text-[#D4A646] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </Link>
                                                            {/* Sub-services dropdown on hover - Right side */}
                                                            <div className="hidden group-hover:block absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-xl ring-1 ring-gray-900/5 p-4 z-10">
                                                                <h4 className="text-xs font-semibold text-gray-900 mb-2">{category.title}</h4>
                                                                <div className="space-y-1">
                                                                    {category.subServices.map((subServiceId) => {
                                                                        const subService = getSubServiceById(subServiceId);
                                                                        if (!subService) return null;
                                                                        return (
                                                                            <Link
                                                                                key={subServiceId}
                                                                                href={`/services/${category.slug}/${subService.slug}`}
                                                                                className="block px-3 py-2 text-sm text-gray-600 hover:text-[#D4A646] hover:bg-gray-50 rounded transition-colors"
                                                                            >
                                                                                {subService.title}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 pt-4 border-t border-gray-100">
                                                    <Link
                                                        href="/services"
                                                        className="flex items-center justify-center gap-2 text-sm font-semibold text-[#D4A646] hover:text-[#C8A34E] transition-colors"
                                                    >
                                                        View All Services
                                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-semibold leading-6 text-gray-800 hover:text-[#D4A646] transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/contact"
                        className="rounded-lg bg-[#D4A646] px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-[#C8A34E] hover:shadow-xl transition-all duration-300"
                    >
                        Get Consultation
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="space-y-1 px-6 pb-6 pt-6">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setExpandedMobileCategory(expandedMobileCategory === 'services' ? null : 'services')}
                                                className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-[#D4A646]/10 hover:text-[#D4A646] transition-colors"
                                            >
                                                {item.name}
                                                <svg
                                                    className={`h-5 w-5 transition-transform ${expandedMobileCategory === 'services' ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {(expandedMobileCategory === 'services' || serviceCategories.some(cat => cat.slug === expandedMobileCategory)) && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                                                >
                                                    {serviceCategories.map((category) => (
                                                        <div key={category.id}>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setExpandedMobileCategory(expandedMobileCategory === category.slug ? 'services' : category.slug);
                                                                }}
                                                                className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-[#D4A646]/10 hover:text-[#D4A646] transition-colors"
                                                            >
                                                                <span>{category.title}</span>
                                                                <svg
                                                                    className={`h-4 w-4 transition-transform ${expandedMobileCategory === category.slug ? 'rotate-180' : ''}`}
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                                </svg>
                                                            </button>
                                                            <AnimatePresence>
                                                                {expandedMobileCategory === category.slug && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                                                                    >
                                                                        <Link
                                                                            href={`/services/${category.slug}`}
                                                                            className="block rounded-lg px-3 py-1.5 text-xs text-[#D4A646] font-semibold hover:bg-[#D4A646]/10 transition-colors"
                                                                            onClick={() => setIsMenuOpen(false)}
                                                                        >
                                                                            View All {category.title}
                                                                        </Link>
                                                                        {category.subServices.map((subServiceId) => {
                                                                            const subService = getSubServiceById(subServiceId);
                                                                            if (!subService) return null;
                                                                            return (
                                                                                <Link
                                                                                    key={subServiceId}
                                                                                    href={`/services/${category.slug}/${subService.slug}`}
                                                                                    className="block rounded-lg px-3 py-1.5 text-xs text-gray-700 hover:bg-[#D4A646]/10 hover:text-[#D4A646] transition-colors"
                                                                                    onClick={() => setIsMenuOpen(false)}
                                                                                >
                                                                                    {subService.title}
                                                                                </Link>
                                                                            );
                                                                        })}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-[#D4A646]/10 hover:text-[#D4A646] transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="block rounded-lg bg-[#D4A646] px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-[#C8A34E] shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
