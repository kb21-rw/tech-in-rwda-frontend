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


export type Header = {
  links: MenuItem[];
  desktopLogo: Image;
  mobileLogo: Image;
};

export type NavbarData = {
  desktopLogo: Image;
  id: number;
  links: MenuItem[];
  mobileLogo: Image;
};

export type FooterData = {
  id?: number;
  copyright: string;
  imprint: string;
  imprintUrl: string;
};
