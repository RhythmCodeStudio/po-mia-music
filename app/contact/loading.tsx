function SkeletonBox({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300/30 rounded ${className}`} />
  );
}

export default function ContactPageLoading() {
  return (
    <section className="flex flex-col items-center justify-center w-full px-2">
      {/* Heading skeleton */}
      <SkeletonBox className="h-10 w-32 sm:h-12 sm:w-40 mt-8 mb-4" />

      {/* IconLinkGroup skeleton */}
      <div className="flex flex-row gap-4 sm:gap-8 mt-2 mb-8 flex-wrap justify-center">
        {[...Array(5)].map((_, i) => (
          <SkeletonBox key={i} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
        ))}
      </div>

      <div className="w-full p-2 sm:p-8 flex flex-col justify-center items-center gap-8">
        {/* MailingListSignUpForm skeleton */}
        <div className="flex flex-col items-stretch w-full max-w-full sm:max-w-2xl p-4 sm:p-8 bg-black/30 border-2 border-gray-300/30 shadow-lg rounded-3xl sm:rounded-4xl">
          <SkeletonBox className="h-8 w-48 mb-4 mx-auto" />
          <div className="flex flex-col gap-4">
            <SkeletonBox className="h-10 w-full rounded-2xl" />
            <SkeletonBox className="h-6 w-40 mx-auto mt-4 rounded-2xl" />
          </div>
        </div>
        {/* ContactFormContainer skeleton */}
        <div className="flex flex-col items-stretch w-full max-w-full sm:max-w-2xl p-4 sm:p-8 bg-black/30 border-2 border-gray-300/30 shadow-lg rounded-3xl sm:rounded-4xl">
          <SkeletonBox className="h-8 w-48 mb-4 mx-auto" />
          <div className="flex flex-col gap-4">
            <SkeletonBox className="h-10 w-full rounded-2xl" />
            <SkeletonBox className="h-10 w-full rounded-2xl" />
            <SkeletonBox className="h-10 w-full rounded-2xl" />
            <SkeletonBox className="h-10 w-full rounded-2xl" />
            <SkeletonBox className="h-20 w-full rounded-2xl" />
            <div className="flex items-center gap-2 mt-2">
              <SkeletonBox className="h-4 w-4 " />
              <SkeletonBox className="h-4 w-32" />
            </div>
            <SkeletonBox className="h-10 w-28 mx-auto mt-4 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}