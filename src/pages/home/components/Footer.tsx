<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
=======
import { useState } from 'react';
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1

type ModalType = 'cgu' | 'rgpd' | 'contact' | null;

function Modal({ type, onClose }: { type: ModalType; onClose: () => void }) {
  if (!type) return null;

  const content: Record<NonNullable<ModalType>, { title: string; body: string }> = {
    cgu: {
      title: "Conditions Générales d'Utilisation",
      body: `Bienvenue sur Xiqui Style. En accédant à ce site, vous acceptez les présentes conditions d'utilisation.

**Objet du site**
<<<<<<< HEAD
Xiqui Style est un site de présentation de produits de mode féminine. Les produits présentés redirigent vers des sites partenaires via des liens affiliés. Xiqui Style ne vend aucun produit directement.
=======
Xiqui Style est un site de présentation de produits de mode féminine. Les liens présents sur ce site sont des liens affiliés vers des boutiques partenaires (notamment Shein). Nous ne vendons aucun produit directement.
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1

**Liens affiliés**
Certains liens présents sur ce site sont des liens d'affiliation. Cela signifie que nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans coût supplémentaire pour vous.

**Propriété intellectuelle**
<<<<<<< HEAD
L'ensemble des contenus présents sur ce site (textes, images, design) est protégé. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.

**Responsabilité**
Xiqui Style ne peut être tenu responsable des produits, services ou contenus proposés par les sites partenaires. Les transactions et conditions associées relèvent exclusivement de ces derniers.

**Modification des CGU**
Xiqui Style se réserve le droit de modifier les présentes conditions à tout moment. La version applicable est celle publiée sur le site au moment de la consultation.`,
=======
Le contenu de ce site (textes, images, design) est la propriété de Xiqui Style. Toute reproduction est interdite sans autorisation préalable.

**Limitation de responsabilité**
Xiqui Style ne peut être tenu responsable des produits vendus par les boutiques partenaires. Les transactions s'effectuent directement sur les sites des partenaires.

**Modification des CGU**
Nous nous réservons le droit de modifier ces conditions à tout moment. La version en vigueur est celle publiée sur ce site.`,
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
    },
    rgpd: {
      title: 'Politique de Confidentialité (RGPD)',
      body: `**Collecte des données**
<<<<<<< HEAD
Xiqui Style collecte uniquement les adresses email des utilisateurs qui s'inscrivent volontairement à la newsletter via le formulaire présent sur le site.

**Finalité du traitement**
Les données collectées sont utilisées exclusivement pour l'envoi de newsletters, d'offres et de contenus liés à la mode. Elles ne sont en aucun cas vendues, louées ou cédées à des tiers à des fins commerciales.

**Base légale**
Le traitement des données repose sur le consentement de l'utilisateur, exprimé lors de l'inscription à la newsletter.

**Durée de conservation**
Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact ou jusqu'à la désinscription de l'utilisateur.

**Hébergement et traitement**
Les données sont stockées et traitées via la plateforme Brevo (Sendinblue), conforme aux réglementations européennes en matière de protection des données.

**Droits des utilisateurs**
Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
=======
Xiqui Style collecte uniquement les adresses email des utilisateurs qui s'inscrivent volontairement à notre newsletter.

**Utilisation des données**
Vos données sont utilisées exclusivement pour vous envoyer nos newsletters et nouveautés mode. Elles ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.

**Durée de conservation**
Vos données sont conservées jusqu'à votre désinscription ou pendant une durée maximale de 3 ans.

**Vos droits**
Conformément au RGPD, vous disposez des droits suivants :
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
- Droit d'accès à vos données
- Droit de rectification
- Droit à l'effacement ("droit à l'oubli")
- Droit d'opposition
<<<<<<< HEAD
- Droit à la limitation du traitement
- Droit à la portabilité

Vous pouvez exercer ces droits à tout moment en contactant : xheinintime@gmail.com

**Cookies**
Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire n'est utilisé.

**Responsable du traitement**
Le responsable du traitement des données est Xiqui Style.
Contact : xheinintime@gmail.com

**Modification de la politique**
Cette politique peut être modifiée à tout moment. La version en vigueur est celle publiée sur le site.`,
=======
- Droit à la portabilité

Pour exercer ces droits, contactez-nous à : xheinintime@gmail.com

**Cookies**
Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire n'est utilisé.

**Contact DPO**
Pour toute question relative à vos données personnelles : xheinintime@gmail.com`,
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
    },
    contact: {
      title: 'Contact',
      body: `**Xiqui Style**
Site de présentation de mode féminine affiliée

**Email**
xheinintime@gmail.com

**Réseaux sociaux**
Instagram : @xiqui_style
TikTok : @xiqui_fashion
Pinterest : Xiqui Style

**Partenariats & Collaborations**
Pour toute demande de partenariat ou collaboration, écrivez-nous à :
xheinintime@gmail.com

**Délai de réponse**
Nous nous efforçons de répondre à toutes les demandes dans un délai de 48 heures ouvrées.

**Note importante**
Xiqui Style est un site affilié. Nous ne gérons pas les commandes, les retours ou le service client des boutiques partenaires. Pour toute question relative à une commande, veuillez contacter directement la boutique concernée.`,
    },
  };

  const { title, body } = content[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <h2
            className="text-xl font-light text-stone-800 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center text-stone-400 hover:text-stone-700 cursor-pointer transition-colors duration-200"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>
        <div className="text-sm text-stone-500 font-light leading-relaxed whitespace-pre-line">
          {body.split('**').map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-stone-700 font-medium">
                {part}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [modal, setModal] = useState<ModalType>(null);

<<<<<<< HEAD
  useEffect(() => {
    const handler = () => setModal('rgpd');
    window.addEventListener('open-rgpd-modal', handler);
    return () => window.removeEventListener('open-rgpd-modal', handler);
  }, []);

=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
  return (
    <>
      <Modal type={modal} onClose={() => setModal(null)} />

      <footer id="footer" className="bg-[#f7f2ee] border-t border-stone-200 pt-14 pb-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            {/* Logo + tagline */}
            <div>
              <img
<<<<<<< HEAD
                src="/images/a2eb09df9af717fb021c0ad7a6928425.png"
=======
                src="https://static.readdy.ai/image/469ef16dae36318368f90b844cefffeb/a2eb09df9af717fb021c0ad7a6928425.png"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
                alt="Xiqui Style"
                className="h-8 w-auto object-contain mb-3 opacity-80"
              />
              <p className="text-[11px] text-stone-400 font-light leading-relaxed max-w-xs">
                Sélection de mode féminine élégante et tendance, soigneusement choisie pour vous.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-stone-400 mb-3 font-medium">Navigation</p>
                <ul className="space-y-2">
                  {[
                    { label: 'Accueil', href: '#hero' },
                    { label: 'Boutique', href: '#products' },
                    { label: 'Pépites', href: '#pepites' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[12px] text-stone-500 hover:text-rose-400 transition-colors duration-200 font-light whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-stone-400 mb-3 font-medium">Légal</p>
                <ul className="space-y-2">
                  {[
                    { label: 'CGU', key: 'cgu' as ModalType },
                    { label: 'Politique de confidentialité', key: 'rgpd' as ModalType },
                    { label: 'Contact', key: 'contact' as ModalType },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        onClick={() => setModal(item.key)}
                        className="text-[12px] text-stone-500 hover:text-rose-400 transition-colors duration-200 font-light whitespace-nowrap cursor-pointer text-left"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
<<<<<<< HEAD
                  <li>
                    <Link
                      to="/mentions-legales"
                      className="text-[12px] text-stone-500 hover:text-rose-400 transition-colors duration-200 font-light whitespace-nowrap"
                    >
                      Mentions légales
                    </Link>
                  </li>
=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
                </ul>
              </div>
            </div>
          </div>

          {/* Affiliation disclosure */}
          <div className="py-5 px-5 bg-white/60 rounded-lg border border-stone-100 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i className="ri-information-line text-stone-400 text-sm" />
              </div>
              <p className="text-[11px] text-stone-400 font-light leading-relaxed italic">
                <strong className="font-medium not-italic text-stone-500">Liens affiliés :</strong>{' '}
                Certains liens présents sur ce site sont des liens d&apos;affiliation. Nous pouvons recevoir une commission sans coût supplémentaire pour vous si vous effectuez un achat via ces liens. Cela nous aide à maintenir ce site et à continuer à vous proposer des sélections de qualité.
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mb-8">
            <p className="text-[9px] tracking-[0.25em] uppercase text-stone-400 font-medium">Suivez-nous</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/xiqui_style/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-rose-400 hover:border-rose-200 transition-all duration-200 cursor-pointer"
                aria-label="Instagram Xiqui Style"
              >
                <i className="ri-instagram-line text-sm" />
              </a>
              <a
                href="https://www.tiktok.com/@xiqui_fashion"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-rose-400 hover:border-rose-200 transition-all duration-200 cursor-pointer"
                aria-label="TikTok Xiqui Fashion"
              >
                <i className="ri-tiktok-line text-sm" />
              </a>
              <a
<<<<<<< HEAD
                href="https://www.pinterest.com/XiquiStyle/?actingBusinessId=1084382553936689936"
=======
                href="https://www.pinterest.com/"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-rose-400 hover:border-rose-200 transition-all duration-200 cursor-pointer"
                aria-label="Pinterest Xiqui Style"
              >
                <i className="ri-pinterest-line text-sm" />
              </a>
              <a
                href="mailto:xheinintime@gmail.com"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-500 hover:text-rose-400 hover:border-rose-200 transition-all duration-200 cursor-pointer"
                aria-label="Email Xiqui Style"
              >
                <i className="ri-mail-line text-sm" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-stone-200">
            <p className="text-[11px] text-stone-400 font-light tracking-wide">
              © {year} Xiqui Style — Tous droits réservés
            </p>
            <p className="text-[10px] text-stone-300 tracking-[0.2em] uppercase">
              Mode &amp; Élégance
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
