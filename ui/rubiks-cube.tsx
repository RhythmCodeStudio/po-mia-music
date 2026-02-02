"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TrackballControls } from "@react-three/drei";

const rubikColors = [
  "#f44336", // Red
  "#2196f3", // Blue
  "#4caf50", // Green
  "#ffeb3b", // Yellow
  "#fff", // White
  "#ff9800", // Orange
];

// Renders a single small square on a face
function Facelet({
  color,
  position,
}: {
  color: string;
  position: [number, number, number];
}) {
  return (
    <group position={position}>
      {/* Black border for grid lines, slightly larger and semi-transparent */}
      <mesh>
        <boxGeometry args={[0.68, 0.68, 0.02]} />
        <meshStandardMaterial color="black" transparent opacity={0.9} />
      </mesh>
      {/* Colored facelet */}
      <mesh>
        <boxGeometry args={[0.62, 0.62, 0.04]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

// Renders a 3x3 grid of facelets for a single face
function CubeFace({
  color,
  position,
  rotation,
}: {
  color: string;
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  const offset = 0.68;
  const facelets = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      facelets.push(
        <Facelet
          key={`${row}-${col}`}
          color={color}
          position={[(col - 1) * offset, (1 - row) * offset, 0]}
        />,
      );
    }
  }
  return (
    <group position={position} rotation={rotation}>
      {facelets}
    </group>
  );
}

function RubiksCube() {
  return (
    <group>
      {/* Front (Red) */}
      <CubeFace color={rubikColors[0]} position={[0, 0, 1]} />
      {/* Back (Orange) */}
      <CubeFace
        color={rubikColors[5]}
        position={[0, 0, -1]}
        rotation={[0, Math.PI, 0]}
      />
      {/* Right (Blue) */}
      <CubeFace
        color={rubikColors[1]}
        position={[1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* Left (Green) */}
      <CubeFace
        color={rubikColors[2]}
        position={[-1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      {/* Top (White) */}
      <CubeFace
        color={rubikColors[4]}
        position={[0, 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      {/* Bottom (Yellow) */}
      <CubeFace
        color={rubikColors[3]}
        position={[0, -1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export default function ThreejsRubiksCube() {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-transparent ">
        <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <group scale={[1.5, 1.5, 1.5]}>
            <RubiksCube />
          </group>
          {/* <OrbitControls 
            enableZoom={false} 
          /> */}
          <TrackballControls
            rotateSpeed={5.0}
            // zoomSpeed={2.0}
            panSpeed={1.0}
            noZoom={true}
          />
        </Canvas>
      </div>
    </div>
  );
}
