"use client";

import { releases } from "@/lib/releases";
import ReleaseDisplay from "./release-display";

export default function ReleaseDisplayContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 w-full">
      {releases.map((release) => (
        <ReleaseDisplay key={release.id} release={release} />
      ))}
    </div>
  );
}