"use client";
// import from react
import { useState } from "react";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import defintions
import type { CalendarEvent } from "@/defintions/definitions";
// import components
import CalendarEventDisplay from "./calendar-event-display";
import Button from "./button";
// import clsx
import clsx from "clsx";

interface CalendarClientContainerProps {
  upComingEvents: CalendarEvent[];
  pastEvents?: CalendarEvent[];
  numberOfEventsToShow?: number;
  showViewToggle?: boolean;
}

export default function CalendarClientContainer({
  upComingEvents,
  pastEvents = [],
  numberOfEventsToShow,
  showViewToggle = true,
}: CalendarClientContainerProps) {
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith("/admin");

  return (
    <section
      className={clsx(
        "w-full flex flex-col items-center",
        showViewToggle ? "p-6" : !isAdminPath && "p-8",
        showViewToggle && isAdminPath && "pt-0"
      )}>
      {showViewToggle && (
        <div className="flex flex-row justify-center items-center pb-6 w-full gap-4">
          <Button
            label="past"
            title="past events"
            onClick={() => setView("past")}
            className={clsx(
              "w-28 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover",
              view === "past"
                ? "rainbow-gradient pointer-events-none"
                : "bg-black/50 hover:shadow-lg",
            )}
            labelClassName="text-shadow-black-background-black"
          />
          <Button
            label="upcoming"
            title="upcoming events"
            onClick={() => setView("upcoming")}
            className={clsx(
              "w-28 text-white rounded-full border-border-default border-2 shadow-white shadow-md px-4 py-1 active:scale-95 transition duration-200 ease-in-out rainbow-gradient-hover",
              view === "upcoming"
                ? "rainbow-gradient pointer-events-none"
                : "bg-black/50 hover:shadow-lg",
            )}
            labelClassName="text-shadow-black-background-black"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full z-50">
        {view === "upcoming" ? (
          upComingEvents.length > 0 ? (
            upComingEvents
              .slice(0, numberOfEventsToShow)
              .map((event) => (
                <CalendarEventDisplay
                  id={String(event.id)}
                  key={event.id}
                  // title={event.title}
                  date={
                    typeof event.date === "string"
                      ? event.date
                      : event.date?.toISOString().slice(0, 10)
                  }
                  dayOfWeek={event.dayOfWeek}
                  time={event.time}
                  cost={event.cost ?? ""}
                  venueName={event.venueName}
                  venueStreetAddress={event.venueStreetAddress}
                  venueCity={event.venueCity}
                  venueState={event.venueState}
                  venueZip={event.venueZip}
                  description={event.description}
                  image={event.image}
                  ticketLink={event.ticketLink}
                  moreInfoLink={event.moreInfoLink}
                  venueLink={event.venueLink}
                  eventLink={event.eventLink}
                />
              ))
          ) : (
            // no upcoming events
            <div className="col-span-full text-center text-shadow-black-background-black">
              <p>
                No events currently scheduled. Please{" "}
                <Link href="/contact">
                  <span className="underline">contact</span>
                </Link>{" "}
                for booking.
              </p>
            </div>
          )
        ) : null}
        {view === "past"
          ? pastEvents.map((event) => (
              <CalendarEventDisplay
                id={String(event.id)}
                key={event.id}
                // title={event.title}
                date={
                  typeof event.date === "string"
                    ? event.date
                    : event.date?.toISOString().slice(0, 10)
                }
                dayOfWeek={event.dayOfWeek}
                time={event.time}
                cost={event.cost ?? ""}
                venueName={event.venueName}
                venueStreetAddress={event.venueStreetAddress}
                venueCity={event.venueCity}
                venueState={event.venueState}
                venueZip={event.venueZip}
                description={event.description}
                image={event.image}
                ticketLink={event.ticketLink}
                moreInfoLink={event.moreInfoLink}
                venueLink={event.venueLink}
                eventLink={event.eventLink}
              />
            ))
          : null}
      </div>
    </section>
  );
}