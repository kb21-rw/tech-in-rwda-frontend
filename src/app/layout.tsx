import { avenir } from "@/public/fonts";
import "./globals.css";
import { Comfortaa, Mulish, Arvo, Roboto } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-comfortaa",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mulish",
});

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-arvo",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-arvo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
