import { useState } from 'react';
import type { Product } from '@/mocks/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackImg = '/images/fallback.jpg';

  return (
    <article
      className="group relative bg-white overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full overflow-hidden bg-[#faf8f6]" style={{ paddingBottom: '130%' }}>
        <img
          src={imgError ? fallbackImg : product.main_image}
          alt={product.title}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
            hovered ? 'scale-[1.06]' : 'scale-100'
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)' }}
        />

        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] tracking-[0.15em] uppercase bg-white/90 text-stone-500 px-2 py-1 rounded-sm font-medium">
            {product.category}
          </span>
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-rose-50">
          <i className="ri-heart-line text-stone-500 text-xs hover:text-rose-400" />
        </button>

        {/* CTA */}
        <div
          className={`absolute bottom-0 left-0 right-0 px-3 pb-3 transition-all duration-350 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <a
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-stone-800 text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-rose-400 hover:text-white transition-colors duration-250 rounded-sm whitespace-nowrap"
            onClick={(e) => e.stopPropagation()}
          >
            Voir l&apos;offre
            <i className="ri-arrow-right-line text-xs" />
          </a>
        </div>
      </div>

      {/* Infos */}
      <div className="pt-3 pb-4 px-0.5">
        <h3 className="text-[13px] text-stone-700 font-light leading-snug line-clamp-2 group-hover:text-stone-900 transition-colors duration-200 tracking-wide">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <a
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.15em] uppercase text-rose-400 hover:text-rose-500 transition-colors duration-200 whitespace-nowrap font-medium"
          >
            Voir l&apos;offre â†’
          </a>
          <span className="text-[9px] text-stone-300 tracking-wide">Shein</span>
        </div>
      </div>
    </article>
  );
}
