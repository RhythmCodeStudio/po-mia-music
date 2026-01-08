function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function HomePageLoadingSkeleton() {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center pt-8 w-full px-2">
      {/* InstallPrompt skeleton */}
      {/* <div className="fixed top-20 left-0 w-full z-50 flex justify-center">
        <SkeletonBox className="h-10 w-64 sm:w-80 rounded-2xl" />
      </div> */}
      {/* Image skeleton */}
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 lg:px-0">
        <SkeletonBox className="w-full aspect-[2664/1902] rounded-4xl shadow-lg border-2 border-gray-300/30" />
      </div>
      {/* Bio skeleton */}
      <div className="bg-black/50 m-6 lg:mx-auto py-4 rounded-4xl shadow-lg shadow-black/20 border-2 border-gray-300/30 w-full max-w-2xl">
        <SkeletonBox className="h-6 w-40 sm:h-8 sm:w-64 mb-4 mx-auto" />
        <div className="flex flex-col gap-2 px-6 w-full mx-auto">
          {[...Array(4)].map((_, i) => (
            <SkeletonBox key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
      {/* Toaster skeleton (optional, minimal) */}
      <div className="fixed bottom-8 right-8 z-50">
        <SkeletonBox className="h-8 w-32 rounded-xl" />
      </div>
    </div>
  );
}