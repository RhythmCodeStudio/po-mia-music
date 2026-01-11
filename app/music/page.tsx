// import from next
import Image from "next/image";
// import components
// import ReleaseDisplay from "../ui/release-display";
import ReleaseDisplayContainer from "../../ui/release-display-container";
import Heading from "../../ui/heading";
// import IconLinkGroup from "../../ui/icon-link-group";
import IconLinkGroupClientContainer from "@/ui/icon-link-group-client-container";
// import link data
import { musicLinkData } from "@/lib/music-link-data";

// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Music() {
  //  await delayLoad(5000);
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading
        text="Music"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black mt-8"
      />
      <div className="mt-2">
        <IconLinkGroupClientContainer
          orientation="horizontal"
          linkData={musicLinkData}
          size={30}
          className="icon-shadow"
        />
      </div>
      <div className="w-full max-w-6xl">
        <ReleaseDisplayContainer />
      </div>
      <div className="p-8 md:w-6/8 lg:w-5/8 h-auto">
        <Image 
          src="/images/po-venice-cafe.webp" 
          width={1217} 
          height={956} 
          alt="po playing at Venice Cafe in St. Louis, MO" 
          className="rounded-4xl shadow-lg shadow-white"
        />
      </div>
    </div>
  );
}
