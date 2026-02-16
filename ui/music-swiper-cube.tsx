"use client";
// import from next
import Image from "next/image";
// import from react
import { useState } from "react";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
// import data
import { releases } from "../lib/po-data";

export default function MusicSwiperCube() {
  // CHANGED: Added state to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // CHANGED: Added handler for slide change
  const handleSlideChange = (swiper: any) => {
    console.log("Cube rotated to slide:", swiper.activeIndex);
    setCurrentSlide(swiper.activeIndex);
    // Add your custom logic here
  };
  return (
    <Swiper
      effect="cube"
      grabCursor={true}
      speed={1400}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
      style={{
        width: "320px",
        height: "320px",
        margin: "0 auto",
      }}
      autoplay={{
        delay: 3200,
        // disableOnInteraction: true,
      }}
      onSlideChange={handleSlideChange}
    >
      {releases.map((release) => (
        <SwiperSlide
          key={release.id}
          title={`${release.title} by ${release.tracks[0]?.artist || "Unknown Artist"}`}>
          <div className="flex flex-col items-center justify-center mx-auto rounded-2xl relative">
            <Image
              src={release.cover_image}
              alt={`${release.title} cover art`}
              width={200}
              height={200}
              className="rounded-2xl shadow-white shadow-md border-2 border-[rgba(255,255,255,0.3)]"
            />
            {/* <h3 className="mt-2 text-center text-shadow-black-background-black text-lg font-semibold font-indie-flower tracking-widest absolute bottom-1/2 left-1/2 transform -translate-x-1/2">
              {release.title}
            </h3> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
