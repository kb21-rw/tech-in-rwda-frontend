import CloseIcon from "@/assets/CloseIcon";
import HamburgerMenu from "@/assets/HamburgerMenu";
import NavbarCard from "../Card";
import Link from "next/link";
import Image from "next/image";
import { NavbarProps } from "@/types/SiteConfigApi";

export const Logo = ({ url, text }: { url: string; text: string }) => (
  <Link href={url} className=" flex items-center gap-4">
    <Image src={url} alt="logo" height={56} width={56} />
    <span className="capitalize font-comfortaa text-blue-150 text-base w-20 hidden lg:block">
      {text}
    </span>
  </Link>
);

export const MenuItems = ({
  data,
  isOpen,
}: {
  data: NavbarProps;
  isOpen: boolean;
}) => {
  const { menu } = data.attributes;

  return (
    <div
      className={`${
        isOpen ? "flex py-16.75" : "hidden"
      } lg:flex lg:flex-row font-roboto gap-7.5 lg:gap-12.5 text-center capitalize flex-col items-center justify-center hover:text-black`}
    >
      {menu.map((item) => {
        return <NavbarCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export const MenuIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button onClick={toggle} className="text-black block lg:hidden">
    {isOpen ? <CloseIcon /> : <HamburgerMenu />}
  </button>
);
