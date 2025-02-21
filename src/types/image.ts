export type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type ImageTypes = {
  id?: number;
  attributes: Image;
};

export type ImageData = {
  data: ImageTypes;
};
