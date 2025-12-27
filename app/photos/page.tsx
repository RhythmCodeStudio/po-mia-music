// import pic data
import { pics } from "@/lib/pics";
// import from next
import Image from "next/image";

type Pic = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Photos() {
  return (
    <div>
      <h1>Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
