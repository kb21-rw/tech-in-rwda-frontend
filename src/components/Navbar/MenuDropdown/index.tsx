import CloseIcon from "@/assets/CloseIcon";
import HamburgerMenu from "@/assets/HamburgerMenu";
import { NavbarProps } from "@/types/SiteConfigApi";
import NavbarCard from "../Card";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({ url, text }: { url: string; text: string }) => (
  <Link href="/" className="flex items-center gap-4">
    <Image src={url} alt="logo" height={56} width={56} />
    <span className="capitalize font-comfortaa text-blue-150 text-base w-20">
      {text}
    </span>
  </Link>
);

export const MenuItems = ({ menu }: { menu: NavbarProps["menu"] }) => (
  <div className="flex flex-col lg:flex-row gap-6 font-roboto text-lg font-normal">
    {menu?.map((item, index) => (
      <NavbarCard key={index} {...item} />
    ))}
  </div>
);

export const MenuIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button onClick={toggle} className="text-black">
    {isOpen ? <CloseIcon /> : <HamburgerMenu />}
  </button>
);
