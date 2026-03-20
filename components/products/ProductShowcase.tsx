'use client';

import React from 'react';
import { ProductContent } from '@/lib/products';
import { ProductCard } from './ProductCard';

interface ProductShowcaseProps {
  products: ProductContent[];
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <section id="products-grid" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {products.map((product, index) => (
            <ProductCard 
              key={product.slug} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
