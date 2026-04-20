import { CATEGORIES } from '@/mocks/products';

interface SidebarProps {
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

export default function Sidebar({ activeCategory, onCategoryChange, productCounts }: SidebarProps) {
  const totalCount = Object.values(productCounts).reduce((a, b) => a + b, 0);

  return (
    <aside className="w-52 flex-shrink-0 sticky top-24 self-start hidden md:block">
      <div className="pr-4">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-medium mb-1">
            Filtrer par
          </p>
          <div className="w-6 h-px bg-rose-200" />
        </div>

        {/* All */}
        <ul className="space-y-0.5">
          <li>
            <button
              onClick={() => onCategoryChange('Tous')}
              className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-md text-sm transition-all duration-200 cursor-pointer group ${
                activeCategory === 'Tous'
                  ? 'bg-rose-50 text-rose-500'
                  : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-apps-line text-xs" />
                </div>
                <span className="text-[13px] font-light tracking-wide">Tout voir</span>
              </div>
              <span
                className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
                  activeCategory === 'Tous'
                    ? 'bg-rose-100 text-rose-400'
                    : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'
                }`}
              >
                {totalCount}
              </span>
            </button>
          </li>

          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-md text-sm transition-all duration-200 cursor-pointer group ${
                  activeCategory === cat
                    ? 'bg-rose-50 text-rose-500'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${categoryIcons[cat] ?? 'ri-price-tag-3-line'} text-xs`} />
                  </div>
                  <span className="text-[13px] font-light tracking-wide">{cat}</span>
                </div>
                {(productCounts[cat] ?? 0) > 0 && (
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full transition-colors duration-200 ${
                      activeCategory === cat
                        ? 'bg-rose-100 text-rose-400'
                        : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'
                    }`}
                  >
                    {productCounts[cat]}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Divider + tagline */}
        <div className="mt-8 pt-6 border-t border-stone-100">
          <p className="text-[9px] tracking-[0.25em] uppercase text-stone-300 mb-2">Xiqui Style</p>
          <p className="text-[11px] text-stone-400 leading-relaxed font-light">
            Une sélection de pièces féminines et élégantes, choisies avec amour.
          </p>
        </div>

        {/* Affiliation note */}
        <div className="mt-5 p-3 bg-stone-50 rounded-md">
          <p className="text-[10px] text-stone-400 leading-relaxed italic">
            Certains liens sont affiliés. Nous pouvons recevoir une commission sans coût supplémentaire pour vous.
          </p>
        </div>
      </div>
    </aside>
  );
}
