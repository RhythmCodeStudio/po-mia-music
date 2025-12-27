// import from next
import Image from "next/image";
// import components
import Heading from "./heading";

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
  };
}

export default function ReleaseDisplay({ release }: ReleaseDisplayProps) {
  return (
    <section className="flex flex-col">
      <Heading
        headingLevel={2}
        className="text-center mb-6"
        text={release.title}
      />
      <div className="flex flex-col gap-6">
        <Image
          src={release.coverImgSrc}
          alt={`${release.title} cover art`}
          width={300}
          height={300}
          className="rounded-2xl shadow-white shadow-lg"
          style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
        />
        <div className="max-w-xl"></div>
        <p className="mb-4">{release.description}</p>
        <p className="mb-4">
          <strong>Release Date:</strong> {release.releaseDate}
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
