"use client";
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import components
import Heading from "./heading";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  description?: string;
}

export default function YouTubeVideo({
  videoId,
  title,
  description,
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <div className="w-full z-50 bg-black/50 p-(--card-padding) rounded-(--card-radius) shadow-lg shadow-white border-2 border-border-default [--card-radius:var(--radius-4xl)] [--card-padding:--spacing(4)]">
        <Heading
          text={title}
          headingLevel={3}
          className="px-2 pb-2 text-center lg:text-lg text-shadow-black-background-black font-indie-flower tracking-widest font-semibold"
        />
        <div
          className="relative aspect-video rounded-[calc(var(--card-radius)-var(--card-padding))] shadow-md shadow-white cursor-pointer"
          onClick={() => setIsPlaying(true)}>
          <span className="sr-only">{title}</span>
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-[calc(var(--card-radius)-var(--card-padding))]"></iframe>
          ) : (
            <>
              <Image
                src={thumbnailUrl}
                alt="YouTube Video Thumbnail"
                fill
                className="object-cover border-border-default rounded-[calc(var(--card-radius)-var(--card-padding))]"
                sizes="(max-width: 768px) 100vw, 640px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rainbow-gradient bg-opacity-75 rounded-full p-4 border-border-default shadow-white shadow-md">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
        <p className="sr-only">{description}</p>
      </div>
      {description && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: title,
              description: description,
              thumbnailUrl: thumbnailUrl,
              embedUrl: `https://www.youtube.com/embed/${videoId}`,
            }),
          }}
        />
      )}
    </>
  );
}
