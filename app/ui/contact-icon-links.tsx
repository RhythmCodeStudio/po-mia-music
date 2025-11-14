"use client";
// import from next
// import { usePathname } from "next/navigation";
// import link data
import { contactIconLinkData } from "../../lib/contact-icon-link-data";
// import components
import IconLink from "./icon-link";

type ContactIconLinkProps = {
  orientation: "vertical" | "horizontal";
  include?: string[]; // array of names to include, e.g. ["GitHub", "Email"]
  size?: number; // optional size for the icons, default can be set in IconLink component
};

type ContactIconLinkData = {
  href: string;
  icon: React.ElementType;
  name: string;
  label: string; // descriptive label for accessibility
};

export default function ContactIconLinks({
  orientation,
  include,
  size,
}: ContactIconLinkProps) {
  // const pathname = usePathname();
  // const isHome = pathname === "/";

  // Don't render on the home page
  // if (isHome) {
  //   return null;
  // }

  // Filter links if include is provided
  const filteredLinks = include
    ? contactIconLinkData.filter((item: ContactIconLinkData) =>
        include.includes(item.name)
      )
    : contactIconLinkData;

  // Provide a default size if not specified
  const iconSize = size ?? 24;

  return (
    <div
      className={`flex items-center space-x-12 ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      {filteredLinks.map(({ href, icon: Icon, label }: ContactIconLinkData) => (
        <IconLink key={href} href={href} icon={Icon} size={iconSize} label={label} />
      ))}
    </div>
  );
}