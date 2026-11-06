import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useCallback, type MouseEvent } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

function useTilt() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 22,
  });
  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width - 0.5);
      rawY.set((e.clientY - r.top) / r.height - 0.5);
    },
    [rawX, rawY],
  );
  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);
  return { rotateX, rotateY, onMove, onLeave };
}

/* Card 1 — Identité */
const Card1 = () => {
  const { rotateX, rotateY, onMove, onLeave } = useTilt();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="grid-1 grid-default-color flex flex-col justify-end relative overflow-hidden cursor-default"
      custom={0}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        onLeave();
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <div className="absolute inset-0">
        <motion.img
          src="assets/grid-5-meanddragon-v2.jpg"
          alt=""
          className="w-full h-full object-cover object-[center_40%]"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ boxShadow: 'inset 0 0 0 1.5px rgba(122,87,219,0.7)' }}
      />
      <motion.div
        className="relative z-10 p-4 sm:p-5"
        style={{ transform: 'translateZ(18px)' }}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35 }}
      >
        <p
          className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1.5"
          style={{ color: '#c4b5fd' }}
        >
          Développeur Full-Stack
        </p>
        <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-1">Dylan Groux</h3>
        <p className="subtext1 text-xs sm:text-sm mb-2 sm:mb-3">
          Symfony · React · API REST
        </p>
        <motion.div
          className="flex items-center gap-2"
          animate={{ opacity: hovered ? 1 : 0.6 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-mint"
            style={{ boxShadow: '0 0 5px #57db96' }}
          />
          <span className="text-xs text-mint">Beauvais, Oise</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* Card 2 — Stack technique */
const TECHS = [
  { name: 'Symfony', logo: 'assets/language/symfony.webp' },
  { name: 'React', logo: 'assets/language/react.webp' },
  { name: 'PHP', logo: 'assets/language/php.webp' },
  { name: 'TypeScript', logo: 'assets/language/typescript.webp' },
  { name: 'JavaScript', logo: 'assets/language/javascript.webp' },
  { name: 'CSS', logo: 'assets/language/css.webp' },
];

const Card2 = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div
      className="grid-2 grid-default-color flex flex-col justify-between p-4 sm:p-5 relative overflow-hidden"
      custom={1}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 80%, rgba(92,51,204,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <p
          className="text-[10px] font-medium tracking-widest uppercase mb-0.5"
          style={{ color: '#33c2cc' }}
        >
          Stack principale
        </p>
        <h3 className="text-lg sm:text-xl font-bold">Technologies</h3>
      </div>

      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 relative z-10">
        {TECHS.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-xl cursor-default"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
            animate={{
              background:
                hoveredTech === tech.name
                  ? 'rgba(122,87,219,0.2)'
                  : 'rgba(255,255,255,0.04)',
            }}
            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <motion.img
              src={tech.logo}
              alt={tech.name}
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              animate={{ scale: hoveredTech === tech.name ? 1.2 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <span className="text-[9px] sm:text-[10px] text-neutral-400 font-medium leading-tight text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

/* Card 4 — Focus slider */
const FOCUSES = [
  {
    key: 'frontend',
    label: 'Frontend',
    color: '#33c2cc',
    gradient: 'linear-gradient(135deg, #33c2cc, #57db96)',
    image: 'assets/grid-7-codingdragon.webp',
    skills: [
      'React & TypeScript',
      'Next.js (App Router)',
      'UI Design System (Tailwind, Radix UI)',
      'Data Visualization (Recharts)',
      'Expériences 3D (Three.js)',
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    color: '#7a57db',
    gradient: 'linear-gradient(135deg, #5c33cc, #7a57db)',
    image: 'assets/grid-4-architectedragon.webp',
    skills: [
      'API REST (Node.js / Express)',
      'Authentification JWT',
      'Architecture MVC (PHP OOP)',
      'Tests Automatisés (PHPUnit, Vitest)',
      'Sécurité (CSRF / CSP)',
    ],
  },
  {
    key: 'fullstack',
    label: 'Fullstack',
    color: '#ea4884',
    gradient: 'linear-gradient(135deg, #ca2f8c, #7a57db)',
    image: 'assets/grid-6-codingdragon.webp',
    skills: [
      'Applications de A à Z',
      'Architecture API + Client',
      'Docker & Conteneurisation',
      'Sécurité Web Transverse',
      'Intégrations Tierces (Email, PDF)',
    ],
  },
] as const;

type FocusKey = (typeof FOCUSES)[number]['key'];

const Card4 = () => {
  const [active, setActive] = useState<FocusKey>('backend');
  const focus = FOCUSES.find((f) => f.key === active)!;

  return (
    <motion.div
      className="grid-4 grid-special-color flex flex-col relative overflow-hidden"
      custom={2}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {/* Images de fond, une par focus */}
      {FOCUSES.map((f) => (
        <motion.div
          key={f.key}
          className="absolute pointer-events-none"
          style={{ inset: '-1px' }}
          animate={{ opacity: active === f.key ? 1 : 0 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src={f.image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transform: 'scale(1.12)',
              transformOrigin: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(31,30,57,0.93) 40%, rgba(31,30,57,0.25) 100%)',
            }}
          />
        </motion.div>
      ))}

      {/* Barre d'accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none z-10"
        animate={{ background: focus.gradient }}
        transition={{ duration: 0.4 }}
      />

      {/* Onglets */}
      <div className="relative z-10 flex gap-1 p-2.5 sm:p-3 pb-0">
        {FOCUSES.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className="relative flex-1 py-1.5 px-1 sm:px-2 rounded-lg text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase cursor-pointer"
            style={{ color: active === f.key ? '#fff' : 'rgba(255,255,255,0.35)' }}
          >
            {active === f.key && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-lg"
                style={{ background: focus.gradient, opacity: 0.25 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Contenu glissant */}
      <div className="relative z-10 flex-1 overflow-hidden">
        <motion.div
          key={active}
          className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 pt-2 sm:pt-3"
          initial={{ x: 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <div>
            <p
              className="text-[9px] sm:text-xs font-medium tracking-widest uppercase mb-0.5"
              style={{ color: focus.color }}
            >
              Focus
            </p>
            <h3 className="text-base sm:text-lg font-bold">{focus.label}</h3>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {focus.skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full font-medium"
                style={{
                  background: `${focus.color}18`,
                  border: `1px solid ${focus.color}44`,
                  color: focus.color,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.22 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Indicateurs */}
          <div className="flex gap-1.5 mt-1">
            {FOCUSES.map((f) => (
              <motion.div
                key={f.key}
                className="h-0.5 rounded-full cursor-pointer"
                animate={{
                  width: active === f.key ? 18 : 5,
                  background: active === f.key ? focus.color : 'rgba(255,255,255,0.2)',
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(f.key)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* Card 5 — Localisation & Stats */
const STATS = [
  { value: '1 an', label: 'Alternance' },
  { value: '7+', label: 'Projets perso.' },
  { value: 'React', label: 'Stack principale' },
];

const Card5 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="grid-5 grid-default-color relative overflow-hidden"
      custom={3}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Illustration — masquée sur mobile, visible sm+ */}
      <div className="hidden sm:block absolute right-0 top-0 h-full w-2/5 pointer-events-none">
        <motion.img
          src="assets/grid-1-codingdragonn.webp"
          alt=""
          className="h-full w-full object-cover object-left"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-storm to-transparent" />
      </div>

      {/* Contenu — pleine largeur sur mobile, 3/5 sur sm+ */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-5 w-full sm:w-3/5">
        <p
          className="text-[10px] font-medium tracking-widest uppercase mb-1"
          style={{ color: '#57db96' }}
        >
          Localisation &amp; disponibilité
        </p>
        <h3 className="text-base sm:text-xl font-bold mb-1">Basé à Beauvais</h3>
        <p className="subtext text-[11px] sm:text-xs leading-relaxed max-w-sm">
          Freelance dans l&apos;Oise — disponible en présentiel Hauts-de-France et à
          distance.
        </p>

        <div className="flex gap-4 sm:gap-6 flex-wrap mt-2 sm:mt-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
            >
              <p
                className="text-lg sm:text-2xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #7a57db, #33c2cc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </p>
              <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const About = () => (
  <section className="c-space relative overflow-visible mt-50" id="about">
    <motion.h2
      className="text-heading relative z-20"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      À propos
    </motion.h2>

    {/*
      Mobile  (< sm)  : 1 col, hauteurs fixes par card
      Paysage / sm    : 2 cols, auto-rows-[13rem], card1 row-span-2
      Desktop (md+)   : 6 cols, auto-rows-[18rem], layout original
    */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6
                 sm:auto-rows-[13rem] md:auto-rows-[18rem]
                 gap-3 sm:gap-4 relative z-20 mt-5 sm:mt-6"
      style={{ perspective: 1000 }}
    >
      <Card1 />
      <Card2 />
      <Card4 />
      <Card5 />
    </div>
  </section>
);

export default About;
