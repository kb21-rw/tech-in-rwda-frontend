import { ImageCardBlockData } from "@/types/ImageCardBlockData";
import ImageCard from "./Card";

const ImageCardBlock = ({ cards }: any) => {
  return (
    <div className="flex flex-col gap-7.5">
      {cards?.map((contributor, id) => (
        <div key={id}>
          <ImageCard {...contributor} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardBlock;
