export const dynamic = "force-dynamic";
// import stack server app
import { stackServerApp } from "@/stack/server";
// import data
import { getSubscriptionsFromDB } from "@/lib/notification-subscriptions-db";
// import from neon auth
import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import MailingList from "../ui/admin/mailing-list";
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
        <div className="mt-10 flex flex-col justify-center items-center gap-6 text-shadow-black-background-black">
          <h2 className="text-center text-4xl font-bold">Welcome back Po</h2>
          <div className="mb-4 bg-black/50 mt-6 p-6 rounded-4xl shadow-lg shadow-black/20 max-w-2xl mx-6 lg:mx-auto border-2 border-[rgba(255,255,255,0.3)]">
            <MailingList />
          </div>
          <div className="mb-4 bg-black/50 mt-6 p-6 rounded-4xl shadow-lg shadow-black/20 max-w-2xl mx-6 lg:mx-auto border-2 border-[rgba(255,255,255,0.3)]">
            <AdminNotificationPanel
              numberOfSubscriptions={numberOfSubscriptions}
            />
          </div>
        </div>
      )}
    </div>
  );
}
