"use client";
// import from react
import { useState } from "react";
// import icons
// import { IoIosCopy } from "react-icons/io";
// import components
import Button from "../button";
// import CalendarEventDisplay from "../calendar-event-display";
import CalendarEventForm from "./calendar-event-form";
import CalendarClientContainer from "../calendar-client-container";

interface AdminCalendarProps {
  calendarEventRows: any[];
}

export default function AdminCalendar({
  calendarEventRows,
}: AdminCalendarProps) {
  const [view, setView] = useState<"viewEvents" | "addEvent">("viewEvents");
  const upComingEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.start_date);
    const currentDate = new Date();
    return eventDate >= currentDate;
  });
  const pastEvents = calendarEventRows.filter((event) => {
    const eventDate = new Date(event.start_date);
    const currentDate = new Date();
    return eventDate < currentDate;
  });
   const activeClass =
    "w-28 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 transition duration-200 ease-in-out rainbow-gradient pointer-events-none";
  const inactiveClass =
    "w-28 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover active:scale-95 bg-black/50 hover:shadow-lg";
  
    return (
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex gap-4">
          <Button
            label="view events"
            onClick={() => setView("viewEvents")}
            ariaLabel="View Events"
            className={view === "viewEvents" ? activeClass : inactiveClass}
            labelClassName="text-shadow-black-background-black"
          />
          <Button
            label="add event"
            onClick={() => setView("addEvent")}
            ariaLabel="Add Event"
            className={view === "addEvent" ? activeClass : inactiveClass}
            labelClassName="text-shadow-black-background-black"
          />
        </div>
        {view === "viewEvents" ? (
        <div className="w-full px-8">
          <CalendarClientContainer
            upComingEvents={upComingEvents}
            pastEvents={pastEvents}
          />
        </div>
      
    ) : (
      <div className="w-full mt-6">
        <CalendarEventForm
          mode="create"
          eventId=""
          initialDayOfWeek=""
          initialDate=""
          initialTime=""
          initialCost=""
          initialVenueName=""
          initialVenueStreetAddress=""
          initialVenueCity=""
          initialVenueState=""
          initialVenueZip=""
          initialDescription=""
          initialImageUrl=""
          initialTicketLink=""
          initialEventLink=""
          initialVenueLink=""
          initialMoreInfoLink=""
          onClose={() => setView("viewEvents")}
        />
      </div>
    )}
    </div>
  );
}
