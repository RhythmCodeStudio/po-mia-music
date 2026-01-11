function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function MusicSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center w-full px-2">
      {/* Heading skeleton */}
      <SkeletonBox className="h-10 w-32 sm:h-12 sm:w-40 mt-8 mb-4" />

      {/* IconLinkGroup skeleton */}
      <div className="flex flex-row gap-4 sm:gap-8 mt-2 mb-8 flex-wrap justify-center">
        {[...Array(6)].map((_, i) => (
          <SkeletonBox key={i} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
        ))}
      </div>

      {/* ReleaseDisplayContainer skeleton */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-2 sm:p-8">
        {[...Array(2)].map((_, i) => (
          <section
            key={i}
            className="flex flex-col bg-black/30 border-2 border-gray-300/30 shadow-lg rounded-3xl sm:rounded-4xl p-4 sm:p-6 w-full max-w-full sm:max-w-2xl mx-auto text-xs sm:text-sm lg:text-base"
          >
            {/* Title */}
            <SkeletonBox className="h-6 w-32 sm:h-8 sm:w-48 mb-4 sm:mb-6 mx-auto" />
            <div className="flex flex-col gap-4 sm:gap-6 items-center w-full">
              {/* Cover image */}
              <SkeletonBox className="h-48 w-48 sm:h-72 sm:w-72 rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-300/30" />
              {/* Track list */}
              <div className="w-full flex justify-center items-center">
                <ul className="w-full max-w-xs sm:max-w-md space-y-2 mx-auto">
                  {[...Array(5)].map((_, j) => (
                    <SkeletonBox key={j} className="h-3 w-2/3 sm:h-4 sm:w-3/4 mx-auto" />
                  ))}
                </ul>
              </div>
              {/* Description */}
              <SkeletonBox className="h-10 w-full max-w-xs sm:h-16 sm:max-w-md" />
              {/* Release date */}
              <SkeletonBox className="h-3 w-20 sm:h-4 sm:w-32" />
              {/* Links */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 justify-center">
                {[...Array(3)].map((_, k) => (
                  <SkeletonBox key={k} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}