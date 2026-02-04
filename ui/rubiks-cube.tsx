// "use client";
// // import from threejs
// import { Canvas, useLoader } from "@react-three/fiber";
// import { TrackballControls } from "@react-three/drei";
// import { Html } from "@react-three/drei";
// import * as THREE from "three";
// // import logo image
// import poMiaLogoBlack from "../public/logos/pomia-horizontal-logo-black.png";
// // import data
// import { musicLinkData } from "@/lib/music-link-data";
// // import icons
// import { SiBandcamp } from "react-icons/si";

// const rubikColors = [
//   "#f44336", // Red
//   "#2196f3", // Blue
//   "#4caf50", // Green
//   "#ffeb3b", // Yellow
//   "#fff",    // White
//   "#ff9800", // Orange
// ];

// // Renders a single small square on a face
// function Facelet({
//   color,
//   position,
//   isCenter,
//   logoTexture,
// }: {
//   color: string;
//   position: [number, number, number];
//   isCenter?: boolean;
//   logoTexture?: THREE.Texture;
// }) {
//   return (
//     <group position={position}>
//       {/* Black border for grid lines, slightly larger and semi-transparent */}
//       <mesh>
//         <boxGeometry args={[0.68, 0.68, 0.02]} />
//         <meshStandardMaterial color="black" transparent opacity={0.9} />
//       </mesh>
//       {/* Colored facelet */}
//       <mesh>
//         <boxGeometry args={[0.62, 0.62, 0.04]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//       {/* Logo overlay on center square */}
//       {isCenter && logoTexture && (
//         <mesh position={[0, 0, 0.025]}>
//           {/* Use a plane for the logo, so it overlays above the colored square */}
//           <planeGeometry args={[0.5, 0.164]} />
//           <meshBasicMaterial
//             map={logoTexture}
//             transparent
//             toneMapped={false}
//           />
//         </mesh>
//       )}
//     </group>
//   );
// }

// // Renders a 3x3 grid of facelets for a single face
// function CubeFace({
//   color,
//   position,
//   rotation,
//   logoTexture,
// }: {
//   color: string;
//   position: [number, number, number];
//   rotation?: [number, number, number];
//   logoTexture: THREE.Texture;
// }) {
//   const offset = 0.68;
//   const facelets = [];
//   for (let row = 0; row < 3; row++) {
//     for (let col = 0; col < 3; col++) {
//       const isCenter = row === 1 && col === 1;
//       facelets.push(
//         <Facelet
//           key={`${row}-${col}`}
//           color={color}
//           position={[(col - 1) * offset, (1 - row) * offset, 0]}
//           isCenter={isCenter}
//           logoTexture={isCenter ? logoTexture : undefined}
//         />,
//       );
//     }
//   }
//   return (
//     <group position={position} rotation={rotation}>
//       {facelets}
//     </group>
//   );
// }

// function RubiksCube({ logoTexture }: { logoTexture: THREE.Texture }) {
//   return (
//     <group>
//       {/* Front (Yellow) */}
//       <CubeFace color={rubikColors[3]} position={[0, 0, 1]} logoTexture={logoTexture} />
//       {/* Right (Red) */}
//       <CubeFace
//         color={rubikColors[0]}
//         position={[1, 0, 0]}
//         rotation={[0, Math.PI / 2, 0]}
//         logoTexture={logoTexture}
//       />
//       {/* Top (Blue) */}
//       <CubeFace
//         color={rubikColors[1]}
//         position={[0, 1, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         logoTexture={logoTexture}
//       />
//       {/* Back (Orange) */}
//       <CubeFace
//         color={rubikColors[5]}
//         position={[0, 0, -1]}
//         rotation={[0, Math.PI, 0]}
//         logoTexture={logoTexture}
//       />
//       {/* Left (Green) */}
//       <CubeFace
//         color={rubikColors[2]}
//         position={[-1, 0, 0]}
//         rotation={[0, -Math.PI / 2, 0]}
//         logoTexture={logoTexture}
//       />
//       {/* Bottom (White) */}
//       <CubeFace
//         color={rubikColors[4]}
//         position={[0, -1, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//         logoTexture={logoTexture}
//       />
//     </group>
//   );
// }

// export default function ThreejsRubiksCube() {
//   // Load the logo texture once
//   const logoTexture = useLoader(THREE.TextureLoader, poMiaLogoBlack.src);

