import { useState, useEffect } from 'react';

const COOKIE_KEY = 'xiqui_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    setLeaving(true);
    setTimeout(() => {
      localStorage.setItem(COOKIE_KEY, accepted ? 'accepted' : 'refused');
      setVisible(false);
      setLeaving(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-2xl transition-all duration-400 ${
        leaving ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <div className="bg-white border border-stone-200 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Icon */}
        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-full bg-rose-50 border border-rose-100">
          <i className="ri-shield-check-line text-rose-400 text-base" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[12px] text-stone-600 font-light leading-relaxed">
            Ce site utilise uniquement des{' '}
            <strong className="font-medium text-stone-700">cookies techniques</strong>{' '}
            nécessaires à son bon fonctionnement. Aucun cookie publicitaire n&apos;est utilisé.{' '}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-rgpd-modal'));
              }}
              className="underline underline-offset-2 text-rose-400 hover:text-rose-500 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 text-[12px] font-light"
            >
              Politique de confidentialité
            </button>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => dismiss(false)}
            className="text-[11px] tracking-wide text-stone-400 hover:text-stone-600 transition-colors duration-200 cursor-pointer bg-transparent border-none whitespace-nowrap px-2 py-1"
          >
            Refuser
          </button>
          <button
            onClick={() => dismiss(true)}
            className="text-[11px] tracking-wide bg-stone-800 hover:bg-rose-400 text-white px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer whitespace-nowrap border-none"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
