"use client";
// iport from react
import { useState, useEffect } from "react";
import IconLinkGroup from "./icon-link-group";

interface IconLinkGroupClientContainerProps {
  orientation: "horizontal" | "vertical";
  linkData: {
    name: string;
    label: string;
    href: string;
    icon: string;
  }[];
  size: number;
}

export default function IconLinkGroupClientContainer({
  orientation,
  linkData,
  size,
}: IconLinkGroupClientContainerProps) {
  const [iconSize, setIconSize] = useState(size);
  useEffect(() => {
    function handleResize() {
      setIconSize(window.innerWidth >= 768 ? iconSize : 20); // 24 for md+ screens, 20 for small
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <IconLinkGroup orientation={orientation} linkData={linkData} size={iconSize} />;
}