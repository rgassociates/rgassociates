"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Schema from "@/components/seo/Schema";

export default function Home() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of cases do you handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are a full-service law firm specializing in Civil Litigation, Criminal Defense, Corporate Law, Family Disputes, and Intellectual Property rights. Our team is equipped to handle complex matters across various legal domains."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online legal consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide secure video consultations for clients across India and abroad. This allows you to get expert legal advice from the comfort of your home or office."
        }
      },
      {
        "@type": "Question",
        "name": "How do you charge for your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our fee structure is transparent and tailored to the specific needs of each case. We offer fixed fees for certain services and hourly rates for others. We discuss all costs upfront during the initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Which courts do you practice in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advocates represent clients in the Supreme Court of India, various High Courts, and District Courts across the country. We also handle matters in specialized tribunals and forums."
        }
      }
    ]
  };

  return (
    <div className="bg-white">
      <Schema data={faqData} />
      {/* Hero Section - Modern Split Layout */}
      <section className="relative bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 lg:pr-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm">
                <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">
                  Leading Law Firm in Jaipur
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif leading-[1.1]">
                Defending Your Rights, Protecting Your{" "}
                <span className="text-[#D4A646] relative inline-block">
                  Future
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D4A646]/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,7 Q50,0 100,7 T200,7" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
                .
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-xl">
                India’s trusted legal partners for complex litigation, corporate advisory, and dispute resolution. We blend traditional legal wisdom with modern, aggressive strategies to deliver results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A646] px-8 py-4 text-base font-semibold text-[#051427] shadow-xl hover:bg-[#E5B657] hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Schedule a Free Consultation
                  <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-[#D4A646] transition-all duration-300"
                >
                  View Our Practice Areas
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/10">
                <div className="text-sm text-gray-400">
                  <div className="font-semibold text-white">95% Success Rate</div>
                  <div>Trusted by 500+ clients across India</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative lg:h-[600px] h-[400px]"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#D4A646]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

              {/* Main Image Card */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/hero-banner-v2.png"
                  alt="Professional legal consultation - RG Associates law firm"
                  className="h-full w-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/60 via-transparent to-transparent" />

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#051427] font-serif">20+</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Years Exp.</div>
                    </div>
                    <div className="border-x border-gray-200">
                      <div className="text-2xl font-bold text-[#051427] font-serif">95%</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#051427] font-serif">500+</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Services Section - Modern Card Design */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 mb-4">
              <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif">
              Specialized Legal Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive legal representation across a wide spectrum of practice areas with proven results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: "Civil Litigation",
                desc: "Expert resolution of property disputes, contract breaches, and civil wrongs with strategic litigation.",
                img: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/services/civil-litigation",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )
              },
              {
                title: "Criminal Defense",
                desc: "Aggressive defense strategies protecting your rights and liberty with experienced criminal defense.",
                img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/services/criminal-defense",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Corporate Law",
                desc: "Strategic advisory for businesses navigating mergers, compliance, and regulatory landscapes.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                href: "/services/corporate-law",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
            ].map((service, index) => (
              <motion.article
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/80 via-[#051427]/40 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 h-12 w-12 rounded-xl bg-[#D4A646] text-[#051427] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#051427] font-serif mb-3 group-hover:text-[#D4A646] transition-colors">
                    <Link href={service.href}>
                      <span className="absolute inset-0" />
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>

                  {/* CTA Link */}
                  <div className="flex items-center gap-2 text-[#D4A646] font-semibold group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#051427] px-8 py-4 text-base font-semibold text-[#051427] hover:bg-[#051427] hover:text-white transition-all duration-300"
            >
              View All Practice Areas
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" className="text-[#D4A646]" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-last"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                    alt="Professional legal team at RG Associates"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051427]/20 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-[#D4A646]/10 flex items-center justify-center">
                      <svg className="h-8 w-8 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#051427] font-serif">95%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A646]/20 rounded-full blur-3xl" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 mb-6">
                <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Why Choose RG Associates</span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-[#051427] sm:text-5xl font-serif mb-6">
                Unwavering Commitment to Your Success
              </h2>

              <p className="text-lg leading-8 text-gray-600 mb-10">
                We understand that legal issues can be overwhelming. Our team is dedicated to providing clear guidance and robust representation every step of the way.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                {[
                  {
                    name: 'Experienced Attorneys',
                    description: 'Our team comprises senior advocates with decades of experience in high-stakes litigation and complex legal matters.',
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  },
                  {
                    name: 'Personalized Strategy',
                    description: 'We tailor our legal approach to meet your specific goals and circumstances, ensuring optimal outcomes.',
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    )
                  },
                  {
                    name: 'Transparent Communication',
                    description: 'We keep you informed at every stage of the legal process, ensuring no surprises and complete clarity.',
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    )
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#D4A646]/10 text-[#D4A646] flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#051427] mb-2">{feature.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-3xl font-bold tracking-tight text-[#051427] sm:text-4xl font-serif mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {[
                {
                  question: "What types of cases do you handle?",
                  answer: "We are a full-service law firm specializing in Civil Litigation, Criminal Defense, Corporate Law, Family Disputes, and Intellectual Property rights. Our team is equipped to handle complex matters across various legal domains."
                },
                {
                  question: "Do you offer online legal consultations?",
                  answer: "Yes, we provide secure video consultations for clients across India and abroad. This allows you to get expert legal advice from the comfort of your home or office."
                },
                {
                  question: "How do you charge for your services?",
                  answer: "Our fee structure is transparent and tailored to the specific needs of each case. We offer fixed fees for certain services and hourly rates for others. We discuss all costs upfront during the initial consultation."
                },
                {
                  question: "Which courts do you practice in?",
                  answer: "Our advocates represent clients in the Supreme Court of India, various High Courts, and District Courts across the country. We also handle matters in specialized tribunals and forums."
                }
              ].map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt>
                    <h3 className="text-lg font-semibold leading-7 text-[#051427]">{faq.question}</h3>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051427] via-[#0A1A2F] to-[#051427] py-24 sm:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D4A646]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A646]/10 px-4 py-2 ring-1 ring-inset ring-[#D4A646]/20 backdrop-blur-sm mb-8">
              <svg className="h-4 w-4 text-[#D4A646]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm font-semibold text-[#D4A646] uppercase tracking-wider">Get In Touch</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif mb-6">
              Ready to Discuss Your Case?
            </h2>

            {/* Description */}
            <p className="text-xl leading-8 text-gray-300 max-w-2xl mx-auto mb-12">
              Contact us today for a confidential consultation. Let us help you navigate your legal challenges with confidence and expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A646] px-8 py-4 text-base font-semibold text-[#051427] shadow-xl hover:bg-[#E5B657] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
                <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-[#D4A646] transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-[#D4A646]/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Call Us</div>
                  <div className="text-sm text-gray-400"><a href="tel:09309212401" className="hover:text-[#D4A646] transition-colors">093092 12401</a></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-[#D4A646]/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Email Us</div>
                  <div className="text-sm text-gray-400"><a href="mailto:rgassociatesjaipur@gmail.com" className="hover:text-[#D4A646] transition-colors">rgassociatesjaipur@gmail.com</a></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-[#D4A646]/10 flex items-center justify-center mb-4">
                    <svg className="h-6 w-6 text-[#D4A646]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Visit Us</div>
                  <div className="text-sm text-gray-400">Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
