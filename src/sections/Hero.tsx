import { lazy, Suspense, useState, useEffect } from 'react';

import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';

const HeroScene3D = lazy(() => import('../components/HeroScene3D'));

type HeroProps = {
  is3DEnabled: boolean;
  on3DReady: () => void;
  onProgress?: (progress: number) => void;
  disableReadySignal?: boolean;
};

const Hero = ({
  is3DEnabled,
  on3DReady,
  onProgress,
  disableReadySignal = false,
}: HeroProps) => {
  const [shouldMount3D, setShouldMount3D] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShouldMount3D(true);
    }, 250); // Délai de 0.25 seconde avant de monter le composant 3D
    return () => {
      window.clearTimeout(id); // Nettoyage du timeout si le composant se démonte avant la fin du délai
    };
  }, []); // Effet exécuté une seule fois au montage

  return (
    <section
      className="flex items-start justify-center md:items-start md:justify-start min-h-screen 
    overflow-hidden c-space"
      id="home"
    >
      <HeroText words={['Php', 'React', 'Symfony']} />
      <ParallaxBackground />
      {is3DEnabled && shouldMount3D && (
        <Suspense fallback={null}>
          <HeroScene3D
            on3DReady={on3DReady}
            onProgress={onProgress}
            disableReadySignal={disableReadySignal}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Hero;
