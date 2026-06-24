export type ProjectTag =
    | "travel"
    | "hospitality"
    | "booking"
    | "portal"
    | "consumer"
    | "website"
    | "automotive"
    | "crm"
    | "erp"
    | "automation"
    | "admin-panel"
    | "b2b"
    | "healthcare"
    | "wellness"
    | "education"
    | "community"
    | "mobile-app"
    | "platform"
    | "marketplace"
    | "e-commerce"
    | "branding"
    | "industrial"
    | "infrastructure"
    | "logistics"
    | "manufacturing"
    | "sustainability"
    | "agri"
    | "saas"
    | "knowledge-system"
    | "marketing"
    | "cms"
    | "finance"
    | "events"
    | "real-estate";

export interface SectorDefinition {
    slug: string;
    title: string;
    summary: string;
    heroProjectSlug: string;
    projectSlugs: string[];
    productSlugs: string[];
    subtags: string[];
    operatingPriorities: string[];
    decisionDrivers: string[];
}

export interface ProjectSectorMeta {
    sectorSlug: string;
    subsector?: string;
    featuredRank: number;
    summaryOverride?: string;
    tags: ProjectTag[];
}

export const sectorDefinitions: SectorDefinition[] = [
    {
        slug: "travel-hospitality",
        title: "Travel & Hospitality",
        summary:
            "Booking funnels, itinerary systems, destination storytelling, and premium guest experiences built for operators who sell journeys, not just inventory.",
        heroProjectSlug: "safari-sutra",
        projectSlugs: [
            "safari-sutra",
            "pass-maldives",
            "lets-ladakh",
            "chalogoa",
            "cheforeca",
        ],
        productSlugs: ["trajectories"],
        subtags: ["Luxury travel", "Regional tourism", "Bookings", "Hospitality"],
        operatingPriorities: [
            "Shorten inquiry-to-quotation time without losing premium experience",
            "Keep itinerary planning, approvals, and payments in one visible workflow",
            "Present destination offers with stronger trust and clearer conversion paths",
        ],
        decisionDrivers: [
            "Client experience quality affects booking confidence directly",
            "Manual coordination across WhatsApp, email, and PDFs slows response time",
            "Operators need systems built around travel nuance, not generic CRMs",
        ],
    },
    {
        slug: "automotive-mobility",
        title: "Automotive & Mobility",
        summary:
            "Operational systems for workshops, vehicle service businesses, and auto-focused teams that need cleaner workflows, inventory control, and customer visibility.",
        heroProjectSlug: "automotive-crm-system",
        projectSlugs: ["automotive-crm-system"],
        productSlugs: ["garagemate"],
        subtags: ["Workshop operations", "Inventory", "CRM", "Service workflows"],
        operatingPriorities: [
            "Track jobs, parts, and customer updates without paperwork gaps",
            "Standardize workshop workflows across check-in, service, and billing",
            "Reduce leakage caused by disconnected operational systems",
        ],
        decisionDrivers: [
            "Every delay in job visibility hurts delivery speed and trust",
            "Inventory accuracy and billing discipline drive margin protection",
            "Operational tools must fit service-center behavior, not abstract ERP logic",
        ],
    },
    {
        slug: "healthcare-wellness",
        title: "Healthcare & Wellness",
        summary:
            "Trust-first digital experiences for clinics, specialists, and wellness brands where clarity, credibility, and sensitive journeys matter.",
        heroProjectSlug: "abo-eye-institute",
        projectSlugs: ["abo-eye-institute", "the-silver-lining"],
        productSlugs: [],
        subtags: ["Patient journeys", "Specialty care", "Trust-building", "Practice visibility"],
        operatingPriorities: [
            "Make high-trust care decisions easier for patients and families",
            "Communicate expertise, treatment paths, and contact options clearly",
            "Reduce friction in first contact for sensitive or high-consideration services",
        ],
        decisionDrivers: [
            "Trust and clarity matter more than visual novelty alone",
            "Service discovery often happens before any direct conversation",
            "Healthcare and wellness brands need calmer, more structured digital journeys",
        ],
    },
    {
        slug: "education-community",
        title: "Education & Community",
        summary:
            "Learning platforms, institutional websites, and community-driven products that connect education with real engagement and measurable outcomes.",
        heroProjectSlug: "iilos",
        projectSlugs: [
            "iilos",
            "mkh-sancheti-school",
            "campus-networking-app",
            "bharatvishwasaarti",
        ],
        productSlugs: [],
        subtags: ["Institutions", "Learning journeys", "Community apps", "Training"],
        operatingPriorities: [
            "Connect learning journeys with engagement, structure, and measurable outcomes",
            "Make institutional information easier to navigate for multiple audiences",
            "Support community interaction beyond static informational pages",
        ],
        decisionDrivers: [
            "Education products often serve students, parents, faculty, and partners at once",
            "Programs gain credibility when digital structure mirrors real-world value",
            "Community and training systems need clearer pathways than brochure-style sites",
        ],
    },
    {
        slug: "commerce-consumer",
        title: "Commerce & Consumer Brands",
        summary:
            "Conversion-focused storefronts and brand experiences for modern consumer businesses selling products, culture, and trust at the same time.",
        heroProjectSlug: "promeat",
        projectSlugs: [
            "promeat",
            "gaavbazaar",
            "strongbong",
            "sellitfast",
            "cherries-peaches",
        ],
        productSlugs: ["leadflow"],
        subtags: ["E-commerce", "Brand storytelling", "Consumer experience", "Marketplaces"],
        operatingPriorities: [
            "Balance brand storytelling with conversion-focused product discovery",
            "Give operators cleaner control over merchandising and day-to-day updates",
            "Improve buyer confidence through better visual flow and information clarity",
        ],
        decisionDrivers: [
            "Consumer brands need both emotional pull and operational usability",
            "Catalog clarity directly impacts browsing depth and purchase intent",
            "Growth requires systems that non-technical teams can manage independently",
        ],
    },
    {
        slug: "industrial-infrastructure",
        title: "Industrial & Infrastructure",
        summary:
            "Structured B2B platforms for manufacturers, infrastructure providers, and operational businesses that need technical clarity and strong credibility.",
        heroProjectSlug: "spectrokavs",
        projectSlugs: ["spectrokavs", "suman-steels", "shubhaam-logistics"],
        productSlugs: ["nexgine", "leadflow"],
        subtags: ["B2B websites", "Operations", "Supply chains", "Technical sales"],
        operatingPriorities: [
            "Explain technical offerings without making buyers work too hard",
            "Surface operational credibility, process clarity, and trust signals early",
            "Support lead generation for long-cycle B2B purchase decisions",
        ],
        decisionDrivers: [
            "Industrial buyers care about confidence, precision, and process visibility",
            "Complex offerings lose momentum when structure and terminology feel unclear",
            "Sales surfaces must handle both credibility-building and operational detail",
        ],
    },
    {
        slug: "sustainability-agri",
        title: "Sustainability & Agri",
        summary:
            "Mission-led digital systems for circular economy, organic agriculture, and climate-positive operations that need both narrative and execution support.",
        heroProjectSlug: "sajeev-krushi",
        projectSlugs: ["sajeev-krushi", "ecobird-recycling"],
        productSlugs: ["soryouth"],
        subtags: ["Circular systems", "Organic farming", "Operational tracking", "Impact-led brands"],
        operatingPriorities: [
            "Show measurable operational impact behind mission-led narratives",
            "Organize field, production, and sustainability workflows more clearly",
            "Translate environmental value into systems that scale with the business",
        ],
        decisionDrivers: [
            "Impact brands still need strong operational control to grow reliably",
            "Mission alone is not enough without process clarity and decision visibility",
            "Teams benefit when environmental storytelling connects to execution data",
        ],
    },
    {
        slug: "saas-internal-systems",
        title: "SaaS & Internal Systems",
        summary:
            "Software products and internal platforms designed to automate workflows, centralize knowledge, and give teams operational control at scale.",
        heroProjectSlug: "yanisa",
        projectSlugs: ["yanisa", "pptpro", "automotive-crm-system"],
        productSlugs: ["leadflow", "nexgine", "soryouth"],
        subtags: ["Automation", "Dashboards", "Knowledge systems", "Business ops"],
        operatingPriorities: [
            "Automate repetitive operational work without fragmenting ownership",
            "Centralize process visibility across teams, stages, and systems",
            "Build products that feel easier to operate than the complexity they replace",
        ],
        decisionDrivers: [
            "Internal systems succeed when they reduce tool-switching and ambiguity",
            "Workflow products need both structural rigor and user-facing simplicity",
            "Decision-makers want proof that automation improves control, not just speed",
        ],
    },
    {
        slug: "app-development",
        title: "App Development",
        summary:
            "Mobile apps, admin panels, dashboards, and backend systems built for businesses that need structured operations, customer access, and clearer reporting.",
        heroProjectSlug: "bishipro",
        projectSlugs: ["bishipro", "memanager"],
        productSlugs: [],
        subtags: ["Mobile apps", "Admin panels", "Dashboards", "Business workflows"],
        operatingPriorities: [
            "Turn manual workflows into guided mobile and admin experiences",
            "Keep customer, staff, payment, reminder, and reporting data in one system",
            "Give business teams clearer visibility without adding operational friction",
        ],
        decisionDrivers: [
            "App projects need backend structure, role access, and day-to-day usability together",
            "Operational clarity matters as much as screen design",
            "Teams need platforms that support field users, admins, and customers at once",
        ],
    },
    {
        slug: "creative-marketing-corporate",
        title: "Creative, Marketing & Corporate",
        summary:
            "Narrative-led websites and positioning systems for agencies, service firms, and modern brands that need a sharper digital sales surface.",
        heroProjectSlug: "outline-next",
        projectSlugs: ["outline-next", "smile-creative-agency", "pronology"],
        productSlugs: ["leadflow"],
        subtags: ["Agency sites", "CMS", "Lead capture", "Brand positioning"],
        operatingPriorities: [
            "Turn positioning into a stronger conversion surface for service-led brands",
            "Make services, proof, and process easier to scan and trust",
            "Give teams a better structure for ongoing content and portfolio updates",
        ],
        decisionDrivers: [
            "Creative and service firms often win on clarity as much as capability",
            "Narrative flow and proof points heavily influence inbound quality",
            "A flexible CMS matters when offers and work keep evolving",
        ],
    },
    {
        slug: "finance-advisory",
        title: "Finance & Advisory",
        summary:
            "Credibility-heavy digital experiences for advisory, investment, and strategic firms where authority and decision-maker trust drive conversion.",
        heroProjectSlug: "ignition-capital-advisors",
        projectSlugs: ["ignition-capital-advisors"],
        productSlugs: ["nexgine"],
        subtags: ["Corporate trust", "Advisory positioning", "Executive audiences"],
        operatingPriorities: [
            "Present authority and strategic depth without overcomplicating the experience",
            "Support decision-maker trust through cleaner structure and stronger signals",
            "Make advisory offerings easier to understand for high-value prospects",
        ],
        decisionDrivers: [
            "Executive audiences respond to clarity, confidence, and relevance",
            "Advisory brands need restrained but high-credibility digital presentation",
            "Structured knowledge surfaces can reinforce expertise in research-heavy firms",
        ],
    },
    {
        slug: "events-exhibitions",
        title: "Events & Exhibitions",
        summary:
            "Event-centric platforms that make complex offerings easier to discover, navigate, and convert across exhibitors, visitors, and organizers.",
        heroProjectSlug: "expoindia",
        projectSlugs: ["expoindia"],
        productSlugs: ["leadflow"],
        subtags: ["Event websites", "B2B discovery", "Lead capture"],
        operatingPriorities: [
            "Make large-format event offerings easier to discover and navigate",
            "Improve exhibitor, visitor, and organizer clarity within one structure",
            "Capture interest before it gets lost in event complexity",
        ],
        decisionDrivers: [
            "Events generate attention fast, but weak structure wastes intent",
            "B2B discovery depends on finding the right information at the right time",
            "Lead capture and information architecture need to work together",
        ],
    },
    {
        slug: "real-estate-property",
        title: "Real Estate & Property",
        summary:
            "Property-focused experiences that combine visual storytelling, inquiry capture, and platform thinking for high-intent buyer journeys.",
        heroProjectSlug: "realestatepicture",
        projectSlugs: ["realestatepicture"],
        productSlugs: ["leadflow"],
        subtags: ["Property showcase", "Lead management", "Visual-first journeys"],
        operatingPriorities: [
            "Present property value through visual-first storytelling and clearer inquiry paths",
            "Reduce friction between interest, trust, and contact",
            "Support sales teams with stronger top-of-funnel lead quality",
        ],
        decisionDrivers: [
            "Property decisions are highly visual but still trust-sensitive",
            "Inquiry systems must support speed without feeling transactional",
            "Lead handling quality influences whether marketing spend turns into visits",
        ],
    },
];

