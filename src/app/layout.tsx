import Navbar from "@/components/Navbar";
import { arvo, avenir, comfortaa, mulish, roboto } from "../../public/fonts";
import "./globals.css";
import navbarData from "../../public/data/siteConfig.json";

const { data } = navbarData;

export const metadata = {
  icons: {
    icon: `${data.favicon[0].url}"`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("first", data);
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
