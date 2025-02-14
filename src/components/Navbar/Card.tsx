import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";

const NavbarCard = ({ url, text }: MenuItem) => {
  return (
    <div className="flex justify-center items-center px-4 py-2">
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
