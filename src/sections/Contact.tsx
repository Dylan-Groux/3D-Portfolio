import { motion } from 'motion/react';

import ContactForm from '../components/ContactForm';
import { CONTACT_EMAIL, GITHUB_URL } from '../constants';

const socials = [
  { label: 'GitHub', href: GITHUB_URL, display: GITHUB_URL.replace('https://', '') },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, display: CONTACT_EMAIL },
];

const Contact = () => {
  return (
    <section className="c-space mt-50 mb-20" id="contact">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5"
        style={{
          background: 'linear-gradient(135deg, rgba(40,43,75,0.7), rgba(31,30,57,0.7))',
        }}
      >
        {/* Colonne gauche — formulaire */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading mb-2">Travaillons ensemble.</h2>
            <p className="subtext mb-8 max-w-md">
              Vous avez un projet Symfony, une app React à construire, ou une mission
              freelance dans l&apos;Oise ? Discutons-en.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-3 mt-8 pt-8 border-t border-white/10"
          >
            {socials.map(({ label, href, display }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-xs text-neutral-500 w-16 shrink-0">{label}</span>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {display}
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Colonne droite — carte Google Maps */}
        <div
          className="relative hidden lg:flex flex-col items-center justify-center overflow-hidden"
          style={{
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            background:
              'linear-gradient(135deg, rgba(92,51,204,0.08), rgba(51,194,204,0.05))',
            minHeight: 480,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <iframe
              title="Localisation à Beauvais"
              src="https://www.google.com/maps?q=Beauvais,France&output=embed"
              className="w-full h-full grayscale-20 contrast-[1.1]"
              style={{ border: 0, minHeight: 480 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 60px rgba(20,20,35,0.5)',
              }}
            />
          </motion.div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Beauvais,France"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-xs text-white bg-black/60 backdrop-blur-sm border border-white/10 hover:bg-black/80 transition-colors whitespace-nowrap"
          >
            📍 Beauvais, France — Voir sur Google Maps
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
