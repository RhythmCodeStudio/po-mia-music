export const dynamic = "force-dynamic";
// import stack server app
import { stackServerApp } from "@/stack/server";
// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
import { getMailingList, getCalendarEvents } from "../../actions/actions";
// import from neon auth
import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import Heading from "@/ui/heading";
import AdminContainer from "@/ui/admin/admin-container";
// import AdminNotificationPanel from "@/app/ui/admin/admin-notification-panel";

export default async function AdminPage() {
  const app = stackServerApp;
  const user = await app.getUser();
  const subsctiptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subsctiptions.length;
  const calendarEvents = await getCalendarEvents();

  return (
    <div>
      {!user && (
        <div className="flex justify-center">
          <SignIn automaticRedirect={true} firstTab="password" />
        </div>
      )}

      {user && (
        <div className="flex flex-col justify-center items-center gap-6 text-shadow-black-background-black w-full">
          <Heading
            text="Welcome back po"
            headingLevel={2}
            className="font-bold text-4xl text-shadow-black-background-black mt-6"
          />
          <div className="mb-4 bg-black/50 mt-6 p-6 rounded-4xl shadow-lg shadow-white mx-6 border-2 border-[rgba(255,255,255,0.3)] w-ful min-w-6xl flex justify-center items-center z-50">
            <AdminContainer
              mailingListRows={await getMailingList()}
              numberOfNotificationSubscriptions={numberOfSubscriptions}
              calendarEventRows={await getCalendarEvents()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
