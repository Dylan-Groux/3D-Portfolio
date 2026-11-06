import { useEffect, useMemo, useState, useCallback } from 'react';

import AppLoader from './components/AppLoader';
import About from './sections/About.js';
import Contact from './sections/Contact.js';
import Content from './sections/Content.js';
import Footer from './sections/Footer.js';
import Hero from './sections/Hero.js';
import Navbar from './sections/Navbar.js';
import Projects from './sections/Projects.js';
import Youtube from './sections/Youtube.js';

const MIN_BOOT_DELAY_MS = 5000;
const MAX_3D_WAIT_MS = 8000;
const DEBUG_LOADER_LOCK =
  import.meta.env.DEV &&
  new URLSearchParams(window.location.search).get('loaderlock') === '1';

type NavigatorConnection = Navigator & {
  connection?: { effectiveType?: string; saveData?: boolean };
  deviceMemory?: number;
};

// Détection des capacités de l'appareil pour la scène 3D. Calculée une seule
// fois, en dehors du rendu, pour que `is3DEnabled` soit correct dès le tout
// premier rendu et n'engage jamais le chargement lazy de Three.js sur un
// appareil qui va de toute façon être basculé en mode léger.
function detectIs3DCapable(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const connection = (navigator as NavigatorConnection).connection;
  const effectiveType = connection?.effectiveType ?? '';
  const weakNetwork = connection?.saveData || /(^2g$|slow-2g)/i.test(effectiveType);

  const deviceMemory = (navigator as NavigatorConnection).deviceMemory;
  const lowMemory = typeof deviceMemory === 'number' && deviceMemory <= 4;

  const hasWebGL = (() => {
    try {
      const canvas = document.createElement('canvas');
      return Boolean(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
      );
    } catch {
      return false;
    }
  })();

  return hasWebGL && !weakNetwork && !lowMemory;
}

const App = () => {
  const [progress, setProgress] = useState(0);
  const [minDelayDone, setMinDelayDone] = useState(false);
  const [is3DReady, setIs3DReady] = useState(false);
  const [is3DEnabled] = useState(detectIs3DCapable);
  const on3DReady = useCallback(() => setIs3DReady(true), []);

  useEffect(() => {
    if (DEBUG_LOADER_LOCK) {
      console.log('DEBUG: Loader lock is enabled. The loader remains visible.');
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setMinDelayDone(true), MIN_BOOT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!is3DEnabled) {
      return;
    }

    const timer = window.setTimeout(() => setIs3DReady(true), MAX_3D_WAIT_MS);
    return () => window.clearTimeout(timer);
  }, [is3DEnabled]);

  const bootProgress = useMemo(() => {
    if (!is3DEnabled) {
      return 100;
    }
    return Math.round(progress);
  }, [is3DEnabled, progress]);

  const shouldShowLoader =
    DEBUG_LOADER_LOCK || !minDelayDone || (is3DEnabled && !is3DReady);

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero
          is3DEnabled={is3DEnabled}
          on3DReady={on3DReady}
          onProgress={setProgress}
          disableReadySignal={DEBUG_LOADER_LOCK}
        />
        <About />
        <Projects />
        <Content />
        <Youtube />
        <Contact />
        {shouldShowLoader && (
          <AppLoader progress={bootProgress} is3DEnabled={is3DEnabled} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
