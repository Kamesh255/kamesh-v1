"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();

  // random particle positions
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.001;

    // breathing effect 🔥
    ref.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime) * 0.1
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function HomeRight() {
  return (
    <div style={{ width: "420px", height: "420px" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />

        <Particles />
      </Canvas>
    </div>
  );
}