import Navbar from "@/components/Navbar";
import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import "./globals.css";
import navbarData from "../../public/data/siteConfig.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = navbarData;
  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable} antialiased`}
    >
      <body>
        <Navbar {...data} />
        {children}
      </body>
    </html>
  );
}
