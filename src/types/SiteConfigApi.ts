import { Image } from "./image";

export type Footer = {
  id: number;
  copyrightText: string;
  menu: {
    text: string;
    url: string;
  };
};

export type MenuItem = {
  id: number;
  text: string;
  url: string;
};

export type NavbarProps = {
  menu: MenuItem[];
  logo: Image;
};
