import { useEffect, useMemo, useState } from 'react';
import { useProgress } from '@react-three/drei';
import Navbar from './sections/Navbar.js';
import Hero from './sections/Hero.js';
import About from './sections/About.js';
import Projects from './sections/Projects.js';
import AppLoader from './components/AppLoader';

const MIN_BOOT_DELAY_MS = 5000;
const MAX_3D_WAIT_MS = 8000;
const DEBUG_LOADER_LOCK =
  import.meta.env.DEV &&
  new URLSearchParams(window.location.search).get('loaderlock') === '1';

const App = () => {
  const { progress } = useProgress();
  const [isBooting, setIsBooting] = useState(true);
  const [minDelayDone, setMinDelayDone] = useState(false);
  const [is3DReady, setIs3DReady] = useState(false);
  const [is3DEnabled, setIs3DEnabled] = useState(true);

  useEffect(() => {
    if (DEBUG_LOADER_LOCK) {
      console.log('DEBUG: Loader lock is enabled. The loader remains visible.');
    }
  }, []);

  useEffect(() => {
    const connection =
      typeof navigator !== 'undefined'
        ? (
            navigator as Navigator & {
              connection?: { effectiveType?: string; saveData?: boolean };
              deviceMemory?: number;
            }
          ).connection
        : undefined;

    const effectiveType = connection?.effectiveType ?? '';
    const weakNetwork = connection?.saveData || /(^2g$|slow-2g)/i.test(effectiveType);
    const lowMemory =
      typeof navigator !== 'undefined' &&
      typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory ===
        'number' &&
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;

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

    setIs3DEnabled(hasWebGL && !weakNetwork && !lowMemory);
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

  useEffect(() => {
    if (DEBUG_LOADER_LOCK) {
      return;
    }

    if (!minDelayDone) {
      return;
    }

    if (!is3DEnabled || is3DReady) {
      setIsBooting(false);
    }
  }, [is3DEnabled, is3DReady, minDelayDone]);

  const bootProgress = useMemo(() => {
    if (!is3DEnabled) {
      return 100;
    }
    return Math.round(progress);
  }, [is3DEnabled, progress]);

  const shouldShowLoader = DEBUG_LOADER_LOCK || isBooting;

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero
        is3DEnabled={is3DEnabled}
        on3DReady={() => setIs3DReady(true)}
        disableReadySignal={DEBUG_LOADER_LOCK}
      />
      <About />
      <Projects />
      {shouldShowLoader && (
        <AppLoader progress={bootProgress} is3DEnabled={is3DEnabled} />
      )}
    </div>
  );
};

export default App;
