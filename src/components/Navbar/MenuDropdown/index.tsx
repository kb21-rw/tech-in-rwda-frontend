import CloseIcon from "@/assets/CloseIcon";
import HamburgerMenu from "@/assets/HamburgerMenu";
import NavbarCard from "../Card";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Logo = ({ url, text }: { url: string; text: string }) => (
  <Link href={url} className=" flex items-center gap-4">
    <Image src={url} alt="logo" height={56} width={56} />
    <span className="capitalize font-comfortaa text-blue-150 text-base w-20 hidden lg:block">
      {text}
    </span>
  </Link>
);

export const MenuItems = ({ menu, isOpen }: { menu: any; isOpen: boolean }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        isOpen ? "flex flex-col items-center justify-center py-16.75" : "hidden"
      } lg:flex lg:flex-row font-roboto gap-7.5 lg:gap-12.5 text-2.5xl lg:text-lg font-normal text-primary lg:text-black border`}
    >
      {menu.map((item: any) => (
        <NavbarCard
          key={item.id}
          {...item}
          className={`${pathname === item.url ? "text-black" : "text-primary"}`}
        />
      ))}
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
  <button onClick={toggle} className="text-black block md:hidden">
    {isOpen ? <CloseIcon /> : <HamburgerMenu />}
  </button>
);
