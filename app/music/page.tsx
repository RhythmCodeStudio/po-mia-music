// import data
import { releases } from "@/lib/po-data";
// import components
import ReleaseDisplay from "../ui/release-display";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-shadow-black-background-black text-4xl">po's music</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {releases.map((release) => (
          <ReleaseDisplay key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}