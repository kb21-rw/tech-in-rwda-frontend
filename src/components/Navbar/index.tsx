"use client";

import { useState } from "react";
import { Logo, MenuIcon, MenuItems } from "./MenuDropdown";
import { NavbarProps } from "@/types/SiteConfigApi";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = (data: NavbarProps) => {
  const { logo } = data.attributes;
  const { url, text } = logo.data.attributes;
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="z-10 relative">
      <div className="flex flex-col lg:flex-row justify-between py-6">
        <div className="flex items-center justify-between">
          <Logo url={url} text={text} />
          <MenuIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>

        <MenuItems data={data} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
