// import data
// import { releases } from "@/lib/po-data";
// import components
// import ReleaseDisplay from "../ui/release-display";
import ReleaseDisplayContainer from "../ui/release-display-container";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-shadow-black-background-black text-4xl pt-8">
        po's music
      </h1>
      <ReleaseDisplayContainer />
    </div>
  );
}
