// import components
import Heading from "../../ui/heading";
import PhotoGallery from "@/ui/photo-gallery";


export default function Photos() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text="Photos"
        headingLevel={2}
        className="font-bold text-5xl text-shadow-black-background-black font-indie-flower tracking-widest"
      />
      <div className="w-full ">
        <PhotoGallery showOptions={true} />
      </div>
    </div>
  );
}
