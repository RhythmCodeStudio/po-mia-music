"use client"
// import from react
import { useState } from "react";
// import components
import MailingList from "./mailing-list";
import AdminNotificationPanel from "./admin-notification-panel";

interface AdminContainerProps {
  mailingListRows: any[];
  numberOfNotificationSubscriptions?: number;
}

export default function AdminContainer({
  mailingListRows,
  numberOfNotificationSubscriptions,
}: AdminContainerProps) {
  // const mailingList = await getMailingList();
  // Transform the result to match { email: string }[]
  // const rows = mailingList.map((row: any) => ({ email: row.email }));
  return (
    <section>
      <MailingList rows={mailingListRows} />;
      <AdminNotificationPanel
        numberOfSubscriptions={numberOfNotificationSubscriptions}
      />
    </section>
  );
}
