"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import NavListItem from "./nav-list-item";
import MorePopover from "./more-popover";

export default function DesktopNav({
  navListItems,
  user,
}: {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
    onClick?: () => void;
  }[];
  user: any;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="flex flex-col items-center mx-auto">
      <nav className="w-full">
        <ul className="w-full flex justify-center items-center gap-12 xl:gap-20 2xl:gap-24">
          {navListItems
            .filter((item) => item.label !== "Admin" || user)
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
