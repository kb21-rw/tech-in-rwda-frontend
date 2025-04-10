import { ImageCardData } from "@/types/ImageCard";
import ArticlesCard from "./Card";

const ImageCardGrid = ({ cards }: ImageCardData) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 px-0 lg:px-13.5">
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <ArticlesCard data={card} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCardGrid;
