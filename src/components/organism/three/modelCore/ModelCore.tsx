import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Group } from "three";

interface ModelProps {
  source: string;
  sacle?: number;
  currentAction?: number;
  hasAnimation?: boolean;
}

const ModelCore = ({
  source,
  sacle,
  hasAnimation = false,
  currentAction = 4,
}: ModelProps) => {
  const modelRef = useRef<Group>(null);
  const model = useGLTF(`/model/${source}/scene.gltf`);
  const { actions, names } = useAnimations(model.animations, modelRef);

  useEffect(() => {
    if (hasAnimation) actions[names[currentAction]]?.reset().fadeIn(0.5).play();
  }, [currentAction]);

  useFrame(() => {
    if (!hasAnimation && modelRef.current) modelRef.current.rotation.y += 0.003;
  });

  return (
    <group ref={modelRef} scale={sacle}>
      <primitive object={model.scene} />
    </group>
  );
};

export default ModelCore;