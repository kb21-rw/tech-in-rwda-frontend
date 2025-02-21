import ArticlesCard from "./Card";
import { ImageCardData } from "@/types/SiteConfigApi";

const ImageCardGrid = ({ cards }: ImageCardData) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <ArticlesCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCardGrid;
