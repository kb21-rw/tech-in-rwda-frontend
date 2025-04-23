import { Align } from "@/types/TextBlock";

export const getTextSize = (level: number) => {
  switch (level) {
    case 1:
      return "text-4xl";
    case 2:
      return "text-3xl";
    case 3:
      return "text-2xl";
    default:
      return "text-xl";
  }
};

export const getTextAlign = (align: Align) => {
  switch (align) {
    case "left":
      return "text-center md:text-left";
    case "right":
      return "text-center md:text-right";
    case "center":
      return "text-center";
    default:
      return "text-left";
  }
};
