"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiNpm,
} from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

function IconsOrbit() {
  const groupRef = useRef();

  const icons = [
    <FaReact color="#61DBFB" size={35} />,
    <SiNextdotjs color="#999" size={35} />,
    <SiJavascript color="#f7df1e" size={35} />,
    <FaHtml5 color="#e34c26" size={35} />,
    <FaCss3Alt color="#264de4" size={35} />,
    <SiTailwindcss color="#38bdf8" size={35} />,
    <FaBootstrap color="#7952b3" size={35} />,
    <SiThreedotjs color="#616161" size={35} />,
    <FaGit color="#f1502f" size={35} />,
    <SiNpm color="#cb3837" size={35} />,
    <BsFiletypeScss color="#cd6799" size={35} />,
    <FaGithubSquare color="#463636" size={35} />,
    <VscVscode color="#029aff" size={35} />,
  ];

  const positions = useMemo(() => {
    return icons.map((_, i) => {
      const r = 2.8; // 🔥 spacing increase
      const theta = (i / icons.length) * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      return [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ];
    });
  }, []);

useFrame((state) => {
  const t = state.clock.getElapsedTime();

  // 🔥 slower rotation
  groupRef.current.rotation.y += 0.0008;
  groupRef.current.rotation.x += 0.0003;

  // 🔥 smoother mouse effect
  groupRef.current.rotation.y += state.mouse.x * 0.008;
  groupRef.current.rotation.x += state.mouse.y * 0.008;

  // 🔥 slow floating
  groupRef.current.children.forEach((child, i) => {
    child.position.y += Math.sin(t * 0.5 + i) * 0.001;
  });
});
  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <Html key={i} position={positions[i]} center transform sprite>
          <div
            style={{
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {icon}
          </div>
        </Html>
      ))}
    </group>
  );
}

function CenterImage() {
  return (
    <Html center>
      <img
        src="./image/kamesh.jpeg" // 👉 apni image daal
        alt="profile"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #3da9fc",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 10px"
        }}
      />
    </Html>
  );
}

export default function HeroRight() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.6} />

        <IconsOrbit />
        <CenterImage />
      </Canvas>
    </div>
  );
}