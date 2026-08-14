import { motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';

import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_URL } from '../constants';

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#work' },
  { label: 'Articles', href: '#content' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'Développeur Symfony freelance', href: '#contact' },
  { label: 'Développeur React freelance', href: '#contact' },
  { label: 'Développeur full-stack PHP', href: '#contact' },
  { label: 'Développeur web Beauvais', href: '#contact' },
  { label: 'Développeur web Oise', href: '#contact' },
  { label: 'API REST & API Platform', href: '#work' },
];

type SocialLink = {
  label: string;
  href: string;
  description: string;
  icon: ReactNode;
  // Copie l'adresse dans le presse-papiers au lieu de naviguer.
  copyToClipboard?: boolean;
};

const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: GITHUB_URL,
    description: 'Code source de mes projets open-source',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    description: 'Mon profil professionnel',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: CONTACT_EMAIL,
    description: 'Cliquer pour copier l’adresse',
    copyToClipboard: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const COPY_FEEDBACK_MS = 2000;

const Footer = () => {
  const year = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (!copiedEmail) {
      return;
    }
    const id = window.setTimeout(() => setCopiedEmail(false), COPY_FEEDBACK_MS);
    return () => window.clearTimeout(id);
  }, [copiedEmail]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      // Presse-papiers indisponible (contexte non sécurisé, permission refusée…) : on ignore.
    }
    setCopiedEmail(true);
  };

  return (
    <footer
      className="c-space mt-20 border-t border-white/5"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(6,9,31,0.8) 100%)',
      }}
      aria-label="Pied de page"
    >
      {/* Main grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16"
      >
        {/* Col 1 — Identity */}
        <div className="lg:col-span-1">
          <a href="#home" className="inline-block mb-4">
            <span
              className="text-2xl font-black"
              style={{
                background: 'linear-gradient(135deg, #7a57db, #33c2cc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Dylan Groux
            </span>
          </a>
          <p className="subtext text-sm leading-relaxed mb-6">
            Développeur full-stack freelance basé à{' '}
            <strong className="text-neutral-300 font-medium">Beauvais (Oise)</strong>.
            Spécialisé Symfony &amp; React, disponible en présentiel dans les
            Hauts-de-France et à distance partout en France.
          </p>
          {/* Availability badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10"
            style={{ background: 'rgba(87,219,150,0.08)' }}
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            <span className="text-xs text-mint font-medium">
              Disponible — freelance &amp; CDI
            </span>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <nav aria-label="Navigation principale">
          <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="subtext text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span
                    className="w-0 group-hover:w-3 h-px transition-all duration-200"
                    style={{ background: 'linear-gradient(90deg, #7a57db, #33c2cc)' }}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3 — Services SEO */}
        <nav aria-label="Services proposés">
          <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="subtext text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span
                    className="w-0 group-hover:w-3 h-px transition-all duration-200"
                    style={{ background: 'linear-gradient(90deg, #7a57db, #33c2cc)' }}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 4 — Socials + contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
            Retrouvez-moi
          </h3>
          <ul className="flex flex-col gap-4">
            {socials.map(({ label, href, description, icon, copyToClipboard }) => {
              const isEmail = copyToClipboard === true;
              const content = (
                <>
                  <span className="mt-0.5 shrink-0 text-neutral-500 group-hover:text-lavender transition-colors duration-200">
                    {icon}
                  </span>
                  <span>
                    <span className="block text-sm text-neutral-300 group-hover:text-white transition-colors duration-200 font-medium">
                      {label}
                    </span>
                    <span className="block text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors duration-200">
                      {isEmail && copiedEmail ? 'Adresse copiée ✓' : description}
                    </span>
                  </span>
                </>
              );

              if (isEmail) {
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex items-start gap-3 group w-full text-left cursor-pointer"
                      aria-label={
                        copiedEmail ? 'Adresse email copiée' : `${label} — ${description}`
                      }
                    >
                      {content}
                    </button>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                    aria-label={`${label} — ${description}`}
                  >
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="bg-linear-to-r from-transparent via-neutral-800 to-transparent h-px w-full" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-neutral-600">
        <p>
          © {year}{' '}
          <a href={SITE_URL} className="hover:text-neutral-400 transition-colors">
            Dylan Groux
          </a>{' '}
          — Développeur full-stack Symfony &amp; React · Beauvais, Oise, Hauts-de-France
        </p>
        <p>
          Fait avec React &amp; Three.js ·{' '}
          <a href="#home" className="hover:text-neutral-400 transition-colors">
            Retour en haut ↑
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
