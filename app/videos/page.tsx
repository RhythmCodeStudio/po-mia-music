// import component
import Heading from "../ui/heading";
import YouTubeVideo from "../ui/youtube-video";
// import data
import { youTubeVideos } from "@/lib/video-data"

export default function Videos() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading text="Videos" headingLevel={2} className="font-bold text-4xl text-shadow-black-background-black mt-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 max-w-6xl w-full px-6">
        {youTubeVideos.map((video, index) => (
          <YouTubeVideo key={index} videoId={video.youTubeId} title={video.title} description={video.description} />
        ))}
      </div>
    </div>
  );
}