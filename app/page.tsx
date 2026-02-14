// import from next
import Image from "next/image";
// import Link from "next/link";
// import components
import Toaster from "../ui/toaster";
import LinkButton from "@/ui/link-button";
// import InstallPrompt from "../ui/install-prompt";
// import data
import { poBio, releases } from "../lib/po-data";
// import components
import AudioPlayer from "@/ui/audio-player";
import MusicSwiperCube from "@/ui/music-swiper-cube";
// import SitePreviewCoverFlow from "../ui/site-preview-cover-flow";
// import ReleaseDisplayCondensed from "@/ui/release-display-condensed";
// import SitePreviewCube from "@/ui/site-preview-cube";
// import ThreejsRubiksCube from "@/ui/rubiks-cube";
// import CubeClientContainer from "@/ui/cube-client-container";
import Heading from "../ui/heading";
import PhotoGallery from "@/ui/photo-gallery";
// import images
import { pics } from "@/lib/pics";
// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home() {
  const poLogue = releases.find((release) => release.title === "po logue");
  const cyberchondria = poLogue?.tracks.find(
    (track) => track.title === "cyberchondria",
  );
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
        <p className="lg:px-6 text-shadow-black-background-black w-full max-w-xl lg:max-w-2xl mx-auto font-acme tracking-widest md:text-lg">
          {poBio}
        </p>
      </div>

      {cyberchondria && (
        <div className="px-6 lg:px-0 mx-auto max-w-2xl w-full">
          <AudioPlayer song={cyberchondria} />
        </div>
      )}

      {/* <div className="flex flex-col justify-center items-center w-full max-w-[90vw] lg:max-w-2xl">
        <div className="w-full h-full mx-auto ">
          <SitePreviewCoverFlow />
        </div>
        <div className="mt-6">
          <LinkButton href="/music" label="Music" />
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
        <div>
          <MusicSwiperCube />
        </div>
        <div className="mt-12">
          <div>
            <Heading
              text="Get all the hits"
              headingLevel={2}
              className="font-bold text-xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
          </div>
          <LinkButton href="/music" label="Music" />
        </div>
      </div>

      <Toaster />
    </div>
  );
}
