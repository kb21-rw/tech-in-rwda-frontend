import Link from "next/link";
import Image from "next/image";
import { Header } from "@/types/SiteConfigApi";

interface LogoProps extends Omit<Header, "links"> {
  isOpen: boolean;
}

export const Logo = ({ desktopLogo, mobileLogo, isOpen }: LogoProps) => {
  const logo = isOpen && window.innerWidth < 1024 ? mobileLogo : desktopLogo;

  return (
    <Link href="/">
      <Image
        src={logo.url}
        alt={logo.alt || "Logo"}
        width={logo.width}
        height={logo.height}
      />
    </Link>
  );
};
