// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { clsx } from "clsx";
// // import { useTheme } from "../context/theme-context";
// // import { themes } from "../lib/themes";
// // import { Button } from "@headlessui/react";
// import Button from "./button";

// export default function NavListItem({
//   label,
//   href,
//   htmlElement,
//   onClick,
// }: {
//   label: string;
//   href: string;
//   htmlElement: string;
//   onClick?: () => void;
// }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   // const { theme } = useTheme();
//   // const themeObj = themes[theme];
//   // const color = themeObj.color;
//   // const bgColor = themeObj.bgColor;
//   // const textShadow = themeObj.textShadow;

//   return (
//     <li className={clsx("flex-1 rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-lg px-4 py-1", isActive ? "rainbow-gradient" : "bg-black/50")}>
//       <Link
//         href={href}
//         className={clsx(
//           "font-semibold text-white text-shadow-black-background-black",
//           isActive ? "pointer-events-none" : ""
//         )}
//         tabIndex={isActive ? -1 : 0}
//         aria-disabled={isActive ? "true" : undefined}
//         onClick={onClick}>
//         {label}
//       </Link>
//     </li>
//   );
// }


"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import Button from "./button";

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

  return (
    <li>
      {htmlElement === "button" ? (
        <Button
          label={label}
          onClick={onClick}
          className={clsx(
            "font-semibold text-white text-shadow-black-background-black w-full",
            isActive ? "pointer-events-none" : "bg-black/50 hover:shadow-lg"
          )}
          disabled={isActive}
          ariaLabel={label}
        />
      ) : (
        <Link
          href={href}
          className={clsx(
            "font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md px-4 py-2 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover",
            isActive ? "rainbow-gradient pointer-events-none" : "bg-black/50 hover:shadow-lg"
          )}
          tabIndex={isActive ? -1 : 0}
          aria-disabled={isActive ? "true" : undefined}
          onClick={onClick}
        >
          <span className="text-shadow-black-background-black">
          {label}
          </span>
        </Link>
      )}
    </li>
  );
}