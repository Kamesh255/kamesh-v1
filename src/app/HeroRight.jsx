"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function EnergyBall() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const r = 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.001;

    // mouse interaction 🔥
    ref.current.rotation.y += state.mouse.x * 0.02;
    ref.current.rotation.x += state.mouse.y * 0.02;
  });

  return (
    <>
      {/* particles */}
      <Points ref={ref} positions={positions}>
        <PointMaterial
          color="#093479"
          size={0.05}
          transparent
          depthWrite={false}
        />
      </Points>

      {/* core */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          emissive="#010f4e"
          emissiveIntensity={3}
          color="#1317fc"
        />
      </mesh>
    </>
  );
}

export default function HeroRight() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={5} />

        <EnergyBall />
      </Canvas>
    </div>
  );
}
