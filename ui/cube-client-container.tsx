"use client";
import dynamic from "next/dynamic";
// import ThreejsRubiksCube from "./rubiks-cube";
const ThreejsRubiksCube = dynamic(() => import("./rubiks-cube"), { ssr: false });

export default function CubeClientContainer() {
  return (
    <div>
      <ThreejsRubiksCube />
    </div>
  );
}
