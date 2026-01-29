// import fonts
import { Indie_Flower, Acme, Rubik } from "next/font/google";
import { Agbalumo } from "next/font/google";

export const agbalumo = Agbalumo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-agbalumo",
});

export const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-indie-flower",
});

export const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-acme",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});