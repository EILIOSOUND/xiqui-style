import { useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '@/mocks/products';
import { CATEGORIES } from '@/mocks/products';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  activeCategory: string;
}

const SORT_OPTIONS = [
  { value: 'default', label: 'Par défaut' },
  { value: 'az', label: 'A → Z' },
  { value: 'za', label: 'Z → A' },
];

export default function ProductGrid({ products, loading, activeCategory }: ProductGridProps) {
  const [sort, setSort] = useState('default');

  const sorted = [...products].sort((a, b) => {
    if (sort === 'az') return a.title.localeCompare(b.title);
    if (sort === 'za') return b.title.localeCompare(a.title);
    return 0;
  });

  if (loading) {
    return (
      <div className="flex-1 min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-rose-200 border-t-rose-400 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone-400">Chargement...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex-1 min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
            <i className="ri-shopping-bag-line text-4xl text-stone-200" />
          </div>
          <p className="text-sm text-stone-400 font-light">Aucun produit dans cette catégorie</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone-500 font-medium">
            {activeCategory === 'Tous' ? 'Toute la collection' : activeCategory}
          </p>
          <p className="text-[10px] text-stone-300 mt-0.5">{products.length} pièce{products.length > 1 ? 's' : ''}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-stone-400 tracking-wide hidden sm:block">Trier :</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-[11px] text-stone-600 border border-stone-200 rounded-md px-2 py-1.5 bg-white cursor-pointer focus:outline-none focus:border-rose-300 transition-colors duration-200"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile category pills */}
      <div className="flex md:hidden gap-2 mb-5 overflow-x-auto pb-2 flex-nowrap">
        {['Tous', ...CATEGORIES].map((cat) => (
          <span
            key={cat}
            className="text-[10px] tracking-wide uppercase px-3 py-1.5 rounded-full border border-stone-200 text-stone-500 whitespace-nowrap cursor-pointer hover:border-rose-300 hover:text-rose-400 transition-colors duration-200"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
        {sorted.map((product, index) => (
          <ProductCard key={`${product.title}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}
