import { Image } from "./image";

export type ImageCardData = {
  id: number;
  description: string;
  title: string;
  image: Image;
};

export type ImageCardBlockData = {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  contributors: ImageCardData[];
};
