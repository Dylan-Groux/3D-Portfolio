import { FlipWords } from './FlipWords';
import { motion } from 'motion/react';
import { HeroTextProps } from './_type';

const HeroText = ({ words = ['Php', 'React', 'Symfony'] }: HeroTextProps) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl 
    bg-clip-text"
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          Salut ! je suis Dylan
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.2 }}
          >
            Un développeur de
          </motion.p>
          <motion.p
            className="text-4xl  font-medium text-neutral-300"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.4 }}
          >
            Solution Web
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.6 }}
          >
            <FlipWords words={words} className="font-black text-white text-8xl" />
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.2 }}
        >
          Salut ! Je suis Dylan
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.3 }}
          >
            Un développeur
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1.4 }}
          >
            <motion.p
              className="text-4xl font-black text-neutral-300"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1.5 }}
            >
              Solution Web
            </motion.p>
            <FlipWords words={words} className="font-black text-white text-6xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
