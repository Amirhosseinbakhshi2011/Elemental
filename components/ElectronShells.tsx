"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ElementData } from "@/lib/elements";

export default function ElectronShells({ element }: { element: ElementData }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#ffcc00"
          emissive="#ffaa00"
          emissiveIntensity={0.6}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Shells + Electrons */}
      {element.shells.map((count, shellIndex) => {
        const radius = 0.7 + shellIndex * 0.55;
        const electrons = [];

        for (let i = 0; i < Math.min(count, 8); i++) {
          const angle = (i / Math.min(count, 8)) * Math.PI * 2;
          electrons.push(
            <mesh
              key={`${shellIndex}-${i}`}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 1.3) * 0.15,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#00f5ff"
                emissive="#00f5ff"
                emissiveIntensity={0.9}
              />
            </mesh>
          );
        }

        return (
          <group key={shellIndex}>
            {/* Orbit ring */}
            <mesh rotation={[Math.PI / 2.2, 0, 0]}>
              <torusGeometry args={[radius, 0.012, 8, 64]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
            </mesh>
            {electrons}
          </group>
        );
      })}
    </group>
  );
}