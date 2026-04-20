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

<<<<<<< HEAD
      const res = await fetch('/api/subscribe', {
=======
      const res = await fetch('https://readdy.ai/api/form/d7i5m7oi2k4pviviqtng', {
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
<<<<<<< HEAD
        setError('Erreur, réessayez');
      }
    } catch {
      setError('Erreur, réessayez');
=======
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
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
<<<<<<< HEAD

=======
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        <h2
          className="text-2xl md:text-3xl font-light text-stone-800 mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Recevoir les nouveautés
        </h2>
<<<<<<< HEAD

        <p className="text-sm text-stone-400 font-light mb-8 leading-relaxed">
          Soyez la première à découvrir nos nouvelles sélections mode.
=======
        <p className="text-sm text-stone-400 font-light mb-8 leading-relaxed">
          Soyez la première à découvrir nos nouvelles sélections mode, tendances et pépites exclusives.
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-rose-400">
<<<<<<< HEAD
            <i className="ri-check-line text-lg" />
            <p className="text-sm font-light tracking-wide">
              Inscription réussie
            </p>
          </div>
        ) : (
          <form
=======
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-check-line text-lg" />
            </div>
            <p className="text-sm font-light tracking-wide">Merci ! Vous êtes inscrite à nos nouveautés.</p>
          </div>
        ) : (
          <form
            data-readdy-form
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
<<<<<<< HEAD
=======
              name="email"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
<<<<<<< HEAD
              className="flex-1 w-full px-4 py-3 text-sm border border-stone-200 rounded-md"
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-stone-800 text-white text-[11px] uppercase rounded-md"
=======
              className="flex-1 w-full px-4 py-3 text-sm text-stone-700 border border-stone-200 rounded-md focus:outline-none focus:border-rose-300 bg-white placeholder-stone-300 transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-stone-800 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-rose-400 transition-colors duration-300 rounded-md whitespace-nowrap cursor-pointer disabled:opacity-60"
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
            >
              {loading ? 'Envoi...' : "S'inscrire"}
            </button>
          </form>
        )}

<<<<<<< HEAD
        {error && <p className="text-xs text-red-400 mt-3">{error}</p>}

        <p className="text-[10px] text-stone-300 mt-4">
          Pas de spam.
=======
        {error && (
          <p className="text-xs text-red-400 mt-3">{error}</p>
        )}

        <p className="text-[10px] text-stone-300 mt-4 tracking-wide">
          Pas de spam. Désinscription possible à tout moment.
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
        </p>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 8fd713975c3676ba6a2df8c034e53f8595170bb1
