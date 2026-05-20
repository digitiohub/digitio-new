export interface ProductRelationshipMapItem {
    relatedProductSlugs: string[];
    relatedCaseStudySlugs: string[];
    positioningSummary: string;
    idealFor: string[];
    valueHighlights: string[];
    implementationNotes: string[];
    ctaLabel: string;
    seoDescription: string;
}

export const productRelationships: Record<string, ProductRelationshipMapItem> = {
    nexgine: {
        relatedProductSlugs: ["leadflow", "soryouth", "trajectories"],
        relatedCaseStudySlugs: [
            "yanisa",
            "spectrokavs",
            "ignition-capital-advisors",
            "automotive-crm-system",
        ],
        positioningSummary:
            "Turn scattered internal information into a usable decision system for teams that need answers fast, with source-backed knowledge access across documents, chat, and operations.",
        idealFor: [
            "Operations teams centralizing process knowledge",
            "Support and service teams needing faster answers",
            "Internal knowledge-heavy organizations with fragmented documentation",
        ],
        valueHighlights: [
            "Cuts search friction across documents and internal systems",
            "Makes organizational knowledge queryable in natural language",
            "Supports private, role-based access to sensitive information",
        ],
        implementationNotes: [
            "Best suited where documentation already exists but is hard to use",
            "Can support multi-source ingestion across files, docs, and messaging systems",
            "Works well as an internal productivity layer before larger AI transformation",
        ],
        ctaLabel: "Plan Your Knowledge System",
        seoDescription:
            "Explore NexGine, DigitioHub's AI knowledge system for searchable internal intelligence, semantic search, and source-backed team answers.",
    },
    trajectories: {
        relatedProductSlugs: ["leadflow", "garagemate", "nexgine"],
        relatedCaseStudySlugs: [
            "safari-sutra",
            "pass-maldives",
            "lets-ladakh",
            "chalogoa",
        ],
        positioningSummary:
            "Built for travel businesses that want one premium operating layer across leads, itineraries, quotations, payments, and post-booking visibility.",
        idealFor: [
            "Tour operators managing complex inquiry-to-booking journeys",
            "DMCs coordinating B2B and ground operations",
            "Luxury travel brands needing a polished client-facing workflow",
        ],
        valueHighlights: [
            "Unifies fragmented booking operations into one workspace",
            "Supports high-touch travel sales with stronger presentation quality",
            "Improves operational control without relying on generic CRMs",
        ],
        implementationNotes: [
            "Best when teams handle multi-stage sales and itinerary customization",
            "Useful where branded quotations and premium client experience matter",
            "Designed around travel-specific operational nuance, not generic pipelines",
        ],
        ctaLabel: "Design Your Travel Ops Stack",
        seoDescription:
            "Explore Trajectories, DigitioHub's travel management platform for tour operators, luxury agencies, itineraries, quotations, and payments.",
    },
    leadflow: {
        relatedProductSlugs: ["nexgine", "trajectories", "garagemate"],
        relatedCaseStudySlugs: [
            "promeat",
            "realestatepicture",
            "smile-creative-agency",
            "ignition-capital-advisors",
        ],
        positioningSummary:
            "A conversion-focused CRM layer for teams that need faster speed-to-lead, cleaner follow-up systems, and better visibility across sales workflows.",
        idealFor: [
            "Sales teams juggling leads from multiple channels",
            "Service businesses needing structured follow-up automation",
            "Brands where response time directly affects conversion rates",
        ],
        valueHighlights: [
            "Routes and prioritizes new leads without manual overhead",
            "Supports consistent follow-up across WhatsApp, email, and sales stages",
            "Makes sales visibility easier for managers and founders",
        ],
        implementationNotes: [
            "Fits businesses with active marketing inputs and uneven lead handling",
            "Works best when pipeline stages and ownership need standardization",
            "Useful as a lighter growth ops system before enterprise CRM complexity",
        ],
        ctaLabel: "Build Your Lead Engine",
        seoDescription:
            "Explore LeadFlow, DigitioHub's lead management and sales automation platform for multi-channel capture, routing, and follow-ups.",
    },
    soryouth: {
        relatedProductSlugs: ["leadflow", "nexgine", "garagemate"],
        relatedCaseStudySlugs: [
            "sajeev-krushi",
            "ecobird-recycling",
            "shubhaam-logistics",
            "yanisa",
        ],
        positioningSummary:
            "A workflow operating system for solar EPC teams handling sales, surveys, execution, inventory, service, and long-term maintenance in one environment.",
        idealFor: [
            "Solar EPC businesses coordinating field and office teams",
            "Operators managing site surveys, inventory, and service together",
            "Energy businesses needing lifecycle visibility beyond lead tracking",
        ],
        valueHighlights: [
            "Connects front-office sales with field execution and maintenance",
            "Reduces workflow fragmentation across teams and project stages",
            "Supports operational visibility from inquiry to AMC lifecycle",
        ],
        implementationNotes: [
            "Best for businesses with both field execution and recurring service load",
            "Strong fit where inventory and documentation affect delivery speed",
            "Useful when spreadsheets and separate tools create operational lag",
        ],
        ctaLabel: "Map Your Solar Workflow",
        seoDescription:
            "Explore Soryouth Renewable Energy CRM for solar EPC workflows, site surveys, inventory, AMC ticketing, and project lifecycle management.",
    },
    garagemate: {
        relatedProductSlugs: ["leadflow", "trajectories", "soryouth"],
        relatedCaseStudySlugs: [
            "automotive-crm-system",
            "shubhaam-logistics",
            "yanisa",
        ],
        positioningSummary:
            "An operations-first workshop ERP that helps automotive service businesses digitize job cards, inventory, billing, and customer communication.",
        idealFor: [
            "Independent workshops modernizing service workflows",
            "Multi-brand service centers needing cleaner process control",
            "Operations teams tracking parts, jobs, and invoices together",
        ],
        valueHighlights: [
            "Brings service operations, parts movement, and billing into one flow",
            "Reduces paperwork and missed revenue from manual handling",
            "Improves customer communication with more professional touchpoints",
        ],
        implementationNotes: [
            "Best for service businesses where job cards and parts are tightly linked",
            "Works well when invoicing leakage and status tracking are pain points",
            "Can act as the digital backbone for workshop process standardization",
        ],
        ctaLabel: "Upgrade Your Workshop Ops",
        seoDescription:
            "Explore GarageMate, DigitioHub's workshop ERP for job cards, inventory, service history, invoicing, and customer updates.",
    },
};
