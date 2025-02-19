"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { MenuIcon } from "./Menu/Icon";
import { NavbarProps } from "@/types/SiteConfigApi";
import { MenuItems } from "./Menu/Items";

const Navbar = (data: NavbarProps) => {
  const { desktopLogo, mobileLogo } = data.header;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full z-40 bg-white ${
        isOpen && "absolute left-0 px-7.5 lg:px-0 lg:static"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between py-10">
        <div className="flex justify-between">
          <Logo desktopLogo={desktopLogo} mobileLogo={mobileLogo} />
          <MenuIcon isOpen={isOpen} toggle={() => toggle()} />
        </div>

        <MenuItems data={data} isOpen={isOpen} toggle={() => toggle()} />
      </div>
    </nav>
  );
};

export default Navbar;
