// import { ImageData } from "./image";

export type ImageCardType = {
  id: number;
  title: string;
  description: string;
  slug: string;
  image: any;
};

export type ImageCardData = {
  cards: ImageCardType[];
};
