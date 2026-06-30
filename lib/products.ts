import fs from "fs";
import path from "path";
import projectsData from "@/data/projects.json";
import {
    productRelationships,
    type ProductRelationshipMapItem,
} from "@/data/product-relationships";

export interface ProductContent {
    slug: string;
    title: string;
    overview: string;
    problem: string;
    solution: string;
    howItWorks: string[];
    features: string[];
    useCases: string[];
    whyBetter: string[];
    summary: string;
    status: string;
    image: string;
    gallery?: {
        src: string;
        alt: string;
    }[];
    idealFor?: string[];
    valueHighlights?: string[];
    implementationNotes?: string[];
    ctaLabel?: string;
    seoDescription?: string;
    theme: {
        gradient: string;
        accent: string;
        iconLabel: string;
    };
}

export interface RelatedCaseStudy {
    slug: string;
    title: string;
    year: string;
    type: string;
    thumbnail: string;
    summary: string;
    industry?: string;
}

export interface ProductPageData {
    product: ProductContent;
    relatedProducts: ProductContent[];
    relatedCaseStudies: RelatedCaseStudy[];
    positioningSummary: string;
    cta: {
        label: string;
        href: string;
        secondaryLabel: string;
        secondaryHref: string;
    };
}

interface ProjectRecord {
    slug: string;
    title: string;
    year: string;
    type: string;
    thumbnail: string;
    overview?: string;
    description?: string;
    industry?: string;
}

const PRODUCT_ORDER = ["nexgine", "trajectories", "leadflow", "soryouth", "garagemate", "prism", "bishipro"];

const THEME_MAP: Record<string, ProductContent["theme"]> = {
    soryouth: {
        gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        accent: "#f59e0b",
        iconLabel: "Solar CRM",
    },
    leadflow: {
        gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
        accent: "#3b82f6",
        iconLabel: "Lead Engine",
    },
    nexgine: {
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
        accent: "#10b981",
        iconLabel: "AI Knowledge",
    },
    garagemate: {
        gradient: "from-rose-500/20 via-red-500/10 to-transparent",
        accent: "#f43f5e",
        iconLabel: "Workshop ERP",
    },
    trajectories: {
        gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
        accent: "#8b5cf6",
        iconLabel: "Analytics",
    },
    prism: {
        gradient: "from-indigo-500/20 via-blue-600/10 to-transparent",
        accent: "#6366f1",
        iconLabel: "Studio ERP",
    },
    bishipro: {
        gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
        accent: "#eab308",
        iconLabel: "Jewellery Ops",
    },
};

const allProjects = projectsData as ProjectRecord[];
const projectsBySlug = new Map(allProjects.map((project) => [project.slug, project]));

function cleanText(value: string) {
    return value
        .replace(/â€”/g, " - ")
        .replace(/â€“/g, " - ")
        .replace(/â€™/g, "'")
        .replace(/â€˜/g, "'")
        .replace(/â€œ/g, '"')
        .replace(/â€/g, '"')
        .replace(/â€¢/g, "•")
        .replace(/â†’/g, "->")
        .replace(/\s+/g, " ")
        .trim();
}

function truncateText(value: string, maxLength: number) {
    if (value.length <= maxLength) return value;
    const shortened = value.slice(0, maxLength);
    const lastSpace = shortened.lastIndexOf(" ");
    return `${shortened.slice(0, Math.max(lastSpace, 0)).trim()}...`;
}

function normalizeProductRecord(slug: string, raw: Omit<ProductContent, "theme">): ProductContent {
    const relationship = productRelationships[slug];

    return {
        ...raw,
        title: cleanText(raw.title),
        overview: cleanText(raw.overview),
        problem: cleanText(raw.problem),
        solution: cleanText(raw.solution),
        howItWorks: raw.howItWorks.map(cleanText),
        features: raw.features.map(cleanText),
        useCases: raw.useCases.map(cleanText),
        whyBetter: raw.whyBetter.map(cleanText),
        summary: cleanText(raw.summary),
        status: cleanText(raw.status),
        idealFor: relationship?.idealFor,
        valueHighlights: relationship?.valueHighlights,
        implementationNotes: relationship?.implementationNotes,
        ctaLabel: relationship?.ctaLabel,
        seoDescription: relationship?.seoDescription,
        theme: THEME_MAP[slug] || THEME_MAP.soryouth,
    };
}

function loadProduct(slug: string): ProductContent {
    const dataDir = path.join(process.cwd(), "data", "products");
    const filePath = path.join(dataDir, `${slug}.json`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent) as Omit<ProductContent, "theme">;

    return normalizeProductRecord(slug, data);
}

export async function getProductsContent(): Promise<ProductContent[]> {
    return PRODUCT_ORDER.map((slug) => loadProduct(slug));
}

export async function getProductBySlug(slug: string): Promise<ProductContent | null> {
    if (!PRODUCT_ORDER.includes(slug)) return null;
    return loadProduct(slug);
}

export function getProductStaticParams() {
    return PRODUCT_ORDER.map((slug) => ({ slug }));
}

export async function getRelatedProducts(slug: string): Promise<ProductContent[]> {
    const relationship = productRelationships[slug];
    if (!relationship) return [];

    return relationship.relatedProductSlugs
        .map((relatedSlug) => (PRODUCT_ORDER.includes(relatedSlug) ? loadProduct(relatedSlug) : null))
        .filter((item): item is ProductContent => Boolean(item));
}

export function getRelatedCaseStudiesForProduct(slug: string): RelatedCaseStudy[] {
    const relationship = productRelationships[slug];
    if (!relationship) return [];

    return relationship.relatedCaseStudySlugs.reduce<RelatedCaseStudy[]>((items, caseStudySlug) => {
            const project = projectsBySlug.get(caseStudySlug);
            if (!project) return items;

            items.push({
                slug: project.slug,
                title: cleanText(project.title),
                year: project.year,
                type: cleanText(project.type),
                thumbnail: project.thumbnail,
                summary: truncateText(
                    cleanText(project.overview || project.description || ""),
                    165,
                ),
                industry: project.industry ? cleanText(project.industry) : undefined,
            });

            return items;
        }, []);
}

export async function getProductPageData(slug: string): Promise<ProductPageData | null> {
    const product = await getProductBySlug(slug);
    const relationship = productRelationships[slug];
    if (!product || !relationship) return null;

    return {
        product,
        relatedProducts: await getRelatedProducts(slug),
        relatedCaseStudies: getRelatedCaseStudiesForProduct(slug),
        positioningSummary: relationship.positioningSummary,
        cta: {
            label: relationship.ctaLabel,
            href: "/contact",
            secondaryLabel: "Back to Products",
            secondaryHref: "/products",
        },
    };
}

export function getProductRelationshipMap(slug: string): ProductRelationshipMapItem | undefined {
    return productRelationships[slug];
}
