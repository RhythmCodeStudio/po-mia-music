"use client";
// --- imports ---
import { Canvas, useLoader } from "@react-three/fiber";
import { TrackballControls, Html } from "@react-three/drei";
import * as THREE from "three";
import poMiaLogoBlack from "../public/logos/pomia-horizontal-logo-black.png";
import IconLink from "./icon-link";
import { musicLinkData } from "../lib/music-link-data";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
// --- end imports ---

const iconMap = {
  ...SiIcons,
  ...FaIcons,
};

const rubikColors = [
  "#f44336", // Red
  "#2196f3", // Blue
  "#4caf50", // Green
  "#ffeb3b", // Yellow
  "#fff", // White
  "#ff9800", // Orange
];

type FaceletLink = {
  href: string;
  icon: keyof typeof iconMap;
  label: string;
};

// --- helper to check if face is visible ---
function isFaceVisible(faceNormal: THREE.Vector3, camera: THREE.Camera) {
  const cameraDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraDirection);
  return faceNormal.dot(cameraDirection) < -0.2; // -0.2 for some tolerance
}
// --- end helper ---

// Renders a single small square on a face
function Facelet({
  color,
  position,
  isCenter,
  logoTexture,
  link,
  faceNormal,
  camera,
  showIcons,
}: {
  color: string;
  position: [number, number, number];
  isCenter?: boolean;
  logoTexture?: THREE.Texture;
  link?: FaceletLink;
  faceNormal: THREE.Vector3;
  camera: THREE.Camera;
  showIcons: boolean;
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
      {/* Logo overlay on center square */}
      {isCenter && logoTexture && (
        <mesh position={[0, 0, 0.025]}>
          <planeGeometry args={[0.5, 0.164]} />
          <meshBasicMaterial
            map={logoTexture}
            transparent
            toneMapped={false}
          />
        </mesh>
      )}
      {/* Only show icon if not center and face is visible */}
      {!isCenter && link && showIcons && (
        <Html center>
          <IconLink
            href={link.href}
            icon={iconMap[link.icon]}
            label={link.label}
            size={32}
            showLabel={false}
          />
        </Html>
      )}
    </group>
  );
}

// Renders a 3x3 grid of facelets for a single face
function CubeFace({
  color,
  position,
  rotation,
  logoTexture,
  links,
  faceNormal,
  camera,
  showIcons,
}: {
  color: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  logoTexture: THREE.Texture;
  links?: FaceletLink[];
  faceNormal: THREE.Vector3;
  camera: THREE.Camera;
  showIcons: boolean;
}) {
  const offset = 0.68;
  const facelets = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const idx = row * 3 + col;
      const isCenter = row === 1 && col === 1;
      const link = links?.[idx];
      facelets.push(
        <Facelet
          key={`${row}-${col}`}
          color={color}
          position={[(col - 1) * offset, (1 - row) * offset, 0]}
          isCenter={isCenter}
          logoTexture={isCenter ? logoTexture : undefined}
          link={link}
          faceNormal={faceNormal}
          camera={camera}
          showIcons={showIcons}
        />
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
  const cameraRef = useRef<THREE.Camera>(null);
  const [cameraObj, setCameraObj] = useState<THREE.Camera | null>(null);

  const faceNormals = [
    new THREE.Vector3(0, 0, 1),   // Front
    new THREE.Vector3(0, 0, -1),  // Back
    new THREE.Vector3(1, 0, 0),   // Right
    new THREE.Vector3(-1, 0, 0),  // Left
    new THREE.Vector3(0, 1, 0),   // Top
    new THREE.Vector3(0, -1, 0),  // Bottom
  ];

  const frontLinks: FaceletLink[] = musicLinkData.slice(0, 9).map(link => ({
    href: link.href,
    icon: link.icon as keyof typeof iconMap,
    label: link.label,
  }));
  const backLinks = undefined;
  const rightLinks = undefined;
  const leftLinks = undefined;
  const topLinks = undefined;
  const bottomLinks = undefined;

  useEffect(() => {
    if (cameraRef.current) setCameraObj(cameraRef.current);
  }, [cameraRef.current]);

  // --- FIX: calculate showIconsArr inside render so it updates ---
  const showIconsArr = faceNormals.map(normal =>
    cameraObj ? isFaceVisible(normal, cameraObj) : false
  );
  // --- end FIX ---

  return (
    <group>
      {/* Front (Red) */}
      <CubeFace
        color={rubikColors[0]}
        position={[0, 0, 1]}
        logoTexture={logoTexture}
        links={frontLinks}
        faceNormal={faceNormals[0]}
        camera={cameraObj!}
        showIcons={showIconsArr[0]}
      />
      {/* Back (Orange) */}
      <CubeFace
        color={rubikColors[5]}
        position={[0, 0, -1]}
        rotation={[0, Math.PI, 0]}
        logoTexture={logoTexture}
        links={backLinks}
        faceNormal={faceNormals[1]}
        camera={cameraObj!}
        showIcons={showIconsArr[1]}
      />
      {/* Right (Blue) */}
      <CubeFace
        color={rubikColors[1]}
        position={[1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        logoTexture={logoTexture}
        links={rightLinks}
        faceNormal={faceNormals[2]}
        camera={cameraObj!}
        showIcons={showIconsArr[2]}
      />
      {/* Left (Green) */}
      <CubeFace
        color={rubikColors[2]}
        position={[-1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        logoTexture={logoTexture}
        links={leftLinks}
        faceNormal={faceNormals[3]}
        camera={cameraObj!}
        showIcons={showIconsArr[3]}
      />
      {/* Top (White) */}
      <CubeFace
        color={rubikColors[4]}
        position={[0, 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        logoTexture={logoTexture}
        links={topLinks}
        faceNormal={faceNormals[4]}
        camera={cameraObj!}
        showIcons={showIconsArr[4]}
      />
      {/* Bottom (Yellow) */}
      <CubeFace
        color={rubikColors[3]}
        position={[0, -1, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        logoTexture={logoTexture}
        links={bottomLinks}
        faceNormal={faceNormals[5]}
        camera={cameraObj!}
        showIcons={showIconsArr[5]}
      />
    </group>
  );
}

export default function ThreejsRubiksCube() {
  const logoTexture = useLoader(THREE.TextureLoader, poMiaLogoBlack.src);
  const cameraRef = useRef<THREE.Camera>(null);

  return (
    <div className="w-full flex justify-center items-center py-6 cursor-grab">
      <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-transparent ">
        <Canvas
          camera={{ position: [4, 4, 4], fov: 50 }}
          onCreated={({ camera }) => {
            cameraRef.current = camera;
          }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <group scale={[1.5, 1.5, 1.5]}>
            <RubiksCube logoTexture={logoTexture} />
          </group>
          <TrackballControls
            rotateSpeed={5.0}
            panSpeed={1.0}
            noZoom={true}
          />
        </Canvas>
      </div>
    </div>
  );
}