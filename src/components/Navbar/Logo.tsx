import Link from "next/link";
import { Header } from "@/types/SiteConfigApi";
import Image from "next/image";

export const Logo = ({ desktopLogo, mobileLogo }: Omit<Header, "links">) => {
  return (
    <Link href="/">
      <picture>
        <source
          media="(max-width: 1020px)"
          srcSet={mobileLogo.url}
          width={mobileLogo.width}
          height={mobileLogo.height}
        />
        <source
          media="(min-w.height} />: 600px)"
          srcSet={desktopLogo.url}
          width={desktopLogo.width}
          height={desktopLogo.height}
        />
        <Image
          src={desktopLogo.url}
          alt={desktopLogo.alt || ""}
          width={desktopLogo.width}
          height={desktopLogo.height}
        />
      </picture>
    </Link>
  );
};
