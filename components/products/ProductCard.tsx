"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ProductContent } from "@/lib/products";

interface ProductCardProps {
    product: ProductContent;
    index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            id={product.slug}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/65 backdrop-blur-xl transition-all duration-500 hover:border-white/20">
                <div
                    className={cn(
                        "absolute inset-0 -z-10 opacity-35 transition-opacity duration-500 group-hover:opacity-50",
                        product.theme.gradient,
                    )}
                />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_35%)]" />

                <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge
                                variant="outline"
                                style={{
                                    borderColor: `${product.theme.accent}4d`,
                                    color: product.theme.accent,
                                    backgroundColor: `${product.theme.accent}12`,
                                }}
                                className="px-3 py-1 uppercase tracking-[0.22em] text-[10px]"
                            >
                                {product.theme.iconLabel}
                            </Badge>
                            <Badge
                                variant="outline"
                                className="border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-400"
                            >
                                {product.status}
                            </Badge>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                                {product.title}
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                                {product.overview}
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {product.valueHighlights?.slice(0, 3).map((item) => (
                                <div
                                    key={item}
                                    className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4 text-sm text-neutral-300"
                                >
                                    <div className="flex gap-3">
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: product.theme.accent }}
                                        />
                                        <span>{item}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center">
                            <Link
                                href={`/products/${product.slug}`}
                                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-all"
                                style={{
                                    backgroundColor: product.theme.accent,
                                }}
                            >
                                View Product
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <div className="min-h-12 w-full rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium leading-relaxed text-white/65 lg:flex-1">
                                {product.features.slice(0, 2).join(" • ")}
                            </div>
                        </div>
                    </div>

                    <Link
                        href={`/products/${product.slug}`}
                        className="relative block overflow-hidden rounded-[1.8rem] border border-white/8 bg-black/40"
                    >
                        <div className="relative aspect-[1.35/1]">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <div className="rounded-[1.2rem] border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                                <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                                    Product Preview
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-white/78">
                                    {product.summary}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
