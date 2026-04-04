"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GiGalaxy } from "react-icons/gi";

export default function BackgroundToggle() {
  const [active, setActive] = useState(false);
  const mountRef = useRef(null);
useEffect(() => {
  if (active) {
    document.body.classList.add("bg-mode");
  } else {
    document.body.classList.remove("bg-mode");
  }
}, [active]);

  useEffect(() => {
    if (!active) return;

    let scene, camera, renderer, particles, animationId;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617); // deep dark

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    // 🔥 particles
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();

    const positions = [];
    const colors = [];

    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      positions.push(x, y, z);

      color.setHSL(i / particleCount, 1.0, 0.5);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // ✨ animate
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [active]);

  return (
    <>
      {/* Background */}
      {active && (
        <div
          ref={mountRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      )}

      {/* Button */}
      <button
      className="btn-light"
        onClick={() => setActive(!active)}
        style={{
          position: "fixed",
          bottom: "18px",
          left: "18px",
          zIndex: 9999,
          padding: "10px 15px",
          borderRadius: "50%",
        }}
      >
       <GiGalaxy />
      </button>
    </>
  );
}