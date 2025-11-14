"use client";
// import from next
// import { usePathname } from "next/navigation";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import ContactIconLinks from "./contact-icon-links";

export default function Footer() {
  // const pathname = usePathname();
  return (
    // Don't render footer on the home page
    // pathname === "/" ? null : (
    <footer className="p-2 flex flex-col items-center">
      <div className="p-4">
        <ContactIconLinks orientation="horizontal" />
      </div>
      
      <PushNotificationSubscriptionManager renderedAs="button" />
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