export const projectSectorMeta: Record<string, ProjectSectorMeta> = {
    "safari-sutra": {
        sectorSlug: "travel-hospitality",
        subsector: "Wildlife safaris",
        featuredRank: 1,
        summaryOverride:
            "Luxury safari storytelling, clearer booking journeys, and premium UX for travelers choosing curated wilderness experiences.",
        tags: ["travel", "booking", "portal", "consumer", "website"],
    },
    "pass-maldives": {
        sectorSlug: "travel-hospitality",
        subsector: "Luxury travel",
        featuredRank: 2,
        summaryOverride:
            "A destination-led travel platform shaped around premium package discovery, trust, and high-intent inquiry capture.",
        tags: ["travel", "hospitality", "booking", "consumer", "website"],
    },
    "lets-ladakh": {
        sectorSlug: "travel-hospitality",
        subsector: "Adventure tourism",
        featuredRank: 3,
        summaryOverride:
            "Experience-first travel presentation for a region-led brand selling memorable itineraries and smoother conversion paths.",
        tags: ["travel", "booking", "consumer", "website"],
    },
    chalogoa: {
        sectorSlug: "travel-hospitality",
        subsector: "Regional tourism",
        featuredRank: 4,
        summaryOverride:
            "Regional travel discovery reworked into a cleaner booking journey with stronger storytelling and decision-ready layouts.",
        tags: ["travel", "booking", "consumer", "website"],
    },
    cheforeca: {
        sectorSlug: "travel-hospitality",
        subsector: "Hospitality",
        featuredRank: 5,
        summaryOverride:
            "A hospitality-facing brand surface designed to communicate atmosphere, menu value, and reservation intent more clearly.",
        tags: ["hospitality", "consumer", "branding", "website"],
    },
    "automotive-crm-system": {
        sectorSlug: "automotive-mobility",
        subsector: "Automotive operations",
        featuredRank: 1,
        summaryOverride:
            "A custom CRM and business system built to reduce operational leakage across automotive inventory, service, and sales workflows.",
        tags: ["automotive", "crm", "erp", "automation", "admin-panel", "b2b", "platform"],
    },
    "abo-eye-institute": {
        sectorSlug: "healthcare-wellness",
        subsector: "Ophthalmology",
        featuredRank: 1,
        summaryOverride:
            "A specialist healthcare website that improves institutional trust and patient clarity through structured, accessible communication.",
        tags: ["healthcare", "website", "consumer", "branding"],
    },
    "the-silver-lining": {
        sectorSlug: "healthcare-wellness",
        subsector: "Mental health",
        featuredRank: 2,
        summaryOverride:
            "A calmer, trust-led digital presence for counseling services where reassurance and clarity shape first contact.",
        tags: ["healthcare", "wellness", "website", "consumer", "branding"],
    },
    iilos: {
        sectorSlug: "education-community",
        subsector: "Higher education",
        featuredRank: 1,
        summaryOverride:
            "An education platform and institutional narrative built to connect logistics learning with real industry relevance.",
        tags: ["education", "community", "website", "platform", "b2b"],
    },
    "mkh-sancheti-school": {
        sectorSlug: "education-community",
        subsector: "K-12",
        featuredRank: 2,
        summaryOverride:
            "A school-facing digital presence designed to communicate trust, academics, and parent-facing information with more clarity.",
        tags: ["education", "website", "consumer", "branding"],
    },
    "campus-networking-app": {
        sectorSlug: "education-community",
        subsector: "Student community",
        featuredRank: 3,
        summaryOverride:
            "A verified campus platform combining matching, communities, and moderation into a mobile-first student ecosystem.",
        tags: ["education", "community", "mobile-app", "platform", "automation", "consumer"],
    },
    bharatvishwasaarti: {
        sectorSlug: "education-community",
        subsector: "Driver training",
        featuredRank: 4,
        summaryOverride:
            "A training-first digital product shaped around learning accessibility, road-safety communication, and smoother operational control.",
        tags: ["education", "platform", "automation", "website", "consumer"],
    },
    promeat: {
        sectorSlug: "commerce-consumer",
        subsector: "FMCG",
        featuredRank: 1,
        summaryOverride:
            "A premium consumer brand experience built to elevate trust, product storytelling, and independent content operations.",
        tags: ["e-commerce", "consumer", "branding", "website", "admin-panel"],
    },
    gaavbazaar: {
        sectorSlug: "commerce-consumer",
        subsector: "Handcrafted commerce",
        featuredRank: 2,
        summaryOverride:
            "A culturally rooted commerce platform that turns artisan stories and product discovery into a cleaner buying journey.",
        tags: ["marketplace", "e-commerce", "consumer", "branding", "admin-panel"],
    },
    strongbong: {
        sectorSlug: "commerce-consumer",
        subsector: "Retail e-commerce",
        featuredRank: 3,
        summaryOverride:
            "A product-led storefront designed to improve discovery, merchandising clarity, and premium retail positioning.",
        tags: ["e-commerce", "consumer", "website", "admin-panel"],
    },
    sellitfast: {
        sectorSlug: "commerce-consumer",
        subsector: "Marketplace",
        featuredRank: 4,
        summaryOverride:
            "A resale marketplace system designed to make listing, discovery, and trust more intuitive for fast-moving electronics trade.",
        tags: ["marketplace", "e-commerce", "consumer", "platform", "automation"],
    },
    "cherries-peaches": {
        sectorSlug: "commerce-consumer",
        subsector: "Lifestyle brand",
        featuredRank: 5,
        summaryOverride:
            "A personal brand transformed into a consumer-ready digital destination for collaborations, content, and future monetization.",
        tags: ["consumer", "branding", "website", "cms"],
    },
    spectrokavs: {
        sectorSlug: "industrial-infrastructure",
        subsector: "Cleanroom infrastructure",
        featuredRank: 1,
        summaryOverride:
            "A technically structured B2B presence for cleanroom infrastructure that improves clarity, trust, and lead qualification.",
        tags: ["industrial", "infrastructure", "b2b", "website", "cms"],
    },
    "suman-steels": {
        sectorSlug: "industrial-infrastructure",
        subsector: "Industrial materials",
        featuredRank: 2,
        summaryOverride:
            "A modern supplier website built to present products, capabilities, and credibility more clearly to B2B buyers.",
        tags: ["industrial", "manufacturing", "b2b", "website", "cms"],
    },
    "shubhaam-logistics": {
        sectorSlug: "industrial-infrastructure",
        subsector: "Logistics",
        featuredRank: 3,
        summaryOverride:
            "A logistics-facing web platform created to communicate operational capability, reliability, and service structure at a glance.",
        tags: ["logistics", "industrial", "b2b", "website", "cms"],
    },
    "sajeev-krushi": {
        sectorSlug: "sustainability-agri",
        subsector: "Organic farming",
        featuredRank: 1,
        summaryOverride:
            "A sustainability-led system that combines circular-economy storytelling with operational visibility for vermiculture growth.",
        tags: ["sustainability", "agri", "automation", "admin-panel", "website", "b2b"],
    },
    "ecobird-recycling": {
        sectorSlug: "sustainability-agri",
        subsector: "Recycling",
        featuredRank: 2,
        summaryOverride:
            "A cleaner digital platform for a recycling business focused on operational trust, service clarity, and environmental positioning.",
        tags: ["sustainability", "industrial", "website", "b2b", "branding"],
    },
    yanisa: {
        sectorSlug: "saas-internal-systems",
        subsector: "Business automation",
        featuredRank: 1,
        summaryOverride:
            "An end-to-end internal system that automates onboarding, agreements, billing, and admin control for service businesses.",
        tags: ["saas", "automation", "crm", "admin-panel", "platform", "b2b"],
    },
    pptpro: {
        sectorSlug: "saas-internal-systems",
        subsector: "Presentation SaaS",
        featuredRank: 2,
        summaryOverride:
            "A SaaS product experience shaped around faster content workflows, clearer user actions, and scalable product thinking.",
        tags: ["saas", "platform", "consumer", "automation"],
    },
    bishipro: {
        sectorSlug: "app-development",
        subsector: "Jewellery scheme app",
        featuredRank: 1,
        summaryOverride:
            "A mobile app and admin system for jewellers to manage savings schemes, instalments, dues, maturities, payments, and customer visibility.",
        tags: ["mobile-app", "platform", "admin-panel", "automation", "consumer"],
    },
    memanager: {
        sectorSlug: "app-development",
        subsector: "Pharma field force app",
        featuredRank: 2,
        summaryOverride:
            "A mobile app and admin platform for pharma teams to manage field activity, doctor engagement, reminders, Excel reports, and hierarchy analytics.",
        tags: ["mobile-app", "platform", "admin-panel", "automation", "b2b", "healthcare"],
    },
    "outline-next": {
        sectorSlug: "creative-marketing-corporate",
        subsector: "Marketing agency",
        featuredRank: 1,
        summaryOverride:
            "A narrative-led agency website designed to prove strategy, surface case studies, and convert interest into qualified conversations.",
        tags: ["marketing", "branding", "cms", "website", "b2b"],
    },
    "smile-creative-agency": {
        sectorSlug: "creative-marketing-corporate",
        subsector: "Creative services",
        featuredRank: 2,
        summaryOverride:
            "A sharper digital showcase for a creative agency balancing portfolio credibility, service clarity, and inbound conversion.",
        tags: ["marketing", "branding", "cms", "website", "b2b"],
    },
    pronology: {
        sectorSlug: "creative-marketing-corporate",
        subsector: "Corporate services",
        featuredRank: 3,
        summaryOverride:
            "A corporate-facing web presence built to simplify service understanding and strengthen trust with business audiences.",
        tags: ["branding", "website", "b2b", "cms"],
    },
    "ignition-capital-advisors": {
        sectorSlug: "finance-advisory",
        subsector: "Venture capital",
        featuredRank: 1,
        summaryOverride:
            "An advisory website built to communicate authority, strategic depth, and investor-ready credibility without friction.",
        tags: ["finance", "website", "b2b", "branding"],
    },
    expoindia: {
        sectorSlug: "events-exhibitions",
        subsector: "Trade shows",
        featuredRank: 1,
        summaryOverride:
            "A structured event platform that makes large-format exhibitions easier to understand, explore, and act on.",
        tags: ["events", "website", "b2b", "cms", "automation"],
    },
    realestatepicture: {
        sectorSlug: "real-estate-property",
        subsector: "Property showcase",
        featuredRank: 1,
        summaryOverride:
            "A property-first experience designed around high-quality presentation, inquiry capture, and confidence-building visual flow.",
        tags: ["real-estate", "website", "consumer", "marketplace"],
    },
};
