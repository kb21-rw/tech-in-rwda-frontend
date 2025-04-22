import { Image } from "./image";

export type HeaderTitle = {
  id: number;
  text: string;
  variant?: string;
};

export type HeaderData = {
  title: HeaderTitle;
  description?: string;
  image: Image | null;
};

export type TextBlockItem = {
  __component: "blocks.title-and-description-block";
} & HeaderData;
