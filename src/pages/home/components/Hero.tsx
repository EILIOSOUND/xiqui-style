import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/1b15bb54c9436cff282c8917469ae04b.jpg',
    label: 'Nouvelle Collection',
    title: "L'élégance\nau quotidien",
    subtitle: 'Des pièces soigneusement sélectionnées pour sublimer chaque instant.',
    cta: 'Découvrir la collection',
  },
  {
    image: '/images/70d6eac18babf0814bc1f2bf190e358a.jpg',
    label: 'Tendances du moment',
    title: 'Féminité\n& raffinement',
    subtitle: 'Explorez notre sélection pensée pour la femme moderne.',
    cta: 'Voir les ',
  },
  {
    image: '/images/6adef37f5096e1fde8100a60a7f10be0.jpg',
    label: 'Sélection Exclusive',
    title: 'Sélection Exclusive',
    subtitle: 'Chaque pièce est choisie avec soin.',
    cta: 'Explorer',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px', maxHeight: '900px' }}
    >
      <div className={`absolute inset-0 transition-opacity duration-700 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        <img src={slide.image} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-20 max-w-[700px]">
          <p className={`text-[10px] tracking-[0.4em] text-rose-300 mb-5 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {slide.label}
          </p>

          <h1
            className={`text-5xl md:text-7xl text-white mb-6 ${animating ? 'opacity-0' : 'opacity-100'}`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {slide.title}
          </h1>

          <p className={`text-sm text-white/75 mb-8 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            {slide.subtitle}
          </p>

          <div className="flex gap-4">
            <a href="#products" className="px-6 py-3 bg-white text-black text-xs uppercase">
              {slide.cta}
            </a>
            <a href="#pepites" className="text-white text-xs border-b">
              Nos Pépites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
