"use client";
import { useState } from "react";
import MailingList from "./mailing-list";
import AdminNotificationPanel from "./admin-notification-panel";
import AdminCalendar from "./admin-calendar";
import Messages from "./messages";
import Button from "../button";
import Heading from "../heading";
// import clsx
import clsx from "clsx";

interface AdminContainerProps {
  mailingListRows: any[];
  numberOfNotificationSubscriptions?: number;
}

export default function AdminContainer({
  mailingListRows,
  numberOfNotificationSubscriptions,
}: AdminContainerProps) {
  const [view, setView] = useState<
    "calendar" | "mailingList" | "notifications" | "messages"
  >("calendar");

  // --- set a fixed minHeight for the content area to prevent layout shift ---
  // adjust this value based on largest panel's height
  const contentMinHeight = "min-h-[320px]"; // <-- change as needed

  return (
    <section className="w-full">
      <Heading
        headingLevel={2}
        className="text-center mb-4"
        text="Admin Panel"
      />
      <div className="flex gap-4 mb-6 justify-center">
        <Button
          label="Calendar"
          onClick={() => setView("calendar")}
          ariaLabel="View Calendar"
          className={clsx(
            view === "calendar"
              ? "bg-blue-600 text-white pointer-events-none"
              : "bg-gray-200 text-gray-800"
          )}
        />
        <Button
          label="Notifications"
          onClick={() => setView("notifications")}
          ariaLabel="Send Notifications"
          className={clsx(
        view === "notifications"
          ? "bg-blue-600 text-white pointer-events-none"
          : "bg-gray-200 text-gray-800"
          )}
        />
        <Button
          label="Mailing List"
          onClick={() => setView("mailingList")}
          ariaLabel="View Mailing List"
          className={clsx(
        view === "mailingList"
          ? "bg-blue-600 text-white pointer-events-none"
          : "bg-gray-200 text-gray-800"
          )}
        />
        <Button
          label="Messages"
          onClick={() => setView("messages")}
          ariaLabel="View Messages"
          className={clsx(
        view === "messages"
          ? "bg-blue-600 text-white pointer-events-none"
          : "bg-gray-200 text-gray-800"
          )}
        />
      </div>
      {/* --- Changed: Render all panels, but only show the active one with absolute positioning and opacity --- */}
      <div className={` w-full ${contentMinHeight}`}>
        <div
          className={`w-full ${
            view === "calendar"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}>
          <AdminCalendar/>
        </div>
        <div
          className={`w-full ${
            view === "mailingList"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}>
          <MailingList rows={mailingListRows} />
        </div>
        <div
          className={`w-full ${
            view === "notifications"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}>
          <AdminNotificationPanel
            numberOfSubscriptions={numberOfNotificationSubscriptions}
          />
        </div>
        <div
          className={`w-full ${
            view === "messages"
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}>
          <Messages />
        </div>
      </div>
    </section>
  );
}
// --- Changes marked above ---
// - Added a minHeight to the content area to prevent layout shift.
// - Render all views absolutely stacked, only the active one is visible, so the container size doesn't change.
