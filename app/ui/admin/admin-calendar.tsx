"use client";
// import from react
import { useState } from "react";
// import icons
import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
import CalendarEvent from "../calendar-event";
import CalendarEventForm from "./calendar-event-form";

export default function AdminCalendar() {
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
        <CalendarEvent
          title="po mia plays blacklist christmas"
          date="Sunday, December 28"
          time="7:00 PM"
          locationName="Moshmellow"
          locationStreetAddress="3359 S. Jefferson Ave"
          locationCity="St. Louis"
          locationState="MO"
          locationZip="63118"
          description="This is a sample event description."
        />
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