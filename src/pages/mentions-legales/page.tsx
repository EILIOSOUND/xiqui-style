import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    content: [
      { text: 'Le site Xiqui Style est édité à titre personnel.' },
      { text: 'Responsable de publication : Xiqui Style' },
      { text: 'Contact : xheinintime@gmail.com', link: { label: 'xheinintime@gmail.com', href: 'mailto:xheinintime@gmail.com' } },
    ],
  },
  {
    id: 'hebergement',
    title: 'Hébergement',
    content: [
      { text: 'Le site est hébergé par :' },
      { text: 'Cloudflare, Inc.' },
      { text: '101 Townsend St, San Francisco, CA 94107, USA' },
      { text: 'Site : https://www.cloudflare.com', link: { label: 'https://www.cloudflare.com', href: 'https://www.cloudflare.com' } },
    ],
  },
  {
    id: 'objet',
    title: 'Objet du site',
    content: [
      {
        text: 'Xiqui Style est un site de présentation de produits de mode féminine. Les produits présentés redirigent vers des sites partenaires via des liens affiliés. Xiqui Style ne vend aucun produit directement.',
      },
    ],
  },
  {
    id: 'affiliation',
    title: 'Liens affiliés',
    content: [
      {
        text: 'Certains liens présents sur ce site sont des liens d\'affiliation. Cela signifie que nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.',
      },
    ],
  },
  {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    content: [
      {
        text: 'L\'ensemble des contenus présents sur ce site (textes, images, design) est protégé. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.',
      },
    ],
  },
  {
    id: 'responsabilite',
    title: 'Responsabilité',
    content: [
      {
        text: 'Xiqui Style ne peut être tenu responsable des produits, services ou contenus proposés par les sites partenaires. Les transactions et conditions associées relèvent exclusivement de ces derniers.',
      },
      {
        text: 'Xiqui Style ne saurait être tenu responsable des dommages directs ou indirects résultant de l\'utilisation de ce site ou des sites partenaires.',
      },
    ],
  },
  {
    id: 'donnees',
    title: 'Données personnelles & RGPD',
    content: [
      {
        text: 'Xiqui Style collecte uniquement les adresses email des utilisateurs qui s\'inscrivent volontairement à la newsletter. Ces données sont traitées via la plateforme Brevo (Sendinblue), conforme aux réglementations européennes.',
      },
      {
        text: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, d\'effacement, d\'opposition, de limitation et de portabilité de vos données.',
      },
      {
        text: 'Pour exercer ces droits : xheinintime@gmail.com',
        link: { label: 'xheinintime@gmail.com', href: 'mailto:xheinintime@gmail.com' },
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      {
        text: 'Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage n\'est utilisé.',
      },
    ],
  },
  {
    id: 'modification',
    title: 'Modification des mentions légales',
    content: [
      {
        text: 'Xiqui Style se réserve le droit de modifier les présentes mentions légales à tout moment. La version applicable est celle publiée sur le site au moment de la consultation.',
      },
    ],
  },
];

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Jost', sans-serif" }}>
      {/* Header bar */}
      <header className="border-b border-stone-100 bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/images/a2eb09df9af717fb021c0ad7a6928425.png"
              alt="Xiqui Style"
              className="h-20 w-auto object-contain opacity-80"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-stone-400 hover:text-rose-400 transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-left-line text-sm" />
            </div>
            Retour au site
          </Link>
        </div>
      </header>

      {/* Hero band */}
      <div className="bg-[#f7f2ee] border-b border-stone-100 py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.35em] uppercase text-rose-400 mb-3 font-medium">
            Informations légales
          </p>
          <h1
            className="text-3xl md:text-5xl font-light text-stone-800 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Mentions Légales
          </h1>
          <p className="text-sm text-stone-400 font-light max-w-xl leading-relaxed">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, les présentes mentions légales sont portées à la connaissance des utilisateurs du site Xiqui Style.
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar nav */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-28">
              <p className="text-[9px] tracking-[0.3em] uppercase text-stone-400 mb-4 font-medium">
                Sommaire
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[12px] text-stone-500 hover:text-rose-400 transition-colors duration-200 py-1.5 border-l-2 border-transparent hover:border-rose-300 pl-3 font-light whitespace-nowrap"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="flex-1 min-w-0 flex flex-col gap-12">
            {sections.map((s, i) => (
              <article key={s.id} id={s.id} className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[10px] text-stone-300 font-light tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="text-base font-medium text-stone-800 tracking-wide">
                    <a href={`#${s.id}`} className="hover:text-rose-400 transition-colors duration-200">
                      {s.title}
                    </a>
                  </h4>
                </div>
                <div className="pl-8 flex flex-col gap-3 border-l border-stone-100">
                  {s.content.map((c, j) => (
                    <p key={j} className="text-sm text-stone-500 font-light leading-relaxed">
                      {c.link ? (
                        <>
                          {c.text.replace(c.link.label, '').split(c.link.label)[0]}
                          <a
                            href={c.link.href}
                            target={c.link.href.startsWith('http') ? '_blank' : undefined}
                            rel={c.link.href.startsWith('http') ? 'nofollow noopener noreferrer' : undefined}
                            className="text-rose-400 hover:text-rose-500 underline underline-offset-2 transition-colors duration-200"
                          >
                            {c.link.label}
                          </a>
                        </>
                      ) : (
                        c.text
                      )}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            {/* Last updated */}
            <div className="pt-8 border-t border-stone-100">
              <p className="text-[12px] text-stone-400 font-medium tracking-wide">
                Dernière mise à jour : avril 2026
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer mini */}
      <footer className="bg-[#f7f2ee] border-t border-stone-200 py-8 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone-400 font-light">
            © {new Date().getFullYear()} Xiqui Style — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-[11px] text-stone-400 hover:text-rose-400 transition-colors duration-200 font-light whitespace-nowrap"
            >
              Accueil
            </Link>
            <a
              href="mailto:xheinintime@gmail.com"
              className="text-[11px] text-stone-400 hover:text-rose-400 transition-colors duration-200 font-light whitespace-nowrap"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
