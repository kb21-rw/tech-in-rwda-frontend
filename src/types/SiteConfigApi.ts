import { Image } from "./image";

export type FooterMenus = {
  text: string;
  url: string;
};

export type Footer = {
  id: number;
  copyrightText: string;
  menu: FooterMenus;
};

export type MenuItem = {
  id: number;
  text: string;
  url: string;
};

export type HeaderProps = {
  links: MenuItem[];
  desktopLogo: Image;
  mobileLogo: Image;
};

export type NavbarProps = {
  header: HeaderProps;
};
