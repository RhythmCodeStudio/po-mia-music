// import from next
import Image from "next/image";
// import Link from "next/link";
// import components
// import Background from "./ui/background";
import Toaster from "./ui/toaster";
import InstallPrompt from "./ui/install-prompt";

export default function Home() {
  return (
    <>
      <div className="fixed top-20 left-0 w-full z-50">
        <InstallPrompt />
      </div>
      <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto px-6">
        <h1 className="hidden">po mia</h1>
        <div className="">
          <Image
            src="/images/po-hearts.webp"
            alt="Po Mia Music Logo"
            width={2664}
            height={1902}
            priority
          />
        </div>
        <Toaster />
      </div>
    </>
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
