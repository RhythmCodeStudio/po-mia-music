// import from next
import Image from "next/image";
// import components
import Heading from "./heading";
import IconLinkGroup from "./icon-link-group";
// import from utils
import { formatDate } from "../utils/utils";

type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  length: string;
  track_number: number;
  src: string;
  bandcamp_url: string;
  lyrics: never[];
  hasLyricImages?: boolean;
};

interface ReleaseDisplayProps {
  release: {
    id: string;
    title: string;
    type: string;
    cover_image: string;
    release_date: Date;
    description: string;
    links: {
      name: string;
      label: string;
      url: string;
      icon: string;
    }[];
    tracks: Track[];
  };
}

export default function ReleaseDisplay({ release }: ReleaseDisplayProps) {
  return (
    <section className="flex flex-col bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 w-full max-w-2xl lg:mx-auto text-sm lg:text-base" id={`release-${release.id}`}>
      <Heading
        headingLevel={2}
        className="text-center mb-6 text-shadow-black-background-black text-xl lg:text-2xl font-semibold font-indie-flower tracking-widest"
        text={release.title}
      />
      <div className="flex flex-col gap-6 items-center w-full">
        <Image
          src={release.cover_image}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="rounded-2xl shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
        />
        <div className="w-full flex justify-center min-w-md">
          <ol className="list-decimal list-inside md:min-h-26 xl:min-h-30 max-w-md">
            {release.tracks &&
              release.tracks.map((track) => (
                <li key={track.id} className="text-shadow-black-background-black">
                  <a
                    href={track.bandcamp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400">
                    {track.title} - {track.length}
                  </a>
                  {/* {track.hasLyricImages && (
                    <p className="text-yellow-400 text-sm underline text-center my-1">
                        Lyrics
                    </p>
                  )} */}
                </li>
              ))}
          </ol>
        </div>
        <p className="text-shadow-black-background-black w-full max-w-md md:min-h-30 xl:min-h-24">
          {release.description}
        </p>

        <p className="text-shadow-black-background-black">
          released {formatDate(release.release_date).toLowerCase()}
        </p>
        <div className="flex flex-wrap gap-4 icon-shadow">
          {release.links.map((link) => (
            <IconLinkGroup
              key={link.name}
              orientation="horizontal"
              linkData={[
                {
                  name: link.name,
                  label: link.label,
                  href: link.url,
                  icon: link.icon,
                },
              ]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// // import from next
// import Image from "next/image";
// // import components
// import Heading from "./heading";
// import IconLinkGroup from "./icon-link-group";
// import StarrySky from "./starry-sky";
// // CHANGED: Updated Dialog imports for Headless UI v2
// import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
// // import icons
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { useState } from "react";

// type Track = {
//   id: string;
//   title: string;
//   artist: string;
//   album: string;
//   year: number;
//   genre: string[];
//   length: string;
//   track_number: number;
//   src: string;
//   bandcamp_url: string;
//   lyrics: never[];
//   hasLyricImages?: boolean;
//   lyricImages?: string[];
// };

// interface ReleaseDisplayProps {
//   release: {
//     id: string;
//     title: string;
//     type: string;
//     cover_image: string;
//     release_date: Date;
//     description: string;
//     links: {
//       name: string;
//       label: string;
//       url: string;
//       icon: string;
//     }[];
//     tracks: Track[];
//   };
// }

// export default function ReleaseDisplay({ release }: ReleaseDisplayProps) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const openLyricsDialog = (trackId: string) => {
//     setCurrentTrackId(trackId);
//     setCurrentImageIndex(0);
//     setIsDialogOpen(true);
//   };

//   const getCurrentTrack = () => {
//     return release.tracks.find((t) => t.id === currentTrackId);
//   };

//   const goToNextImage = () => {
//     const track = getCurrentTrack();
//     if (track?.lyricImages) {
//       setCurrentImageIndex((prev) => (prev + 1) % track.lyricImages!.length);
//     }
//   };

//   const goToPreviousImage = () => {
//     const track = getCurrentTrack();
//     if (track?.lyricImages) {
//       setCurrentImageIndex(
//         (prev) =>
//           (prev - 1 + track.lyricImages!.length) % track.lyricImages!.length,
//       );
//     }
//   };

//   const currentTrack = getCurrentTrack();
//   const currentImages = currentTrack?.lyricImages || [];
//   const currentImage = currentImages[currentImageIndex];

//   return (
//     <section className="flex flex-col bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 w-full max-w-2xl lg:mx-auto text-sm lg:text-base">
//       <Heading
//         headingLevel={2}
//         className="text-center mb-6 text-shadow-black-background-black text-xl lg:text-2xl font-semibold font-indie-flower tracking-widest"
//         text={release.title}
//       />
//       <div className="flex flex-col gap-6 items-center w-full">
//         <Image
//           src={release.cover_image}
//           alt={`${release.title} cover art`}
//           width={300}
//           height={300}
//           className="rounded-2xl shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
//         />
//         <div className="w-full flex justify-center min-w-md">
//           <ol className="list-decimal list-inside md:min-h-26 xl:min-h-30 max-w-md">
//             {release.tracks &&
//               release.tracks.map((track) => (
//                 <li
//                   key={track.id}
//                   className="text-shadow-black-background-black">
//                   <a
//                     href={track.bandcamp_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline hover:text-blue-400">
//                     {track.title} - {track.length}
//                   </a>
//                   {track.hasLyricImages && (
//                     <button
//                       onClick={() => openLyricsDialog(track.id)}
//                       className="text-yellow-400 text-sm underline text-center my-1 hover:text-yellow-300 transition-colors cursor-pointer block w-full">
//                       Lyrics
//                     </button>
//                   )}
//                 </li>
//               ))}
//           </ol>
//         </div>
//         <p className="text-shadow-black-background-black w-full max-w-md md:min-h-30 xl:min-h-24">
//           {release.description}
//         </p>

//         <p className="text-shadow-black-background-black">
//           Released {release.release_date.toDateString()}
//         </p>
//         <div className="flex flex-wrap gap-4 icon-shadow">
//           {release.links.map((link) => (
//             <IconLinkGroup
//               key={link.name}
//               orientation="horizontal"
//               linkData={[
//                 {
//                   name: link.name,
//                   label: link.label,
//                   href: link.url,
//                   icon: link.icon,
//                 },
//               ]}
//             />
//           ))}
//         </div>
//       </div>

//       {/* CHANGED: Refactored with Headless UI v2 API */}
//       <Dialog
//         open={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         className="relative z-50">
//         {/* CHANGED: Use DialogBackdrop component instead of div */}
//         <DialogBackdrop className="fixed inset-0 bg-black/75 transition-opacity" />

//         {/* CHANGED: Use DialogPanel component directly */}
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <DialogPanel className="rainbow-gradient border-2 border-[rgba(255,255,255,0.3)] rounded-4xl shadow-white shadow-lg w-full h-[98vh] flex flex-col justify-center items-center p-6 overflow-auto">
//             <StarrySky />
//             <div className="p-6">
              
//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="absolute top-6 right-10 text-2xl transition-colors">
//                 ✕
//               </button>

//               {currentImage && (
//                 <>
                  
//                   <div className="flex justify-center mb-4 w-xs md:w-2xl mx-auto">
//                     <Image
//                       src={currentImage}
//                       alt={`${currentTrack?.title} lyrics page ${currentImageIndex + 1}`}
//                       width={1700}
//                       height={2224}
//                       className=" w-full rounded-4xl border border-[rgba(255,255,255,0.3)]"
//                     />
//                   </div>

//                   {currentImages.length > 1 && (
//                     <div className="flex items-center justify-between gap-4">
//                       <button
//                         onClick={goToPreviousImage}
//                         className="px-4 py-2 text-black font-semibold">
//                         <FaChevronLeft size={24} />
//                       </button>

//                       <span className="text-white text-sm font-semibold">
//                         Page {currentImageIndex + 1} of {currentImages.length}
//                       </span>

//                       <button
//                         onClick={goToNextImage}
//                         className="px-4 py-2 text-black font-semibold">
//                         <FaChevronRight size={24} />
//                       </button>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>
//     </section>
//   );
// }
