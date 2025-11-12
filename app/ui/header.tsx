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
// import Heading from "./heading";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const logoInvert = themeObj.logoInvert;

  return (
    <header className={`w-full p-6`}>
      <div className="flex justify-between items-center">
        <div className="h-auto w-34">
            <Link href="/" className="block">
              <Image
                className={`w-full h-auto`}
                src="/logos/pomia-horizontal-logo-colorful.png"
                width={1400}
                height={460}
                alt="Po Mia Logo"
                priority
                // sizes="(max-width: 768px) 160px, (max-width: 1280px) 192px, (max-width: 1536px) 200px, 256px"
              />
            </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <DesktopNav navListItems={navListItemData} />
        </div>
        <div className="flex lg:hidden items-center">
          <MobileNav navListItems={navListItemData} />
        </div>
      </div>
    </header>
  );
}