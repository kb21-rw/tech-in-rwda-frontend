import { ImageCardData, ImageCardType } from "@/types/ImageCard";
import ProjectsCard from "./Card";

const ImageCardGrid = ({ cards }: ImageCardData) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {cards.map((card: ImageCardType, index: number) => {
        return (
          <div key={index + card.id}>
            <ProjectsCard
              title={card.title}
              description={card.description}
              slug={card.slug}
              image={card.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCardGrid;
