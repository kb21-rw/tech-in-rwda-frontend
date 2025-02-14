export type Image = {
  data: {
    id: number;
    attributes: {
      name: string;
      text: string;
      alternativeText: string | null;
      url: string;
      width: number;
      height: number;
    };
  };
};
