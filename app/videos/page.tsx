// import from next
import Image from "next/image";
// import component
import Heading from "../../ui/heading";
import YouTubeVideo from "../../ui/youtube-video";
// import data
import { youTubeVideos } from "@/lib/video-data";

// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export const metadata = {
  title: "Videos | Po Mia | St. Louis, Missouri",
  description:
    "Watch Po Mia's latest music videos and live performances. Explore a collection of videos showcasing their talent as a St. Louis-based musician.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pomiamusic.com/videos",
    siteName: "Po Mia: St. Louis Musician",
    title: "Videos | Po Mia | St. Louis, Missouri",
    description:
      "Watch Po Mia's latest music videos and live performances. Explore a collection of videos showcasing their talent as a St. Louis-based musician.",
  },
};

export default async function Videos() {
  // await delayLoad(5000);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="Videos"
        headingLevel={2}
        className="font-bold text-4xl text-shadow-black-background-black font-acme"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-8">
        {youTubeVideos.map((video, index) => (
          <YouTubeVideo
            key={index}
            videoId={video.youTubeId}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
      <div className="p-8 pt-0 w-full max-w-md h-auto flex justify-center">
        <Image
          src="/images/po-on-frog.webp"
          width={768}
          height={1024}
          alt="po sitting on a frog sculpture looking through a viewfinder outside Venice Cafe in St. Louis, MO"
          className="rounded-4xl shadow-lg shadow-white"
        />
      </div>
    </div>
  );
}
