"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
// import components
import CalendarEventDisplay from "./calendar-event-display";
import Button from "./button";
// import clsx
import clsx from "clsx";

interface CalendarClientContainerProps {
  upComingEvents: any[];
  pastEvents: any[];
}

export default function CalendarClientContainer({
  upComingEvents,
  pastEvents,
}: CalendarClientContainerProps) {
  const [view, setView] = useState<"future" | "past">("future");

  return (
    <section className="bg-black/50 rounded-4xl shadow-lg shadow-white border-2 border-[rgba(255,255,255,0.3)] w-full max-w-6xl min-w-xl flex flex-col items-center p-8 my-8">
      <div className="flex flex-row gap-4 mb-4">
        <Button
          label="Past"
          title="Past Events"
          onClick={() => setView("past")}
          className={clsx(
            "font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover",
            view === "past"
              ? "rainbow-gradient pointer-events-none"
              : "bg-black/50 hover:shadow-lg"
          )}
          labelClassName="text-shadow-black-background-black"
        />
        <Button
          label="Future"
          title="Future Events"
          onClick={() => setView("future")}
          className={clsx(
            "font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover",
            view === "future"
              ? "rainbow-gradient pointer-events-none"
              : "bg-black/50 hover:shadow-lg"
          )}
          labelClassName="text-shadow-black-background-black"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {view === "future" ? (
          upComingEvents.length > 0 ? (
            upComingEvents.map((event) => (
              <CalendarEventDisplay
                id={event.id}
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
                infoLink={event.info_link}
              />
            ))
          ) : (
            <p>
              No events currently scheduled. Please{" "}
              <Link href="/contact">
                <span className="underline">contact</span>
              </Link>{" "}
              for booking.
            </p>
          )
        ) : null}
        {view === "past"
          ? pastEvents.map((event) => (
              <CalendarEventDisplay
                id={event.id}
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
                infoLink={event.info_link}
              />
            ))
          : null}
      </div>
    </section>
  );
}
