import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

<<<<<<< HEAD
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

=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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
<<<<<<< HEAD
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/a2eb09df9af717fb021c0ad7a6928425.png"
=======
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://static.readdy.ai/image/469ef16dae36318368f90b844cefffeb/a2eb09df9af717fb021c0ad7a6928425.png"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
              alt="Xiqui Style"
              className="h-32 w-auto object-contain"
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
<<<<<<< HEAD
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
=======
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 whitespace-nowrap ${
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
                  scrolled
                    ? 'text-stone-600 hover:text-rose-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

<<<<<<< HEAD
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
=======
          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className={`text-[10px] tracking-[0.25em] uppercase transition-colors duration-200 ${
                scrolled ? 'text-stone-400' : 'text-white/60'
              }`}
            >
              Mode &amp; Élégance
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-px transition-colors duration-200 ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
            <span className={`block w-5 h-px transition-colors duration-200 ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
            <span className={`block w-5 h-px transition-colors duration-200 ${scrolled ? 'bg-stone-700' : 'bg-white'}`} />
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          <button
<<<<<<< HEAD
            className="absolute top-5 right-6 text-stone-400 text-2xl"
=======
            className="absolute top-5 right-6 text-stone-400 text-2xl cursor-pointer"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
            onClick={() => setMobileOpen(false)}
          >
            <i className="ri-close-line" />
          </button>
<<<<<<< HEAD

=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
          {[
            { label: 'Accueil', href: '#hero' },
            { label: 'Boutique', href: '#products' },
            { label: 'Pépites', href: '#pepites' },
            { label: 'Contact', href: '#footer' },
          ].map((item) => (
<<<<<<< HEAD
            <button
              key={item.label}
              onClick={() => handleMobileNav(item.href)}
              className="text-xl tracking-[0.2em] uppercase text-stone-700 hover:text-rose-400"
            >
              {item.label}
            </button>
=======
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl tracking-[0.2em] uppercase text-stone-700 hover:text-rose-400 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
          ))}
        </div>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
