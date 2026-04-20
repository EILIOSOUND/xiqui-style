import { useState } from 'react';
import type { Product } from '@/mocks/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

<<<<<<< HEAD
  const fallbackImg = '/images/fallback.jpg';
=======
  const fallbackImg =
    'https://readdy.ai/api/search-image?query=elegant%20feminine%20fashion%20item%20on%20clean%20white%20background%2C%20soft%20minimalist%20product%20photography%2C%20blush%20and%20cream%20tones%2C%20premium%20quality&width=400&height=500&seq=fallback-card&orientation=portrait';
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1

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

<<<<<<< HEAD
        {/* Overlay */}
=======
        {/* Subtle overlay on hover */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        <div
          className={`absolute inset-0 transition-opacity duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)' }}
        />

<<<<<<< HEAD
        {/* Category */}
=======
        {/* Category badge */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        <div className="absolute top-3 left-3">
          <span className="text-[9px] tracking-[0.15em] uppercase bg-white/90 text-stone-500 px-2 py-1 rounded-sm font-medium">
            {product.category}
          </span>
        </div>

<<<<<<< HEAD
        {/* Wishlist */}
=======
        {/* Wishlist icon */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        <button className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-rose-50">
          <i className="ri-heart-line text-stone-500 text-xs hover:text-rose-400" />
        </button>

<<<<<<< HEAD
        {/* CTA */}
=======
        {/* CTA button slides up on hover */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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

<<<<<<< HEAD
      {/* Infos */}
=======
      {/* Card info */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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
            Voir l&apos;offre →
          </a>
          <span className="text-[9px] text-stone-300 tracking-wide">Shein</span>
        </div>
      </div>
    </article>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
