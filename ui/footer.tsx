"use client";
// iport from react
import { useState, useEffect } from "react";
// import from next
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import IconLink from "./icon-link";
import IconLinkGroup from "./icon-link-group";
import MailingListSignupModal from "./mailinglist-signup-modal";
// import link data
import { contactLinkData } from "../lib/contact-link-data";
import { musicLinkData } from "@/lib/music-link-data";
import { paymentLinks } from "@/lib/po-data";
// import context
import { usePushNotification } from "../context/push-notification-context-provider";
// import icons
import { HiEnvelope } from "react-icons/hi2";

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
      <div className="h-auto w-48 md:w-64 lg:w-64 p-2 mb-6 flex items-center justify-center">
        <Image
          className="w-full h-auto"
          src="/logos/pomia-horizontal-logo-colorful.png"
          width={1400}
          height={460}
          alt="Po Mia Logo"
          priority
        />
      </div>
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
          <p className="mb-1">Follow:</p>
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
      {/* {isSubscribed === false && (
        <div className="p-2">
          <PushNotificationSubscriptionManager renderedAs="button" />
        </div>
      )} */}

      <div className="p-2 flex flex-col items-center space-y-2">
        <p className="mb-1 text-shadow-black-background-black">Connect:</p>
        <IconLink
          href="mailto:pomiamusic@gmail.com"
          icon={HiEnvelope}
          size={iconSize}
          label="pomiamusic@gmail.com"
          showLabel={true}
          className="icon-shadow"
          labelClassName="text-shadow-black-background-black"
        />
        <MailingListSignupModal />
      </div>
      {isSubscribed === false && (
        <div className="p-2">
          <PushNotificationSubscriptionManager renderedAs="button" />
        </div>
      )}
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
