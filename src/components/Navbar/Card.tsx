import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";

interface NavbarCardProps extends MenuItem {
  className?: string;
  ref?: any;
}

const NavbarCard: React.FC<NavbarCardProps> = ({ url, text, className }) => {
  return (
    <div
      className={`text-2.5xl lg:text-lg font-normal text-primary lg:text-black ${className}`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
