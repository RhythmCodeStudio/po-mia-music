// import from next
import Link from "next/link";
// import components
// import Background from "@/ui/background";
import PushNotificationSubscriptionManager from "@/ui/push-notification-subscription-manager";

export default function Home() {
  return (
    <div className="text-white">
      {/* <Background /> */}
      <Link href="/admin">Admin Panel</Link>
      <h1 className="text-2xl font-bold my-4">Push Notification Subscription Manager</h1>
      <PushNotificationSubscriptionManager /> 
    </div>
  );
}
