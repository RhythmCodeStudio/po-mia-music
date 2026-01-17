// import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
// import from vercel
import { Analytics } from "@vercel/analytics/next";
// import from next
import type { Metadata } from "next";
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
   title: {
    template: "%s | Po Mia | St. Louis, Missouri",
    default: "Po Mia | St. Louis, Missouri",
  },
  description:
    "The official web application for Po Mia. Discover music, shows, media, and more.",
  metadataBase: new URL("https://www.pomiamusic.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Po Mia",
    description:
      "Official website for po mia. po mia is an eclectic, up-and-coming singer/songwriter based in St. Louis, MO. They are best known for their versatility of musical styles, colourful stylistic expression, as well as their ability to engage a crowd through their lyricism and captivating performances. Coming from a music therapy educational background, po mia's musical works often tackle themes of identity, love, fear, and navigating real life experiences",
    url: "https://www.pomiamusic.com/",
    siteName: "Po Mia",
    type: "website",
    locale: "en_US",
    // images: [
    //   {
    //     url: "https://www.pomiamusic.com/opengraph-image.png",
    //     width: 960,
    //     height: 691,
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen antialiased rainbow-gradient relative`}>
        <StarrySky />
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <PushNotificationContextProvider>
              <Header />
              <main className="flex-1 flex flex-col justify-center items-center w-full overflow-x-hidden relative">
                <h1 className="sr-only text-4xl lg:text-6xl font-bold text-shadow-black-background-black ">
                  po mia
                </h1>

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
