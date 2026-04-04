"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ active }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xefd1b5);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );

    camera.position.set(100, 800, -800);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 🔥 simple plane (light version, heavy terrain hata diya)
    const geometry = new THREE.PlaneGeometry(2000, 2000, 50, 50);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.MeshBasicMaterial({
      color: 0x4478a0,
      wireframe: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      mesh.rotation.z += 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [active]);

  if (!active) return null;

  return (
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
  );
}