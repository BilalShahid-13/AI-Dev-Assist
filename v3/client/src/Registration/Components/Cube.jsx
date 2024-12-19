import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
const Cube = () => {
  const meshRef = useRef();

  useFrame(() => {
    // meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef}
      rotation={[0, 0, 0]} >
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial
        color="white"
        transparent opacity={0} />
      <lineSegments>
        <edgesGeometry
          args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="white" linewidth={3} />
        {/* Adjusted line width */}
      </lineSegments>
    </mesh>
  );
}

export default Cube;
