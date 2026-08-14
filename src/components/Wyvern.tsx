import { useGLTF, useAnimations } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
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
    // Il faut au moins les clips 0, 8 et 10 (utilisés plus bas) pour pouvoir animer.
    if (animations.length < 11) {
      return;
    }

    let isDisposed = false;
    const timeoutIds: number[] = [];
    const intervalIds: number[] = [];

    const safeTimeout = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!isDisposed) {
          fn();
        }
      }, ms);
      timeoutIds.push(id);
      return id;
    };

    const safeInterval = (fn: () => void, ms: number) => {
      const id = window.setInterval(() => {
        if (!isDisposed) {
          fn();
        }
      }, ms);
      intervalIds.push(id);
      return id;
    };

    const action10 = actions[animations[10]?.name];
    const action0 = actions[animations[0]?.name];
    const action8 = actions[animations[8]?.name];

    if (!action10 || !action0 || !action8) {
      return;
    }

    action10.reset();
    action0.reset();
    action8.reset();

    action10.setLoop(THREE.LoopOnce, 1);
    action10.clampWhenFinished = true;

    const mixer = action10.getMixer();

    const onFinished = (e: THREE.Event & { action?: THREE.AnimationAction }) => {
      if (isDisposed || e.action !== action10) {
        return;
      }

      action0.reset();
      action0.setLoop(THREE.LoopRepeat, Infinity);
      action0.fadeIn(0.5);
      action0.play();
    };

    const onLoop = (e: THREE.Event & { action?: THREE.AnimationAction }) => {
      if (isDisposed || e.action !== action0) {
        return;
      }

      loopCount.current++;
      if (loopCount.current < 8) {
        return;
      }

      action0.fadeOut(0.5);

      safeTimeout(() => {
        action0.stop();

        action8.reset();
        action8.setLoop(THREE.LoopOnce, 1);
        action8.clampWhenFinished = true;
        action8.fadeIn(0.5);
        action8.play();

        safeTimeout(() => {
          action8.paused = true;

          const material = materials.Dragon_Boss_05;
          material.transparent = true;
          let opacity = 1.0;

          safeInterval(() => {
            opacity -= 0.02;
            material.opacity = opacity;

            if (opacity <= 0 && group.current) {
              group.current.visible = false;
            }
          }, 50);
        }, 2100);
      }, 500);
    };

    loopCount.current = 0;
    mixer.addEventListener('finished', onFinished);
    mixer.addEventListener('loop', onLoop);
    action10.play();

    return () => {
      isDisposed = true;

      timeoutIds.forEach((id) => clearTimeout(id));
      intervalIds.forEach((id) => clearInterval(id));

      mixer.removeEventListener('finished', onFinished);
      mixer.removeEventListener('loop', onLoop);

      action10.stop();
      action0.stop();
      action8.stop();
    };
  }, [actions, animations, materials]);

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
