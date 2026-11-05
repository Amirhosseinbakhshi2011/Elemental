"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { ElementData, CATEGORY_COLORS } from "@/lib/elements";

interface Props {
  element: ElementData;
  position: [number, number, number];
  isSelected: boolean;
  onSelect: (el: ElementData) => void;
}

export default function ElementSphere({ element, position, isSelected, onSelect }: Props) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[element.category];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle floating
    meshRef.current.position.y = position[1] + Math.sin(t * 1.2 + element.z) * 0.08;

    // Pulse when selected
    const scale = isSelected ? 1.35 + Math.sin(t * 3) * 0.05 : hovered ? 1.2 : 1;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(element);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 0.7 : hovered ? 0.45 : 0.2}
          metalness={0.3}
          roughness={0.35}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Symbol */}
      <Text
        position={[0, 0, 0.4]}
        fontSize={0.22}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.015}
        outlineColor="#000"
      >
        {element.symbol}
      </Text>

      {/* Atomic number small */}
      <Text
        position={[0, -0.28, 0.4]}
        fontSize={0.11}
        color="rgba(255,255,255,0.7)"
        anchorX="center"
        anchorY="middle"
      >
        {element.z}
      </Text>

      {/* Selection ring */}
      {isSelected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
          <ringGeometry args={[0.55, 0.65, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}