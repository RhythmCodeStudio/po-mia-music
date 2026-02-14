"use client";
// iport from react
import { useState, useEffect } from "react";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import from vercel
import { track } from "@vercel/analytics/react";
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
// import clsx
import { clsx } from "clsx";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { isSubscribed, refreshSubscription } = usePushNotification();
  const [iconSize, setIconSize] = useState(20);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIosModalOpen, setIsIosModalOpen] = useState(false);
  // Calculate number of grid items
  const gridItems = [
    !isStandalone, // Install App
    true, // MailingListSignupModal (always rendered)
    isSubscribed === false, // PushNotificationSubscriptionManager
  ].filter(Boolean).length;

  // Build grid-cols class
  const gridColsClass = `grid-cols-${gridItems}`;
  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth >= 768 ? 24 : 20); // 24 for md+ screens, 20 for small
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as Window & { MSStream?: unknown }).MSStream,
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    window.addEventListener("appinstalled", () => {
      setIsStandalone(true);
    });

    function handleBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e);
    }
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  // if (isStandalone) {
  //   return null;
  // }

  async function handleInstallClick() {
    if (isIOS) {
      setIsIosModalOpen(true);
      return;
    }
    if (!deferredPrompt) return;
    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;
    setDeferredPrompt(null);
    console.log("User response to the install prompt:", outcome);
  }

  return (
    <footer className="p-2 flex flex-col items-center space-y-4 max-w-600 mx-auto w-full">
      {/* <div className="p-2 mb-6 w-full h-full">
        <CubeClientContainer />
      </div> */}
      {/* <div className="h-auto w-48 p-2 flex items-center justify-center">
        <Image
          className="w-full h-auto"
          src="/logos/pomia-horizontal-logo-colorful.png"
          width={1400}
          height={460}
          alt="Po Mia Logo"
        />
      </div> */}
      {/* <div className="w-50 h-auto ">
        <Image
          alt="po mia rubik's cube logo with butterflies"
          src="/icons/butterfly-logo.png"
          width={700}
          height={700}
        />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-items-center text-shadow-black-background-black">
        <div className="p-2 flex flex-col items-center order-0">
          <p className="mb-1 text-sm">Support:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={paymentLinks}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
        <div className="p-2 flex flex-col items-center order-1 lg:order-2">
          <p className="mb-1 text-sm">Connect:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={contactLinkData}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
        <div className="p-2 flex flex-col items-center order-2 lg:order-1">
          <p className="mb-1 text-sm">Listen:</p>
          <IconLinkGroup
            orientation="horizontal"
            linkData={musicLinkData}
            size={iconSize}
            className="icon-shadow"
          />
        </div>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 w-full gap-4 justify-items-center text-sm",
          `lg:${gridColsClass}`,
        )}>
        {!isStandalone && (
          <div className="p-2 w-full max-w-64">
            <button
              onClick={async () => {
                await handleInstallClick();
                // close();
                // if (onAnyAction) onAnyAction();
              }}
              className="rainbow-gradient p-1 px-16 rounded-full border-2 border-[rgba(255,255,255,0.3)] shadow-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full transform transition-transform transition-shadow duration-200 active:scale-95 text-shadow-black-background-black font-semibold">
              Install App
            </button>
          </div>
        )}
        <div className="p-2 w-full max-w-64">
          <MailingListSignupModal />
        </div>
        {isSubscribed === false && (
          <div className="p-2 w-full max-w-64">
            <PushNotificationSubscriptionManager renderedAs="button" />
          </div>
        )}
      </div>

      <div className="text-sm text-white p-2 text-center text-shadow-black-background-black">
        <p className="">
          ©2026
          {isHomePage
            ? " pomiamusic.com"
            : (
                <>
                   <Link href="/" onClick={() => track("Footer home link click")}>
                    {" "}pomiamusic.com
                  </Link>
                </>
              )}
        </p>
        <p className="">
          Website by{" "}
          <a
            href="https://rhythmcodestudio.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer"
            onClick={() => track("Rhythm Code Studio link_click")}
          >
            Rhythm Code Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
