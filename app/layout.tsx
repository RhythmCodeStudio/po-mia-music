// import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
// import from vercel
import { Analytics } from "@vercel/analytics/next";
// import from next
import type { Metadata } from "next";
import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import components
import Header from "../ui/header";
import Footer from "../ui/footer";
import StarrySky from "../ui/starry-sky";
import ScrollToTopButton from "../ui/scroll-to-top-button";
// import styles
import "./globals.css";
// import context providers
import { PushNotificationContextProvider } from "../context/push-notification-context-provider";
import { StackProvider, StackTheme } from "@stackframe/stack";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Po Mia Music",
  description:
    "The official web application for Po Mia Music. Discover music, shows, media, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen antialiased`}>
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <PushNotificationContextProvider>
              <Header />
              <main className="flex-1 flex flex-col justify-center items-center rainbow-gradient w-full overflow-x-hidden relative">
                <h1 className="sr-only text-4xl lg:text-6xl font-bold text-shadow-black-background-black ">
                  po mia
                </h1>
                <div className="w-64 px-6 my-4 lg:w-72 lg:px-0">
                  <Image
                    // src="/logos/pomia-horizontal-logo-black.png"
                    src="/logos/pomia-horizontal-logo-colorful.png"
                    alt="Po Mia Music Logo"
                    width={2213}
                    height={725}
                    priority
                    className="w-full h-auto"
                  />
                </div>
                <StarrySky />
                {children}
                <ScrollToTopButton />
              </main>
              <Footer />
              <Analytics />
            </PushNotificationContextProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}

// bg-gradient-to-br from-red-400 via-orange-400 via-yellow-400 via-green-500 via-blue-500 via-indigo-400 to-violet-400 dark:from-red-700 dark:via-green-700 dark:via-blue-700 dark:to-violet-700 dark:bg-gradient-to-br
