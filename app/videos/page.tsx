// import component
import Heading from "../../ui/heading";
import YouTubeVideo from "../../ui/youtube-video";
// import data
import { youTubeVideos } from "@/lib/video-data";

function delayLoad(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Videos() {
  await delayLoad(5000);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="Videos"
        headingLevel={2}
        className="font-bold text-4xl icon-shadow rainbow-gradient-text mt-8"
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
    </div>
  );
}
