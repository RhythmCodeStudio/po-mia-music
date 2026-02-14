import Image from "next/image";
import Heading from "./heading";

interface ReleaseDisplayCondensedProps {
  release: {
    id: string;
    title: string;
    cover_image: string;
  };
}

export default function ReleaseDisplayCondensed({
  release,
}: ReleaseDisplayCondensedProps) {
  return (
    <div className="relative aspect-square w-full h-auto bg-black/40 border-[rgba(255,255,255,0.2)] border rounded-2xl shadow-md overflow-hidden">
      <Image
        src={release.cover_image}
        alt={`${release.title} cover art`}
        width={600}
        height={600}
        className="object-cover"
        sizes="(max-width: 320px) 100vw, 160px"
      />
    </div>
  );
}