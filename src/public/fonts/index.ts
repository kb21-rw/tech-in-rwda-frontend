import localFont from "next/font/local";
import { Comfortaa, Mulish, Arvo, Roboto } from "next/font/google";

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-comfortaa",
});

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mulish",
});

export const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-arvo",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const avenir = localFont({
  src: [
    {
      path: "../fonts/Avenir Font Family/AvenirLTStd-Black.otf",
      style: "normal",
      weight: "750",
    },
  ],
});
