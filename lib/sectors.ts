import projectsData from "@/data/projects.json";
import {
    projectSectorMeta,
    sectorDefinitions,
    type ProjectSectorMeta,
    type ProjectTag,
    type SectorDefinition,
} from "@/data/sector-map";
import {
    getProductsContent,
    type ProductContent,
} from "@/lib/products";

export interface PortfolioProject {
    id: string;
    title: string;
    tagline?: string;
    year: string;
    type: string;
    slug: string;
    thumbnail: string;
    description?: string;
    overview?: string;
    industry?: string;
    brandOwner?: string;
    websiteLink?: string;
    techStack: string[];
    item?: string[];
    impact?: string[];
    challenges?: string[];
    goals?: string[];
    solution_categories?: {
        title: string;
        items: string[];
    }[];
    features?: string[];
    results?: string[];
}

export interface TaggedProjectSummary {
    slug: string;
    title: string;
    year: string;
    type: string;
    thumbnail: string;
    summary: string;
    tags: string[];
    subsector?: string;
    industry?: string;
    websiteLink?: string;
}

export interface SectorPageData {
    sector: SectorDefinition;
    featuredProject: PortfolioProject;
    featuredSummary: TaggedProjectSummary;
    primaryProduct: ProductContent | null;
    additionalProducts: ProductContent[];
    relatedProjects: TaggedProjectSummary[];
    relatedProducts: ProductContent[];
    stats: {
        caseStudyCount: number;
        relatedProductCount: number;
        capabilityCount: number;
    };
}

const allProjects = projectsData as PortfolioProject[];

const PUBLIC_PROJECT_EXCLUSIONS = new Set(["alkem"]);

const projectsBySlug = new Map(
    allProjects.map((project) => [project.slug, project]),
);

const tagLabels: Record<ProjectTag, string> = {
    travel: "Travel",
    hospitality: "Hospitality",
    booking: "Booking",
    portal: "Portal",
    consumer: "Consumer",
    website: "Website",
    automotive: "Automotive",
    crm: "CRM",
    erp: "ERP",
    automation: "Automation",
    "admin-panel": "Admin Panel",
    b2b: "B2B",
    healthcare: "Healthcare",
    wellness: "Wellness",
    education: "Education",
    community: "Community",
    "mobile-app": "Mobile App",
    platform: "Platform",
    marketplace: "Marketplace",
    "e-commerce": "E-Commerce",
    branding: "Branding",
    industrial: "Industrial",
    infrastructure: "Infrastructure",
    logistics: "Logistics",
    manufacturing: "Manufacturing",
    sustainability: "Sustainability",
    agri: "Agri",
    saas: "SaaS",
    "knowledge-system": "Knowledge System",
    marketing: "Marketing",
    cms: "CMS",
    finance: "Finance",
    events: "Events",
    "real-estate": "Real Estate",
};

function cleanText(value: string) {
    return value
        .replace(/â€”/g, " - ")
        .replace(/â€“/g, " - ")
        .replace(/â€™/g, "'")
        .replace(/â€˜/g, "'")
        .replace(/â€œ/g, '"')
        .replace(/â€/g, '"')
        .replace(/â†’/g, " -> ")
        .replace(/\s+/g, " ")
        .trim();
}

function truncateText(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    const shortened = value.slice(0, maxLength);
    const lastSpace = shortened.lastIndexOf(" ");
    return `${shortened.slice(0, Math.max(lastSpace, 0)).trim()}...`;
}

function deriveSummary(project: PortfolioProject, meta?: ProjectSectorMeta) {
    if (meta?.summaryOverride) return meta.summaryOverride;
    const source = project.overview || project.description || "";
    return truncateText(cleanText(source), 170);
}

function getPublicProjects() {
    return allProjects.filter((project) => !PUBLIC_PROJECT_EXCLUSIONS.has(project.id));
}

export function getProjectBySlug(slug: string) {
    return projectsBySlug.get(slug);
}

