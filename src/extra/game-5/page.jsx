"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function WavePlane() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const { mouse } = state;

    const geometry = meshRef.current.geometry;
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      // 🌊 Wave animation
      const wave =
        Math.sin(x * 2 + time) * 0.2 +
        Math.cos(y * 2 + time) * 0.2;

      // 🖱️ Mouse ripple effect
      const dist = Math.sqrt(
        (x - mouse.x * 5) ** 2 + (y - mouse.y * 5) ** 2
      );

      const ripple = Math.exp(-dist * 2) * 0.5;

      position.setZ(i, wave + ripple);
    }

    position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <meshStandardMaterial
        color="#3da9fc"
        wireframe
      />
    </mesh>
  );
}

export default function WaveSurface() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [0, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <WavePlane />
      </Canvas>
    </div>
  );
}