// import from next
import Image from "next/image";
// import Link from "next/link";
// import components
import Toaster from "@/ui/toaster";
import LinkButton from "@/ui/link-button";
// import InstallPrompt from "../ui/install-prompt";
// import data
import { poBio, releases } from "../lib/po-data";
// import components
import AudioPlayer from "@/ui/audio-player";
import MusicSwiperCube from "@/ui/music-swiper-cube";
import YouTubeVideo from "@/ui/youtube-video";
import ClientContainer from "@/ui/client-container";
import CalendarClientContainer from "@/ui/calendar-client-container";
import CalendarEventDisplay from "@/ui/calendar-event-display";
// import SitePreviewCoverFlow from "../ui/site-preview-cover-flow";
// import ReleaseDisplayCondensed from "@/ui/release-display-condensed";
// import SitePreviewCube from "@/ui/site-preview-cube";
// import ThreejsRubiksCube from "@/ui/rubiks-cube";
// import CubeClientContainer from "@/ui/cube-client-container";
import Heading from "../ui/heading";
import PhotoGallery from "@/ui/photo-gallery";
// import actions
import { getCalendarEvents } from "../actions/actions";
// import { youTubeVideos } from "@/lib/video-data";
// import images
// import { pics } from "@/lib/pics";
// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home() {
  const events = await getCalendarEvents();
  const upComingEvents = events.filter((event) => new Date(event.start_date) >= new Date());
  // const pastEvents = events.filter((event) => new Date(event.start_date) < new Date());
  const nextEvent = upComingEvents.length > 0 ? upComingEvents[0] : null;
  console.log("nextEvent", nextEvent);
  const poLogue = releases.find((release) => release.title === "po logue");
  const cyberchondria = poLogue?.tracks.find(
    (track) => track.title === "cyberchondria",
  );
  // console.log("youTubeVideos", youTubeVideos);
  // await delayLoad(5000);
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center space-y-12 lg:space-y-16">
      {/* <div className="fixed top-20 left-0 w-full z-50">
        <InstallPrompt />
      </div> */}
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-6 lg:px-0">
        <Image
          fetchPriority="high"
          src="/images/po-hearts.webp"
          alt="po surrounded by hearts"
          width={2664}
          height={1902}
          priority
          className="rounded-4xl shadow-white shadow-lg border-2 border-[rgba(255,255,255,0.3)]"
        />
      </div>
      <div className="bg-black/50 mx-6 lg:mx-auto py-4 rounded-4xl shadow-white shadow-lg max-w-2xl border-2 border-[rgba(255,255,255,0.3)] px-6 lg:px-0">
        <p className="lg:px-6 text-shadow-black-background-black w-full max-w-xl lg:max-w-2xl mx-auto font-acme tracking-widest md:text-lg">
          {poBio}
        </p>
      </div>

        <div className="flex flex-col justify-center items-center w-full mx-auto">
        <Heading
          text="coming up next"
          headingLevel={2}
          className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
        />

        <div className="w-full max-w-sm mt-8 mx-auto flex justify-center items-center p-6">
          <CalendarEventDisplay
            id={nextEvent?.id}
            title={nextEvent?.title}
            startDate={
              typeof nextEvent?.start_date === "string"
                ? nextEvent?.start_date
                : nextEvent?.start_date?.toISOString().slice(0, 10)
            }
            endDate={
              nextEvent?.end_date
                ? typeof nextEvent?.end_date === "string"
                  ? nextEvent?.end_date
                  : nextEvent?.end_date?.toISOString().slice(0, 10)
                : undefined
            }
            startTime={nextEvent?.start_time}
            endTime={nextEvent?.end_time}
            allDay={nextEvent?.all_day}
            cost={nextEvent?.cost}
            locationName={nextEvent?.location_name}
            locationStreetAddress={nextEvent?.location_street_address}
            locationCity={nextEvent?.location_city}
            locationState={nextEvent?.location_state}
            locationZip={nextEvent?.location_zip}
            description={nextEvent?.description}
            imageUrl={nextEvent?.image}
            ticketLink={nextEvent?.ticket_link}
            moreInfoLink={nextEvent?.more_info_link}
            venueLink={nextEvent?.venue_link}
            eventLink={nextEvent?.event_link}
          />
        </div>
     

        <div className="sm:mt-2 md:mt-6 lg:mt-8">
          <Heading
            text="Catch all the shows"
            headingLevel={2}
            className="font-bold text-xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
          <LinkButton href="/calendar" label="Calendar" />
        </div>
      </div>

      {cyberchondria && (
        // <div className=" mx-auto w-full">
        <div className="px-6 lg:px-0 flex flex-col justify-center items-center w-full max-w-2xl  mx-auto">
          <Heading
            text="music"
            headingLevel={2}
            className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
          <div className="w-full pt-8">
            <AudioPlayer song={cyberchondria} />
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
        <div>
          <MusicSwiperCube />
        </div>
        <div className="mt-8">
          <Heading
            text="Listen to all the hits"
            headingLevel={2}
            className="font-bold text-xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />

          <LinkButton href="/music" label="Music" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <Heading
          text="photos"
          headingLevel={2}
          className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
        />
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <PhotoGallery
            showOptions={false}
            showPagination={false}
            showNavigation={false}
            showCaption={false}
          />
        </div>
        <div className="">
          <Heading
            text="See all the pics"
            headingLevel={2}
            className="font-bold text-xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
          <LinkButton href="/photos" label="Photos" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <Heading
          text="videos"
          headingLevel={2}
          className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
        />
        <div className="w-full p-6 sm:p-4 md:p-2 lg:p-0 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
          <ClientContainer
            component={
              <YouTubeVideo
                videoId="ABO_nv26QEc"
                title="po mia - exposé (My St. Louis Live!)"
              />
            }
          />
        </div>
        <div className="sm:mt-2 md:mt-6 lg:mt-8">
          <Heading
            text="Watch all the vids"
            headingLevel={2}
            className="font-bold text-xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
          <LinkButton href="/videos" label="Videos" />
        </div>
      </div>

     

      {/* <div className="flex flex-col justify-center items-center w-full mx-auto">
        <Heading
          text="reach out"
          headingLevel={2}
          className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
        />
        <div className="sm:mt-2 md:mt-6 lg:mt-8">
          <LinkButton href="/contact" label="Contact" />
        </div>
      </div> */}

      <Toaster />
    </div>
  );
}
