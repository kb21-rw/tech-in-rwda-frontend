import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/types/SiteConfigApi";

interface LogoProps extends Omit<Header, "links"> {
  isOpen: boolean;
}

export const Logo = ({ desktopLogo, mobileLogo, isOpen }: LogoProps) => {
  console.log(isOpen);
  const { logo, logoSize } = useMemo(() => {
    const isMobileView =
      typeof window !== "undefined" && isOpen && window.innerWidth < 1024;

    return {
      logo: isMobileView ? mobileLogo : desktopLogo,
      logoSize: isMobileView
        ? { width: 50, height: 50 }
        : { width: 210, height: 210 },
    };
  }, [isOpen, desktopLogo, mobileLogo]);

  return (
    <Link href="/">
      <Image
        src={logo.url}
        alt={logo.alternativeText || logo.name || "Logo"}
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
};
