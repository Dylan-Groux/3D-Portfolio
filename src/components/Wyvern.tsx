import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { WyvernProps } from './_type';

export function Wyvern(props: WyvernProps) {
  const group = useRef<THREE.Group | null>(null);
  const loopCount = useRef(0); // Compteur de répétitions
  const { nodes, materials, animations } = useGLTF(
    '/models/mega_wyvern-optimized.glb',
  ) as unknown as {
    nodes: {
      GLTF_created_0_rootJoint: THREE.Object3D;
      Object_82: THREE.SkinnedMesh;
    };
    materials: {
      Dragon_Boss_05: THREE.Material & { opacity: number; transparent: boolean };
    };
    animations: THREE.AnimationClip[];
  };
  const { actions } = useAnimations(animations, group);
  const object82 = nodes.Object_82;

  useEffect(() => {
    // LOG toutes les animations disponibles
    console.log(
      '🎬 Animations disponibles:',
      animations.map((anim) => anim.name),
    );
    console.log("📊 Nombre d'animations:", animations.length);

    if (animations.length > 10) {
      // 1. Joue l'animation 10 UNE SEULE FOIS
      const action10 = actions[animations[10].name];
      const action0 = actions[animations[0].name];
      const action8 = actions[animations[8].name];

      if (!action10 || !action0 || !action8) return;

      // Configure l'animation 10 pour ne jouer qu'une fois
      action10.setLoop(THREE.LoopOnce, 1); // LoopOnce = joue 1 fois
      action10.clampWhenFinished = true; // Reste sur la dernière frame

      // 2. Écoute quand les animations se terminent ou bouclent
      const mixer = action10.getMixer();

      const onFinished = (e: THREE.Event & { action?: THREE.AnimationAction }) => {
        if (e.action === action10) {
          console.log('✅ Animation 10 terminée, lance animation 0');

          // 3. Lance l'animation 0 en boucle
          loopCount.current = 0; // Réinitialise le compteur
          action0.reset();
          action0.setLoop(THREE.LoopRepeat, Infinity); // Boucle infinie
          action0.fadeIn(0.5);
          action0.play();
        }
      };

      // Event qui se déclenche à chaque fin de boucle
      const onLoop = (e: THREE.Event & { action?: THREE.AnimationAction }) => {
        if (e.action === action0) {
          loopCount.current++;
          console.log(`🔁 Animation 0 : boucle ${loopCount.current}/8`);

          // Après 8 répétitions, lance l'animation 8
          if (loopCount.current >= 8) {
            console.log('✅ 8 boucles terminées, lance animation 8');

            action0.fadeOut(0.5);
            setTimeout(() => {
              action0.stop();

              // Lance l'animation 8 en boucle infinie
              action8.reset();
              action8.setLoop(THREE.LoopOnce, 1); // Joue 1 fois
              action8.clampWhenFinished = true;
              action8.fadeIn(0.5);
              action8.play();
              setTimeout(() => {
                action8.paused = true;

                const material = materials.Dragon_Boss_05;
                material.transparent = true;

                let opacity = 1.0;
                const fadeInterval = setInterval(() => {
                  opacity -= 0.02;
                  material.opacity = opacity;

                  if (opacity <= 0) {
                    clearInterval(fadeInterval);
                    if (group.current) {
                      group.current.visible = false;
                    }
                  }
                }, 50); // Intervalle de 50ms
              }, 2100); // Met en pause après 2.1 secondes
            }, 500); // Attend la fin du fadeOut
          }
        }
      };

      mixer.addEventListener('finished', onFinished);
      mixer.addEventListener('loop', onLoop); // Écoute les boucles

      // Lance l'animation 10
      console.log('▶️ Animation 10 lancée:', animations[10].name);
      action10.play();

      // Cleanup : retire l'event listener quand le composant se démonte
      return () => {
        mixer.removeEventListener('finished', onFinished);
        mixer.removeEventListener('loop', onLoop);
      };
    }
  }, [actions, animations]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.997}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_0"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={46.949}
              >
                <group
                  name="Dragon_Boss_05fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Dragon_Boss_05_4">
                        <group name="Object_5_5">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                              name="Object_82"
                              geometry={object82.geometry}
                              material={materials.Dragon_Boss_05}
                              skeleton={object82.skeleton}
                            />
                            <group name="Object_8_8_correction">
                              <group name="Object_8_8" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/mega_wyvern-optimized.glb');
