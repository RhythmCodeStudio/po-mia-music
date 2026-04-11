"use client";
// import components
import Heading from "../../ui/heading";
import PhotoGallery from "@/ui/photo-gallery";
import FadeInOnScroll from "@/ui/fade-in-on-scroll";
// import useIsMobile
import { useIsMobile } from "@/utils/useIsMobile";

export default function Photos() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="photos"
        headingLevel={2}
        className="font-bold text-5xl text-shadow-black-background-black font-indie-flower tracking-widest"
      />
      <FadeInOnScroll>
        <div className="w-full mt-6 px-6 lg:px-0">
          <PhotoGallery showOptions={true} showNavigation={!isMobile} />
        </div>
      </FadeInOnScroll>
    </div>
  );
}
