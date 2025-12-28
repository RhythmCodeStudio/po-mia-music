"use client";
import { releases } from "@/lib/po-data";
import ReleaseDisplay from "./release-display";

export default function ReleaseDisplayContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
      {releases.map((release) => (
        <ReleaseDisplay key={release.id} release={release} />
      ))}
    </div>
  );
}