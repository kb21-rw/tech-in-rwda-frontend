import { Image } from "./image";

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
