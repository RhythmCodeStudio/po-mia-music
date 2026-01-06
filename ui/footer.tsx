"use client";
// iport from react
import { useState, useEffect } from "react";
// import from next
// import { usePathname } from "next/navigation";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import IconLinkGroup from "./icon-link-group";
import MailingListSignupModal from "./mailinglist-signup-modal";
// import link data
import { contactLinkData } from "../lib/contact-link-data";
import { musicLinkData } from "@/lib/music-link-data";
import { paymentLinks } from "@/lib/po-data";
// import context
import { usePushNotification } from "../context/push-notification-context-provider";

export default function Footer() {
  const { isSubscribed, refreshSubscription } = usePushNotification();
  const [iconSize, setIconSize] = useState(20);
  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth >= 768 ? 24 : 20); // 24 for md+ screens, 20 for small
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // const pathname = usePathname();
  return (
    <footer className="p-2 flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-items-center mb-4 text-shadow-black-background-black">
        <div className="p-2 flex flex-col items-center order-0">
          <p className="mb-1">Support:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={paymentLinks}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
        <div className="p-2 flex flex-col items-center order-1 lg:order-2">
          <p className="mb-1">Connect:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={contactLinkData}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
        <div className="p-2 flex flex-col items-center order-2 lg:order-1">
          <p className="mb-1">Listen:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={musicLinkData}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
        
      </div>
      {isSubscribed === false && (
        <div className="p-2">
          <PushNotificationSubscriptionManager renderedAs="button" />
        </div>
      )}

      <div className="p-2">
        <MailingListSignupModal />
      </div>
      <div className="text-sm text-white p-2 text-center text-shadow-black-background-black">
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
  );
}
