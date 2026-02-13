// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import Toaster from "../ui/toaster";
// import InstallPrompt from "../ui/install-prompt";
// import data
import { poBio, releases } from "../lib/po-data";
// import components
import  AudioPlayer from "@/ui/audio-player";
import SitePreviewCoverFlow from "../ui/site-preview-cover-flow";
import ReleaseDisplayCondensed from "@/ui/release-display-condensed";
import SitePreviewCube from "@/ui/site-preview-cube";
import ThreejsRubiksCube from "@/ui/rubiks-cube";
import CubeClientContainer from "@/ui/cube-client-container";
// import Heading from "../ui/heading";
// import PhotoGallery from "@/ui/photoGallery";
// import images
// import { pics } from "@/lib/pics";
// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home() {
  const poLogue = releases.find((release) => release.title === "po logue");
  const cyberchondria = poLogue?.tracks.find((track) => track.title === "cyberchondria");
  // await delayLoad(5000);
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center space-y-12">
      {/* <div className="fixed top-20 left-0 w-full z-50">
        <InstallPrompt />
      </div> */}
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 lg:px-0">
        <Image
          fetchPriority="high"
          src="/images/po-hearts.webp"
          alt="po surrounded by hearts"
          width={2664}
          height={1902}
          priority
          className="rounded-4xl shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
        />
      </div>
      <div className="bg-black/50 mx-6 lg:mx-auto py-4 rounded-4xl shadow-white shadow-lg max-w-2xl border-2 border-[rgba(255,255,255,0.3)] px-6 lg:px-0">
        <p className="px-6 text-shadow-black-background-black w-full max-w-xl lg:max-w-2xl mx-auto font-acme tracking-widest md:text-lg">
          {poBio}
        </p>
      </div>
      
      {cyberchondria && (
         <div className="px-6 lg:px-0 mx-auto max-w-2xl w-full">
          <AudioPlayer song={cyberchondria} />
        </div>
      )}
      {/* <div>
        <Link href="/music" className="">
          <Heading
            text="Music"
            headingLevel={2}
            className="font-bold text-5xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
        </Link>
      </div> */}
      {/* <div>
        <PhotoGallery picSet={pics.map((pic) => pic.id)} />
      </div> */}
      {/* <div className="w-full h-full max-w-4xl mx-auto mt-12">
        <SitePreviewCoverFlow />
      </div> */}
      {/* <div className="flex justify-center items-center w-full max-w-4xl mx-auto my-12">
        <SitePreviewCube />
      </div> */}
      {/* <div className="w-full h-full">
        <CubeClientContainer />
      </div> */}

      <Toaster />
    </div>
  );
}
