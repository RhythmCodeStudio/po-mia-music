// import components
import Heading from "../ui/heading";
import CalendarEventDisplay from "../ui/calendar-event-display";
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
    <div className="flex flex-col flex-grow items-center justify-center space-y-6">
      <Heading
        text="Calendar"
        headingLevel={2}
        className="text-4xl font-semibold text-shadow-black-background-black"
      />
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
        {upComingEvents.map((event) => (
          <CalendarEventDisplay
            key={event.id}
            title={event.title}
            startDate={
              typeof event.start_date === "string"
                ? event.start_date
                : event.start_date?.toISOString().slice(0, 10)
            }
            endDate={
              event.end_date
                ? typeof event.end_date === "string"
                  ? event.end_date
                  : event.end_date?.toISOString().slice(0, 10)
                : undefined
            }
            startTime={event.start_time}
            endTime={event.end_time}
            locationName={event.location_name}
            locationStreetAddress={event.location_street_address}
            locationCity={event.location_city}
            locationState={event.location_state}
            locationZip={event.location_zip}
            description={event.description}
            imageUrl={event.image}
          />
        ))}
      </div>
    </div>
  );
}
