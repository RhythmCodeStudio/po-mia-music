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
  className,
}: {
  label: string;
  href: string;
  htmlElement: string;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={clsx("z-30", !isActive && className)}>
      {htmlElement === "button" ? (
        <Button
          label={label}
          onClick={onClick}
          className={clsx(
            "font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md px-4 py-2 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover",
            isActive
              ? "rainbow-gradient pointer-events-none"
              : "bg-black/50 hover:shadow-lg",
          )}
          disabled={isActive}
          ariaLabel={label}
        />
      ) : (
        <Link
          href={href}
          className={clsx(
            "font-semibold text-white rounded-full border-[rgba(255,255,255,0.3)] border-2 shadow-white shadow-md px-4 py-2 active:scale-95 transition transition-transform transition-shadow duration-200 ease-in-out rainbow-gradient-hover",
            isActive
              ? "rainbow-gradient pointer-events-none"
              : "bg-black/50 hover:shadow-lg",
          )}
          tabIndex={isActive ? -1 : 0}
          aria-disabled={isActive ? "true" : undefined}
          onClick={onClick}>
          <span className="text-shadow-black-background-black">{label}</span>
        </Link>
      )}
    </li>
  );
}
