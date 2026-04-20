import { useState, useEffect } from 'react';

const slides = [
  {
<<<<<<< HEAD
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
    cta: 'Voir les pépites',
  },
  {
    image: '/images/6adef37f5096e1fde8100a60a7f10be0.jpg',
    label: 'Sélection Exclusive',
    title: 'Curated\nwith love',
    subtitle: 'Chaque pièce est choisie avec soin.',
=======
    image: 'https://readdy.ai/api/search-image?query=elegant%20young%20woman%20wearing%20a%20flowing%20cream%20silk%20midi%20dress%2C%20standing%20in%20a%20bright%20airy%20studio%2C%20soft%20natural%20light%2C%20minimalist%20feminine%20fashion%20editorial%20photography%2C%20full%20body%2C%20warm%20ivory%20and%20blush%20tones%2C%20high%20fashion%20aesthetic%2C%20clean%20white%20background%20with%20subtle%20warm%20gradient%2C%20graceful%20pose%2C%20luxury%20fashion%20campaign%20style&width=1440&height=900&seq=hero-slide-1&orientation=landscape',
    label: 'Nouvelle Collection',
    title: 'L\'élégance\nau quotidien',
    subtitle: 'Des pièces soigneusement sélectionnées pour sublimer chaque instant de votre journée.',
    cta: 'Découvrir la collection',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=stylish%20woman%20in%20soft%20pink%20linen%20wide%20leg%20trousers%20and%20white%20blouse%2C%20standing%20in%20a%20sunlit%20minimal%20interior%2C%20warm%20natural%20light%2C%20feminine%20fashion%20editorial%2C%20full%20body%20shot%2C%20cream%20and%20blush%20color%20palette%2C%20modern%20minimalist%20aesthetic%2C%20high%20fashion%20photography%2C%20clean%20background&width=1440&height=900&seq=hero-slide-2&orientation=landscape',
    label: 'Tendances du moment',
    title: 'Féminité\n& raffinement',
    subtitle: 'Explorez notre sélection de pièces tendance, pensées pour la femme moderne.',
    cta: 'Voir les pépites',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=beautiful%20woman%20wearing%20a%20delicate%20floral%20wrap%20dress%20in%20soft%20rose%20and%20ivory%2C%20outdoor%20garden%20setting%20with%20soft%20bokeh%2C%20feminine%20and%20romantic%20fashion%20photography%2C%20full%20body%2C%20warm%20golden%20light%2C%20elegant%20and%20dreamy%20aesthetic%2C%20luxury%20fashion%20editorial%20style%2C%20clean%20and%20airy%20composition&width=1440&height=900&seq=hero-slide-3&orientation=landscape',
    label: 'Sélection Exclusive',
    title: 'Curated\nwith love',
    subtitle: 'Chaque pièce est choisie avec soin pour vous offrir le meilleur du style féminin.',
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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
<<<<<<< HEAD
      <div className={`absolute inset-0 transition-opacity duration-700 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        <img src={slide.image} className="w-full h-full object-cover object-top" />
=======
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${animating ? 'opacity-0' : 'opacity-100'}`}
      >
        <img
          src={slide.image}
          alt="Xiqui Style Hero"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay */}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

<<<<<<< HEAD
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
=======
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-20 w-full max-w-[700px]">
          <p
            className={`text-[10px] tracking-[0.4em] uppercase text-rose-300 mb-5 font-medium transition-all duration-500 ${
              animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.label}
          </p>
          <h1
            className={`text-5xl md:text-7xl font-light text-white leading-tight mb-6 transition-all duration-500 delay-75 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif", whiteSpace: 'pre-line' }}
          >
            {slide.title}
          </h1>
          <p
            className={`text-sm md:text-base text-white/75 leading-relaxed max-w-sm mb-8 font-light transition-all duration-500 delay-100 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.subtitle}
          </p>
          <div
            className={`flex items-center gap-4 transition-all duration-500 delay-150 ${
              animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-white text-stone-800 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-rose-400 hover:text-white transition-all duration-300 rounded-sm whitespace-nowrap cursor-pointer"
            >
              {slide.cta}
            </a>
            <a
              href="#pepites"
              className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap cursor-pointer border-b border-white/30 hover:border-white pb-0.5"
            >
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
              Nos pépites
            </a>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </section>
  );
}
=======

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-8 md:left-20 z-10 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              idx === current
                ? 'w-8 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 md:right-20 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-white/60 animate-pulse" style={{ height: '40%' }} />
        </div>
      </div>
    </section>
  );
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
