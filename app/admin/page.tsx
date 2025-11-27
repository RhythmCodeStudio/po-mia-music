export const dynamic = "force-dynamic";
// import stack server app
import { stackServerApp } from "@/stack/server";
// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
// import from neon auth
import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import AdminNotificationPanel from "@/app/ui/admin/admin-notification-panel";
export default async function AdminPage() {
  const app = stackServerApp;
  const user = await app.getUser();
  const subsctiptions = await getSubscriptionsFromDB();
  const numberOfSubscriptions = subsctiptions.length;
  return (
    <div>
      {!user && (
      <div className="flex justify-center">
        <SignIn automaticRedirect={true} firstTab="password" />
      </div>
      )}
      
      {user && (
        <div className="mt-10 flex justify-center">
          <AdminNotificationPanel numberOfSubscriptions={numberOfSubscriptions} />
        </div>
      )}
    </div>
  );
}