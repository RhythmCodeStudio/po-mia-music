import Image from "next/image";
import Toaster from "../ui/toaster";
import InstallPrompt from "../ui/install-prompt";
// import data
import { poBio } from "../lib/po-data";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center ptmay-8">
      <div className="fixed top-20 left-0 w-full z-50">
        <InstallPrompt />
      </div>
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 lg:px-0">
        <Image
          fetchPriority="high"
          src="/images/po-hearts.webp"
          alt="po surrounded by hearts"
          width={2664}
          height={1902}
          priority
          className="rounded-4xl shadow-white shadow-lg z-10 border-2 border-[rgba(255,255,255,0.3)]"
        />
      </div>
      <div className="bg-black/50 m-6 lg:mx-auto py-4 rounded-4xl shadow-lg shadow-black/20 max-w-4xl border-2 border-[rgba(255,255,255,0.3)]">
        <p className="px-6 text-shadow-black-background-black w-full max-w-2xl mx-auto">
          {poBio}
        </p>
      </div>
      <Toaster />
    </div>
  );
}