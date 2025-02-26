export type Image = {
  url: string;
  alternativeText: string;
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
