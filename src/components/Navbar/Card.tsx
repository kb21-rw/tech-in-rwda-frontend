import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarCardProps extends MenuItem {
  className?: string;
}

const NavbarCard: React.FC<NavbarCardProps> = ({ url, text, className }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <div
      className={`${
        isActive ? "text-black font-bold" : "text-primary lg:text-black"
      } text-2.5xl lg:text-lg font-normal ${className}`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
