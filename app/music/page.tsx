// import data
// import { releases } from "@/lib/po-data";
// import components
// import ReleaseDisplay from "../ui/release-display";
import ReleaseDisplayContainer from "../ui/release-display-container";
import Heading from "../ui/heading";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading
        text="Music"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black my-6"
      />
      <ReleaseDisplayContainer />
    </div>
  );
}
