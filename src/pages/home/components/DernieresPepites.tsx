import { useMemo } from 'react';
import type { Product } from '@/mocks/products';

interface DernieresPepitesProps {
  products: Product[];
}

export default function DernieresPepites({ products }: DernieresPepitesProps) {
  const pepites = useMemo(() => {
    if (products.length === 0) return [];
    return [...products].reverse().slice(0, 7);
  }, [products]);

  if (pepites.length === 0) return null;

  const [featured, ...rest] = pepites;
  const gridItems = rest.slice(0, 6);

  return (
    <section id="pepites" className="py-24 px-6 md:px-16 bg-[#fdf8f5]">
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.4em] uppercase text-rose-400 mb-4 font-medium">
          Sélection du moment
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-stone-800 mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Dernières <em className="italic text-rose-400 not-italic" style={{ fontStyle: 'italic' }}>pépites</em>
        </h2>
        <p className="text-sm text-stone-400 font-light max-w-md mx-auto leading-relaxed">
          Nos coups de cœur du moment — des pièces uniques soigneusement sélectionnées pour vous.
        </p>
        <div className="w-10 h-px bg-rose-200 mx-auto mt-6" />
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Featured large card */}
          {featured && (
            <div className="lg:w-[38%] group cursor-pointer flex-shrink-0">
              <div
                className="relative overflow-hidden bg-stone-100 rounded-lg"
                style={{ paddingBottom: '135%' }}
              >
                <img
                  src={featured.main_image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-white/60 block mb-1.5">
                    {featured.category}
                  </span>
                  <h3
                    className="text-white text-xl font-light leading-snug mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {featured.title}
                  </h3>
                  <a
                    href={featured.affiliate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-stone-800 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-rose-400 hover:text-white transition-colors duration-300 rounded-sm whitespace-nowrap"
                  >
                    Voir l&apos;offre
                    <i className="ri-arrow-right-line text-xs" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid of smaller cards */}
          <div className="lg:w-[62%] grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gridItems.map((product, index) => (
              <div key={`pepite-${index}`} className="group cursor-pointer">
                <div
                  className="relative overflow-hidden bg-stone-100 rounded-lg"
                  style={{ paddingBottom: '125%' }}
                >
                  <img
                    src={product.main_image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover CTA */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={product.affiliate_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full py-2 bg-white/95 text-stone-800 text-[9px] tracking-[0.15em] uppercase font-medium hover:bg-rose-400 hover:text-white transition-colors duration-200 rounded-sm whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Voir l&apos;offre
                    </a>
                  </div>
                </div>
                <div className="pt-2.5">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-stone-400 font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-[12px] text-stone-600 font-light mt-0.5 line-clamp-2 group-hover:text-stone-900 transition-colors duration-200 leading-snug">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
