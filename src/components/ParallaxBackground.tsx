import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const moutain3Y = useTransform(x, [0, 1], ['0%', '90%']);
  const moutain2Y = useTransform(x, [0, 1], ['0%', '50%']);
  const moutain1Y = useTransform(x, [0, 1], ['0%', '30%']);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: 'url(/assets/sky.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        ></div>
        <motion.div
          className="absolute inset-0 -z-50"
          style={{
            backgroundImage: 'url(/assets/mountains-32.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: moutain3Y,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: 'url(/assets/moutains-3.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: moutain2Y,
          }}
        />
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: 'url(/assets/mountain-2.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: moutain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
