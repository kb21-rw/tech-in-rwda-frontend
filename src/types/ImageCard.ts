import { Image } from "./image";

export type ImageTypes = {
  id?: number;
  attributes: Image;
};

export type ImageData = {
  data: ImageTypes;
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
