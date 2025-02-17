import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarCardProps extends MenuItem {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const NavbarCard: React.FC<NavbarCardProps> = ({ url, text, className }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <div
      className={`text-2.5xl lg:text-lg font-normal text-primary lg:text-black ${
        isActive ? "text-black font-bold" : "text-gray-primary"
      } ${className}`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
