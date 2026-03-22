"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef();

  // Generate particles
  const count = 1500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10; // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }

    return arr;
  }, []);

  useFrame((state) => {
    const { mouse } = state;

    if (pointsRef.current) {
      // Smooth rotation based on mouse
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x = mouse.y * 0.5;
      pointsRef.current.rotation.y = mouse.x * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#3da9fc"
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleGalaxy() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}