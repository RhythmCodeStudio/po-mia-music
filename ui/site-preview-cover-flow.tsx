"use client";
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
    <div className="w-full h-[660px] relative overflow-visible p-6">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper coverflow-swiper w-full h-full overflow-visible">
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="w-full h-full border-2 border-red-500 flex flex-col items-center justify-center p-6">
            <Heading
              text="Music"
              headingLevel={2}
              className="font-bold text-4xl text-shadow-black-background-black font-indie-flower tracking-widest"
            />
            <div className="grid grid-cols-2 gap-4">
              {releases.map((release) => (
                <ReleaseDisplayCondensed key={release.id} release={release} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
