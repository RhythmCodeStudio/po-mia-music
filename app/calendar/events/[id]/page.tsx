// import data
// import CalendarEventDisplay from "@/ui/calendar-event-display";
import { getCalendarEvents } from "../../../../actions/actions";
// import definitions
// import { CalendarEvent } from "@/lib/definitions";

export default async function CalendarEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const events = await getCalendarEvents();
  console.log("events:", events);
  console.log("Looking for id:", id, "as number:", Number(id));
  console.log("Event ids:", events.map((e: any) => ({ id: e.id, type: typeof e.id })));
  
  const event = events.find((event: any) => {
    console.log("Comparing:", event.id, "===", Number(id), "result:", event.id === Number(id));
    return event.id === Number(id);
  });
  
  console.log("event:", event);
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* <CalendarEventDisplay
        id={event.id}
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
        allDay={event.all_day}
        cost={event.cost}
        locationName={event.location_name}
        locationStreetAddress={event.location_street_address}
        locationCity={event.location_city}
        locationState={event.location_state}
        locationZip={event.location_zip}
        description={event.description}
        imageUrl={event.image}
        ticketLink={event.ticket_link}
        venueLink={event.venue_link}
        eventLink={event.event_link}
        moreInfoLink={event.more_info_link}
      /> */}
    </div>
  );
}
