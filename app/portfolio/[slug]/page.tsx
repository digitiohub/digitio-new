import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { createPageMetadata } from "@/lib/metadata";
import CaseStudyClient from "./CaseStudyClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    return createPageMetadata("portfolio-detail", `/portfolio/${slug}`);
}

interface Project {
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

const projects = projectsData as Project[];

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <CaseStudyClient project={project} />;
}
