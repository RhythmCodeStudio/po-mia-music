// import from next
import Image from "next/image";
// import components
import Heading from "../../ui/heading";
import CalendarClientContainer from "../../ui/calendar-client-container";
import CalendarEventDisplay from "../../ui/calendar-event-display";
// import data
import { getCalendarEvents } from "../../actions/actions";

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
        className="font-bold text-4xl text-shadow-black-background-black"
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
