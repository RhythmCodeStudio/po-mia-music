"use client";
// import from next
import Image from "next/image";
//import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import components
import Heading from "./heading";
import ReleaseDisplayCondensed from "./release-display-condensed";
// import data
import { releases } from "@/lib/po-data";

export default function sitePreviewCoverFlow() {
  return (
    <div className="w-full h-auto relative overflow-visible ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper ">
        {releases.map((release) => (
          <SwiperSlide
            key={release.id}
            title={`${release.title} by ${release.tracks[0]?.artist || "Unknown Artist"}`}
            className="">
            <div className="flex flex-col items-center justify-center mx-auto  my-2 relative">
              <Image
                src={release.cover_image}
                alt={`${release.title} cover art`}
                width={200}
                height={200}
                className=" shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
              />
              {/* <h3 className="mt-2 text-center text-shadow-black-background-black text-lg font-semibold font-indie-flower tracking-widest">
                {release.title}
              </h3> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
