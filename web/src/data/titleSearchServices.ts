import { SubService } from "@/types/services";

// TITLE SEARCH REPORT SUB-SERVICES
export const titleSearchServices: SubService[] = [
    {
        id: "residential-property-title-search",
        categoryId: "title-search-report",
        title: "Residential Property Title Search",
        slug: "residential-property",
        description: "Comprehensive title verification for flats, apartments, and residential houses.",
        shortDescription: "Complete title search for residential property purchases.",
        content: {
            overview: "Buying a home is a major investment. Our residential property title search verifies ownership, identifies encumbrances, checks for pending litigations, and ensures clear marketable title. We examine 30+ years of ownership chain and provide a detailed report before you invest.",
            keyFeatures: [
                "30-year ownership chain verification",
                "Encumbrance certificate (EC) analysis",
                "Pending litigation search",
                "Building approval and occupancy verification",
                "Society/builder title verification",
                "Detailed title report with risk assessment"
            ],
            process: [
                {
                    step: 1,
                    title: "Document Collection",
                    description: "Collect sale deed, EC, and property documents"
                },
                {
                    step: 2,
                    title: "Record Verification",
                    description: "Verify sub-registrar and municipal records"
                },
                {
                    step: 3,
                    title: "Litigation Search",
                    description: "Search court records for pending disputes"
                },
                {
                    step: 4,
                    title: "Report Delivery",
                    description: "Provide comprehensive title search report"
                }
            ],
            faqs: [
                {
                    question: "What is an encumbrance certificate?",
                    answer: "EC is a certificate showing all registered transactions (sale, mortgage, lease) on a property for a specified period, issued by sub-registrar."
                },
                {
                    question: "How far back do you verify ownership?",
                    answer: "We verify 30 years of ownership chain as per standard practice, or longer if property has complex history."
                },
                {
                    question: "What if you find title defects?",
                    answer: "We identify all defects and advise on remedial measures. You can negotiate with seller or decide not to proceed."
                }
            ],
            pricing: {
                startingPrice: "₹5,000",
                note: "Pricing varies by property location and complexity. Urgent reports available with premium charges."
            }
        },
        relatedPracticeAreas: ["real-estate-consultation", "property-litigation", "due-diligence-reports"],
        metadata: {
            metaTitle: "Residential Property Title Search | Flat & House Title Verification",
            metaDescription: "Comprehensive title search for residential properties. Verify ownership, check encumbrances, and identify legal issues before buying.",
            keywords: ["property title search", "residential title verification", "encumbrance certificate", "property lawyer jaipur"]
        }
    },
    {
        id: "commercial-property-title-search",
        categoryId: "title-search-report",
        title: "Commercial Property Title Search",
        slug: "commercial-property",
        description: "Detailed title verification for commercial properties, offices, and retail spaces.",
        shortDescription: "Thorough title search for commercial real estate investments.",
        content: {
            overview: "Commercial property investments require enhanced due diligence. Our commercial title search examines ownership, zoning compliance, building permissions, tenant agreements, and financial encumbrances. We ensure the property is legally sound for your business use.",
            keyFeatures: [
                "Complete ownership and title verification",
                "Zoning and land use compliance check",
                "Building plan approval verification",
                "Tenant agreement and lease review",
                "Financial encumbrance analysis",
                "Commercial viability assessment"
            ],
            process: [
                {
                    step: 1,
                    title: "Property Assessment",
                    description: "Review property documents and intended use"
                },
                {
                    step: 2,
                    title: "Title Verification",
                    description: "Verify ownership chain and registrations"
                },
                {
                    step: 3,
                    title: "Compliance Check",
                    description: "Verify zoning, building approvals, and permits"
                },
                {
                    step: 4,
                    title: "Comprehensive Report",
                    description: "Deliver detailed title and compliance report"
                }
            ],
            faqs: [
                {
                    question: "Why is zoning verification important?",
                    answer: "Zoning determines permitted use (commercial, residential, industrial). Using property contrary to zoning can result in penalties and closure."
                },
                {
                    question: "Do you verify existing tenant agreements?",
                    answer: "Yes, we review tenant leases to identify any restrictions, rights, or liabilities that may affect your purchase."
                },
                {
                    question: "What about bank mortgages on the property?",
                    answer: "We identify all mortgages and financial encumbrances through EC and bank searches, ensuring clear title transfer."
                }
            ],
            pricing: {
                priceRange: "₹10,000 - ₹50,000+",
                note: "Pricing based on property value and complexity. Includes zoning and compliance verification."
            }
        },
        relatedPracticeAreas: ["real-estate-consultation", "corporate-law-consultation", "due-diligence-reports"],
        metadata: {
            metaTitle: "Commercial Property Title Search | Office & Retail Title Verification",
            metaDescription: "Comprehensive title search for commercial properties. Verify ownership, zoning, and compliance for safe commercial real estate investment.",
            keywords: ["commercial property title search", "commercial real estate lawyer", "property due diligence", "title verification jaipur"]
        }
    },
    {
        id: "agricultural-land-verification",
        categoryId: "title-search-report",
        title: "Agricultural Land Verification",
        slug: "agricultural-land",
        description: "Specialized title search for agricultural land and farmland purchases.",
        shortDescription: "Expert verification for agricultural and farmland titles.",
        content: {
            overview: "Agricultural land transactions have unique legal requirements. Our agricultural land verification examines revenue records (Jamabandi, Khasra), ownership mutations, land ceiling compliance, and conversion permissions. We ensure the land is legally transferable and free from disputes.",
            keyFeatures: [
                "Revenue record (Jamabandi/Khasra) verification",
                "Mutation and ownership verification",
                "Land ceiling compliance check",
                "Agricultural land conversion status",
                "Irrigation and water rights verification",
                "Boundary and survey verification"
            ],
            process: [
                {
                    step: 1,
                    title: "Revenue Record Review",
                    description: "Obtain and verify Jamabandi, Khasra, and mutation records"
                },
                {
                    step: 2,
                    title: "Ownership Verification",
                    description: "Verify seller's ownership and transfer rights"
                },
                {
                    step: 3,
                    title: "Compliance Check",
                    description: "Check land ceiling, conversion, and transfer restrictions"
                },
                {
                    step: 4,
                    title: "Title Report",
                    description: "Provide detailed agricultural land title report"
                }
            ],
            faqs: [
                {
                    question: "What is Jamabandi and Khasra?",
                    answer: "Jamabandi is the register of land ownership maintained by revenue department. Khasra shows land survey details and boundaries."
                },
                {
                    question: "Can non-agriculturists buy agricultural land?",
                    answer: "Depends on state laws. Some states restrict agricultural land purchase to agriculturists. We verify eligibility and compliance."
                },
                {
                    question: "What is land ceiling?",
                    answer: "Land ceiling laws limit the maximum agricultural land one can own. We verify the seller hasn't exceeded ceiling limits."
                }
            ],
            pricing: {
                startingPrice: "₹7,500",
                note: "Pricing varies by land size and location. Includes revenue record verification and site visit if needed."
            }
        },
        relatedPracticeAreas: ["real-estate-consultation", "property-litigation", "legal-opinion"],
        metadata: {
            metaTitle: "Agricultural Land Title Search | Farmland Verification Services",
            metaDescription: "Expert agricultural land title verification. Check revenue records, ownership, and compliance before buying farmland.",
            keywords: ["agricultural land verification", "farmland title search", "jamabandi verification", "agricultural property lawyer"]
        }
    },
    {
        id: "encumbrance-certificate",
        categoryId: "title-search-report",
        title: "Encumbrance Certificate Verification",
        slug: "encumbrance-certificate",
        description: "Detailed analysis and verification of encumbrance certificates for property transactions.",
        shortDescription: "Expert EC verification and analysis services.",
        content: {
            overview: "The Encumbrance Certificate (EC) is crucial for property transactions. Our EC verification service obtains, analyzes, and interprets ECs to identify all registered transactions, mortgages, and encumbrances. We ensure you understand every entry before proceeding with purchase.",
            keyFeatures: [
                "EC procurement from sub-registrar office",
                "Detailed EC analysis and interpretation",
                "Identification of mortgages and liens",
                "Sale deed chain verification",
                "Discrepancy identification",
                "Clear EC report with recommendations"
            ],
            process: [
                {
                    step: 1,
                    title: "EC Application",
                    description: "Apply for EC from sub-registrar office"
                },
                {
                    step: 2,
                    title: "EC Analysis",
                    description: "Analyze all entries and transactions"
                },
                {
                    step: 3,
                    title: "Verification",
                    description: "Cross-verify with sale deeds and documents"
                },
                {
                    step: 4,
                    title: "Report",
                    description: "Provide interpreted EC report with findings"
                }
            ],
            faqs: [
                {
                    question: "What period should EC cover?",
                    answer: "Minimum 13 years for bank loans, but we recommend 30 years for comprehensive verification."
                },
                {
                    question: "What if EC shows a mortgage?",
                    answer: "We verify if mortgage is cleared. If not, seller must obtain No Objection Certificate (NOC) from bank before sale."
                },
                {
                    question: "Can EC be obtained online?",
                    answer: "In some states yes, but we obtain and verify from sub-registrar office for authenticity and completeness."
                }
            ],
            pricing: {
                startingPrice: "₹3,000",
                note: "Includes EC procurement, analysis, and report. Government fees additional."
            }
        },
        relatedPracticeAreas: ["residential-property-title-search", "commercial-property-title-search", "real-estate-consultation"],
        metadata: {
            metaTitle: "Encumbrance Certificate Verification | EC Analysis Services",
            metaDescription: "Expert encumbrance certificate verification and analysis. Identify mortgages, liens, and encumbrances before property purchase.",
            keywords: ["encumbrance certificate", "EC verification", "property EC check", "encumbrance lawyer jaipur"]
        }
    }
];
