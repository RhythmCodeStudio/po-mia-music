// import data
// import { releases } from "@/lib/po-data";
// import components
// import ReleaseDisplay from "../ui/release-display";
import ReleaseDisplayContainer from "../../ui/release-display-container";
import Heading from "../../ui/heading";
import IconLinkGroup from "../../ui/icon-link-group";
import IconLinkGroupClientContainer from "@/ui/icon-link-group-client-container";
// import link data
import { musicLinkData } from "@/lib/music-link-data";

export default function Music() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Heading
        text="Music"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black"
      /> */}
      <div className="pt-8 lg:pt-0 invert">
        <IconLinkGroupClientContainer
          orientation="horizontal"
          linkData={musicLinkData}
          size={28}
        />
      </div>
      <div className="w-full max-w-6xl">
        <ReleaseDisplayContainer />
      </div>
    </div>
  );
}
