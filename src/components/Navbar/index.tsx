"use client";

import { useState } from "react";
import { Logo, MenuIcon, MenuItems } from "./MenuDropdown";
import { NavbarProps } from "@/types/SiteConfigApi";

const Navbar = (data: NavbarProps) => {
  const { logo, menu } = data.attributes;
  const { url, text } = logo.data.attributes;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-screen lg:h-full z-10">
      <div className="flex flex-col lg:flex-row justify-between py-6">
        <div className="flex items-center justify-between">
          <Logo url={url} text={text} />
          <MenuIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>

        <MenuItems menu={menu} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
