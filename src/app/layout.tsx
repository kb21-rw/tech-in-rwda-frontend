import Navbar from "@/components/Navbar";
import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import "./globals.css";
import siteConfigData from "../../public/data/siteConfig.json";
import Footer from "@/components/Footer";

const { favicon, footer, header } = siteConfigData.data;

export const metadata = {
  icons: {
    icon: `${favicon[0].url}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable} antialiased`}
    >
      <body className="content-wrapper">
        <Navbar {...header} />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
