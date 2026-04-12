// import from next
import Image from "next/image";
// import components
// import ReleaseDisplay from "../ui/release-display";
import ReleaseDisplayContainer from "../../ui/release-display-container";
import Heading from "../../ui/heading";
import IconLinkGroupClientContainer from "@/ui/icon-link-group-client-container";
import FadeInOnScroll from "@/ui/fade-in-on-scroll";
import HashScrollHandler from "@/ui/hash-scroll-handler";
// import link data
import { musicLinkData } from "@/lib/music-link-data";

// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const metadata = {
  title: "Music | Po Mia | St. Louis, Missouri",
  description:
    "Explore Po Mia's music releases. Listen to their latest tracks and discover their unique sound as a St. Louis-based musician.",
  alternates: {
    canonical: "/music",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pomiamusic.com/music",
    siteName: "Po Mia: St. Louis Musician",
    title: "Music | Po Mia | St. Louis, Missouri",
    description:
      "Explore Po Mia's music releases. Listen to their latest tracks and discover their unique sound as a St. Louis-based musician.",
  },
};

export default async function Music() {
  //  await delayLoad(5000);
  return (
    <div className="flex flex-col justify-center items-center">
      <HashScrollHandler />
      <Heading
        text="music"
        headingLevel={2}
        className="text-5xl font-bold text-shadow-black-background-black font-indie-flower tracking-widest"
      />
      <div className="mt-2 px-2">
        <IconLinkGroupClientContainer
          orientation="horizontal"
          linkData={musicLinkData}
          size={28}
          className="icon-shadow"
        />
      </div>
      <FadeInOnScroll>
        <div className="w-full max-w-6xl">
          <ReleaseDisplayContainer />
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <div className="p-8 pt-0 md:w-6/8 lg:w-5/8 h-auto">
          <Image
            src="/images/po-venice-cafe.webp"
            width={1217}
            height={956}
            alt="po playing at Venice Cafe in St. Louis, MO"
            className="rounded-4xl shadow-lg shadow-white border-2 border-border-default"
          />
        </div>
      </FadeInOnScroll>
    </div>
  );
}
