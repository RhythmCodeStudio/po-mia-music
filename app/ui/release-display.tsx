// import from next
import Image from "next/image";
// import components
import Heading from "./heading";
import IconLinkGroup from "./icon-link-group";

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
      icon: string;
    }[];
    tracks: Track[];
  };
}

export default function ReleaseDisplay({ release }: ReleaseDisplayProps) {
  return (
    <section className="flex flex-col bg-black/50 border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg rounded-4xl p-6 z-50 max-w-2xl mx-8 lg:mx-auto text-sm">
      <Heading
        headingLevel={2}
        className="text-center mb-6 text-shadow-black-background-black text-xl"
        text={release.title}
      />
      <div className="flex flex-col gap-6 justify-center items-center">
        <Image
          src={release.coverImgSrc}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="rounded-2xl shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
          // style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
        />
        {/* <div className="max-w-xl"></div> */}
        <p className="text-shadow-black-background-black w-full max-w-md md:min-h-30 xl:min-h-20">{release.description}</p>
        <ol className="list-decimal list-inside md:min-h-26 xl:min-h-16">
          {release.tracks && release.tracks.map((track, index) => (
            <li key={index} className="text-shadow-black-background-black">
              <a 
                href={track.bandcampUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-400">
              {track.title} - {track.length}
              </a>
            </li>
          ))}
        </ol>
        <p className="text-shadow-black-background-black">
          Released {release.releaseDate}
        </p>
        <div className="flex flex-wrap gap-4">
          {release.links.map((link) => (
            <IconLinkGroup
              key={link.name}
              orientation="horizontal"
              linkData={[{
                name: link.name,
                label: link.label,
                href: link.url,
                icon: link.icon 
              }]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