//   return (
//     <div className="w-full flex justify-center items-center py-6 cursor-grab">
//       <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-transparent ">
//         <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
//           <ambientLight intensity={1.2} />
//           <directionalLight position={[5, 5, 5]} intensity={0.7} />
//           <group scale={[1.5, 1.5, 1.5]}>
//             <RubiksCube logoTexture={logoTexture} />
//           </group>
//           <TrackballControls
//             rotateSpeed={5.0}
//             panSpeed={1.0}
//             noZoom={true}
//           />
//         </Canvas>
//       </div>
//     </div>
//   );
// }

"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { TrackballControls, useCursor } from "@react-three/drei";
import * as THREE from "three";
import poMiaLogoBlack from "../public/logos/pomia-horizontal-logo-black.png";
import { musicLinkData } from "@/lib/music-link-data";

const rubikColors = [
  "#f44336", // Red
  "#2196f3", // Blue
  "#4caf50", // Green
  "#ffeb3b", // Yellow
  "#fff", // White
  "#ff9800", // Orange
];

function createTextTexture(text: string, size = 128) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, size, size);
  ctx.font = "bold 48px sans-serif";
  ctx.fillStyle = "#222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, size / 2, size / 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Facelet({
  color,
  position,
  isCenter,
  logoTexture,
  row,
  col,
  faceIndex,
}: {
  color: string;
  position: [number, number, number];
  isCenter?: boolean;
  logoTexture?: THREE.Texture;
  row: number;
  col: number;
  faceIndex: number;
}) {
  const textTexture =
    faceIndex === 0 && row === 0 && col === 0
      ? createTextTexture("Hello")
      : undefined;
  // Only blue facelets (faceIndex 3) should be clickable
  const handleClick = () => {
    window.location.href = "/";
  };

  // Use useCursor to change the cursor on hover for clickable facelets
  

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.68, 0.68, 0.02]} />
        <meshStandardMaterial color="black" transparent opacity={0.9} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.62, 0.62, 0.04]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {isCenter && logoTexture && (
        <mesh position={[0, 0, 0.025]} onClick={handleClick}>
          <planeGeometry args={[0.5, 0.164]} />
          <meshBasicMaterial map={logoTexture} transparent toneMapped={false} />
        </mesh>
      )}
      {textTexture && (
        <mesh position={[0, 0, 0.021]}>
          <planeGeometry args={[0.5, 0.5]} />
          <meshBasicMaterial map={textTexture} transparent />
        </mesh>
      )}
    </group>
  );
}

function CubeFace({
  color,
  position,
  rotation,
  logoTexture,
  faceIndex,
}: {
  color: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  logoTexture: THREE.Texture;
  faceIndex: number;
}) {
  const offset = 0.68;
  const facelets = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const isCenter = row === 1 && col === 1;
      facelets.push(
        <Facelet
          key={`${row}-${col}`}
          color={color}
          position={[(col - 1) * offset, (1 - row) * offset, 0]}
          isCenter={isCenter}
          logoTexture={isCenter ? logoTexture : undefined}
          row={row}
          col={col}
          faceIndex={faceIndex}
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

function RubiksCube({ logoTexture }: { logoTexture: THREE.Texture }) {
  return (
    <group>
      {/* Front (Green) */}
      <CubeFace
        color={rubikColors[2]}
        position={[0, 0, 1]}
        logoTexture={logoTexture}
        faceIndex={0}
      />
      {/* Right (Red) */}
      <CubeFace
        color={rubikColors[0]}
        position={[1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        logoTexture={logoTexture}
        faceIndex={1}
      />
      {/* Top (White) */}
      <CubeFace
        color={rubikColors[4]}
        position={[0, 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        logoTexture={logoTexture}
        faceIndex={2}
      />
      {/* Back (Blue) */}
      <CubeFace
        color={rubikColors[1]}
        position={[0, 0, -1]}
        rotation={[0, Math.PI, 0]}
        logoTexture={logoTexture}
        faceIndex={3}
      />
      {/* Left (Orange) */}
      <CubeFace
        color={rubikColors[5]}
        position={[-1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        logoTexture={logoTexture}
        faceIndex={4}
      />
      {/* Bottom (Yellow) */}
      <CubeFace
        color={rubikColors[3]}
        position={[0, -1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        logoTexture={logoTexture}
        faceIndex={5}
      />
    </group>
  );
}

export default function ThreejsRubiksCube() {
  const logoTexture = useLoader(THREE.TextureLoader, poMiaLogoBlack.src);

  return (
    <div className="w-full flex justify-center items-center py-6 cursor-grab">
      <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-transparent ">
        <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <group
            scale={[1.5, 1.5, 1.5]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <RubiksCube logoTexture={logoTexture} />
          </group>
          <TrackballControls rotateSpeed={5.0} panSpeed={1.0} noZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}
