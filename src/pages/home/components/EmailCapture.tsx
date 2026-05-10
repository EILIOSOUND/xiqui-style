import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError('');

    try {
      const formData = new URLSearchParams();
      formData.append('email', email.trim());

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Erreur, réessayez');
      }
    } catch {
      setError('Erreur, réessayez');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-white border-t border-stone-100">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.35em] uppercase text-rose-400 mb-3 font-medium">
          Restez inspirée
        </p>

        <h2
          className="text-2xl md:text-3xl font-light text-stone-800 mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Recevoir les nouveautés
        </h2>

        <p className="text-sm text-stone-400 font-light mb-8 leading-relaxed">
          Soyez la première à découvrir nos nouvelles sélections mode.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-rose-400">
            <i className="ri-check-line text-lg" />
            <p className="text-sm font-light tracking-wide">
              Inscription réussie
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 w-full px-4 py-3 text-sm border border-stone-200 rounded-md"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-stone-800 text-white text-[11px] uppercase rounded-md"
            >
              {loading ? 'Envoi...' : "S'inscrire"}
            </button>
          </form>
        )}

        {error && <p className="text-xs text-red-400 mt-3">{error}</p>}

        <p className="text-[10px] text-stone-300 mt-4">
          Pas de spam.
        </p>
      </div>
    </section>
  );
}
