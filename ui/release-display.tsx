// import from next
import Image from "next/image";
// import components
import Heading from "./heading";
import IconLinkGroup from "./icon-link-group";
import IconLinkGroupClientContainer from "./icon-link-group-client-container";
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
    <section
      className="flex flex-col justify-center items-center bg-black/50 border-border-default border-2 shadow-white shadow-lg rounded-(--display-radius) p-(--display-padding) z-50 w-full max-w-2xl lg:mx-auto text-sm lg:text-base [--display-radius:var(--radius-4xl)] [--display-padding:--spacing(6)]"
      id={`release-${release.id}`}>
      <Heading
        headingLevel={2}
        className="text-center mb-6 text-shadow-black-background-black text-xl lg:text-2xl font-semibold font-indie-flower tracking-widest"
        text={release.title}
      />
      <div className="flex flex-col gap-4 items-center w-full">
        <Image
          src={release.cover_image}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="rounded-2xl shadow-white shadow-lg border-2 border-border-default"
        />
        <div className="w-full flex justify-center min-w-md">
          <ol className="list-decimal list-inside md:min-h-32 max-w-md">
            {release.tracks &&
              release.tracks.map((track) => (
                <li
                  key={track.id}
                  className="text-shadow-black-background-black">
                  <a
                    href={track.bandcamp_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-400">
                    {track.title} - {track.length}
                  </a>
                </li>
              ))}
          </ol>
        </div>
        <p className="text-shadow-black-background-black w-full max-w-md md:min-h-32">
          {release.description}
        </p>

        <p className="-mb-2 text-shadow-black-background-black">
          released {formatDate(release.release_date).toLowerCase()}
        </p>
        {/* <div className="icon-shadow flex flex-wrap justify-center items-center gap-8">
          {release.links.map((link) => (
            <IconLinkGroupClientContainer
            // <IconLinkGroup
              key={link.name}
              size={20}
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
        </div> */}
      </div>
    </section>
  );
}