// import data
import { getCalendarEvents } from "../../../../actions/actions";
// import from next
import Image from "next/image";
// import definitions
// import { CalendarEvent } from "@/lib/definitions";
// import components
// import CalendarEventDisplay from "../../../../ui/calendar-event-display";
import Heading from "../../../../ui/heading";
import GoogleMapsLink from "@/ui/google-maps-link";
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
    <div className="flex flex-col justify-center items-center w-full">
      <Heading
        text={event.title}
        headingLevel={2}
        className="text-4xl font-bold text-shadow-black-background-black"
      />
      <div className="px-8 w-full mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-8 gap-4 bg-black/50 rounded-4xl shadow-lg shadow-white border-2 border-[rgba(255,255,255,0.3)] w-full max-w-xl my-8">
          <div className="text-lg w-full max-w-4xl flex flex-col justify-center items-center ">
            <p className="text-shadow-black-background-black text-xl font-medium">
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
            <p className="text-shadow-black-background-black text-xl font-medium">
              {event.start_time}
              {event.end_time ? ` - ${event.end_time}` : ""}
            </p>
             <p className="text-shadow-black-background-black text-lg">
            {event.cost ? `Cost: ${event.cost}` : "Free"}
          </p>
          </div>
         
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-shadow-black-background-black text-3xl font-semibold mb-1">
              {event.location_name}
            </p>
            <GoogleMapsLink
              addressLineOne={event.location_street_address}
              city={event.location_city}
              state={event.location_state}
              zipCode={event.location_zip}
              className="text-shadow-black-background-black underline decoration-blue-600 hover:decoration-blue-800 text-lg"
            />
          </div>

          <p className="text-shadow-black-background-black text-lg">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}
