// import from neon auth
import { SignIn } from "@stackframe/stack";
// import { AccountSettings } from "@stackframe/stack";
// import components
import AdminNotificationPanel from "@/app/ui/admin/admin-notification-panel";
export default function AdminPage() {
  return (
    <div>
      {/* <div className="p-6">
        <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
        <AdminNotificationPanel />
      </div> */}
      <div>
        {/* <h1>Sign In</h1> */}
        {/* <SignIn
          fullPage={true}
        /> */}
        <AdminNotificationPanel />
      </div>
    </div>
  );
}
