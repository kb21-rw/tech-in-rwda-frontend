import Link from "next/link";
import { HeaderProps } from "@/types/SiteConfigApi";
import Image from "next/image";

export const Logo = ({
  desktopLogo,
  mobileLogo,
}: Omit<HeaderProps, "links">) => {
  return (
    <Link href={"/"} className="flex items-center gap-4">
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
