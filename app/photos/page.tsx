// import from next
import Image from "next/image";
// import components
import Heading from "../../ui/heading";
import PhotoGallery from "@/ui/photo-gallery";
// import pic data
import { pics } from "@/lib/pics";

// type Pic = {
//   id: number;
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// };

export default function Photos() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="Photo Gallery"
        headingLevel={2}
        className="font-bold text-5xl text-shadow-black-background-black font-indie-flower tracking-widest"
      />
      <div className="w-full p-8">
        <PhotoGallery picSet={pics.map((pic) => pic.id)} />
      </div>
    </div>
  );
}
