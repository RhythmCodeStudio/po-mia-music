import Image from "next/image";
import Toaster from "./ui/toaster";
import InstallPrompt from "./ui/install-prompt";
// import data
import { poBio } from "../lib/po-data";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center space-y-2 md:space-y-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-shadow-black-background-black ">
        po mia
      </h1>
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
          // style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
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

// import Image from "next/image";
// import Toaster from "./ui/toaster";
// import InstallPrompt from "./ui/install-prompt";

// export default function Home() {
//   return (
//     <div className="relative flex flex-col flex-grow items-center justify-center min-h-screen">
//       {/* Background Image */}
//       <Image
//         src="/images/po-hearts.webp"
//         alt="Po Mia Music Logo"
//         fill
//         priority
//         className="object-cover z-0"
//         style={{ pointerEvents: "none" }}
//       />
//       {/* Overlay Content */}
//       <div className="fixed top-20 left-0 w-full z-50">
//         <InstallPrompt />
//       </div>
//       <div className="relative z-10 flex flex-col items-center">
//         <h1 className="text-4xl hidden">po mia</h1>
//         <Toaster />
//       </div>
//     </div>
//   );
// }
