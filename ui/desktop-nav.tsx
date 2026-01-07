"use client";
// import from next
import { usePathname } from "next/navigation";
// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import NavListItem from "./nav-list-item";

export default function DesktopNav({
  navListItems,
  user
}: {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
  user: any;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="flex flex-col items-center gap-2 mx-auto">
      <nav className="w-full">
        <ul className="w-full flex justify-center items-center gap-12 xl:gap-20 2xl:gap-28">
          {navListItems
            .filter((item) => item.label !== "Admin" || user)
            .map((item) => (
            <NavListItem
              key={item.label}
              label={item.label}
              href={item.href}
              htmlElement={item.htmlElement}
            />
          ))}
        </ul>
      </nav>
      <div className="w-72 p-4 pb-0">
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
      </div>
    </div>
  );
}
