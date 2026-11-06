import { motion } from 'motion/react';

import { myArticles, YOUTUBE_URL } from '../constants';

const pillars = [
  {
    title: 'Comprendre le web',
    text: "Comment une page arrive jusqu'à ton écran, du DNS au navigateur.",
  },
  {
    title: 'Back & front',
    text: 'PHP, Symfony, JavaScript, React : ce qui tourne où, et pourquoi.',
  },
  {
    title: 'Cours interactifs',
    text: 'Chaque épisode a son cours compagnon, avec des démos à manipuler.',
  },
];

const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 28 20" className={className} aria-hidden="true">
    <rect width="28" height="20" rx="5" fill="#ff0033" />
    <path d="M11 5.5v9l8-4.5z" fill="#fff" />
  </svg>
);

const Youtube = () => {
  const latestCourse = myArticles[0];

  return (
    <section className="c-space mt-50" id="youtube">
      <div
        className="relative rounded-2xl overflow-hidden border border-white/5 p-8 md:p-12"
        style={{
          background:
            'radial-gradient(circle at 100% 0%, rgba(255,0,51,0.14), transparent 55%), linear-gradient(135deg, rgba(40,43,75,0.7), rgba(31,30,57,0.7))',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <PlayIcon className="w-9 h-auto" />
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Chaîne YouTube
              </span>
            </div>
            <h2 className="text-heading mb-3">DevDecod3d</h2>
            <p className="subtext max-w-md">
              Je décode le développement web en vidéo : l&apos;histoire des outils, ce qui
              se passe vraiment sous le capot, et les pièges qu&apos;on croise en
              production.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: '#ff0033' }}
              >
                <svg viewBox="0 0 10 10" className="size-3" aria-hidden="true">
                  <path d="M2 1v8l7-4z" fill="currentColor" />
                </svg>
                Voir la chaîne
              </a>
              <a
                href={`${YOUTUBE_URL}?sub_confirmation=1`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-neutral-300 border border-white/15 hover:text-white hover:border-white/40 transition-colors"
              >
                S&apos;abonner
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {pillars.map(({ title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4"
              >
                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <p className="subtext text-sm">{text}</p>
              </div>
            ))}

            {latestCourse && (
              <a
                href={latestCourse.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-[#ff0033]/30 bg-[#ff0033]/[0.06] px-5 py-4 hover:border-[#ff0033]/60 transition-colors"
              >
                <span className="text-xs uppercase tracking-widest text-[#ff6680]">
                  Dernier cours compagnon
                </span>
                <span className="flex items-center justify-between gap-3 mt-1">
                  <span className="text-sm font-semibold text-white">
                    {latestCourse.title}
                  </span>
                  <span className="text-xs text-neutral-400 group-hover:text-white transition-colors">
                    Lire →
                  </span>
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
