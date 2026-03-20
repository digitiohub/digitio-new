import fs from 'fs';
import path from 'path';

export interface ProductContent {
  slug: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  features: string[];
  useCases: string[];
  whyBetter: string[];
  summary: string;
  status: string;
  image: string;
  theme: {
    gradient: string;
    accent: string;
    iconLabel: string;
  };
}

const PRODUCT_ORDER = ['nexgine', 'trajectories', 'leadflow', 'soryouth', 'garagemate'];

const THEME_MAP: Record<string, ProductContent['theme']> = {
  soryouth: {
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accent: '#f59e0b',
    iconLabel: 'Solar CRM',
  },
  leadflow: {
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    accent: '#3b82f6',
    iconLabel: 'Lead Engine',
  },
  nexgine: {
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accent: '#10b981',
    iconLabel: 'AI Knowledge',
  },
  garagemate: {
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    accent: '#f43f5e',
    iconLabel: 'Workshop ERP',
  },
  trajectories: {
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    accent: '#8b5cf6',
    iconLabel: 'Analytics',
  },
};

export async function getProductsContent(): Promise<ProductContent[]> {
  const dataDir = path.join(process.cwd(), 'data', 'products');
  
  const products = await Promise.all(
    PRODUCT_ORDER.map(async (slug) => {
      const filePath = path.join(dataDir, `${slug}.json`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      
      return {
        ...data,
        theme: THEME_MAP[slug] || THEME_MAP['soryouth'],
      } as ProductContent;
    })
  );
  
  return products;
}
