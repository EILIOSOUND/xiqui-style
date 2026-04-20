import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`fixed bottom-8 right-6 md:right-10 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all duration-300 cursor-pointer whitespace-nowrap ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <i className="ri-arrow-up-line text-sm" />
    </button>
  );
}
