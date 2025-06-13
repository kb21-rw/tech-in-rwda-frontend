import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import getAllPageLinks from "./api/siteConfig";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getAllPageLinks();
  const { footer, header, favicon } = data;
  return (
    <html
      lang="en"
      className={`${avenir.className} ${comfortaa.variable} ${mulish.variable} ${arvo.variable} ${roboto.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {favicon && favicon.length > 0 && (
          <link rel="icon" href={favicon[0]?.url} />
        )}
      </head>
      <body className="content-wrapper" suppressHydrationWarning={true}>
        {header && <Navbar {...header} />}
        {children}
        {footer && <Footer {...footer} />}
      </body>
    </html>
  );
}
