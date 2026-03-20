'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, AlertCircle, Rocket, Zap, Target, Star } from 'lucide-react';
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

  return (
    <motion.div
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
