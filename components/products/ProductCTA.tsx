'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Briefcase } from 'lucide-react';
import Link from 'next/link';

export function ProductCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-blue-600/5" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to deploy your <span className="text-blue-500">next system?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
              Our products are designed to be modular and scalable. Whether you&apos;re a startup or an enterprise, 
              we have the right building blocks for your digital future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all group">
                  Book a Call
                  <MessageSquare className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all group">
                  View Success Stories
                  <Briefcase className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
