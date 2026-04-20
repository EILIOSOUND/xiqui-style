import { useRef } from 'react';
import { CATEGORIES } from '@/mocks/products';

interface MobileCategoryBarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

const categoryIcons: Record<string, string> = {
  Robes: 'ri-shirt-line',
  Hauts: 'ri-t-shirt-line',
  Pantalons: 'ri-layout-bottom-line',
  Jupes: 'ri-scissors-cut-line',
  Lingerie: 'ri-heart-line',
  Accessoires: 'ri-handbag-line',
  Chaussures: 'ri-footprint-line',
};

export default function MobileCategoryBar({
  activeCategory,
  onCategoryChange,
  productCounts,
}: MobileCategoryBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalCount = Object.values(productCounts).reduce((a, b) => a + b, 0);

  const allItems = [
    { label: 'Tout voir', key: 'Tous', icon: 'ri-apps-line', count: totalCount },
    ...CATEGORIES.map((cat) => ({
      label: cat,
      key: cat,
      icon: categoryIcons[cat] ?? 'ri-price-tag-3-line',
      count: productCounts[cat] ?? 0,
    })),
  ];

  return (
    <div className="md:hidden w-full mb-6">
      <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-3 px-1">
        Filtrer par catégorie
      </p>
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allItems.map((item) => {
          const isActive = activeCategory === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onCategoryChange(item.key)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-[12px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer border ${
                isActive
                  ? 'bg-rose-400 text-white border-rose-400'
                  : 'bg-white text-stone-500 border-stone-200 hover:border-rose-200 hover:text-rose-400'
              }`}
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className={`${item.icon} text-[11px]`} />
              </div>
              <span>{item.label}</span>
              {item.count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-400'
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
