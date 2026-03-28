'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, AlertCircle, Rocket, Zap, Target, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProductContent } from '@/lib/products';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductCardProps {
  product: ProductContent;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const galleryImages = [
    { src: product.image, alt: `${product.title} main product preview` },
    ...(product.gallery ?? []),
  ];

  return (
    <motion.div
      id={product.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={cn(
        "relative rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden transition-all duration-500",
        isExpanded ? "ring-2 ring-blue-500/20" : "hover:border-white/20"
      )}>
        {/* Background elements */}
        <div className={cn(
          "absolute inset-0 -z-10 opacity-30 transition-opacity duration-500",
          product.theme.gradient,
          isExpanded ? "opacity-40" : "group-hover:opacity-40"
        )} />

        <div className="flex flex-col">
          {/* Mobile Image (Visible on Phone) */}
          <div className="lg:hidden relative w-full aspect-video overflow-hidden">
             <Image 
                src={product.image} 
                alt={product.title}
                fill
                className="object-cover"
                style={{ 
                  maskImage: 'linear-gradient(to top, transparent, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent, black 15%)'
                }}
             />
          </div>

          <div className="relative">
            {/* Desktop Background Image (Hidden on Mobile) */}
            <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[50%] -z-5 overflow-hidden pointer-events-none">
               <Image 
                  src={product.image} 
                  alt=""
                  fill
                  className="object-cover transition-transform duration-1000"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent, black 50%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%)'
                  }}
               />
            </div>

            <div className="relative z-10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      style={{ borderColor: `${product.theme.accent}4d`, color: product.theme.accent, backgroundColor: `${product.theme.accent}0d` }}
                      className="px-3 py-1 uppercase tracking-wider text-[10px]"
                    >
                      {product.theme.iconLabel}
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 border-emerald-500/30 text-emerald-400 bg-emerald-500/5 uppercase tracking-wider text-[10px]">
                      {product.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    {product.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                    {product.overview}
                  </p>

                  {/* Vertical Features Stack */}
                  <div className="flex flex-col gap-3 pt-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: product.theme.accent }} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={isExpanded ? { backgroundColor: `${product.theme.accent}1a`, borderColor: `${product.theme.accent}4d`, color: product.theme.accent } : {}}
                    className={cn(
                      "rounded-full px-6 py-6 border border-white/10 bg-neutral-900/80 backdrop-blur-md hover:bg-neutral-800 hover:text-white transition-all text-white shrink-0 relative z-20",
                      isExpanded && "border-opacity-100"
                    )}
                  >
                    {isExpanded ? "Hide Details" : "View Details"}
                    <ChevronDown className={cn(
                      "ml-2 w-4 h-4 transition-transform duration-300",
                      isExpanded && "rotate-180"
                    )} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {/* Expanded Content Grid */}
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-rose-400 font-semibold uppercase tracking-wider text-xs">
                          <AlertCircle className="w-4 h-4" />
                          The Problem
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          {product.problem}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-emerald-400 font-semibold uppercase tracking-wider text-xs">
                          <CheckCircle2 className="w-4 h-4" />
                          Our Solution
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                          {product.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                      <div>
                        <h4 className="flex items-center gap-2 text-white font-semibold mb-4 text-sm">
                          <Zap className="w-4 h-4" style={{ color: product.theme.accent }} />
                          Key Capabilities
                        </h4>
                        <ul className="space-y-3">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-sm text-neutral-400">
                              <span style={{ color: product.theme.accent }} className="shrink-0">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                      <div className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-orange-400" /> Use Cases
                      </div>
                      <ul className="space-y-2">
                         {product.useCases.slice(0, 3).map((u, i) => (
                           <li key={i} className="text-xs text-neutral-400">{u}</li>
                         ))}
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                        <div className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-amber-400" /> Why It&apos;s Better
                        </div>
                      <ul className="space-y-2">
                         {product.whyBetter.slice(0, 3).map((w, i) => (
                           <li key={i} className="text-xs text-neutral-400">{w}</li>
                         ))}
                      </ul>
                    </div>
                    <div 
                      className="p-5 rounded-xl border border-white/5 backdrop-blur-sm"
                      style={{ backgroundColor: `${product.theme.accent}1a`, borderColor: `${product.theme.accent}33` }}
                    >
                      <div className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
                        <Rocket className="w-4 h-4" style={{ color: product.theme.accent }} /> Summary
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed italic">
                        &quot;{product.summary}&quot;
                      </p>
                    </div>
                  </div>

                  {galleryImages.length > 0 && (
                    <div className="pt-10">
                      <div className="flex items-end justify-between gap-4 mb-5">
                        <div>
                          <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em]">
                            Gallery Showcase
                          </h4>
                          <p className="text-neutral-400 text-sm mt-1">
                            A quick visual tour of the product experience.
                          </p>
                        </div>
                        <div
                          className="hidden md:block h-px flex-1 max-w-40"
                          style={{
                            background: `linear-gradient(90deg, ${product.theme.accent}00, ${product.theme.accent}80, ${product.theme.accent}00)`,
                          }}
                        />
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.slice(0, 9).map((image, i) => {
                          const isFeatured = i === 0;
                          return (
                            <button
                              type="button"
                              key={image.src}
                              onClick={() => setLightboxImage(image)}
                              aria-label={`Open image: ${image.alt}`}
                              className={cn(
                                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                                isFeatured ? "col-span-2 row-span-2 min-h-70" : "min-h-35"
                              )}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: `linear-gradient(180deg, transparent 35%, ${product.theme.accent}26 100%)`,
                                }}
                              />
                              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-3">
                                <span className="text-[10px] uppercase tracking-[0.22em] text-white/80 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                  {isFeatured ? "Featured" : `0${i + 1}`}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightboxImage && (() => {
          const currentIndex = galleryImages.findIndex((item) => item.src === lightboxImage.src);
          const prevIndex = currentIndex <= 0 ? galleryImages.length - 1 : currentIndex - 1;
          const nextIndex = currentIndex >= galleryImages.length - 1 ? 0 : currentIndex + 1;

          return (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="fixed inset-0 z-100 bg-black/70 backdrop-blur-[6px]"
              onClick={() => setLightboxImage(null)}
            >
              <div className="flex h-full w-full items-center justify-center p-3 md:p-4">
                <motion.div
                  initial={{ scale: 0.985, y: 8 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.985, y: 8 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="relative flex h-[min(100vh-1.5rem,60rem)] w-[min(100vw-1.5rem,96rem)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950 shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="relative min-h-[52vh] flex-1 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] md:min-h-0">
                    <Image
                      src={lightboxImage.src}
                      alt={lightboxImage.alt}
                      fill
                      sizes="100vw"
                      priority
                      className="object-contain p-3 md:p-6"
                    />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3 md:p-5">
                      <div className="max-w-[78%] rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur-xl md:max-w-[60%] md:px-4 md:py-3">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-400 md:text-[11px]">
                          Gallery Preview
                        </p>
                        <h3 className="mt-1 text-sm font-semibold text-white md:text-base">
                          {lightboxImage.alt}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setLightboxImage(null)}
                        aria-label="Close lightbox"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white transition-colors hover:bg-black/80 hover:text-white"
                      >
                        <span className="text-xl leading-none">×</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setLightboxImage(galleryImages[prevIndex])}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/90 shadow-lg transition-all hover:bg-white hover:text-black md:left-5 md:h-11 md:w-11"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setLightboxImage(galleryImages[nextIndex])}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/90 shadow-lg transition-all hover:bg-white hover:text-black md:right-5 md:h-11 md:w-11"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="shrink-0 border-t border-white/10 bg-black/80 p-3 backdrop-blur-xl md:p-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.24em] text-neutral-500 md:text-xs">
                            {product.title}
                          </p>
                          <p className="mt-1 text-sm text-neutral-300">
                            {currentIndex + 1} of {galleryImages.length}
                          </p>
                        </div>

                        <div className="hidden items-center gap-2 md:flex">
                          <button
                            type="button"
                            onClick={() => setLightboxImage(galleryImages[prevIndex])}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={() => setLightboxImage(galleryImages[nextIndex])}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
                          >
                            Next
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {galleryImages.map((image, i) => {
                          const active = image.src === lightboxImage.src;
                          return (
                            <button
                              key={`${image.src}-thumb-${i}`}
                              type="button"
                              onClick={() => setLightboxImage(image)}
                              aria-label={`Preview ${image.alt}`}
                              className={cn(
                                "relative h-12 w-18 shrink-0 overflow-hidden rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 md:h-14 md:w-22",
                                active ? "border-white/50 ring-1 ring-white/25" : "border-white/10 opacity-70 hover:opacity-100 hover:border-white/20"
                              )}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="96px"
                                className="object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </motion.div>
  );
}
