import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";

const NavbarCard = ({ url, text }: MenuItem) => {
  return (
    <div
      className={`text-2.5xl lg:text-lg font-normal text-primary lg:text-black`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
