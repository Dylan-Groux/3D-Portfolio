import { Float, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as THREE from 'three';

import { Wyvern } from '../components/Wyvern';

type HeroScene3DProps = {
  on3DReady: () => void;
  onProgress?: (progress: number) => void;
  disableReadySignal?: boolean;
};

type RigProps = {
  isMobile: boolean;
};

function Rig({ isMobile }: RigProps) {
  return useFrame((state, delta) => {
    if (isMobile) {
      // Sur mobile : caméra centrée avec moins de mouvement
      easing.damp3(
        state.camera.position,
        [state.pointer.x, -5 + state.pointer.y, 12],
        0.5,
        delta,
      );
    } else {
      // Sur desktop : comportement original
      easing.damp3(
        state.camera.position,
        [5 + state.pointer.x * 2, -5 + state.pointer.y * 2, 10],
        0.5,
        delta,
      );
    }
  });
}

type SceneProgressProps = {
  onReady: () => void;
  onProgress?: (progress: number) => void;
  disableReadySignal: boolean;
};

// Seul point de la scène qui interroge le LoadingManager de Three.js. On y
// dérive à la fois la progression (pour la barre de chargement) et le signal
// "prêt", pour n'avoir qu'un seul abonnement à useProgress dans toute l'app.
function SceneProgress({ onReady, onProgress, disableReadySignal }: SceneProgressProps) {
  const { active, progress } = useProgress();
  const notifiedRef = useRef(false);

  useEffect(() => {
    onProgress?.(progress);
  }, [progress, onProgress]);

  useEffect(() => {
    if (disableReadySignal || notifiedRef.current) {
      return;
    }

    if (!active && progress >= 100) {
      notifiedRef.current = true;
      onReady();
    }
  }, [active, disableReadySignal, onReady, progress]);

  return null;
}

const HeroScene3D = ({
  on3DReady,
  onProgress,
  disableReadySignal = false,
}: HeroScene3DProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isContextLost, setIsContextLost] = useState(false);

  useEffect(() => {
    if (isContextLost) {
      console.warn(
        'WebGL context lost. Please refresh the page to restore the 3D scene.',
      );
    }
  }, [isContextLost]);

  const onCreated = ({ gl }: { gl: THREE.WebGLRenderer }) => {
    const canvas = gl.domElement;

    const onLost = (event: Event) => {
      event.preventDefault();
      setIsContextLost(true);
    };

    const onRestored = () => {
      setIsContextLost(false);
    };
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);
  };

  return (
    <figure className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
      {!isContextLost && (
        <Canvas
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          onCreated={onCreated}
          camera={{
            position: isMobile ? [0, -5, 12] : [3, -5, 10],
            fov: isMobile ? 50 : 35,
          }}
        >
          <Float>
            <ambientLight intensity={10} />
            <directionalLight position={[1, 1, 0]} intensity={2} color={'purple'} />
            <Wyvern
              scale={isMobile ? [4, 4, 4] : [5, 5, 5]}
              position={isMobile ? [0, -6.5, 0] : [3, -6.5, 0]}
            />
          </Float>
          <Rig isMobile={isMobile} />
          <SceneProgress
            onReady={on3DReady}
            onProgress={onProgress}
            disableReadySignal={disableReadySignal}
          />
        </Canvas>
      )}
    </figure>
  );
};

export default HeroScene3D;
