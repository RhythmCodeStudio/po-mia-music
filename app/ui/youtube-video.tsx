// write a react component for next js to embed a youtube video responsively
// the component should take a youtube video id as a prop
// the component should use next/image for the thumbnail
// the component should show the thumbnail with a play button overlay
// when the thumbnail is clicked, it should replace the thumbnail with an embedded youtube iframe that autoplays the video
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// interface YouTubeVideoProps {
//   videoId: string;
//   title: string;
//   width?: number;
//   height?: number;
// }
// export default function YouTubeVideo({ videoId, title, width = 560, height = 315 }: YouTubeVideoProps) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//   const handleClick = () => {
//     setIsPlaying(true);
//   };
//   return (
//     <div
//       className="relative cursor-pointer rounded-lg shadow-lg shadow-white flex items-center justify-center"
//       style={{ width: `${width}px`, height: `${height}px` }}
//       onClick={handleClick}
//     >
//       <span className="sr-only">{title}</span>
//       {isPlaying ? (
//         <iframe
//           width={width}
//           height={height}
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//           title="YouTube video player"
//           // frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           className="rounded-lg"
//         ></iframe>
//       ) : (
//         <>
//           <Image
//             src={thumbnailUrl}
//             alt="YouTube Video Thumbnail"
//             layout="fill"
//             objectFit="cover"
//             className="border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-lg"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="rainbow-gradient bg-opacity-75 rounded-full p-4">
//               <svg
//                 className="w-8 h-8 text-red-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

"use client";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import Heading from "./heading";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
}

export default function YouTubeVideo({ videoId, title, description }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full z-50 bg-black/50 p-4 rounded-2xl shadow-lg shadow-black/50 border-2 border-[rgba(255,255,255,0.3)]">
      <Heading
        text={title}
        headingLevel={3}
        className="px-2 pb-2 text-center text-shadow-black-background-black"
      />
      <div
        className="relative aspect-video rounded-lg shadow-lg shadow-white cursor-pointer"
        onClick={() => setIsPlaying(true)}>
        <span className="sr-only">{title}</span>
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"></iframe>
        ) : (
          <>
            <Image
              src={thumbnailUrl}
              alt="YouTube Video Thumbnail"
              fill
              className="object-cover border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-lg"
              sizes="(max-width: 768px) 100vw, 640px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rainbow-gradient bg-opacity-75 rounded-full p-4 border-[rgba(255,255,255,0.3)]">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <p>{description}</p> */}
    </div>
  );
}
