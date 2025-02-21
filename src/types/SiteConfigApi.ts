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

export type ImageData = {
  data: {
    id?: number;
    attributes: Image;
  };
};

export type ImageCardType = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: ImageData;
};

export type ImageCardData = {
  cards: ImageCardType[];
};
