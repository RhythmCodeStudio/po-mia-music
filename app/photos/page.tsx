// import pic data
import { pics } from "@/lib/pics";
// import from next
import Image from "next/image";
// import components
import Heading from "../ui/heading";

type Pic = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Photos() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="Photos"
        headingLevel={2}
        className="font-bold text-4xl text-shadow-black-background-black mt-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12 px-6">
        {pics.map((pic: Pic) => (
          <div key={pic.id} className="flex flex-col items-center">
            <Image
              src={pic.src}
              alt={pic.alt}
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
