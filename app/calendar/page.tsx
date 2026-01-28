// import from next
import Image from "next/image";
// import components
import Heading from "../../ui/heading";
import CalendarClientContainer from "../../ui/calendar-client-container";
// import CalendarEventDisplay from "../../ui/calendar-event-display";
// import data
import { getCalendarEvents } from "../../actions/actions";

// const calendarPageOgImgUrl = "https://www.pomiamusic.com/images/open-graph/calendar-og.png";

export const metadata = {
  title: "Calendar | Po Mia | St. Louis, Missouri",
  description:
    "Stay updated with Po Mia's latest events and performances. Check out the calendar for upcoming shows, appearances, and more.",
  alternates: {
    canonical: "/calendar",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pomiamusic.com/calendar",
    siteName: "Po Mia: St. Louis Musician",
    title: "Calendar | Po Mia | St. Louis, Missouri",
    description:
      "Stay updated with Po Mia's latest events and performances. Check out the calendar for upcoming shows, appearances, and more.",
    // images: [
    //   {
    //     url: calendarPageOgImgUrl,
    //     width: 1200,
    //     height: 630,
    //     alt: "Calendar | Po Mia | St. Louis, Missouri",
    //   },
      // {
      //   url: ,
      //   width: 1920,
      //   height: 1080,
      //   alt: "Calendar | Po Mia | St. Louis, Missouri",
      // },
      // {
      //   url: ,
      //   width: 1080,
      //   height: 1080,
      // },
      // {
      //   url: ,
      //   width: 600,
      //   height: 314,
      // }
    // ],
  },
};

export default async function Calendar() {
  const events = await getCalendarEvents();
  console.log("events:", events);
  // upComingEvents should listed the events in the order of soonest to latest
  const eventsInOrder = events.sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return dateA.getTime() - dateB.getTime();
  });

  const currentDate = new Date();
  // filter out past events
  const upComingEvents = eventsInOrder.filter((event) => {
    const eventDate = new Date(event.start_date);
    return eventDate >= currentDate;
  });

  const pastEvents = eventsInOrder.filter((event) => {
    const eventDate = new Date(event.start_date);
    return eventDate < currentDate;
  });

  return (
    <div className="flex flex-col flex-grow items-center justify-center w-full">
      <Heading
        text="Calendar"
        headingLevel={2}
        className="font-bold text-4xl text-shadow-black-background-black font-acme tracking-widest"
      />
      <div className="px-8">
        <CalendarClientContainer
          upComingEvents={upComingEvents}
          pastEvents={pastEvents}
        />
      </div>
      <div className="px-8 w-full max-w-2xl h-auto">
        <Image
          src="/images/free-4-all.webp"
          width={2102}
          height={1401}
          alt="Po playing a keytar outdoors in a grassy area with trees in the background"
          className="rounded-4xl shadow-lg shadow-white mb-8"
        />
      </div>
    </div>
  );
}
