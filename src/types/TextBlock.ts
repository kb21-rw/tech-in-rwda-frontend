import { Image } from "./image";

export type Align = "left" | "right" | "center";
export type HeaderTitle = {
  id?: number;
  text: string;
  variant?: string;
};

export type HeaderData = {
  title: HeaderTitle;
  description?: string;
  align?: Align;
  image?: Image | null;
};

export type TextBlockItem = {
  __component: "blocks.title-and-description-block";
} & HeaderData;
