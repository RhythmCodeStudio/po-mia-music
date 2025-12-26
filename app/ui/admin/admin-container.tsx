"use client";
// import from react
import { useState } from "react";
// import components
import MailingList from "./mailing-list";
import AdminNotificationPanel from "./admin-notification-panel";
import Messages from "./messages";
import Button from "../button";

interface AdminContainerProps {
  mailingListRows: any[];
  numberOfNotificationSubscriptions?: number;
}

export default function AdminContainer({
  mailingListRows,
  numberOfNotificationSubscriptions,
}: AdminContainerProps) {
  const [view, setView] = useState<"mailingList" | "notifications" | "messages">("notifications");

  return (
    <section>
      {/* <MailingList rows={mailingListRows} />;
      <AdminNotificationPanel
        numberOfSubscriptions={numberOfNotificationSubscriptions}
      />
      <Messages /> */}
      <div className="flex gap-4 mb-6 flex justify-center">
        <Button
          label="Mailing List"
          onClick={() => setView("mailingList")}
          ariaLabel="View Mailing List"
        />
        <Button
          label="Notifications"
          onClick={() => setView("notifications")}
          ariaLabel="Send Notifications"
        />
        <Button
          label="Messages"
          onClick={() => setView("messages")}
          ariaLabel="View Messages"
        />
      </div>
      <div>
        {view === "mailingList" && <MailingList rows={mailingListRows} />}
        {view === "notifications" && (
          <AdminNotificationPanel
            numberOfSubscriptions={numberOfNotificationSubscriptions}
          />
        )}
        {view === "messages" && <Messages />}
      </div>
    </section>
  );
}
