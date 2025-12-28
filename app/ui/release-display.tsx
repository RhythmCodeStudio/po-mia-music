// import from next
import Image from "next/image";
// import components
import Heading from "./heading";

type Track = {
  title: string;
  by: string;
  length: string;
  number: number;
  bandcampUrl: string;
};

interface ReleaseDisplayProps {
  release: {
    id: string;
    title: string;
    type: string;
    coverImgSrc: string;
    releaseDate: string;
    description: string;
    links: {
      name: string;
      label: string;
      url: string;
    }[];
    tracks: Track[];
  };
}

export default function ReleaseDisplay({ release }: ReleaseDisplayProps) {
  return (
    <section className="flex flex-col bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 max-w-2xl mx-6 lg:mx-auto">
      <Heading
        headingLevel={2}
        className="text-center mb-6 text-shadow-black-background-black"
        text={release.title}
      />
      <div className="flex flex-col gap-6 justify-center items-center">
        <Image
          src={release.coverImgSrc}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="rounded-2xl shadow-white shadow-lg"
          style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
        />
        <div className="max-w-xl"></div>
        <p className="mb-4 text-shadow-black-background-black w-full max-w-md">{release.description}</p>
        <ul>
          {release.tracks && release.tracks.map((track, index) => (
            <li key={index} className="mb-1 text-shadow-black-background-black">
              <a 
                href={track.bandcampUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-400">
              {track.title} - {track.length}
              </a>
            </li>
          ))}
        </ul>
        <p className="mb-4 text-shadow-black-background-black">
          Release Date: {release.releaseDate}
        </p>
        <div className="flex flex-wrap gap-4">
          {release.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
