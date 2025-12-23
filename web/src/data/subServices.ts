import { SubService } from "@/types/services";

// LEGAL CONSULTATION SUB-SERVICES
export const legalConsultationServices: SubService[] = [
    {
        id: "civil-litigation-consultation",
        categoryId: "legal-consultation",
        title: "Civil Litigation Consultation",
        slug: "civil-litigation",
        description: "Expert consultation for civil disputes including property matters, contract breaches, and recovery suits.",
        shortDescription: "Professional advice on property disputes, contract enforcement, and civil remedies.",
        content: {
            overview: "Civil disputes can paralyze your personal and professional life. Our civil litigation consultation provides you with strategic legal advice on property disputes, money recovery, contract breaches, and civil remedies. We analyze your case, assess legal options, and provide a clear roadmap for resolution.",
            keyFeatures: [
                "Detailed case analysis and legal assessment",
                "Strategic advice on litigation vs settlement",
                "Documentation review and gap analysis",
                "Court jurisdiction and forum selection guidance",
                "Estimated timeline and cost projection",
                "Alternative dispute resolution options"
            ],
            process: [
                {
                    step: 1,
                    title: "Initial Consultation",
                    description: "Share your case details and documents with our legal team"
                },
                {
                    step: 2,
                    title: "Case Analysis",
                    description: "Our attorneys review documents and assess legal merits"
                },
                {
                    step: 3,
                    title: "Legal Opinion",
                    description: "Receive detailed written opinion with recommended strategy"
                },
                {
                    step: 4,
                    title: "Action Plan",
                    description: "Get step-by-step guidance on next steps and timelines"
                }
            ],
            faqs: [
                {
                    question: "What documents do I need for consultation?",
                    answer: "Bring all relevant documents including agreements, correspondence, property papers, and any legal notices received or sent."
                },
                {
                    question: "How long does a consultation take?",
                    answer: "Initial consultation typically takes 30-60 minutes. Complex cases may require follow-up sessions."
                },
                {
                    question: "Will I get a written opinion?",
                    answer: "Yes, we provide a detailed written legal opinion outlining your options and recommended course of action."
                }
            ],
            pricing: {
                startingPrice: "₹2,000",
                note: "Consultation fee is adjustable against retainer if you engage us for litigation"
            }
        },
        relatedPracticeAreas: ["civil-notice", "civil-litigation", "legal-opinion"],
        metadata: {
            metaTitle: "Civil Litigation Consultation | Expert Legal Advice in Jaipur",
            metaDescription: "Get expert consultation on civil disputes, property matters, and contract breaches. Strategic legal advice from experienced civil lawyers in Jaipur.",
            keywords: ["civil litigation consultation", "property dispute lawyer", "contract breach advice", "civil lawyer jaipur"]
        }
    },
    {
        id: "criminal-defense-consultation",
        categoryId: "legal-consultation",
        title: "Criminal Defense Consultation",
        slug: "criminal-defense",
        description: "Confidential consultation for criminal matters including bail, FIR defense, and trial strategy.",
        shortDescription: "Expert advice on criminal charges, bail applications, and defense strategies.",
        content: {
            overview: "Facing criminal charges is stressful and time-sensitive. Our criminal defense consultation provides immediate legal guidance on bail applications, FIR quashing, anticipatory bail, and trial defense strategies. We protect your rights from the very first interaction with law enforcement.",
            keyFeatures: [
                "24/7 emergency consultation availability",
                "Bail and anticipatory bail assessment",
                "FIR analysis and quashing options",
                "Defense strategy development",
                "Rights protection guidance",
                "Evidence and witness evaluation"
            ],
            process: [
                {
                    step: 1,
                    title: "Emergency Contact",
                    description: "Reach us immediately for urgent criminal matters"
                },
                {
                    step: 2,
                    title: "Case Assessment",
                    description: "Review FIR, charges, and evidence against you"
                },
                {
                    step: 3,
                    title: "Defense Strategy",
                    description: "Develop comprehensive defense plan and bail strategy"
                },
                {
                    step: 4,
                    title: "Immediate Action",
                    description: "File bail applications or quashing petitions as needed"
                }
            ],
            faqs: [
                {
                    question: "Can I get bail immediately?",
                    answer: "Bail eligibility depends on the nature of offense. We assess your case and file bail applications on priority for bailable and non-bailable offenses."
                },
                {
                    question: "What is anticipatory bail?",
                    answer: "Anticipatory bail is pre-arrest bail granted when you apprehend arrest. We file anticipatory bail applications in High Court or Sessions Court."
                },
                {
                    question: "How do you handle FIR quashing?",
                    answer: "We file quashing petitions under Section 482 CrPC in High Court to get false or frivolous FIRs dismissed."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Emergency consultation available 24/7. Fee adjustable against retainer."
            }
        },
        relatedPracticeAreas: ["criminal-notice", "criminal-litigation", "case-law-research"],
        metadata: {
            metaTitle: "Criminal Defense Consultation | Bail & FIR Lawyers in Jaipur",
            metaDescription: "Urgent criminal defense consultation. Expert advice on bail, anticipatory bail, FIR quashing, and trial defense. 24/7 availability.",
            keywords: ["criminal lawyer consultation", "bail lawyer jaipur", "anticipatory bail", "FIR quashing"]
        }
    },
    {
        id: "corporate-law-consultation",
        categoryId: "legal-consultation",
        title: "Corporate Law Consultation",
        slug: "corporate-law",
        description: "Strategic business advisory on company formation, compliance, contracts, and corporate disputes.",
        shortDescription: "Business legal advice on incorporation, compliance, contracts, and M&A.",
        content: {
            overview: "Business moves fast; your legal counsel should too. Our corporate law consultation acts as your external General Counsel, providing strategic advice on company incorporation, compliance, commercial contracts, shareholder agreements, and corporate disputes.",
            keyFeatures: [
                "Company formation and structuring advice",
                "Compliance and regulatory guidance",
                "Contract drafting and review",
                "Shareholder agreement consultation",
                "M&A and investment advisory",
                "Corporate dispute resolution strategy"
            ],
            process: [
                {
                    step: 1,
                    title: "Business Assessment",
                    description: "Understand your business model and legal requirements"
                },
                {
                    step: 2,
                    title: "Legal Audit",
                    description: "Review existing agreements and compliance status"
                },
                {
                    step: 3,
                    title: "Strategic Advice",
                    description: "Provide tailored legal solutions for your business"
                },
                {
                    step: 4,
                    title: "Implementation Support",
                    description: "Assist with documentation and compliance execution"
                }
            ],
            faqs: [
                {
                    question: "What type of company should I register?",
                    answer: "We help you choose between Private Limited, LLP, OPC, or Partnership based on your business needs, liability concerns, and funding plans."
                },
                {
                    question: "Do you provide ongoing compliance support?",
                    answer: "Yes, we offer retainer-based services for ongoing compliance, contract review, and legal advisory."
                },
                {
                    question: "Can you help with funding agreements?",
                    answer: "Absolutely. We draft and review term sheets, shareholder agreements, and investment documentation for startups and SMEs."
                }
            ],
            pricing: {
                priceRange: "₹5,000 - ₹25,000",
                note: "Pricing varies based on complexity. Retainer packages available for ongoing support."
            }
        },
        relatedPracticeAreas: ["corporate-notice", "corporate-litigation", "due-diligence-reports"],
        metadata: {
            metaTitle: "Corporate Law Consultation | Business Legal Advice in Jaipur",
            metaDescription: "Expert corporate law consultation for startups and businesses. Company formation, compliance, contracts, and M&A advisory.",
            keywords: ["corporate lawyer consultation", "business legal advice", "company registration", "startup lawyer jaipur"]
        }
    },
    {
        id: "family-law-consultation",
        categoryId: "legal-consultation",
        title: "Family Law Consultation",
        slug: "family-law",
        description: "Compassionate legal guidance on divorce, child custody, alimony, and inheritance matters.",
        shortDescription: "Sensitive legal advice on divorce, custody, maintenance, and family disputes.",
        content: {
            overview: "Family disputes are emotionally challenging. Our family law consultation provides compassionate, confidential guidance on divorce (mutual consent and contested), child custody, alimony, domestic violence protection, and inheritance matters. We prioritize amicable settlements while being prepared to litigate when necessary.",
            keyFeatures: [
                "Confidential consultation in private setting",
                "Mutual consent divorce guidance",
                "Child custody and visitation rights advice",
                "Alimony and maintenance calculation",
                "Domestic violence protection strategy",
                "Inheritance and succession planning"
            ],
            process: [
                {
                    step: 1,
                    title: "Private Consultation",
                    description: "Discuss your family matter in complete confidentiality"
                },
                {
                    step: 2,
                    title: "Options Analysis",
                    description: "Explore mediation, settlement, or litigation options"
                },
                {
                    step: 3,
                    title: "Legal Strategy",
                    description: "Develop approach prioritizing your interests and children's welfare"
                },
                {
                    step: 4,
                    title: "Next Steps",
                    description: "Guide you through documentation and court procedures"
                }
            ],
            faqs: [
                {
                    question: "How long does a mutual consent divorce take?",
                    answer: "Typically 6-18 months including mandatory cooling-off period, though courts sometimes waive the waiting period."
                },
                {
                    question: "How is child custody decided?",
                    answer: "Courts prioritize the child's welfare considering age, emotional bond with parents, financial stability, and the child's preference (if old enough)."
                },
                {
                    question: "Can I claim maintenance if I am working?",
                    answer: "Yes, employment doesn't automatically disqualify you. Courts consider standard of living and income disparity between spouses."
                }
            ],
            pricing: {
                startingPrice: "₹2,500",
                note: "All consultations are strictly confidential. Fee adjustable against retainer."
            }
        },
        relatedPracticeAreas: ["family-law-notice", "family-court-litigation", "legal-opinion"],
        metadata: {
            metaTitle: "Family Law Consultation | Divorce & Custody Lawyers in Jaipur",
            metaDescription: "Compassionate family law consultation for divorce, child custody, alimony, and inheritance. Confidential advice from experienced lawyers.",
            keywords: ["divorce lawyer consultation", "child custody advice", "family lawyer jaipur", "alimony consultation"]
        }
    },
    {
        id: "intellectual-property-consultation",
        categoryId: "legal-consultation",
        title: "Intellectual Property Consultation",
        slug: "intellectual-property",
        description: "Expert advice on trademark registration, patent filing, copyright protection, and IP infringement.",
        shortDescription: "Professional guidance on trademark, patent, copyright, and brand protection.",
        content: {
            overview: "Your ideas and brand are your currency. Our IP consultation helps you protect trademarks, patents, copyrights, and trade secrets. We guide you through the entire IP lifecycle from search and filing to enforcement and infringement litigation.",
            keyFeatures: [
                "Trademark search and registration strategy",
                "Patent filing and prosecution guidance",
                "Copyright registration and protection",
                "IP infringement assessment",
                "Brand protection strategy",
                "Licensing and assignment advice"
            ],
            process: [
                {
                    step: 1,
                    title: "IP Assessment",
                    description: "Identify your intellectual property assets"
                },
                {
                    step: 2,
                    title: "Search & Analysis",
                    description: "Conduct trademark/patent search for conflicts"
                },
                {
                    step: 3,
                    title: "Filing Strategy",
                    description: "Recommend optimal filing approach and classes"
                },
                {
                    step: 4,
                    title: "Protection Plan",
                    description: "Develop comprehensive IP protection roadmap"
                }
            ],
            faqs: [
                {
                    question: "How long does trademark registration take?",
                    answer: "Typically 12-18 months from filing to registration, depending on objections and oppositions."
                },
                {
                    question: "Can I trademark my business name?",
                    answer: "Yes, if it's distinctive and not similar to existing trademarks. We conduct comprehensive searches before filing."
                },
                {
                    question: "What's the difference between trademark and copyright?",
                    answer: "Trademarks protect brand names/logos, while copyrights protect original creative works like books, music, and software."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Consultation includes preliminary trademark search. Filing fees additional."
            }
        },
        relatedPracticeAreas: ["corporate-law-consultation", "legal-research", "corporate-litigation"],
        metadata: {
            metaTitle: "IP Consultation | Trademark & Patent Lawyers in Jaipur",
            metaDescription: "Expert intellectual property consultation for trademark registration, patent filing, and copyright protection. Protect your brand and innovations.",
            keywords: ["trademark consultation", "patent lawyer", "IP lawyer jaipur", "copyright registration"]
        }
    },
    {
        id: "real-estate-consultation",
        categoryId: "legal-consultation",
        title: "Real Estate Consultation",
        slug: "real-estate",
        description: "Legal advice on property transactions, RERA complaints, title verification, and landlord-tenant disputes.",
        shortDescription: "Expert guidance on property purchase, RERA, title issues, and tenant disputes.",
        content: {
            overview: "Real estate investment carries significant risk. Our property law consultation helps you navigate property purchases, sale agreements, RERA complaints, title disputes, and landlord-tenant issues. We conduct due diligence to identify legal issues before you invest.",
            keyFeatures: [
                "Property purchase legal advice",
                "Sale deed and agreement review",
                "RERA complaint guidance",
                "Title verification consultation",
                "Landlord-tenant dispute resolution",
                "Property tax and registration advice"
            ],
            process: [
                {
                    step: 1,
                    title: "Property Review",
                    description: "Analyze property documents and ownership chain"
                },
                {
                    step: 2,
                    title: "Risk Assessment",
                    description: "Identify legal issues, encumbrances, and disputes"
                },
                {
                    step: 3,
                    title: "Legal Opinion",
                    description: "Provide detailed report on property's legal status"
                },
                {
                    step: 4,
                    title: "Transaction Support",
                    description: "Guide through registration and documentation"
                }
            ],
            faqs: [
                {
                    question: "What is property due diligence?",
                    answer: "Legal verification of property ownership, title clarity, pending litigations, and encumbrances before purchase."
                },
                {
                    question: "How do I file a RERA complaint?",
                    answer: "We help you file complaints against builders for delays, quality issues, or unfair practices with the Real Estate Regulatory Authority."
                },
                {
                    question: "Can you help with tenant eviction?",
                    answer: "Yes, we handle eviction proceedings for non-payment of rent, unauthorized subletting, or property damage."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Due diligence reports priced separately based on property complexity."
            }
        },
        relatedPracticeAreas: ["property-notice", "property-litigation", "residential-property-title-search"],
        metadata: {
            metaTitle: "Real Estate Consultation | Property Lawyers in Jaipur",
            metaDescription: "Expert real estate legal consultation for property purchase, RERA complaints, title verification, and tenant disputes.",
            keywords: ["property lawyer consultation", "real estate lawyer jaipur", "RERA complaint", "property due diligence"]
        }
    }
];

// LEGAL NOTICE SUB-SERVICES
export const legalNoticeServices: SubService[] = [
    {
        id: "civil-notice",
        categoryId: "legal-notice",
        title: "Civil Legal Notice",
        slug: "civil-notice",
        description: "Professional drafting of legal notices for property disputes, contract breaches, and money recovery.",
        shortDescription: "Expert civil notice drafting for property, contract, and recovery matters.",
        content: {
            overview: "A well-drafted legal notice is often the first step toward resolving civil disputes without litigation. Our civil legal notices are legally sound, strategically worded, and designed to protect your interests in property disputes, breach of contract, money recovery, and other civil matters.",
            keyFeatures: [
                "Legally precise language and citations",
                "Strategic drafting to strengthen your position",
                "Compliance with legal notice requirements",
                "Quick turnaround (24-48 hours)",
                "Sent via registered post with acknowledgment",
                "Follow-up consultation included"
            ],
            process: [
                {
                    step: 1,
                    title: "Case Details",
                    description: "Share dispute details and supporting documents"
                },
                {
                    step: 2,
                    title: "Notice Drafting",
                    description: "Our lawyers draft legally sound notice"
                },
                {
                    step: 3,
                    title: "Review & Approval",
                    description: "You review and approve the draft"
                },
                {
                    step: 4,
                    title: "Dispatch",
                    description: "Notice sent via registered post with proof"
                }
            ],
            faqs: [
                {
                    question: "What is the purpose of a legal notice?",
                    answer: "A legal notice formally communicates your grievance and demands resolution, often a mandatory step before filing a lawsuit."
                },
                {
                    question: "How long does the other party have to respond?",
                    answer: "Typically 15-30 days depending on the nature of dispute. We specify the response period in the notice."
                },
                {
                    question: "What if they don't respond to the notice?",
                    answer: "Non-response strengthens your case for litigation. We can then proceed with filing a lawsuit."
                }
            ],
            pricing: {
                startingPrice: "₹2,500",
                note: "Includes drafting, review, and dispatch via registered post"
            }
        },
        relatedPracticeAreas: ["civil-litigation-consultation", "civil-litigation", "legal-opinion"],
        metadata: {
            metaTitle: "Civil Legal Notice Drafting | Property & Contract Disputes",
            metaDescription: "Expert civil legal notice drafting for property disputes, breach of contract, and money recovery. Fast turnaround, legally sound notices.",
            keywords: ["civil legal notice", "property dispute notice", "breach of contract notice", "legal notice lawyer jaipur"]
        }
    },
    {
        id: "criminal-notice",
        categoryId: "legal-notice",
        title: "Criminal Legal Notice",
        slug: "criminal-notice",
        description: "Strategic criminal notices for defamation, cheque bounce, fraud, and other criminal matters.",
        shortDescription: "Expert criminal notice drafting for defamation, cheque bounce, and fraud cases.",
        content: {
            overview: "Criminal legal notices serve as formal warnings and mandatory pre-litigation steps for offenses like cheque dishonor (Section 138 NI Act), defamation, fraud, and criminal breach of trust. Our notices are drafted to maximize legal impact while maintaining strategic advantage.",
            keyFeatures: [
                "Section 138 NI Act cheque bounce notices",
                "Defamation notices (civil and criminal)",
                "Fraud and cheating notices",
                "Criminal breach of trust notices",
                "Legally compliant with mandatory requirements",
                "Evidence preservation guidance"
            ],
            process: [
                {
                    step: 1,
                    title: "Incident Analysis",
                    description: "Review facts, evidence, and applicable criminal provisions"
                },
                {
                    step: 2,
                    title: "Notice Drafting",
                    description: "Draft notice with proper legal citations and demands"
                },
                {
                    step: 3,
                    title: "Client Approval",
                    description: "Review and finalize notice content"
                },
                {
                    step: 4,
                    title: "Legal Dispatch",
                    description: "Send via registered post/courier with proof of service"
                }
            ],
            faqs: [
                {
                    question: "Is a legal notice mandatory for cheque bounce cases?",
                    answer: "Yes, under Section 138 of the Negotiable Instruments Act, a legal notice must be sent within 30 days of cheque dishonor."
                },
                {
                    question: "Can I send a defamation notice for social media posts?",
                    answer: "Yes, we draft defamation notices for online defamation, false statements, and reputation damage on social media."
                },
                {
                    question: "What happens after sending a criminal notice?",
                    answer: "The recipient has 15 days to respond. If no resolution, we can file a criminal complaint or FIR."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Urgent notices available with 24-hour turnaround"
            }
        },
        relatedPracticeAreas: ["criminal-defense-consultation", "criminal-litigation", "case-law-research"],
        metadata: {
            metaTitle: "Criminal Legal Notice | Cheque Bounce & Defamation Notices",
            metaDescription: "Expert criminal legal notice drafting for cheque bounce (Section 138), defamation, fraud, and criminal breach of trust cases.",
            keywords: ["criminal legal notice", "cheque bounce notice", "defamation notice", "section 138 notice"]
        }
    },
    {
        id: "corporate-notice",
        categoryId: "legal-notice",
        title: "Corporate Legal Notice",
        slug: "corporate-notice",
        description: "Business legal notices for shareholder disputes, contract breaches, and corporate governance issues.",
        shortDescription: "Professional corporate notices for business disputes and compliance matters.",
        content: {
            overview: "Corporate legal notices address business disputes, shareholder conflicts, breach of commercial contracts, and corporate governance violations. Our notices are drafted to protect your business interests while maintaining professional relationships where possible.",
            keyFeatures: [
                "Shareholder dispute notices",
                "Breach of commercial contract notices",
                "Director removal/resignation notices",
                "Intellectual property infringement notices",
                "Non-compete violation notices",
                "Corporate compliance notices"
            ],
            process: [
                {
                    step: 1,
                    title: "Business Review",
                    description: "Analyze corporate documents and dispute facts"
                },
                {
                    step: 2,
                    title: "Legal Drafting",
                    description: "Draft notice citing company law and contract provisions"
                },
                {
                    step: 3,
                    title: "Stakeholder Review",
                    description: "Review with management/board as needed"
                },
                {
                    step: 4,
                    title: "Formal Dispatch",
                    description: "Send to registered office with proper documentation"
                }
            ],
            faqs: [
                {
                    question: "Can I send a notice to a director for mismanagement?",
                    answer: "Yes, we draft notices for director misconduct, breach of fiduciary duty, and oppression/mismanagement under Companies Act."
                },
                {
                    question: "How do I enforce a non-compete clause?",
                    answer: "We send legal notices to former employees/partners violating non-compete agreements, followed by injunction proceedings if needed."
                },
                {
                    question: "What about payment recovery from clients?",
                    answer: "We draft payment demand notices for outstanding invoices, followed by recovery suits or arbitration as per contract terms."
                }
            ],
            pricing: {
                startingPrice: "₹5,000",
                note: "Complex corporate notices may require additional legal research"
            }
        },
        relatedPracticeAreas: ["corporate-law-consultation", "corporate-litigation", "due-diligence-reports"],
        metadata: {
            metaTitle: "Corporate Legal Notice | Business Dispute & Contract Breach",
            metaDescription: "Expert corporate legal notice drafting for shareholder disputes, contract breaches, and business conflicts. Protect your company's interests.",
            keywords: ["corporate legal notice", "shareholder dispute notice", "business contract breach", "corporate lawyer jaipur"]
        }
    },
    {
        id: "family-law-notice",
        categoryId: "legal-notice",
        title: "Family Law Notice",
        slug: "family-law-notice",
        description: "Sensitive legal notices for divorce, maintenance, custody, and domestic violence matters.",
        shortDescription: "Compassionate family law notices for divorce, custody, and maintenance.",
        content: {
            overview: "Family law notices require sensitivity and legal precision. We draft notices for divorce proceedings, maintenance claims, child custody matters, and domestic violence complaints while maintaining dignity and focusing on resolution.",
            keyFeatures: [
                "Mutual consent divorce notices",
                "Maintenance and alimony demand notices",
                "Child custody and visitation notices",
                "Domestic violence protection notices",
                "Restitution of conjugal rights notices",
                "Confidential handling of sensitive matters"
            ],
            process: [
                {
                    step: 1,
                    title: "Private Consultation",
                    description: "Discuss family matter in complete confidentiality"
                },
                {
                    step: 2,
                    title: "Notice Preparation",
                    description: "Draft notice with appropriate tone and legal grounds"
                },
                {
                    step: 3,
                    title: "Client Review",
                    description: "Ensure notice reflects your intentions accurately"
                },
                {
                    step: 4,
                    title: "Discreet Dispatch",
                    description: "Send notice maintaining privacy and dignity"
                }
            ],
            faqs: [
                {
                    question: "Is a notice required before filing for divorce?",
                    answer: "For mutual consent divorce, a joint petition is filed. For contested divorce, a notice is advisable to attempt settlement."
                },
                {
                    question: "How do I claim maintenance through a notice?",
                    answer: "We draft maintenance demand notices under Section 125 CrPC or relevant personal laws, specifying the amount and grounds."
                },
                {
                    question: "Can I send a notice for domestic violence?",
                    answer: "Yes, we draft notices under the Domestic Violence Act seeking protection, residence rights, and monetary relief."
                }
            ],
            pricing: {
                startingPrice: "₹2,500",
                note: "All family law notices handled with strict confidentiality"
            }
        },
        relatedPracticeAreas: ["family-law-consultation", "family-court-litigation", "legal-opinion"],
        metadata: {
            metaTitle: "Family Law Notice | Divorce, Custody & Maintenance Notices",
            metaDescription: "Compassionate family law notice drafting for divorce, child custody, maintenance, and domestic violence matters. Confidential service.",
            keywords: ["divorce notice", "maintenance notice", "family law notice", "domestic violence notice"]
        }
    },
    {
        id: "property-notice",
        categoryId: "legal-notice",
        title: "Property Legal Notice",
        slug: "property-notice",
        description: "Legal notices for property disputes, eviction, possession, and real estate matters.",
        shortDescription: "Expert property notices for eviction, possession, and title disputes.",
        content: {
            overview: "Property legal notices are critical for asserting ownership rights, demanding possession, initiating eviction, and resolving title disputes. Our notices are drafted to establish legal claims and facilitate resolution of real estate conflicts.",
            keyFeatures: [
                "Tenant eviction notices",
                "Possession demand notices",
                "Title dispute notices",
                "Trespass and encroachment notices",
                "RERA complaint notices to builders",
                "Sale agreement cancellation notices"
            ],
            process: [
                {
                    step: 1,
                    title: "Property Assessment",
                    description: "Review property documents and ownership evidence"
                },
                {
                    step: 2,
                    title: "Notice Drafting",
                    description: "Draft notice with property details and legal demands"
                },
                {
                    step: 3,
                    title: "Documentation",
                    description: "Attach supporting documents and evidence"
                },
                {
                    step: 4,
                    title: "Legal Dispatch",
                    description: "Send to property address and registered address"
                }
            ],
            faqs: [
                {
                    question: "How do I evict a tenant who won't vacate?",
                    answer: "We send an eviction notice citing grounds (non-payment, lease expiry, unauthorized use), followed by eviction suit if needed."
                },
                {
                    question: "What if someone is illegally occupying my property?",
                    answer: "We draft possession demand notices and can file suits for recovery of possession and damages."
                },
                {
                    question: "Can I cancel a property sale agreement?",
                    answer: "Yes, if the seller breaches terms. We send cancellation notices and can claim refund with interest."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Includes property document review and notice drafting"
            }
        },
        relatedPracticeAreas: ["real-estate-consultation", "property-litigation", "residential-property-title-search"],
        metadata: {
            metaTitle: "Property Legal Notice | Eviction & Possession Notices",
            metaDescription: "Expert property legal notice drafting for tenant eviction, possession demands, and real estate disputes. Protect your property rights.",
            keywords: ["property legal notice", "eviction notice", "possession notice", "property dispute notice"]
        }
    }
];

// LITIGATION SUB-SERVICES
export const litigationServices: SubService[] = [
    {
        id: "civil-litigation",
        categoryId: "litigation",
        title: "Civil Litigation",
        slug: "civil-litigation",
        description: "Aggressive court representation for property disputes, contract enforcement, and money recovery suits.",
        shortDescription: "Expert court representation in civil disputes and property matters.",
        content: {
            overview: "Civil litigation requires strategic planning and aggressive advocacy. We represent clients in property disputes, money recovery suits, specific performance cases, and all civil matters across District Courts, High Courts, and Supreme Court. Our litigation strategy focuses on swift resolution and favorable outcomes.",
            keyFeatures: [
                "Property and title dispute litigation",
                "Money recovery and Order 37 suits",
                "Specific performance of contracts",
                "Injunction and stay applications",
                "Civil appeals and revisions",
                "Execution proceedings"
            ],
            process: [
                {
                    step: 1,
                    title: "Case Evaluation",
                    description: "Analyze merits, evidence, and litigation strategy"
                },
                {
                    step: 2,
                    title: "Pleadings & Filing",
                    description: "Draft and file plaint/written statement with evidence"
                },
                {
                    step: 3,
                    title: "Court Representation",
                    description: "Appear for all hearings and argue your case"
                },
                {
                    step: 4,
                    title: "Judgment & Execution",
                    description: "Obtain favorable judgment and execute decree"
                }
            ],
            faqs: [
                {
                    question: "How long does civil litigation take?",
                    answer: "Depends on court and case complexity. District court cases typically take 2-5 years, though we pursue fast-track options where available."
                },
                {
                    question: "What is an Order 37 suit?",
                    answer: "A summary suit for recovery of money based on written contracts, bills of exchange, or promissory notes. Faster than regular suits."
                },
                {
                    question: "Can you get an injunction to stop construction?",
                    answer: "Yes, we file injunction applications to restrain illegal construction, trespass, or property damage pending final judgment."
                }
            ],
            pricing: {
                priceRange: "₹25,000 - ₹2,00,000+",
                note: "Fees depend on case value, complexity, and court level. Retainer-based billing available."
            }
        },
        relatedPracticeAreas: ["civil-litigation-consultation", "civil-notice", "legal-opinion"],
        metadata: {
            metaTitle: "Civil Litigation Lawyers | Property Dispute & Recovery Suits",
            metaDescription: "Expert civil litigation representation in property disputes, money recovery, and contract enforcement. Experienced advocates in Jaipur courts.",
            keywords: ["civil litigation lawyer", "property dispute court", "money recovery suit", "civil lawyer jaipur"]
        }
    },
    {
        id: "criminal-litigation",
        categoryId: "litigation",
        title: "Criminal Litigation",
        slug: "criminal-litigation",
        description: "Fierce criminal defense in trials, bail applications, and appeals across all criminal courts.",
        shortDescription: "Aggressive criminal defense and trial representation.",
        content: {
            overview: "Your liberty is non-negotiable. Our criminal litigation team provides aggressive defense in trials, bail applications, FIR quashing, and criminal appeals. We represent clients in cases ranging from cheque bounce to serious IPC offenses across Magistrate Courts, Sessions Courts, High Courts, and Supreme Court.",
            keyFeatures: [
                "Bail and anticipatory bail applications",
                "FIR quashing petitions (Section 482 CrPC)",
                "Trial defense and cross-examination",
                "Criminal appeals and revisions",
                "Cheque bounce (Section 138 NI Act) defense",
                "White-collar crime defense"
            ],
            process: [
                {
                    step: 1,
                    title: "Immediate Action",
                    description: "File bail applications and protective orders"
                },
                {
                    step: 2,
                    title: "Investigation Stage",
                    description: "Protect rights during police investigation"
                },
                {
                    step: 3,
                    title: "Trial Defense",
                    description: "Cross-examine witnesses and present defense"
                },
                {
                    step: 4,
                    title: "Acquittal/Appeal",
                    description: "Secure acquittal or file appeals if needed"
                }
            ],
            faqs: [
                {
                    question: "What is the difference between regular and anticipatory bail?",
                    answer: "Regular bail is sought after arrest, while anticipatory bail is pre-arrest protection when you apprehend arrest."
                },
                {
                    question: "Can you get an FIR quashed?",
                    answer: "Yes, we file quashing petitions in High Court under Section 482 CrPC for false, frivolous, or settled matters."
                },
                {
                    question: "How do you defend cheque bounce cases?",
                    answer: "We challenge notice validity, prove payment, or negotiate settlements. If trial proceeds, we cross-examine complainant and present defense."
                }
            ],
            pricing: {
                priceRange: "₹30,000 - ₹5,00,000+",
                note: "Emergency bail services available 24/7. Fees vary by offense severity and court level."
            }
        },
        relatedPracticeAreas: ["criminal-defense-consultation", "criminal-notice", "case-law-research"],
        metadata: {
            metaTitle: "Criminal Defense Lawyers | Bail, Trial & Appeals in Jaipur",
            metaDescription: "Aggressive criminal litigation defense for bail, trials, and appeals. Expert representation in all criminal courts. 24/7 emergency services.",
            keywords: ["criminal defense lawyer", "bail lawyer jaipur", "trial lawyer", "criminal litigation"]
        }
    },
    {
        id: "corporate-litigation",
        categoryId: "litigation",
        title: "Corporate Litigation",
        slug: "corporate-litigation",
        description: "Strategic litigation for commercial disputes, shareholder conflicts, and corporate governance matters.",
        shortDescription: "Business litigation for commercial disputes and corporate conflicts.",
        content: {
            overview: "Corporate disputes require business acumen and legal expertise. We represent companies and promoters in shareholder disputes, commercial contract breaches, oppression and mismanagement cases, arbitration, and corporate insolvency proceedings. Our approach balances aggressive advocacy with business pragmatism.",
            keyFeatures: [
                "Shareholder and partner disputes",
                "Commercial contract litigation",
                "Oppression and mismanagement (NCLT)",
                "Arbitration and mediation",
                "Corporate insolvency (IBC)",
                "Intellectual property litigation"
            ],
            process: [
                {
                    step: 1,
                    title: "Business Impact Analysis",
                    description: "Assess litigation impact on business operations"
                },
                {
                    step: 2,
                    title: "Forum Selection",
                    description: "Choose optimal forum (court, arbitration, NCLT)"
                },
                {
                    step: 3,
                    title: "Strategic Litigation",
                    description: "File claims and defend aggressively"
                },
                {
                    step: 4,
                    title: "Resolution",
                    description: "Secure judgment or negotiate settlement"
                }
            ],
            faqs: [
                {
                    question: "What is oppression and mismanagement?",
                    answer: "Legal remedy under Companies Act for minority shareholders against director misconduct, filed before NCLT (National Company Law Tribunal)."
                },
                {
                    question: "Should I choose arbitration or court litigation?",
                    answer: "Arbitration is faster and confidential if your contract has arbitration clause. We advise based on your specific situation."
                },
                {
                    question: "Can you handle corporate insolvency cases?",
                    answer: "Yes, we represent creditors and corporate debtors in IBC proceedings before NCLT and NCLAT."
                }
            ],
            pricing: {
                priceRange: "₹50,000 - ₹10,00,000+",
                note: "Complex corporate litigation priced based on claim value and forum. Retainer packages available."
            }
        },
        relatedPracticeAreas: ["corporate-law-consultation", "corporate-notice", "due-diligence-reports"],
        metadata: {
            metaTitle: "Corporate Litigation Lawyers | Business Dispute Resolution",
            metaDescription: "Expert corporate litigation for shareholder disputes, commercial contracts, and NCLT matters. Strategic business litigation in Jaipur.",
            keywords: ["corporate litigation lawyer", "business dispute lawyer", "NCLT lawyer", "commercial litigation jaipur"]
        }
    },
    {
        id: "family-court-litigation",
        categoryId: "litigation",
        title: "Family Court Litigation",
        slug: "family-court-litigation",
        description: "Compassionate yet firm representation in divorce, custody, and maintenance litigation.",
        shortDescription: "Expert family court representation for divorce and custody battles.",
        content: {
            overview: "Family court litigation is emotionally challenging. We provide compassionate yet firm representation in contested divorce, child custody battles, maintenance suits, and domestic violence cases. While we prioritize settlement, we are prepared to litigate aggressively to protect your rights and your children's welfare.",
            keyFeatures: [
                "Contested divorce litigation",
                "Child custody and visitation battles",
                "Maintenance and alimony suits",
                "Domestic violence protection orders",
                "Divorce appeals and revisions",
                "Enforcement of family court orders"
            ],
            process: [
                {
                    step: 1,
                    title: "Confidential Briefing",
                    description: "Understand family dynamics and legal goals"
                },
                {
                    step: 2,
                    title: "Petition Filing",
                    description: "File divorce/custody/maintenance petition"
                },
                {
                    step: 3,
                    title: "Court Proceedings",
                    description: "Represent in all hearings and mediation"
                },
                {
                    step: 4,
                    title: "Final Orders",
                    description: "Secure favorable decree and enforce orders"
                }
            ],
            faqs: [
                {
                    question: "What are grounds for contested divorce?",
                    answer: "Adultery, cruelty, desertion, conversion, mental disorder, communicable disease, and renunciation under Hindu Marriage Act. Other personal laws have similar grounds."
                },
                {
                    question: "Will I get custody of my children?",
                    answer: "Courts prioritize child welfare. We present evidence of your parenting ability, financial stability, and emotional bond with children."
                },
                {
                    question: "How is maintenance amount decided?",
                    answer: "Based on husband's income, wife's needs, standard of living, and children's requirements. We present financial evidence to support claims."
                }
            ],
            pricing: {
                priceRange: "₹25,000 - ₹2,00,000+",
                note: "All family litigation handled with strict confidentiality. Payment plans available."
            }
        },
        relatedPracticeAreas: ["family-law-consultation", "family-law-notice", "legal-opinion"],
        metadata: {
            metaTitle: "Family Court Lawyers | Divorce & Custody Litigation in Jaipur",
            metaDescription: "Compassionate family court litigation for contested divorce, child custody, and maintenance. Expert representation in family courts.",
            keywords: ["family court lawyer", "divorce litigation", "child custody lawyer", "family lawyer jaipur"]
        }
    },
    {
        id: "property-litigation",
        categoryId: "litigation",
        title: "Property Litigation",
        slug: "property-litigation",
        description: "Aggressive representation in property disputes, title suits, and real estate litigation.",
        shortDescription: "Expert property litigation for title disputes and possession suits.",
        content: {
            overview: "Property litigation protects your real estate investments. We handle title disputes, partition suits, possession recovery, tenant eviction, and RERA litigation. Our property lawyers combine legal expertise with understanding of local land records and revenue systems.",
            keyFeatures: [
                "Title and ownership dispute suits",
                "Partition and division of property",
                "Possession recovery and eviction",
                "RERA litigation against builders",
                "Specific performance of sale agreements",
                "Property injunction and stay orders"
            ],
            process: [
                {
                    step: 1,
                    title: "Title Verification",
                    description: "Review property documents and ownership chain"
                },
                {
                    step: 2,
                    title: "Suit Filing",
                    description: "File title suit, partition, or possession claim"
                },
                {
                    step: 3,
                    title: "Evidence & Survey",
                    description: "Present documents and conduct court-ordered survey"
                },
                {
                    step: 4,
                    title: "Decree & Possession",
                    description: "Obtain decree and execute for physical possession"
                }
            ],
            faqs: [
                {
                    question: "How long do property suits take?",
                    answer: "Title suits typically take 3-7 years depending on court and complexity. We pursue fast-track options where available."
                },
                {
                    question: "Can I get immediate possession through court?",
                    answer: "We file injunction applications for interim protection. Final possession comes after decree and execution proceedings."
                },
                {
                    question: "What is a RERA complaint?",
                    answer: "Legal remedy against builders for project delays, quality defects, or unfair practices, filed before Real Estate Regulatory Authority."
                }
            ],
            pricing: {
                priceRange: "₹30,000 - ₹3,00,000+",
                note: "Fees based on property value and case complexity. Title verification included."
            }
        },
        relatedPracticeAreas: ["real-estate-consultation", "property-notice", "residential-property-title-search"],
        metadata: {
            metaTitle: "Property Litigation Lawyers | Title Dispute & RERA Cases",
            metaDescription: "Expert property litigation for title disputes, possession suits, partition, and RERA complaints. Protect your real estate investments.",
            keywords: ["property litigation lawyer", "title dispute lawyer", "RERA lawyer jaipur", "property court case"]
        }
    }
];

// Import additional service categories
import { legalResearchServices } from "./legalResearchServices";
import { titleSearchServices } from "./titleSearchServices";
import { documentRegistrationServices } from "./documentRegistrationServices";

// COMBINED EXPORT - All sub-services in one array
export const allSubServices: SubService[] = [
    ...legalConsultationServices,
    ...legalNoticeServices,
    ...litigationServices,
    ...legalResearchServices,
    ...titleSearchServices,
    ...documentRegistrationServices
];

// Helper functions
export const getSubServiceById = (id: string): SubService | undefined => {
    return allSubServices.find(service => service.id === id);
};

export const getSubServiceBySlug = (categorySlug: string, serviceSlug: string): SubService | undefined => {
    const categoryIdMap: Record<string, string> = {
        'legal-consultation': 'legal-consultation',
        'legal-notice': 'legal-notice',
        'litigation': 'litigation',
        'legal-research': 'legal-research',
        'title-search-report': 'title-search-report',
        'document-registration': 'document-registration'
    };

    const categoryId = categoryIdMap[categorySlug];
    if (!categoryId) return undefined;

    return allSubServices.find(
        service => service.slug === serviceSlug && service.categoryId === categoryId
    );
};

export const getSubServicesByCategory = (categoryId: string): SubService[] => {
    return allSubServices.filter(service => service.categoryId === categoryId);
};


