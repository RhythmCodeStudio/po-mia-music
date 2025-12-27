// write a react component for next js to embed a youtube video responsively
// the component should take a youtube video id as a prop
// the component should use next/image for the thumbnail
// the component should show the thumbnail with a play button overlay
// when the thumbnail is clicked, it should replace the thumbnail with an embedded youtube iframe that autoplays the video
import { useState } from "react";
import Image from "next/image";
interface YouTubeVideoProps {
  videoId: string;
  width?: number;
  height?: number;
}
export default function YouTubeVideo({ videoId, width = 560, height = 315 }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const handleClick = () => {
    setIsPlaying(true);
  };
  return (
    <div
      className="relative cursor-pointer"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClick}
    >
      {isPlaying ? (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <Image
            src={thumbnailUrl}
            alt="YouTube Video Thumbnail"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-75 rounded-full p-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              > 
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}