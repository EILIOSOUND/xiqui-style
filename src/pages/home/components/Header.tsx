import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/96 backdrop-blur-md border-b border-stone-100'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/a2eb09df9af717fb021c0ad7a6928425.png"
              alt="Xiqui Style"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { label: 'Accueil', href: '#hero' },
              { label: 'Boutique', href: '#products' },
              { label: 'Pépites', href: '#pepites' },
              { label: 'Contact', href: '#footer' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-stone-600 hover:text-rose-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className={`text-[10px] tracking-[0.25em] uppercase ${
                scrolled ? 'text-stone-400' : 'text-white/60'
              }`}
            >
              Mode & Élégance
            </span>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-5 h-px ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
            <span className={`block w-5 h-px ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
            <span className={`block w-5 h-px ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-6 text-stone-400 text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            <i className="ri-close-line" />
          </button>

          {[
            { label: 'Accueil', href: '#hero' },
            { label: 'Boutique', href: '#products' },
            { label: 'Pépites', href: '#pepites' },
            { label: 'Contact', href: '#footer' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleMobileNav(item.href)}
              className="text-xl tracking-[0.2em] uppercase text-stone-700 hover:text-rose-400"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
