"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";
// import { Button } from "@headlessui/react";

export default function NavListItem({
  label,
  href,
  htmlElement,
  onClick,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const color = themeObj.color;
  // const bgColor = themeObj.bgColor;
  // const textShadow = themeObj.textShadow;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "font-bold ",
          isActive ? "text-blue-600 underline pointer-events-none opacity-50" : "black"
        )}
        tabIndex={isActive ? -1 : 0}
        aria-disabled={isActive ? "true" : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}
