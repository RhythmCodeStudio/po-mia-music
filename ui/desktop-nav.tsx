"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
// import Image from "next/image";
// import Link from "next/link";
// import components
import NavListItem from "./nav-list-item";
import MorePopover from "./more-popover";
import SignOutButton from "./sign-out-button";

export default function DesktopNav({
  navListItems,
  isAuthenticated,
}: {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
    onClick?: () => void;
  }[];
  isAuthenticated: boolean;
}) {
  // const pathname = usePathname();
  // const isHome = pathname === "/";
  return (
    <div className="flex flex-col items-center w-full mx-auto">
      <nav className="w-full">
        <ul className="w-full flex justify-around items-center max-w-6xl mx-auto py-4 space-x-18">
          {navListItems
            .filter((item) => item.label !== "admin" || isAuthenticated)
            .map((item) => (
              <NavListItem
                key={item.label}
                label={item.label}
                href={item.href}
                htmlElement={item.htmlElement}
                onClick={item.onClick}
                className="active:scale-95 transition-transform duration-400 ease-in-out"
              />
            ))}
          <MorePopover />
          {isAuthenticated && <SignOutButton />}
        </ul>
      </nav>
      {/* <div className="relative w-72 mx-auto mt-24">
        
        {isHome ? (
          <Image
            src="/logos/pomia-horizontal-logo-colorful.png"
            alt="Po Mia Music Logo"
            width={2213}
            height={725}
            priority
            className="w-full h-auto"
          />
        ) : (
          <Link href="/" aria-label="Go to home">
            <Image
              src="/logos/pomia-horizontal-logo-colorful.png"
              alt="Po Mia Music Logo"
              width={2213}
              height={725}
              priority
              className="w-full h-auto"
            />
          </Link>
        )}
        
        <div className="w-36 h-auto absolute -top-20 -right-24">
          <Image
            src="/images/po-tiny-guitar-no-bg-png.png"
            width={1184}
            height={1776}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
}
