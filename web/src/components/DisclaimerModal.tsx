'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const hasAgreed = localStorage.getItem('hasAgreedToDisclaimer');
        if (!hasAgreed) {
            setIsOpen(true);
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem('hasAgreedToDisclaimer', 'true');
        setIsOpen(false);
    };

    const handleLeave = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#051427] px-6 py-4 border-b border-gray-800">
                            <h2 className="text-xl font-bold text-white font-serif tracking-wide">
                                Disclaimer
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
                            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                <p className="font-semibold text-[#051427]">
                                    As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. By clicking “I Agree”, you acknowledge that:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        You are accessing this website of your own accord and there has been no form of solicitation, advertisement, or inducement by RG Legal Solutions or any of its members.
                                    </li>
                                    <li>
                                        The purpose of this website is purely informational, intended to provide general details about RG Legal Solutions, its practice areas, and professional activities.
                                    </li>
                                    <li>
                                        Nothing on this website constitutes legal advice, nor does accessing or using the site create any lawyer–client relationship.
                                    </li>
                                    <li>
                                        RG Legal Solutions assumes no liability for actions taken based on the information provided on this website.
                                    </li>
                                    <li>
                                        All content on this site is the intellectual property of RG Legal Solutions.
                                    </li>
                                </ul>
                                <p className="font-medium text-red-600 pt-2">
                                    If you do not agree with the above, please click “Leave Site.”
                                </p>
                            </div>
                        </div>

                        {/* Footer / Actions */}
                        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end">
                            <button
                                onClick={handleLeave}
                                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors text-sm"
                            >
                                Leave Site
                            </button>
                            <button
                                onClick={handleAgree}
                                className="px-6 py-2.5 rounded-lg bg-[#D4A646] text-[#051427] font-bold hover:bg-[#E5B657] shadow-lg hover:shadow-xl transition-all text-sm"
                            >
                                I Agree
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
