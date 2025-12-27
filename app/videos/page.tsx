// import component
import YouTubeVideo from "../ui/youtube-video";
// import data
import { youTubeVideos } from "@/lib/video-data"

export default function Videos() {
  return (
    <div>
      <h1>Videos</h1>
      <div className="flex flex-col gap-8">
        {youTubeVideos.map((video, index) => (
          <YouTubeVideo key={index} videoId={video.youTubeId} title={video.title} />
        ))}
      </div>
    </div>
  );
}