export function getProjectMeta(slug: string) {
    return projectSectorMeta[slug];
}

export function getProjectTags(slug: string) {
    const meta = getProjectMeta(slug);
    if (!meta) return [];
    return meta.tags.map((tag) => tagLabels[tag] || tag);
}

export function getSectors() {
    return sectorDefinitions.map((sector) => ({
        ...sector,
        caseStudyCount: sector.projectSlugs.length,
        relatedProductCount: sector.productSlugs.length,
    }));
}

export function getProjectsForSector(slug: string): TaggedProjectSummary[] {
    const sector = sectorDefinitions.find((item) => item.slug === slug);
    if (!sector) return [];

    return sector.projectSlugs.reduce<TaggedProjectSummary[]>((items, projectSlug) => {
            const project = getProjectBySlug(projectSlug);
            const meta = getProjectMeta(projectSlug);
            if (!project || !meta) return items;

            items.push({
                slug: project.slug,
                title: cleanText(project.title),
                year: project.year,
                type: cleanText(project.type),
                thumbnail: project.thumbnail,
                summary: deriveSummary(project, meta),
                tags: getProjectTags(projectSlug),
                subsector: meta.subsector,
                industry: project.industry ? cleanText(project.industry) : undefined,
                websiteLink: project.websiteLink,
            });

            return items;
        }, []);
}

export async function getRelatedProductsForSector(slug: string) {
    const sector = sectorDefinitions.find((item) => item.slug === slug);
    if (!sector || sector.productSlugs.length === 0) return [];

    const products = await getProductsContent();
    const productsBySlug = new Map(products.map((product) => [product.slug, product]));

    return sector.productSlugs
        .map((productSlug) => productsBySlug.get(productSlug))
        .filter((item): item is ProductContent => Boolean(item))
        .map((product) => ({
            ...product,
            title: cleanText(product.title),
            summary: cleanText(product.summary),
            overview: cleanText(product.overview),
        }));
}

export async function getSectorBySlug(slug: string): Promise<SectorPageData | null> {
    const sector = sectorDefinitions.find((item) => item.slug === slug);
    if (!sector) return null;

    const featuredProject = getProjectBySlug(sector.heroProjectSlug);
    if (!featuredProject) return null;

    const projectSummaries = getProjectsForSector(slug);
    const featuredSummary = projectSummaries.find(
        (project) => project.slug === sector.heroProjectSlug,
    );
    if (!featuredSummary) return null;

    const relatedProducts = await getRelatedProductsForSector(slug);
    const [primaryProduct, ...additionalProducts] = relatedProducts;

    return {
        sector: {
            ...sector,
            title: cleanText(sector.title),
            summary: cleanText(sector.summary),
            subtags: sector.subtags.map(cleanText),
            operatingPriorities: sector.operatingPriorities.map(cleanText),
            decisionDrivers: sector.decisionDrivers.map(cleanText),
        },
        featuredProject,
        featuredSummary,
        primaryProduct: primaryProduct || null,
        additionalProducts,
        relatedProjects: projectSummaries.filter(
            (project) => project.slug !== sector.heroProjectSlug,
        ),
        relatedProducts,
        stats: {
            caseStudyCount: sector.projectSlugs.length,
            relatedProductCount: relatedProducts.length,
            capabilityCount: new Set(
                sector.projectSlugs.flatMap((projectSlug) => getProjectTags(projectSlug)),
            ).size,
        },
    };
}

export async function getPortfolioHubData() {
    const sectors = getSectors();
    const products = await getProductsContent();

    return {
        sectors,
        products: products.map((product) => ({
            ...product,
            title: cleanText(product.title),
            summary: cleanText(product.summary),
            overview: cleanText(product.overview),
        })),
        projects: getPublicProjects(),
    };
}

export function getPublicProjectSlugs() {
    return getPublicProjects().map((project) => project.slug);
}
