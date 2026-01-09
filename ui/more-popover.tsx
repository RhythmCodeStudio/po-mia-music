"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import Link from "next/link";
// import from headless ui
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
// import clsx
import { clsx } from "clsx";
// import components
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
import MailingListSignupModal from "./mailinglist-signup-modal";

export default function MorePopover() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !(window as Window & { MSStream?: unknown }).MSStream
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    window.addEventListener("appinstalled", () => {
      setIsStandalone(true);
    });

    //   function handleBeforeInstallPrompt(e: Event) {
    //     e.preventDefault();
    //     setDeferredPrompt(e);
    //   }
    //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    //   return () => {
    //     window.removeEventListener(
    //       "beforeinstallprompt",
    //       handleBeforeInstallPrompt
    //     );
    //   };
  }, []);

  if (isStandalone) {
    return null;
  }

  async function handleInstallClick() {
    // if (!deferredPrompt) return;
    // (deferredPrompt as any).prompt();
    // const { outcome } = await (deferredPrompt as any).userChoice;
    // setDeferredPrompt(null);
    // console.log("User response to the install prompt:", outcome);
    console.log("Install clicked");
  }

  return (
    <Popover>
      <PopoverButton
        className={clsx(
          "cursor-pointer flex-1 rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg px-4 py-1 font-semibold text-white bg-black/50 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-95 rainbow-gradient-hover",
          ""
        )}>
        <span
          aria-label="More options"
          className="text-shadow-black-background-black">
          More
        </span>
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom end"
        className="divide-y divide-white/5 rounded-xl bg-black/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 z-50 border-2 border-[rgba(255,255,255,0.3)] shadow-white shadow-lg mt-2 w-64">
        <div className="flex items-center justify-center my-6 px-6">
          <button
            onClick={handleInstallClick}
            className="rainbow-gradient p-1 rounded-full  border-2 border-[rgba(255,255,255,0.3)] text-sm shadow-black/50 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs hover:scale-105 transform transition-transform duration-600 active:scale-95 text-shadow-black-background-black">
            Install App
          </button>
        </div>
        <div className="flex items-center justify-center my-6 w-full px-6">
          <PushNotificationSubscriptionManager renderedAs="button" />
        </div>
        <div className="flex items-center justify-center my-6 w-full px-6">
          <MailingListSignupModal />
        </div>
        <div className="flex items-center justify-center my-6 px-6">
          <Link
            href="/mailing-list-unsubscribe"
            // onClick={handleInstallClick}
            className="rainbow-gradient p-1 rounded-full  border-2 border-[rgba(255,255,255,0.3)] text-sm shadow-black/50 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174054] cursor-pointer w-full max-w-xs hover:scale-105 transform transition-transform duration-600 active:scale-95 text-shadow-black-background-black text-center">
            Unsubscribe from Mailing List
          </Link>
        </div>
        {/* <div className="p-3">
          <a
            className="rainbow-gradient-hover block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#">
            <p className="font-semibold text-white">Insights</p>
            <p className="text-white/50">Measure actions your users take</p>
          </a>
          <a
            className="rainbow-gradient-hover block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#">
            <p className="font-semibold text-white">Automations</p>
            <p className="text-white/50">Create your own targeted content</p>
          </a>
          <a
            className="rainbow-gradient-hover block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#">
            <p className="font-semibold text-white">Reports</p>
            <p className="text-white/50">Keep track of your growth</p>
          </a>
        </div>
        <div className="p-3">
          <a
            className="rainbow-gradient-hover block rounded-lg px-3 py-2 transition hover:bg-white/5"
            href="#">
            <p className="font-semibold text-white">Documentation</p>
            <p className="text-white/50">
              Start integrating products and tools
            </p>
          </a>
        </div> */}
      </PopoverPanel>
    </Popover>
  );
}
