"use client";
// import from next
// import { usePathname } from "next/navigation";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
export default function Footer() {
  // const pathname = usePathname();
  return (
    // Don't render footer on the home page
    // pathname === "/" ? null : (
      <footer className="flex flex-col items-center">
        <PushNotificationSubscriptionManager renderedAs="button" />
        <div className="text-sm text-white p-4 text-center">
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
