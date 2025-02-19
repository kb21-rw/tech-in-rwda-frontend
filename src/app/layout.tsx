import Footer from "@/components/Footer";
import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import "./globals.css";
import { data } from "../../public/data/siteConfig.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { footer } = data;
  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable} antialiased`}
    >
      <body>
        {children} <Footer {...footer} />
      </body>
    </html>
  );
}
