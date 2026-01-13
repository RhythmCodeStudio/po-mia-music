"use client";
// import stack server app
// import { stackServerApp } from "@/stack/server";
import { stackClientApp } from "@/stack/client";
// import from next
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import from react
import { useEffect, useState } from "react";
// import themes
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";
// import navList items
import { navListItemData } from "@/lib/nav-list-item-data";
// import components
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
// import Heading from "./heading";

export default function Header() {
  const app = stackClientApp;
  const [user, setUser] = useState<any>(null);
  console.log("Header user:", user);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const logoInvert = themeObj.logoInvert;

  useEffect(() => {
    let isMounted = true;
    async function fetchUser() {
      const u = await app.getUser();
      if (isMounted) setUser(u);
    }
    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <header className={`w-full p-8 pb-0`}>
      <div className="flex justify-between items-center">
        {/* <div className="h-auto w-34 lg:hidden">
          {isHome ? (
            <Image
              className="w-full h-auto"
              src="/logos/pomia-horizontal-logo-colorful.png"
              width={1400}
              height={460}
              alt="Po Mia Logo"
              priority
            />
          ) : (
            <Link href="/" className="block">
              <Image
                className="w-full h-auto"
                src="/logos/pomia-horizontal-logo-colorful.png"
                width={1400}
                height={460}
                alt="Po Mia Logo"
                priority
              />
            </Link>
          )}
        </div> */}
        <div className="hidden lg:flex items-center w-full justify-end">
          <DesktopNav navListItems={navListItemData} user={user} />
          {/* <PushNotificationSubscriptionManager renderedAs="icon" /> */}
        </div>
        <div className="flex lg:hidden w-full">
          <MobileNav navListItems={navListItemData} user={user} />
        </div>
      </div>
      <div className="relative w-64 lg:w-80 mx-auto mt-8 lg:mt-24 mb-8">
        {/* Logo */}
        {isHome ? (
          <Image
            src="/logos/pomia-horizontal-logo-colorful.png"
            alt="Po Mia Music Logo"
            width={2213}
            height={725}
            priority
            // className="w-full h-auto pr-6"
            className="w-full h-auto pr-12 lg:pr-16"
          />
        ) : (
          <Link href="/" aria-label="Go to home">
            <Image
              src="/logos/pomia-horizontal-logo-colorful.png"
              alt="Po Mia Music Logo"
              width={2213}
              height={725}
              priority
              className="w-full h-auto pr-12 lg:pr-16"
            />
          </Link>
        )}
        {/* Guitar image */}
        <div className="w-30 lg:w-36 h-auto absolute -top-18 lg:-top-20 -right-8 lg:-right-8">
          <Image
            src="/images/po-tiny-guitar-no-bg-png.png"
            width={1184}
            height={1776}
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
