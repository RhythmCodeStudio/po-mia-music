"use client";
// import from react
import { useState } from "react";
// import icons
import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
import CalendarEventDisplay from "../calendar-event-display";
import CalendarEventForm from "./calendar-event-form";

interface AdminCalendarProps {
  calendarEventRows: any[];
}

export default function AdminCalendar({
  calendarEventRows,
}: AdminCalendarProps) {
  const [view, setView] = useState<"events" | "addEvent">("events");

  if (view === "events") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="View Events"
            onClick={() => setView("events")}
            ariaLabel="View Events"
            className="bg-blue-600 text-white pointer-events-none"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="bg-gray-200 text-gray-800"
          />
        </div>
        <div className="max-w-md">
          {/* <CalendarEventDisplay
            title="po mia plays blacklist christmas"
            startDate="Sunday, December 28"
            startTime="7:00 PM"
            locationName="Moshmellow"
            locationStreetAddress="3359 S. Jefferson Ave"
            locationCity="St. Louis"
            locationState="MO"
            locationZip="63118"
            description="This is a sample event description."
          /> */}
          {calendarEventRows.map((event: any) => (
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
  } else if (view === "addEvent") {
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="View Events"
            onClick={() => setView("events")}
            ariaLabel="View Events"
            className="bg-gray-200 text-gray-800"
          />
          <Button
            label="Add Event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className="bg-blue-600 text-white pointer-events-none"
          />
        </div>
        <CalendarEventForm />
      </div>
    );
  } else {
    return null;
  }
}
