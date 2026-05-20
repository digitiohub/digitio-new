import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Layers3,
    Sparkles,
    Target,
} from "lucide-react";
import { getSiteMetadataBase } from "@/lib/metadata";
import {
    getProductPageData,
    getProductStaticParams,
} from "@/lib/products";

export function generateStaticParams() {
    return getProductStaticParams();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const page = await getProductPageData(slug);
    if (!page) return {};

    const metadataBase = getSiteMetadataBase();
    const pageUrl = new URL(`/products/${slug}`, metadataBase).toString();
    const imageUrl = new URL(page.product.image, metadataBase).toString();
    const title = `${page.product.title} | DigitioHub Products`;
    const description = page.product.seoDescription || page.positioningSummary;

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
            siteName: "DigitioHub",
            url: pageUrl,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${page.product.title} preview`,
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

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const page = await getProductPageData(slug);

    if (!page) {
        notFound();
    }

    const { product } = page;
    const gallery = [{ src: product.image, alt: `${product.title} preview` }, ...(product.gallery || [])];

    return (
        <main className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
            <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#04070d]">
                <div
                    className={`absolute inset-0 bg-linear-to-br ${product.theme.gradient} opacity-35`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />

                <div className="relative container mx-auto px-6 pb-18 pt-34 md:px-10 md:pb-24">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex flex-wrap items-center gap-3">
                                <span
                                    className="inline-flex rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em]"
                                    style={{
                                        borderColor: `${product.theme.accent}4d`,
                                        color: product.theme.accent,
                                        backgroundColor: `${product.theme.accent}12`,
                                    }}
                                >
                                    {product.theme.iconLabel}
                                </span>
                                <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                                    {product.status}
                                </span>
                            </div>

                            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                                {product.title}
                            </h1>
                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/74 md:text-lg">
                                {page.positioningSummary}
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {product.valueHighlights?.slice(0, 3).map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm text-white/74"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href={page.cta.href}
                                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: product.theme.accent }}
                                >
                                    {page.cta.label}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href={page.cta.secondaryHref}
                                    className="inline-flex h-13 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                                >
                                    {page.cta.secondaryLabel}
                                </Link>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35">
                            <div className="relative aspect-[1.35/1]">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto grid gap-8 px-6 md:px-10 lg:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-rose-300">
                            <Target className="h-4 w-4" />
                            The Problem
                        </div>
                        <p className="text-base leading-relaxed text-white/74">
                            {product.problem}
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                        <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                            <Sparkles className="h-4 w-4" />
                            The Solution
                        </div>
                        <p className="text-base leading-relaxed text-white/74">
                            {product.solution}
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-black py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            How It Works
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            A cleaner system from first input to daily execution.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {product.howItWorks.map((step, index) => (
                            <div
                                key={step}
                                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                            >
                                <div
                                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold"
                                    style={{
                                        borderColor: `${product.theme.accent}40`,
                                        color: product.theme.accent,
                                        backgroundColor: `${product.theme.accent}12`,
                                    }}
                                >
                                    {index + 1}
                                </div>
                                <p className="text-sm leading-relaxed text-white/74">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Capabilities
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Core product capabilities teams can operationalize quickly.
                        </h2>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {product.features.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5"
                            >
                                <div className="flex gap-3">
                                    <CheckCircle2
                                        className="mt-0.5 h-4 w-4 shrink-0"
                                        style={{ color: product.theme.accent }}
                                    />
                                    <p className="text-sm leading-relaxed text-white/74">
                                        {feature}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-black py-20 md:py-24">
                <div className="container mx-auto grid gap-8 px-6 md:px-10 lg:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                        <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                            <Layers3 className="h-4 w-4" />
                            Ideal For
                        </div>
                        <div className="space-y-4">
                            {product.idealFor?.map((item) => (
                                <div key={item} className="flex gap-3 text-white/74">
                                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                        <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                            <Sparkles className="h-4 w-4" />
                            Use Cases
                        </div>
                        <div className="space-y-4">
                            {product.useCases.map((item) => (
                                <div key={item} className="flex gap-3 text-white/74">
                                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 pt-8 md:px-10">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
                        <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                            <CheckCircle2 className="h-4 w-4" />
                            Why It Stands Apart
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {product.whyBetter.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-[1.2rem] border border-white/8 bg-black/30 p-4 text-sm text-white/74"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Product Preview
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Interface snapshots and workflow surfaces.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {gallery.map((image, index) => (
                            <div
                                key={`${image.src}-${index}`}
                                className={`overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                            >
                                <div className={`relative ${index === 0 ? "aspect-[1.5/1]" : "aspect-[1.08/1]"}`}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-white/76">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-black py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Related Solutions
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Other internal systems that complement this workflow.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {page.relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.slug}
                                href={`/products/${relatedProduct.slug}`}
                                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                            >
                                <div
                                    className={`rounded-[1.4rem] border border-white/8 bg-linear-to-br ${relatedProduct.theme.gradient} p-5`}
                                >
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                                        {relatedProduct.theme.iconLabel}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                                        {relatedProduct.title}
                                    </h3>
                                </div>
                                <p className="mt-5 text-sm leading-relaxed text-white/68">
                                    {relatedProduct.summary}
                                </p>
                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                                    View product
                                    <ArrowRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-white/10 bg-[#05070d] py-20 md:py-24">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="mb-10 max-w-3xl">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                            Related Case Studies
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                            Client work powered by similar operational logic.
                        </h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {page.relatedCaseStudies.map((caseStudy) => (
                            <Link
                                key={caseStudy.slug}
                                href={`/portfolio/${caseStudy.slug}`}
                                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
                            >
                                <div className="relative aspect-[1.3/1] overflow-hidden">
                                    <Image
                                        src={caseStudy.thumbnail}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
                                </div>
                                <div className="p-5">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                                        {caseStudy.type}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                                        {caseStudy.summary}
                                    </p>
                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                                        Open case study
                                        <ArrowUpRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black py-16 md:py-20">
                <div className="container mx-auto px-6 md:px-10">
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-12">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-400">
                                    Next step
                                </p>
                                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                                    Build around the workflow, not around disconnected tools.
                                </h2>
                                <p className="mt-4 text-white/68">
                                    If this product direction fits your business, we can help scope the right implementation path and related operating stack.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={page.cta.href}
                                    className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: product.theme.accent }}
                                >
                                    {page.cta.label}
                                </Link>
                                <Link
                                    href={page.cta.secondaryHref}
                                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                                >
                                    {page.cta.secondaryLabel}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
