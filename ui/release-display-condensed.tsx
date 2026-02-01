import Image from "next/image";
import Heading from "./heading";

interface ReleaseDisplayCondensedProps {
  release: {
    id: string;
    title: string;
    coverImgSrc: string;
  };
}

export default function ReleaseDisplayCondensed({
  release,
}: ReleaseDisplayCondensedProps) {
  return (
    <div className="relative aspect-square w-full max-w-xs min-w-[100px] bg-black/40 border-[rgba(255,255,255,0.2)] border rounded-2xl shadow-md overflow-hidden">
      <Image
        src={release.coverImgSrc}
        alt={`${release.title} cover art`}
        fill
        className="object-cover"
        sizes="(max-width: 320px) 100vw, 160px"
        
      />
      <div className="absolute bottom-0 left-0 w-full bg-black/60 py-2 px-2 z-10">
        <Heading
          headingLevel={3}
          className="text-center text-sm font-semibold font-indie-flower text-shadow-black-background-black"
          text={release.title}
        />
      </div>
    </div>
  );
}