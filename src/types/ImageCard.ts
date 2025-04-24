import { Image } from "./image";

export type ImageCardType = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: Image;
};

export type ImageCardData = {
  cards: ImageCardType[];
};

export type ImageCardBlockData = ImageCardData & {
  __component: "blocks.cards-block";
  id: number;
};
