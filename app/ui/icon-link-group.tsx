"use client";
// import from next
// import { usePathname } from "next/navigation";
// import link data
// import { contactLinkData } from "../../lib/contact-link-data";
// import components
import IconLink from "./icon-link";

type IconLinkGroupItem = {
  href: string;
  icon: React.ElementType;
  name: string;
  label: string; // descriptive label for accessibility
};

type IconLinkGroupProps = {
  orientation: "vertical" | "horizontal";
  linkData: IconLinkGroupItem[];
  include?: string[]; // array of names to include, e.g. ["GitHub", "Email"]
  size?: number; // optional size for the icons, default can be set in IconLink component

};



export default function IconLinkGroup({
  orientation,
  linkData,
  include,
  size,
}: IconLinkGroupProps) {
  // const pathname = usePathname();
  // const isHome = pathname === "/";

  // Don't render on the home page
  // if (isHome) {
  //   return null;
  // }

  // Filter links if include is provided
  const filteredLinks = include
    ? linkData.filter((item: IconLinkGroupItem) =>
        include.includes(item.name)
      )
    : linkData;

  // Provide a default size if not specified
  const iconSize = size ?? 24;

  return (
    <div
      className={`flex items-center space-x-12 sm:space-x-16 md:space-x-20 lg:space-x-24 xl:space-x-28 2xl:space-x-32 ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}
    >
      {filteredLinks.map(({ href, icon: Icon, label }: IconLinkGroupItem) => (
        <IconLink key={href} href={href} icon={Icon} size={iconSize} label={label} />
      ))}
    </div>
  );
}