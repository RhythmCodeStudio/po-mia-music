"use client";

import {
  SiApplemusic,
  SiAmazon,
  SiAmazonmusic,
  SiBandcamp,
  SiSpotify,
  SiTidal,
  SiYoutube,
  SiYoutubemusic,
} from "react-icons/si";
import { FaDeezer } from "react-icons/fa";
import { IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";
// import { SiVenmo } from "react-icons/si";
import { SiCashapp } from "react-icons/si";
import { BiLogoVenmo } from "react-icons/bi";
// import from next
// import { usePathname } from "next/navigation";
// import link data
// import { contactLinkData } from "../../lib/contact-link-data";
// import components
import IconLink from "./icon-link";

type IconLinkGroupItem = {
  href: string;
  // icon: React.ElementType;
  icon: string;
  name: string;
  label: string; // descriptive label for accessibility
};

type IconLinkGroupProps = {
  orientation: "vertical" | "horizontal";
  linkData: IconLinkGroupItem[];
  include?: string[]; // array of names to include, e.g. ["Instagram", "Email"]
  size?: number; // optional size for the icons, default can be set in IconLink component
  className?: string;
};

const iconMap: { [key: string]: React.ElementType } = {
  SiApplemusic,
  SiAmazon,
  SiAmazonmusic,
  SiBandcamp,
  SiSpotify,
  SiTidal,
  FaDeezer,
  SiYoutube,
  SiYoutubemusic,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTiktok,
  HiEnvelope,
  // SiVenmo,
  SiCashapp,
  BiLogoVenmo,
};

export default function IconLinkGroup({
  orientation,
  linkData,
  include,
  size,
  className,
}: IconLinkGroupProps) {
  // const pathname = usePathname();
  // const isHome = pathname === "/";

  // Don't render on the home page
  // if (isHome) {
  //   return null;
  // }

  // Filter links if include is provided
  const filteredLinks = include
    ? linkData.filter((item: IconLinkGroupItem) => include.includes(item.name))
    : linkData;

  // Provide a default size if not specified
  const iconSize = size ?? 24;

  return (
    <div
      className={`flex items-center space-x-8 ${className ?? ""} ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      }`}>
     {filteredLinks.map(({ href, icon, label, name }) => {
        const Icon = iconMap[icon];
        if (!Icon) return null; // or fallback
        return (
          <IconLink
            key={href}
            href={href}
            icon={Icon}
            size={iconSize}
            label={label}
          />
        );
      })}
    </div>
  );
}
