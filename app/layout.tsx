// import from vercel
import { Analytics } from "@vercel/analytics/next"
// import from next
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import components
import Header from "./ui/header";
// import styles
import "./globals.css";

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
  description: "The official web application for Po Mia Music. Discover music, shows, media, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
