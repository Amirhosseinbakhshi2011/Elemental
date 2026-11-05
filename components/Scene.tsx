"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { Suspense } from "react";
import { ELEMENTS, ElementData } from "@/lib/elements";
import ElementSphere from "./ElementSphere";
import ElectronShells from "./ElectronShells";

interface Props {
  selected: ElementData | null;
  onSelect: (el: ElementData) => void;
}

export default function Scene({ selected, onSelect }: Props) {
  // Layout spacing
  const spacingX = 1.15;
  const spacingY = 1.15;

  return (
    <Canvas camera={{ position: [0, 2, 18], fov: 45 }}>
      <color attach="background" args={["#020010"]} />
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[10, 10, 5]} intensity={1.1} />
        <pointLight position={[-10, -5, -10]} intensity={0.4} color="#8866ff" />

        <Stars radius={100} depth={60} count={3000} factor={3} saturation={0} fade speed={0.4} />

        {/* Periodic Table Layout */}
        <group position={[-9.5, 4, 0]}>
          {ELEMENTS.map((el) => {
            const x = (el.col - 1) * spacingX;
            const y = -(el.row - 1) * spacingY;
            return (
              <ElementSphere
                key={el.z}
                element={el}
                position={[x, y, 0]}
                isSelected={selected?.z === el.z}
                onSelect={onSelect}
              />
            );
          })}
        </group>

        {/* Detailed atom view when selected */}
        {selected && (
          <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
            <group position={[0, -5.5, 4]}>
              <ElectronShells element={selected} />
            </group>
          </Float>
        )}

        <OrbitControls
          enablePan={true}
          minDistance={8}
          maxDistance={40}
          autoRotate={!selected}
          autoRotateSpeed={0.4}
        />
      </Suspense>
    </Canvas>
  );
}