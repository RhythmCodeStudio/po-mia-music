export const dynamic = "force-dynamic";

// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
import { getMailingList, getCalendarEvents } from "../../actions/actions";
// import components
import Heading from "@/ui/heading";
import AdminContainer from "@/ui/admin/admin-container";

export default async function AdminPage() {
  const subsctiptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subsctiptions.length;
  // const calendarEvents = await getCalendarEvents();

  return (
    <div className=" w-full">
      {/* {!user && (
        <div className="flex justify-center my-12">
          <SignIn automaticRedirect={true} firstTab="password" />
        </div>
      )} */}

      {/* {user && ( */}
      <div className="flex flex-col justify-center items-center w-full">
        <Heading
          text="welcome back po"
          headingLevel={2}
          className="font-bold text-4xl text-shadow-black-background-black tracking-widest"
        />
        <div className="w-full flex justify-center p-8">
          <AdminContainer
            mailingListRows={await getMailingList()}
            numberOfNotificationSubscriptions={numberOfSubscriptions}
            calendarEventRows={await getCalendarEvents()}
          />
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
