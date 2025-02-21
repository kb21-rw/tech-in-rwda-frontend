import { Image } from "./image";

export type MembersCardData = {
  id: number;
  description: string;
  title: string;
  image: Image;
};

export type MembersData = {
  id?: number;
  documentId?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  contributors: MembersCardData[];
};
