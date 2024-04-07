import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { easing } from "maath";
import { Group } from "three";

const CameraLookAt = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<Group>(null);
  let zByDeviceSize = 8;
  if (window.innerWidth <= 576) zByDeviceSize = 11;
  else if (window.innerWidth >= 1200) zByDeviceSize = 7;

  useFrame((state, delta) => {
    if (ref.current) {
      easing.damp3(
        state.camera.position,
        [-state.pointer.x * 2, state.pointer.y + 1.5, zByDeviceSize],
        1.2,
        delta
      ); // Move camera
      state.camera.lookAt(0, 0, 0); // Look at center
    }
  });
  return <group ref={ref}>{children}</group>;
};

export default CameraLookAt;
