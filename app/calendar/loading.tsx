function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function CalendarPageLoadingSkeleton() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center w-full px-2">
      {/* Heading skeleton */}
      <SkeletonBox className="h-10 w-32 sm:h-12 sm:w-40 mt-8 mb-4" />

      {/* Calendar event grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl p-2 sm:p-8">
        {[...Array(3)].map((_, i) => (
          <section
            key={i}
            className="bg-black/30 border-2 border-gray-300/30 shadow-lg rounded-3xl sm:rounded-4xl p-4 sm:p-6 max-w-full md:max-w-md w-full text-center flex flex-col items-center"
          >
            {/* Date skeleton */}
            <SkeletonBox className="h-4 w-24 sm:h-5 sm:w-32 mb-2 mx-auto" />
            {/* Title skeleton */}
            <SkeletonBox className="h-6 w-32 sm:h-8 sm:w-48 mb-4 mx-auto" />
            {/* Time skeleton */}
            <SkeletonBox className="h-4 w-20 sm:h-5 sm:w-28 mb-2 mx-auto" />
            {/* Location skeleton */}
            <SkeletonBox className="h-4 w-40 sm:h-5 sm:w-56 mb-2 mx-auto" />
            {/* Buttons skeleton (edit/delete, only visible for admin, but show as skeleton) */}
            <div className="flex justify-center gap-4 mt-4">
              <SkeletonBox className="h-8 w-16 sm:h-10 sm:w-20" />
              <SkeletonBox className="h-8 w-16 sm:h-10 sm:w-20" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}