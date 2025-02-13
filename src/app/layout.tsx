import { arvo, avenir, comfortaa, mulish, roboto } from "@/public/fonts";
import "./globals.css";

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
