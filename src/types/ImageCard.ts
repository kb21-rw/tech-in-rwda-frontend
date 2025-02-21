import { ImageData } from "./image";

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
