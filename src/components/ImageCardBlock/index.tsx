import { ImageCardData } from "@/types/ImageCardBlockData";
import ImageCard from "./Card";

const ImageCardBlock = ({ cards }: { cards: ImageCardData[] }) => {
  return (
    <div className="flex flex-col gap-7.5">
      {cards?.map((item: ImageCardData, index: number) => (
        <div key={index + item.id}>
          <ImageCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardBlock;
