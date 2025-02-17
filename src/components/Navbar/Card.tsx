import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";

const NavbarCard = ({ url, text }: MenuItem) => {
  return (
    <div className={``}>
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
