// import from next
// import Link from "next/link";
// import components
// import Background from "./ui/background";
// import PushNotificationSubscriptionManager from "./ui/push-notification-subscription-manager";
import Toaster from "./ui/toaster";

export default function Home() {
  return (
    <div className="text-center">
      {/* <Background /> */}
      {/* <PushNotificationSubscriptionManager /> */}
      <h1 className="text-4xl font-bold">po mia</h1>
      <Toaster />
    </div>
  );
}
