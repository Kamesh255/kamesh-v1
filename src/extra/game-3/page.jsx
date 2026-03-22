"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Balls() {
  const groupRef = useRef();

  const balls = useMemo(() => {
    return new Array(20).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ],
      velocity: new THREE.Vector3(),
    }));
  }, []);

  useFrame((state) => {
    const { mouse } = state;

    balls.forEach((ball, i) => {
      const mesh = groupRef.current.children[i];

      // Mouse position (approx center)
      const target = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);

      const current = new THREE.Vector3(
        mesh.position.x,
        mesh.position.y,
        mesh.position.z
      );

      const direction = target.clone().sub(current);
      const distance = direction.length();

      // Attraction / Repulsion
      if (distance < 2) {
        direction.normalize().multiplyScalar(-0.05); // repel
      } else {
        direction.normalize().multiplyScalar(0.01); // attract
      }

      ball.velocity.add(direction);
      ball.velocity.multiplyScalar(0.95); // damping

      mesh.position.add(ball.velocity);

      // Floating effect
      mesh.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002;
    });
  });

  return (
    <group ref={groupRef}>
      {balls.map((ball, i) => (
        <mesh key={i} position={ball.position}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#3da9fc" />
        </mesh>
      ))}
    </group>
  );
}

export default function MagneticBalls() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        <Balls />
      </Canvas>
    </div>
  );
}