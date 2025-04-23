import { Image } from "./image";

export type ImageCardData = {
  id: number;
  name: string;
  documentId?: string;
  title: string;
  description: string;
  image: Image;
};

export type ImageCardBlock = {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  contributors: ImageCardData[];
};
export type ImageCardBlockData = ImageCardData & {
  __component: "blocks.cards-block";
  id: number;
  cards: ImageCardData[];
};
