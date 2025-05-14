"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { MenuIcon } from "./Menu/Icon";
import { NavbarData } from "@/types/SiteConfigApi";
import { MenuItems } from "./Menu/Items";

const Navbar = (data: NavbarData) => {
  const { desktopLogo, mobileLogo } = data;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`z-40 ${
        isOpen && "fixed left-0 w-full h-full bg-white px-7.2 lg:px-0 lg:static"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between py-4">
        <div className="flex justify-between">
          <Logo
            desktopLogo={desktopLogo}
            mobileLogo={mobileLogo}
            isOpen={isOpen}
          />
          <MenuIcon isOpen={isOpen} toggle={() => toggle()} />
        </div>
        <MenuItems data={data} isOpen={isOpen} toggle={() => toggle()} />
      </div>
    </nav>
  );
};

export default Navbar;
