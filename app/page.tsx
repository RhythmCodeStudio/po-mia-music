import Image from "next/image";
import Toaster from "./ui/toaster";
import InstallPrompt from "./ui/install-prompt";

export default function Home() {
  return (
    <>
      <div className="fixed top-20 left-0 w-full z-50">
        <InstallPrompt />
      </div>
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-6 lg:px-0">
        <h1 className="hidden">po mia</h1>
        <Image
          fetchPriority="high"
          src="/images/po-hearts.webp"
          alt="po surrounded by hearts"
          width={2664}
          height={1902}
          priority
          className="rounded-4xl shadow-white shadow-lg z-50"
          style={{ border: "2px solid rgba(255, 255, 255, 0.3)" }}
        />
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
