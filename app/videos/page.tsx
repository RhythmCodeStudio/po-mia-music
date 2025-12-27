// import component
import Heading from "../ui/heading";
import YouTubeVideo from "../ui/youtube-video";
// import data
import { youTubeVideos } from "@/lib/video-data"

export default function Videos() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading text="po's videos" headingLevel={2} className="font-bold text-4xl text-shadow-black-background-black mt-6" />
      <div className="flex flex-col gap-8 grid grid-cols-1 md:grid-cols-2 my-12">
        {youTubeVideos.map((video, index) => (
          <YouTubeVideo key={index} videoId={video.youTubeId} title={video.title} />
        ))}
      </div>
    </div>
  );
}