"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import Link from "next/link";
// import from react
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import image data
import { pics } from "@/lib/pics";
// import icons
// import { SlSizeFullscreen } from "react-icons/sl";
import Heading from "./heading";

interface PhotoGalleryProps {
  picSet: number[];
}

export default function PhotoGallery({ picSet }: PhotoGalleryProps) {
  const [fullScreenImage, setFullScreenImage] = useState<typeof pics[number] | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  // const clientPhotoData = photographyWorkSampleData.filter(
  //   (data) => data.client === client,
  // );
  // console.log("Client Photo Data:", clientPhotoData);
  // const clientImages = clientPhotoData[0].images;
  // console.log("Client Images:", clientImages);
  // const isPrasino = client === "Prasino";

  // Disable scroll and pause autoplay when fullscreen
  useEffect(() => {
    if (fullScreenImage !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    };
  }, [fullScreenImage]);

  return (
    <section className="text-center mx-auto w-full flex flex-col justify-center items-center font-bold max-w-4xl px-4 lg:px-0">
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xlfont-semibold mb-6">
        
      </h1> */}
      <Heading
        text="Photo Gallery"
        headingLevel={2}
        className="font-bold text-4xl sm:text-5xl md:text-6xl text-shadow-black-background-black font-indie-flower tracking-widest mb-6"
      />
      <Swiper
        autoHeight={true}
        className="photo-swiper"
        spaceBetween={30}
        loop={true}
        slidesPerView={"auto"}
        speed={1000}
        // effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        
        {pics.map((pic, index) => {
          const isPortrait = pic.orientation === "portrait";
          const imageWidth = isPortrait ? 1280 : 1920;
          const imageHeight = isPortrait ? 1920 : 1280;
          return (
            <SwiperSlide key={index}>
              <div
                className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-transparent mb-12 aspect-[3/2]"
                
                onClick={() => {
                  setFullScreenImage(pic);
                  track("image_view", { image: pic.alt });
                }}
              >
                <Image
                  src={pic.src}
                  alt={pic.alt || "Gallery image"}
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="object-contain w-full h-full"
                />
                {/* <caption className="text-sm neutral-600 my-6">
                Click or tap image to view fullscreen
              </caption> */}
                {/* <button
                  aria-label="View Fullscreen"
                  title="Enlarge Image"
                  className="text-white bg-black rounded-full my-4 p-2 hover:bg-opacity-75 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullScreenImage(pic);
                    track("image_view", { image: pic.alt });
                  }}>
                  <SlSizeFullscreen size={16} />
                </button> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {fullScreenImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
          onClick={() => setFullScreenImage(null)}>
          <Image
            src={fullScreenImage.src}
            alt={fullScreenImage.alt || "Gallery image"}
            width={fullScreenImage.width}
            height={fullScreenImage.height}
            priority
            // className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  );
}
