// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
// import from neon auth
import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import AdminNotificationPanel from "@/app/ui/admin/admin-notification-panel";
export default async function AdminPage() {
  const subsctiptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subsctiptions.length;
  return (
    <div>
      {/* <div className="p-6">
        <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
        <AdminNotificationPanel />
      </div> */}
      <div className="flex justify-center">
        {/* <h1>Sign In</h1> */}
        {/* <SignIn
          fullPage={true}
        /> */}
        <AdminNotificationPanel  numberOfSubscriptions={numberOfSubscriptions} />
      </div>
    </div>
  );
}
