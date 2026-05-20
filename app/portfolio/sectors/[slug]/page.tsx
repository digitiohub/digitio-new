import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getSiteMetadataBase } from "@/lib/metadata";
import {
    getProjectTags,
    getSectorBySlug,
    getSectors,
} from "@/lib/sectors";

export async function generateStaticParams() {
    return getSectors().map((sector) => ({
        slug: sector.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const page = await getSectorBySlug(slug);

    if (!page) {
        return {};
    }

    const metadataBase = getSiteMetadataBase();
    const route = `/portfolio/sectors/${slug}`;
    const pageUrl = new URL(route, metadataBase).toString();
    const imageUrl = new URL("/og/portfolio.png", metadataBase).toString();
    const title = `${page.sector.title} Case Studies | DigitioHub`;
    const description = page.sector.summary;

    return {
        title,
        description,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title,
            description,
            type: "website",
            url: pageUrl,
            siteName: "DigitioHub",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${page.sector.title} Open Graph image`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function SectorPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const page = await getSectorBySlug(slug);

    if (!page) {
        notFound();
    }

    const featuredProject = page.featuredProject;
    const primaryProduct = page.primaryProduct;
    const outcomeHighlights = (featuredProject.results || featuredProject.impact || []).slice(0, 3);
    const challengeHighlights = (featuredProject.challenges || []).slice(0, 3);
    const featureHighlights = (featuredProject.features || []).slice(0, 4);
    const relatedCaseStudyTags = page.relatedProjects.flatMap((project) => project.tags);
    const visibleTags = Array.from(
        new Set([...getProjectTags(featuredProject.slug), ...relatedCaseStudyTags]),
    ).slice(0, 8);

    return (
        <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
            <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#04070d]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_38%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,13,0.85)_0%,rgba(4,7,13,0.98)_100%)]" />

                <div className="relative container mx-auto px-6 pb-18 pt-34 md:px-10 md:pb-24">
                    <div className="max-w-5xl">
                        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
                            Sector Case Studies
                        </div>
                        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                            {page.sector.title}
                        </h1>
                        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">
                            {page.sector.summary}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {page.sector.subtags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/75"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                                    Case studies
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    {page.stats.caseStudyCount}
                                </p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                                    Related solutions
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    {page.stats.relatedProductCount}
                                </p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                                    Capabilities
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    {page.stats.capabilityCount}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href={`/portfolio/${featuredProject.slug}`}
                                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#2d79ff] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#4a8dff]"
                            >
                                Explore featured case study
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-13 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
                            >
                                Discuss your sector workflow
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-black py-16 md:py-20">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                Operating Priorities
                            </p>
                            <div className="space-y-4">
                                {page.sector.operatingPriorities.map((item) => (
                                    <div key={item} className="flex gap-3 text-white/74">
                                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                Decision Drivers
                            </p>
                            <div className="space-y-4">
                                {page.sector.decisionDrivers.map((item) => (
                                    <div key={item} className="flex gap-3 text-white/74">
                                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {primaryProduct ? (
                <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                    <div className="container mx-auto grid gap-10 px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                        <div>
                            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                Primary Solution
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                                {primaryProduct.title}
                            </h2>
                            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/60">
                                <span>{primaryProduct.theme.iconLabel}</span>
                                <span>•</span>
                                <span>{primaryProduct.status}</span>
                                <span>•</span>
                                <span>{page.stats.caseStudyCount} sector case studies</span>
                            </div>
                            <p className="mt-6 text-base leading-relaxed text-white/72 md:text-lg">
                                {primaryProduct.overview}
                            </p>

                            {primaryProduct.valueHighlights?.length ? (
                                <div className="mt-10 grid gap-4 md:grid-cols-2">
                                    {primaryProduct.valueHighlights.slice(0, 4).map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/72"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {primaryProduct.idealFor?.length ? (
                                <div className="mt-10">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                                        Best fit in this sector
                                    </h3>
                                    <div className="mt-5 space-y-4">
                                        {primaryProduct.idealFor.slice(0, 3).map((item) => (
                                            <div key={item} className="flex gap-3 text-white/72">
                                                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
                            <div
                                className={`relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-linear-to-br ${primaryProduct.theme.gradient}`}
                            >
                                <div className="relative aspect-[1.45/1]">
                                    <Image
                                        src={primaryProduct.image}
                                        alt={primaryProduct.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4">
                                {primaryProduct.features.slice(0, 3).map((item) => (
                                    <div
                                        key={item}
                                        className="flex gap-3 rounded-[1.2rem] border border-white/8 bg-black/30 p-4"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                                        <p className="text-sm leading-relaxed text-white/75">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {page.sector.subtags.slice(0, 6).map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/72"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-col gap-3">
                                <Link
                                    href={`/products/${primaryProduct.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
                                >
                                    Open full product page
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href={`/portfolio/${featuredProject.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                                >
                                    See sector proof in case studies
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto grid gap-10 px-6 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Featured Case Study
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            {featuredProject.title}
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/60">
                            <span>{featuredProject.year}</span>
                            <span>•</span>
                            <span>{featuredProject.type}</span>
                            {featuredProject.industry ? (
                                <>
                                    <span>•</span>
                                    <span>{featuredProject.industry}</span>
                                </>
                            ) : null}
                        </div>
                        <p className="mt-6 text-base leading-relaxed text-white/72 md:text-lg">
                            {page.featuredSummary.summary}
                        </p>

                        {challengeHighlights.length > 0 ? (
                            <div className="mt-10">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                                    What needed to change
                                </h3>
                                <div className="mt-5 space-y-4">
                                    {challengeHighlights.map((item) => (
                                        <div key={item} className="flex gap-3 text-white/72">
                                            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {featureHighlights.length > 0 ? (
                            <div className="mt-10">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                                    What we delivered
                                </h3>
                                <div className="mt-5 grid gap-4 md:grid-cols-2">
                                    {featureHighlights.map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/72"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8">
                            <div className="relative aspect-[1.45/1]">
                                <Image
                                    src={featuredProject.thumbnail}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
                            </div>
                        </div>

                        {outcomeHighlights.length > 0 ? (
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                                    Outcome snapshot
                                </h3>
                                <div className="mt-5 space-y-4">
                                    {outcomeHighlights.map((item) => (
                                        <div
                                            key={item}
                                            className="flex gap-3 rounded-[1.2rem] border border-white/8 bg-black/30 p-4"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                                            <p className="text-sm leading-relaxed text-white/75">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        <div className="mt-6 flex flex-wrap gap-2">
                            {getProjectTags(featuredProject.slug).slice(0, 6).map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/72"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col gap-3">
                            <Link
                                href={`/portfolio/${featuredProject.slug}`}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
                            >
                                Open full case study
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            {featuredProject.websiteLink ? (
                                <a
                                    href={featuredProject.websiteLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                                >
                                    Visit live website
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
            )}

            {page.additionalProducts.length > 0 ? (
                <section className="border-b border-white/10 bg-black py-20 md:py-24">
                    <div className="container mx-auto px-6 md:px-10">
                        <div className="mb-10 max-w-3xl">
                            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                Related Solutions
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                                Additional systems that fit this sector.
                            </h2>
                            <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                                These are productized platforms from our solution stack that naturally support teams operating in this industry.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {page.additionalProducts.map((product) => (
                                <Link
                                    key={product.slug}
                                    href={`/products/${product.slug}`}
                                    className="group rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.05]"
                                >
                                    <div
                                        className={`rounded-[1.4rem] border border-white/8 bg-linear-to-br ${product.theme.gradient} p-5`}
                                    >
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                                            {product.theme.iconLabel}
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                                            {product.title}
                                        </h3>
                                    </div>
                                    <p className="mt-5 text-sm leading-relaxed text-white/68">
                                        {product.summary}
                                    </p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                                        View solution
                                        <ArrowRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Related Case Studies
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Proof from live implementations in this sector.
                        </h2>
                        <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-base">
                            {primaryProduct
                                ? "These client implementations show how the same operating logic plays out in real workflows across this market."
                                : "Smaller proof points, adjacent implementations, and related builds that reinforce our understanding of this market."}
                        </p>
                    </div>

                    {page.relatedProjects.length > 0 ? (
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {page.relatedProjects.map((project) => (
                                <Link
                                    key={project.slug}
                                    href={`/portfolio/${project.slug}`}
                                    className="group overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.04]"
                                >
                                    <div className="relative aspect-[1.45/1] overflow-hidden">
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                                            {project.subsector || project.type}
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-white/65">
                                            {project.summary}
                                        </p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/72"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                                            Read case study
                                            <ArrowRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/70">
                            This sector currently has one public case study. More related work can be connected here as the portfolio expands.
                        </div>
                    )}
                </div>
            </section>

            <section className="border-b border-white/10 bg-black py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-8 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Capability Tags
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Quick read on how this sector work clusters.
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {visibleTags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/78"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#05070d] py-16 md:py-20">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-12">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                    Keep exploring
                                </p>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                    See all sectors or jump back into full case studies.
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/portfolio#sector-grid"
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                                >
                                    Browse all sectors
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#2d79ff] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#4a8dff]"
                                >
                                    Back to portfolio hub
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
