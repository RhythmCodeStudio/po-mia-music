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
  icon: keyof typeof iconMap;
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

const iconMap: {
  [key: string]: React.ComponentType<{ size?: number; className?: string }>;
} = {
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
      className={`flex items-center justify-center flex-wrap gap-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 ${className ?? ""} ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      } ${orientation === "horizontal" ? "max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl" : ""}`}
    >
      {filteredLinks.map(({ href, icon, label }) => {
        const Icon = iconMap[icon];
        if (!Icon) return null;
        return (
          <IconLink 
            href={href} 
            icon={Icon} 
            size={iconSize} 
            label={label} 
            key={label}
          />
        );
      })}
    </div>
  );
}
