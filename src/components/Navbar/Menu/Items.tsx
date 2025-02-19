import { NavbarData } from "@/types/SiteConfigApi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItems = ({
  data,
  isOpen,
  toggle,
}: {
  data: NavbarData;
  isOpen: boolean;
  toggle: () => void;
}) => {
  const { links } = data.header;
  const pathname = usePathname();

  return (
    <div
      className={`${
        isOpen ? "flex pt-16.75 lg:pt-0" : "hidden"
      } lg:flex lg:flex-row font-roboto gap-7.5 lg:gap-12.5 text-center capitalize flex-col items-center justify-center hover:text-black`}
    >
      {links.map((item) => (
        <div
          onClick={() => toggle()}
          key={item.id}
          className={`${
            pathname === item.url
              ? "text-black font-bold"
              : "text-primary lg:text-black"
          } text-2.5xl lg:text-lg font-normal hover:text-black`}
        >
          <Link href={item.url}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
};
