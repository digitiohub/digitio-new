import React from 'react';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { getProductsContent } from '@/lib/products';
import { ProductHero } from '@/components/products/ProductHero';
import { ProductShowcase } from '@/components/products/ProductShowcase';
import { ProductCTA } from '@/components/products/ProductCTA';

export const metadata: Metadata = createPageMetadata("products");

export default async function ProductsPage() {
  const products = await getProductsContent();

  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <ProductHero />
      <ProductShowcase products={products} />
      <ProductCTA />
    </main>
  );
}
