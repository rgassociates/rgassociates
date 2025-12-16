import { SubService } from "@/types/services";

// LEGAL RESEARCH SUB-SERVICES
export const legalResearchServices: SubService[] = [
    {
        id: "case-law-research",
        categoryId: "legal-research",
        title: "Case Law Research",
        slug: "case-law-research",
        description: "Comprehensive precedent research and case law analysis for litigation and advisory.",
        shortDescription: "Expert precedent research and judicial opinion analysis.",
        content: {
            overview: "Strong legal research is the foundation of winning arguments. Our case law research service provides comprehensive analysis of Supreme Court, High Court, and tribunal judgments relevant to your matter. We identify favorable precedents, distinguish adverse rulings, and provide strategic research memos.",
            keyFeatures: [
                "Supreme Court and High Court precedent research",
                "Tribunal and NCLAT judgment analysis",
                "Citator services and overruling checks",
                "Comparative case law analysis",
                "Research memos with strategic insights",
                "Citation formatting and verification"
            ],
            process: [
                {
                    step: 1,
                    title: "Research Brief",
                    description: "Understand legal issues and research objectives"
                },
                {
                    step: 2,
                    title: "Database Search",
                    description: "Search SCC Online, Manupatra, and other databases"
                },
                {
                    step: 3,
                    title: "Analysis & Memo",
                    description: "Analyze judgments and prepare research memorandum"
                },
                {
                    step: 4,
                    title: "Delivery",
                    description: "Provide research memo with case citations"
                }
            ],
            faqs: [
                {
                    question: "What databases do you use for research?",
                    answer: "We use SCC Online, Manupatra, Indian Kanoon, and official court websites to ensure comprehensive coverage."
                },
                {
                    question: "How long does case law research take?",
                    answer: "Typically 2-5 business days depending on complexity. Urgent research available with 24-48 hour turnaround."
                },
                {
                    question: "Do you provide citations in proper format?",
                    answer: "Yes, we provide citations in standard legal format (SCC, AIR, etc.) ready for use in pleadings and arguments."
                }
            ],
            pricing: {
                startingPrice: "₹5,000",
                note: "Pricing based on research scope and urgency. Retainer packages available for ongoing research needs."
            }
        },
        relatedPracticeAreas: ["civil-litigation", "criminal-litigation", "corporate-litigation"],
        metadata: {
            metaTitle: "Legal Research Services | Case Law & Precedent Analysis",
            metaDescription: "Expert case law research and precedent analysis for litigation. Comprehensive Supreme Court and High Court judgment research.",
            keywords: ["legal research services", "case law research", "precedent analysis", "legal research jaipur"]
        }
    },
    {
        id: "statutory-research",
        categoryId: "legal-research",
        title: "Statutory Research",
        slug: "statutory-research",
        description: "In-depth analysis of statutes, rules, regulations, and legislative intent.",
        shortDescription: "Expert statutory interpretation and legislative analysis.",
        content: {
            overview: "Understanding the law requires more than reading statutes. Our statutory research service provides comprehensive analysis of Acts, Rules, Regulations, and Notifications. We interpret provisions, analyze legislative intent, and provide practical guidance on compliance and application.",
            keyFeatures: [
                "Act and rule interpretation",
                "Legislative history and intent analysis",
                "Notification and circular tracking",
                "Comparative statutory analysis",
                "Compliance requirement mapping",
                "Amendment impact assessment"
            ],
            process: [
                {
                    step: 1,
                    title: "Scope Definition",
                    description: "Identify relevant statutes and research questions"
                },
                {
                    step: 2,
                    title: "Statutory Analysis",
                    description: "Analyze provisions, rules, and notifications"
                },
                {
                    step: 3,
                    title: "Interpretation Memo",
                    description: "Prepare detailed interpretation and compliance guide"
                },
                {
                    step: 4,
                    title: "Advisory",
                    description: "Provide practical guidance on application"
                }
            ],
            faqs: [
                {
                    question: "Can you research state-specific laws?",
                    answer: "Yes, we research both Central and State Acts, Rules, and Notifications relevant to your jurisdiction."
                },
                {
                    question: "Do you track recent amendments?",
                    answer: "Yes, we monitor legislative changes and provide amendment impact analysis for ongoing compliance."
                },
                {
                    question: "Can you help with regulatory compliance?",
                    answer: "Absolutely. We map statutory requirements and provide compliance checklists for your business."
                }
            ],
            pricing: {
                startingPrice: "₹7,500",
                note: "Complex regulatory research priced based on scope. Ongoing compliance monitoring available on retainer."
            }
        },
        relatedPracticeAreas: ["corporate-law-consultation", "legal-opinion", "due-diligence-reports"],
        metadata: {
            metaTitle: "Statutory Research Services | Act Interpretation & Compliance",
            metaDescription: "Expert statutory research and interpretation services. Comprehensive analysis of Acts, Rules, and regulatory compliance requirements.",
            keywords: ["statutory research", "act interpretation", "regulatory compliance", "legal research services"]
        }
    },
    {
        id: "due-diligence-reports",
        categoryId: "legal-research",
        title: "Due Diligence Reports",
        slug: "due-diligence-reports",
        description: "Comprehensive legal due diligence for corporate transactions and property investments.",
        shortDescription: "Thorough legal due diligence for business and property transactions.",
        content: {
            overview: "Due diligence protects your investments. We conduct comprehensive legal due diligence for corporate acquisitions, investments, and property transactions. Our reports identify legal risks, pending litigations, compliance gaps, and contractual issues before you commit.",
            keyFeatures: [
                "Corporate due diligence (M&A, investments)",
                "Property title due diligence",
                "Litigation search and analysis",
                "Compliance and regulatory review",
                "Contract and agreement audit",
                "Risk assessment and mitigation strategies"
            ],
            process: [
                {
                    step: 1,
                    title: "Scope Agreement",
                    description: "Define due diligence scope and deliverables"
                },
                {
                    step: 2,
                    title: "Document Review",
                    description: "Analyze corporate/property documents and records"
                },
                {
                    step: 3,
                    title: "Verification",
                    description: "Conduct searches and verify claims"
                },
                {
                    step: 4,
                    title: "Report Delivery",
                    description: "Provide comprehensive due diligence report with recommendations"
                }
            ],
            faqs: [
                {
                    question: "What is included in corporate due diligence?",
                    answer: "Review of incorporation documents, shareholding, board resolutions, material contracts, litigation, compliance, and intellectual property."
                },
                {
                    question: "How long does due diligence take?",
                    answer: "Typically 1-3 weeks depending on transaction complexity and document availability. Expedited services available."
                },
                {
                    question: "Do you conduct litigation searches?",
                    answer: "Yes, we search court records across all forums to identify pending or past litigation involving the target entity."
                }
            ],
            pricing: {
                priceRange: "₹25,000 - ₹2,00,000+",
                note: "Pricing based on transaction value and due diligence scope. Detailed proposal provided after initial discussion."
            }
        },
        relatedPracticeAreas: ["corporate-law-consultation", "real-estate-consultation", "residential-property-title-search"],
        metadata: {
            metaTitle: "Legal Due Diligence Services | Corporate & Property DD Reports",
            metaDescription: "Comprehensive legal due diligence for M&A, investments, and property transactions. Identify risks before you invest.",
            keywords: ["legal due diligence", "corporate due diligence", "property due diligence", "M&A legal services"]
        }
    },
    {
        id: "legal-opinion",
        categoryId: "legal-research",
        title: "Legal Opinion",
        slug: "legal-opinion",
        description: "Expert written legal opinions on complex legal questions and disputes.",
        shortDescription: "Professional legal opinions from senior advocates.",
        content: {
            overview: "A legal opinion from experienced counsel provides clarity and confidence. We provide written legal opinions on complex legal questions, dispute resolution strategies, contractual interpretations, and compliance matters. Our opinions are relied upon by businesses, individuals, and other law firms.",
            keyFeatures: [
                "Written legal opinions from senior advocates",
                "Dispute resolution strategy opinions",
                "Contract interpretation opinions",
                "Compliance and regulatory opinions",
                "Litigation risk assessment",
                "Reasoned analysis with case law support"
            ],
            process: [
                {
                    step: 1,
                    title: "Brief Submission",
                    description: "Submit facts, documents, and legal questions"
                },
                {
                    step: 2,
                    title: "Research & Analysis",
                    description: "Conduct legal research and analyze issues"
                },
                {
                    step: 3,
                    title: "Opinion Drafting",
                    description: "Prepare detailed written legal opinion"
                },
                {
                    step: 4,
                    title: "Consultation",
                    description: "Discuss opinion and answer follow-up questions"
                }
            ],
            faqs: [
                {
                    question: "Who provides the legal opinion?",
                    answer: "Opinions are provided by our senior advocates with 15+ years of experience in the relevant practice area."
                },
                {
                    question: "Can I rely on the opinion for business decisions?",
                    answer: "Yes, our opinions are professionally reasoned and can be relied upon for business and legal decision-making."
                },
                {
                    question: "How detailed are the opinions?",
                    answer: "Opinions include fact analysis, applicable law, case law citations, reasoning, and clear conclusions with recommendations."
                }
            ],
            pricing: {
                priceRange: "₹15,000 - ₹1,00,000+",
                note: "Pricing based on complexity and seniority of counsel. Detailed quote provided after reviewing brief."
            }
        },
        relatedPracticeAreas: ["civil-litigation-consultation", "corporate-law-consultation", "case-law-research"],
        metadata: {
            metaTitle: "Legal Opinion Services | Expert Written Opinions from Senior Advocates",
            metaDescription: "Professional legal opinions on complex legal matters. Expert analysis and guidance from experienced advocates in Jaipur.",
            keywords: ["legal opinion", "legal advice", "senior advocate opinion", "legal consultation jaipur"]
        }
    }
];
