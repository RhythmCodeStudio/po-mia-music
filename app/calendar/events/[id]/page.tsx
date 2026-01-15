// import data

import { getCalendarEvents } from "../../../../actions/actions";
// import definitions
// import { CalendarEvent } from "@/lib/definitions";
// import components
import CalendarEventDisplay from "../../../../ui/calendar-event-display";
import Heading from "../../../../ui/heading";
// import from utils
import { formatDate } from "../../../../utils/utils";

export default async function CalendarEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const events = await getCalendarEvents();
  // console.log("events:", events);
  // console.log("Looking for id:", id, "as number:", Number(id));
  // console.log("Event ids:", events.map((e: any) => ({ id: e.id, type: typeof e.id })));

  const event = events.find((event: any) => {
    // console.log("Comparing:", event.id, "===", Number(id), "result:", event.id === Number(id));
    return event.id === Number(id);
  });
  const eventLink = event?.event_link;

  console.log("event:", event);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">

      {eventLink ? (
            <a
              href={eventLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#ff0000]">
              <Heading
              text={event.title}
              headingLevel={2}
              className="text-4xl font-semibold text-shadow-black-background-black"
              />
            </a>
            ) : (
            <Heading
              text={event.title}
              headingLevel={2}
               className="text-4xl font-semibold text-shadow-black-background-black"
            />
            )}
      <div className="text-lg text-shadow-black-background-black ">
        <p>
          {typeof event.start_date === "string"
            ? formatDate(event.start_date)
            : formatDate(event.start_date?.toISOString().slice(0, 10))}
          {event.end_date
            ? ` - ${
                typeof event.end_date === "string"
                  ? formatDate(event.end_date)
                  : formatDate(event.end_date?.toISOString().slice(0, 10))
              }`
            : ""}
        </p>
        <p>
          {event.start_time}
          {event.end_time ? ` - ${event.end_time}` : ""}
        </p>
        <p>{event.location_name}</p>
        <p>{event.location_street_address}</p>
        <p>
          {event.location_city}, {event.location_state} {event.location_zip}
        </p>
      </div>
    </div>
    // <div className="w-full flex flex-col items-center px-4">
    //   <CalendarEventDisplay
    //     id={event.id}
    //     title={event.title}
    //     startDate={
    //       typeof event.start_date === "string"
    //         ? event.start_date
    //         : event.start_date?.toISOString().slice(0, 10)
    //     }
    //     endDate={
    //       event.end_date
    //         ? typeof event.end_date === "string"
    //           ? event.end_date
    //           : event.end_date?.toISOString().slice(0, 10)
    //         : undefined
    //     }
    //     startTime={event.start_time}
    //     endTime={event.end_time}
    //     allDay={event.all_day}
    //     cost={event.cost}
    //     locationName={event.location_name}
    //     locationStreetAddress={event.location_street_address}
    //     locationCity={event.location_city}
    //     locationState={event.location_state}
    //     locationZip={event.location_zip}
    //     description={event.description}
    //     imageUrl={event.image}
    //     ticketLink={event.ticket_link}
    //     venueLink={event.venue_link}
    //     eventLink={event.event_link}
    //     moreInfoLink={event.more_info_link}
    //   />
    // </div>
  );
}
