import { motion } from 'motion/react';
import { useState } from 'react';
import LayoutWyvvern from '../components/ui/LayoutWyvvern';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="c-space section-spacing relative overflow-visible" id="about">
      <h2 className="text-heading relative z-20">About Section</h2>
      <LayoutWyvvern />
      {/* Grille des cartes */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] relative z-20">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden group about-image-container">
          <div className="manga-overlay"></div>
          <img
            src="assets/grid-5-meanddragon.png"
            alt=""
            className="about-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.25] md:scale-[1.85] xl:scale-[1.25]"
          />
          <div className="z-10 md:hover:bg-black/70 md:transition-colors md:duration-500 md:p-4 md:rounded-md">
            <h3 className="headtext">Dylan — Développeur Full-Stack</h3>
            <p className="subtext1">Symfony • React • API REST</p>
            <p className="subtext2">10+ projets personnels</p>
          </div>
        </div>
        {/* Grid 2 - Stack Technique */}
        <div className="grid-default-color grid-2 relative overflow-hidden group about-image-container">
          <div className="manga-overlay"></div>
          <img
            src="assets/grid-2-languagedragon.png"
            alt=""
            className="about-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.95] md:scale-[1.85]"
          ></img>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-sm transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-center z-10 p-6">
              <h3 className="headtext mb-3">Stack Principale</h3>
              <p className="subtext1 text-lg">PHP • Symfony • React</p>
            </div>
          </div>
        </div>
        {/* Grid 3 - Effet tache d'encre */}
        <div
          className="flex items-end grid-black-color grid-3 cursor-pointer about-image-container relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="manga-overlay"></div>

          {/* Image de base */}
          <img
            src="assets/grid-3-ctadragon.png"
            alt=""
            className="about-image absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 scale-[1.75] md:scale-[1.75] xl:scale-[1.45]"
          />

          {/* Effet tache d'encre qui s'étend depuis le centre */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{
              clipPath: isHovered ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
            style={{
              background:
                'linear-gradient(135deg, rgba(92, 51, 204, 0.95), rgba(51, 194, 204, 0.95))',
            }}
          >
            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <h3 className="headtext mb-4">Contactez-moi</h3>
              <p className="subtext2 mb-6">Discutons de votre prochain projet</p>
              <a href="#contact" className="btn">
                Contactez-moi
              </a>
            </motion.div>
          </motion.div>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4 relative overflow-hidden group about-image-container">
          <div className="manga-overlay"></div>
          <img
            src="assets/grid-4-architectedragon.png"
            alt=""
            className="about-image absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.75] md:scale-[2.25] xl:scale-[2.0]"
          ></img>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-sm transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-center z-10 p-6">
              <h3 className="headtext mb-3">Focus Back-End</h3>
              <p className="subtext1 mb-2">Symfony • API REST • Clean Code</p>
              <p className="subtext2">
                Appétence pour l&apos;architecture et la testabilité
              </p>
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative overflow-hidden p-0!">
          <div className="flex flex-col md:flex-row h-full">
            {/* Partie Image */}
            <div className="hidden w-full h-48 md:block md:w-1/2 md:h-full relative overflow-hidden about-image-container">
              <div className="manga-overlay"></div>
              <img
                src="assets/grid-1-codingdragonn.png"
                alt=""
                className="about-image absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] md:scale-[2.0] xl:scale-[1.5]"
              ></img>
            </div>
            {/* Partie Texte */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 xl:p-10 z-10">
              <div>
                <h3 className="headtext mb-3">Réalisations</h3>
                <p className="subtext1 text-base md:text-base mb-3 md:mb-4">
                  Projets full-stack & polyvalents
                </p>
                <ul className="subtext2 text-xs md:text-sm space-y-1.5 md:space-y-2">
                  <li>• Plateforme de mise en relation (Symfony)</li>
                  <li>• API REST personnalisée (TypeScript)</li>
                  <li>• Médiathèque • Bots Python • Générateurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
