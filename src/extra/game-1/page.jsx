"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";

// 🎯 React Icons
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGit } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiGreensock } from "react-icons/si";

// 🎯 Skills with icons
const skills = [
  { icon: <FaReact color="#61DBFB" size={40} /> },
  { icon: <SiNextdotjs color="#070707" size={40} /> },
  { icon: <SiJavascript color="#f7df1e" size={40} /> },
  { icon: <FaHtml5 color="#e34c26" size={40} /> },
  { icon: <FaCss3Alt color="#264de4" size={40} /> },
  { icon: <SiTailwindcss color="#38bdf8" size={40} /> },
  { icon: <FaBootstrap color="#7952b3" size={40} /> },
  { icon: <SiGreensock color="#88ce02" size={40} /> },
  { icon: <SiThreedotjs color="#070707" size={40} /> },
  { icon: <FaGit color="#f1502f" size={40} /> }, 
  { icon: <SiNpm color="#0a0068" size={40} /> },

];

// 📌 Sphere positions
function generateSpherePositions(count, radius = 3) {
  const positions = [];

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    positions.push([x, y, z]);
  }

  return positions;
}

// 🎯 Icons Cloud
function SkillsCloud() {
  const groupRef = useRef();
  const positions = useMemo(
    () => generateSpherePositions(skills.length),
    []
  );

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <mesh key={index} position={positions[index]}>
          <Html center>
            <div style={styles.iconBox}>
              {skill.icon}
            </div>
          </Html>
        </mesh>
      ))}
    </group>
  );
}

// 🎮 MAIN HERO
export default function Hero3DIcons() {
  return (
 

    
      <div style={styles.canvas}>
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={1} />

          <SkillsCloud />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
   
  );
}

// 🎨 Styles
const styles = {
 
  canvas: {
    width: "50%",
    height: "500px",
  },
  iconBox: {
    transition: "0.3s",
    cursor: "pointer",
  },
};