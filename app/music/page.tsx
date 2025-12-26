// import data
import { releases } from "@/lib/po-data";
// import components
import ReleaseDisplay from "../ui/release-display";

export default function Music() {
  return (
    <div>
      <h1>Music Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {releases.map((release) => (
          <ReleaseDisplay key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}