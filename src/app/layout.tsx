import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import getAllPageLinks from "./api/siteConfig";

export async function generateMetadata() {
  const { data } = await getAllPageLinks();
  const faviconUrl = data.favicon?.[0]?.url;

  return {
    icons: {
      icon: faviconUrl,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getAllPageLinks();
  const { footer, header } = data;

  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable} antialiased`}
    >
      <body className="content-wrapper" suppressHydrationWarning={true}>
        <Navbar {...header} />
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
