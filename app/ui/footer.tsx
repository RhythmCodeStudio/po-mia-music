"use client";
// import from next
// import { usePathname } from "next/navigation";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import IconLinkGroup from "./icon-link-group";
// import link data
import { contactLinkData } from "../../lib/contact-link-data";
import { musicLinkData } from "@/lib/music-link-data";
// import context
import { usePushNotification } from "../../context/push-notification-context-provider";

export default function Footer() {
    const { isSubscribed, refreshSubscription } = usePushNotification();
  // const pathname = usePathname();
  return (
    // Don't render footer on the home page
    // pathname === "/" ? null : (
    <footer className="p-2 flex flex-col items-center">
       <div className="p-2">
        <IconLinkGroup orientation="horizontal" linkData={musicLinkData}/>
      </div>
      <div className="p-2">
        <IconLinkGroup orientation="horizontal" linkData={contactLinkData}/>
      </div>
      {isSubscribed === false && (
      <div className="p-2">
        <PushNotificationSubscriptionManager renderedAs="button" />
      </div>
      )}
      <div className="text-sm text-white p-2 text-center">
        <p className="">©2025</p>
        <p className="">
          Website by{" "}
          <a
            href="https://rhythmcodestudio.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer">
            Rhythm Code Studio
          </a>
        </p>
      </div>
    </footer>
    // )
  );
}
