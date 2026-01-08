function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function VideoPageLoadingSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-2">
      {/* Heading skeleton */}
      <SkeletonBox className="h-10 w-32 sm:h-12 sm:w-40 mt-8 mb-4" />

      {/* Video grid skeleton */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-2 sm:p-8">
        {[...Array(2)].map((_, i) => (
          <section
            key={i}
            className="flex flex-col bg-black/30 border-2 border-gray-300/30 shadow-lg rounded-3xl sm:rounded-4xl p-4 sm:p-6 w-full max-w-full sm:max-w-2xl mx-auto"
          >
            {/* Video title */}
            <SkeletonBox className="h-6 w-32 sm:h-8 sm:w-48 mb-4 sm:mb-6 mx-auto" />
            {/* Video thumbnail (aspect-video) */}
            <div className="relative w-full aspect-video mb-4">
              <SkeletonBox className="absolute inset-0 w-full h-full rounded-2xl sm:rounded-4xl" />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <SkeletonBox className="h-12 w-12 sm:h-16 sm:w-16 rounded-full" />
              </div>
            </div>
            {/* Optional description skeleton */}
            {/* <SkeletonBox className="h-4 w-3/4 mx-auto" /> */}
          </section>
        ))}
      </div>
    </div>
  );
}