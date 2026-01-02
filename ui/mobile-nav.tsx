"use client";
// import from react
import { useState } from "react";
// import themes and context
// import { useTheme } from "../context/theme-context";
// import { themes } from "../lib/themes";
// import from next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
//import icons
import { FiMenu } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";
// import from headless ui
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import components
import NavListItem from "./nav-list-item";
import IconLinkGroup from "./icon-link-group";
// import Heading from "./heading";
import PushNotificationSubscriptionManager from "./push-notification-subscription-manager";
// import contact link data
import { contactLinkData } from "@/lib/contact-link-data";
import { musicLinkData } from "@/lib/music-link-data";

interface MobileMenuProps {
  navListItems: {
    label: string;
    href: string;
    htmlElement: string;
    category?: string;
  }[];
}

export default function MobileNav({ navListItems }: MobileMenuProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // const { theme } = useTheme();
  // const themeObj = themes[theme];
  // const color = themeObj.color;
  // const logoInvert = themeObj.logoInvert;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={``}
        value={isMenuOpen ? "Close menu" : "Open menu"}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        <FiMenu size={28} />
      </button>

      {/* Dialog */}
      <Dialog
        open={isMenuOpen}
        as="div"
        className="relative z-50"
        onClose={toggleMenu}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

        {/* Dialog Content */}
        <div className="fixed inset-0 flex flex-col items-center justify-center">
          <DialogPanel
            className="h-[100vh] w-[100vw] relative border-2 border-black bg-black flex flex-col justify-center p-4"
            style={{
              // backgroundImage: `url(${themeObj.avif}), url(${themeObj.webp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className={`absolute top-8 right-6 `}
              aria-label="Close menu">
              <FiXCircle size={28} />
            </button>
            {/* Dialog Title */}
            <DialogTitle
              as="h1"
              className={`sr-only flex items-center justify-center text-center font-blenny text-xl`}>
              Po Mia
            </DialogTitle>
            {isHome ? (
              <div>
                <div
                  className="flex justify-center items-center mx-auto w-1/2 h-full"
                  onClick={toggleMenu}>
                  <Image
                    src="/logos/pomia-horizontal-logo-colorful.png"
                    width={1400}
                    height={460}
                    alt="Po Mia Music Logo"
                    priority
                    // className={`${logoInvert}`}
                  />
                </div>
              </div>
            ) : (
              <Link href="/">
                <div
                  className="flex justify-center items-center mx-auto w-1/2 h-full"
                  onClick={toggleMenu}>
                  <Image
                    src="/logos/pomia-horizontal-logo-colorful.png"
                    width={1400}
                    height={460}
                    alt="Po Mia Music Logo"
                    priority
                    // className={`${logoInvert}`}
                  />
                </div>
              </Link>
            )}

            {/* Navigation */}
            <nav className="mt-12">
              <ul
                className={`flex flex-col gap-12 font-semibold items-center text-lg`}>
                {navListItems.map((item) => (
                  <NavListItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    htmlElement={item.htmlElement}
                    onClick={toggleMenu}
                  />
                ))}
              </ul>
            </nav>
            <div className="flex justify-center items-center w-full p-6">
              <PushNotificationSubscriptionManager renderedAs="button" />
            </div>

            <div className="flex justify-center w-full p-6">
              <IconLinkGroup
                orientation="horizontal"
                linkData={contactLinkData}
              />
            </div>
            <div className="flex justify-center w-full p-6">
              <IconLinkGroup
                orientation="horizontal"
                linkData={musicLinkData}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
