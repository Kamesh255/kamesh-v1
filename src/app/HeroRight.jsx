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

function IconsOrbit({ occluderRef }) {
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
      const r = 3.2; // 🔥 thoda bada radius (better feel)
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
    if (!groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // 🔥 smooth rotation
    groupRef.current.rotation.y += 0.0008;
    groupRef.current.rotation.x += 0.0003;

    groupRef.current.rotation.y += state.mouse.x * 0.006;
    groupRef.current.rotation.x += state.mouse.y * 0.006;

    groupRef.current.children.forEach((child, i) => {
      if (!child) return;

      const base = positions[i];

      // 🔥 floating
      child.position.y =
        base[1] + Math.sin(t * 0.6 + i) * 0.12;

      // 🔥 depth scale
      const z = base[2];
      const scale = 1 + z * 0.12;
      child.scale.set(scale, scale, scale);

      // 🔥 SAFE DOM ACCESS
      const el = child.children[0];
      if (el && el.style) {
        // opacity
        const opacity = 0.4 + (z + 3) / 6;
        el.style.opacity = opacity;

        // blur + glow
        const blur = z < 0 ? Math.abs(z) * 2 : 0;
        el.style.filter = `
          blur(${blur}px)
          drop-shadow(0 0 8px rgba(61,169,252,0.5))
        `;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <Html
          key={i}
          position={positions[i]}
          center
          transform
          sprite
          occlude={[occluderRef]}
        >
          <div
            style={{
              cursor: "pointer",
              transition: "0.3s",
              willChange: "transform",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.4)")
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

function CenterImage({ occluderRef }) {
  return (
    <>
      {/* 🔥 smaller occluder (late hide effect) */}
      <mesh ref={occluderRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <Html center transform>
        <img
          src="./image/kamesh.jpeg"
          alt="profile"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #3da9fc",
            boxShadow: "0 0 40px rgba(61,169,252,0.5)",
          }}
        />
      </Html>
    </>
  );
}

export default function HeroRight() {
  const occluderRef = useRef();

  return (
    <div style={{ width: "100%", height: "450px" }}>
      <Canvas camera={{ position: [0, 0, 7] }} style={{zIndex:"2"}}>
        <ambientLight intensity={0.8} />

        <CenterImage occluderRef={occluderRef} />
        <IconsOrbit occluderRef={occluderRef} />
      </Canvas>
    </div>
  );
}