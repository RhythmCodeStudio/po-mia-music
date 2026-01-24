// export default function Loading() {
//   return <p>Loading event...</p>;
// }

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function CalendarEventSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Heading skeleton */}
      <SkeletonBox className="h-10 w-48 sm:h-12 sm:w-64 mt-8 mb-4" />

      <div className="px-8 w-full mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-black/50 rounded-4xl shadow-lg shadow-white border-2 border-[rgba(255,255,255,0.3)] w-full max-w-xl my-8">
          {/* Date & Time skeleton */}
          <div className="text-lg w-full max-w-4xl flex flex-col justify-center items-center gap-2">
            <SkeletonBox className="h-6 w-40 sm:h-7 sm:w-56 mb-2" />
            <SkeletonBox className="h-6 w-32 sm:h-7 sm:w-40" />
          </div>
          {/* Venue skeleton */}
          <div className="w-full flex flex-col justify-center items-center gap-1">
            <SkeletonBox className="h-8 w-48 sm:h-10 sm:w-64 mb-1" />
            <SkeletonBox className="h-4 w-32 sm:h-5 sm:w-40" />
          </div>
          {/* Cost skeleton */}
          <div className="w-full flex flex-col justify-center items-center">
            <SkeletonBox className="h-6 w-24 sm:h-7 sm:w-32" />
          </div>
          {/* Description skeleton */}
          <div className="w-full flex flex-col justify-center items-center">
            <SkeletonBox className="h-16 w-full max-w-xs sm:h-20 sm:max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
}