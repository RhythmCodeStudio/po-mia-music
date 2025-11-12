// import from next
import Link from "next/link";
// import components
// import Background from "@/ui/background";
import PushNotificationSubscriptionManager from "@/ui/push-notification-subscription-manager";

export default function Home() {
  return (
    <div className="">
      {/* <Background /> */}
      <PushNotificationSubscriptionManager /> 
    </div>
  );
}
