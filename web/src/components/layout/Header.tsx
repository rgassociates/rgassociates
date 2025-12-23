"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceCategories } from '@/data/serviceCategories';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#051427]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#051427] py-5'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        {/* Logo Image */}
                        <img
                            src="/RGlogowithoutbg.webp"
                            alt="RG Legal Solutions Logo"
                            className="h-12 w-12 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-serif font-bold text-white tracking-wide group-hover:text-accent transition-colors">RG Legal Solutions</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Expert Legal Services</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white"
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
                                    className="text-sm font-medium leading-6 text-gray-300 hover:text-accent transition-colors relative group flex items-center gap-1"
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
                                            className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-screen max-w-md"
                                        >
                                            <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-gray-900/5 p-6">
                                                <div className="mb-4">
                                                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Our Services</h3>
                                                    <p className="text-xs text-gray-600">Comprehensive legal solutions for every need</p>
                                                </div>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {serviceCategories.map((category) => (
                                                        <Link
                                                            key={category.id}
                                                            href={`/services/${category.slug}`}
                                                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
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
                                                                <p className="text-xs text-gray-600 mt-0.5 line-clamp-1">
                                                                    {category.subServices.length} services
                                                                </p>
                                                            </div>
                                                            <svg className="h-5 w-5 text-gray-400 group-hover:text-[#D4A646] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </Link>
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
                                className="text-sm font-medium leading-6 text-gray-300 hover:text-accent transition-colors relative group"
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
                        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-primary-900 shadow-sm hover:bg-white transition-colors"
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
                                    <Link
                                        href={item.href}
                                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.hasDropdown && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {serviceCategories.map((category) => (
                                                <Link
                                                    key={category.id}
                                                    href={`/services/${category.slug}`}
                                                    className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:bg-white/10 hover:text-accent transition-colors"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {category.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="block rounded-lg bg-accent px-3 py-2.5 text-center text-base font-semibold text-primary-900 hover:bg-white transition-colors mt-4"
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
