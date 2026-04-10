// import from next
import Image from "next/image";
// import clsx
import clsx from "clsx";
// import components
import Toaster from "@/ui/toaster";
import LinkButton from "@/ui/link-button";
import AudioPlayer from "@/ui/audio-player";
import MusicSwiperCube from "@/ui/music-swiper-cube";
import YouTubeVideo from "@/ui/youtube-video";
import ClientContainer from "@/ui/client-container";
import CalendarEventDisplay from "@/ui/calendar-event-display";
import SlideInOnScroll from "@/ui/slide-in-on-scroll";
import FadeInOnScroll from "@/ui/fade-in-on-scroll";
import Heading from "@/ui/heading";
import PhotoGallery from "@/ui/photo-gallery";
// import data
import { poBio, releases } from "../lib/po-data";
// import actions
import { getCalendarEvents } from "../actions/actions";
import Link from "next/link";
// function delayLoad(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function Home() {
  const events = await getCalendarEvents();
  const upComingEvents = events.filter(
    (event) => new Date(event.start_date) >= new Date(),
  );
  const nextEvent = upComingEvents.length > 0 ? upComingEvents[0] : null;
  const poLogue = releases.find((release) => release.title === "po logue");
  const cyberchondria = poLogue?.tracks.find(
    (track) => track.title === "cyberchondria",
  );
  // await delayLoad(5000);
  return (
    <div className="relative flex flex-col grow items-center justify-center space-y-12 lg:space-y-16">
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
          className="rounded-4xl shadow-white shadow-lg border-2 border-border-default"
        />
      </div>
      <div className="bg-black/50 mx-6 lg:mx-auto py-4 rounded-4xl shadow-white shadow-lg max-w-2xl border-2 border-border-default px-6 lg:px-0">
        <p className="lg:px-6 text-shadow-black-background-black w-full max-w-xl lg:max-w-2xl mx-auto font-acme tracking-widest md:text-lg">
          {poBio}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <SlideInOnScroll>
          <Heading
            text="up next..."
            headingLevel={2}
            className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
        </SlideInOnScroll>
        <FadeInOnScroll>
          {nextEvent && (
            <div className="w-full max-w-xs mt-8 mx-auto flex justify-center items-center p-6">
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
          )}
          {/* <div className={clsx("", !nextEvent && "mt-8")}> */}
          <div className="mt-8">
            <LinkButton href="/calendar" label="catch all the shows" />
          </div>
        </FadeInOnScroll>
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
        <SlideInOnScroll>
          <Heading
            text="music"
            headingLevel={2}
            className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
        </SlideInOnScroll>
        <FadeInOnScroll>
          <div className="w-full p-8">
            <MusicSwiperCube />
          </div>
          {cyberchondria && (
            <div className="w-full px-6 lg:p-0 mt-2">
              <AudioPlayer song={cyberchondria} />
            </div>
          )}
          <div className="mt-8">
            <LinkButton href="/music" label="hear all the hits" />
          </div>
        </FadeInOnScroll>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <SlideInOnScroll>
          <Heading
            text="photos"
            headingLevel={2}
            className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
        </SlideInOnScroll>
        <FadeInOnScroll>
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <PhotoGallery
              showOptions={false}
              showPagination={false}
              showNavigation={false}
              showCaption={false}
            />
          </div>
          <div className="">
            <LinkButton href="/photos" label="see all the pics" />
          </div>
        </FadeInOnScroll>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <SlideInOnScroll>
          <Heading
            text="videos"
            headingLevel={2}
            className="font-bold text-5xl lg:text-6xl xl:text-7xl text-shadow-black-background-black font-indie-flower tracking-widest"
          />
        </SlideInOnScroll>
        <FadeInOnScroll>
          <div className="w-full p-6 md:p-0 mt-8">
            <ClientContainer
              component={
                <YouTubeVideo
                  videoId="ABO_nv26QEc"
                  title="po mia - exposé (My St. Louis Live!)"
                />
              }
            />
          </div>
          <div className="mt-8">
            <LinkButton href="/videos" label="watch all the vids" />
          </div>
        </FadeInOnScroll>
      </div>
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <FadeInOnScroll>
          <Link href="/contact">
            <Heading
              text="keep in touch"
              headingLevel={2}
              className="underline font-bold text-4xl xl:text-6xl rainbow-gradient-text font-indie-flower tracking-widest icon-shadow hover:scale-105 hover:-rotate-3 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </FadeInOnScroll>
      </div>
      <Toaster />
    </div>
  );
}
