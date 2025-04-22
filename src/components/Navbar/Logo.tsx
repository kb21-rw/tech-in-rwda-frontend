import Link from "next/link";
import Image from "next/image";
import { Header } from "@/types/SiteConfigApi";

interface LogoProps extends Omit<Header, "links"> {
  isOpen: boolean;
}

export const Logo = ({ desktopLogo, mobileLogo, isOpen }: LogoProps) => {
  const logo = isOpen && window.innerWidth < 1024 ? mobileLogo : desktopLogo;
  console.log(logo);
  return (
    <Link href="/">
      <Image
        src={logo.url}
        alt={logo.alternativeText || logo.name || "Logo"}
        width={logo.width}
        height={logo.height}
        className={`${isOpen ? "w-11.5 lg:w-28.5" : "lg:w-36.5"}`}
      />
    </Link>
  );
};
