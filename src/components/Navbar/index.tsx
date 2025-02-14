"use client";

import { NavbarProps } from "@/types/SiteConfigApi";
import { useState } from "react";
import { Logo, MenuIcon, MenuItems } from "./MenuDropdown";

const Navbar = ({ menu, logo }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col px-10 lg:px-[108px] py-6">
      <div className="hidden lg:flex items-center justify-between w-full">
        <Logo url={logo.data.attributes.url} text={logo.data.attributes.text} />
        <MenuItems menu={menu} />
      </div>

      <div className="flex lg:hidden items-center justify-between w-full px-4 py-4">
        <Logo url={logo.data.attributes.url} text={""} />
        <MenuIcon isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 py-4">
          <MenuItems menu={menu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
