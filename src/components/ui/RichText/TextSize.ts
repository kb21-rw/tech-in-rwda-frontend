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
