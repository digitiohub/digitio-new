'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ProductHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-blue-400 border border-blue-400/30 rounded-full bg-blue-400/5">
            Our Digital Suite
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
            Systems that Scale,
            <br />
            <span className="text-blue-500">Products that Perform.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-neutral-400 leading-relaxed">
            Explore our curated selection of AI-driven tools and industry-specific platforms designed to transform 
            fragmented workflows into streamlined, data-driven growth engines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
