"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";

// 🎯 Targets Component (Canvas ke andar)
function Targets({ setScore, playing }) {
  const groupRef = useRef();

  const [targets, setTargets] = useState(
    new Array(5).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 2,
      ],
    }))
  );

  // 🎯 Floating animation (yaha useFrame allowed hai)
  useFrame((state) => {
    groupRef.current.children.forEach((mesh, i) => {
      mesh.position.y += Math.sin(state.clock.elapsedTime + i) * 0.01;
    });
  });

  const handleClick = (index) => {
    if (!playing) return;

    setScore((prev) => prev + 1);

    // Replace clicked target
    setTargets((prev) =>
      prev.map((t, i) =>
        i === index
          ? {
              position: [
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 2,
              ],
            }
          : t
      )
    );
  };

  return (
    <group ref={groupRef}>
      {targets.map((t, i) => (
        <mesh key={i} position={t.position} onClick={() => handleClick(i)}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#ef4565" />
        </mesh>
      ))}
    </group>
  );
}

// 🎮 Main Game Component
export default function ShootingGame() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [playing, setPlaying] = useState(false);

  const startGame = () => {
    setScore(0);
    setTime(30);
    setPlaying(true);
  };

  // ✅ FIXED TIMER (useEffect)
  useEffect(() => {
    if (!playing) return;

    if (time === 0) {
      setPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, playing]);

  return (
    <div style={styles.container}>
      <h2>🎯 Shooting Game</h2>

      {!playing && (
        <button onClick={startGame} style={styles.button}>
          Start Game
        </button>
      )}

      <p>Score: {score}</p>
      <p>Time: {time}s</p>

      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />

        <Targets setScore={setScore} playing={playing} />
      </Canvas>
    </div>
  );
}

const styles = {
  container: {
    height: "500px",
    width: "100%",
    textAlign: "center",
    background: "#0f172a",
    color: "#fff",
    borderRadius: "10px",
    paddingTop: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#3da9fc",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
};