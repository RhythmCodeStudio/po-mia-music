// import from next
// import Link from "next/link";
// import components
// import Background from "./ui/background";
// import PushNotificationSubscriptionManager from "./ui/push-notification-subscription-manager";
import Toaster from "./ui/toaster";
import InstallPrompt from "./ui/install-prompt";

export default function Home() {
  return (
    <div className="text-center">
      {/* <Background /> */}
      {/* <PushNotificationSubscriptionManager /> */}
      <h1 className="text-4xl">Hi Po!</h1>
      <p>Welcome to your new website!</p>
      <Toaster />
      <InstallPrompt />
    </div>
  );
}
