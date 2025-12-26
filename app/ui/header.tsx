"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const logoInvert = themeObj.logoInvert;

  return (
    <header className={`w-full p-6 `}>
      <div className="flex justify-between items-center">
        <div className="h-auto w-34">
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
        </div>
        <div className="hidden lg:flex items-center w-full justify-end gap-12">
          <DesktopNav navListItems={navListItemData} />
          <PushNotificationSubscriptionManager renderedAs="icon" />
        </div>
        <div className="flex lg:hidden items-center">
          <MobileNav navListItems={navListItemData} />
        </div>
      </div>
    </header>
  );
}