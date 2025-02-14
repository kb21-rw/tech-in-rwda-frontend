import { Image } from "./image";

export type Footer = {
  id: number;
  copyrightText: string;
  menu: {
    text: string;
    url: string;
  };
};

export type ApiResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      logo: Image;
      menu: MenuItem[];
      navbar: {
        id: number;
        logoText: {
          id: number;
          text: string;
          url: string;
        };
      };
      footer?: Footer;
    };
  };
  meta?: Record<string, unknown>;
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
