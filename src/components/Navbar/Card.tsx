import { MenuItem } from "@/types/SiteConfigApi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarCard: React.FC<MenuItem> = ({ url, text }) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <div
      className={`${
        isActive ? "text-black font-bold" : "text-primary lg:text-black"
      } text-2.5xl lg:text-lg font-normal hover:text-black`}
    >
      <Link href={url}>{text}</Link>
    </div>
  );
};

export default NavbarCard;
