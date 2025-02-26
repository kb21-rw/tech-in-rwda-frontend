import { ImageCardBlockData } from "@/types/ImageCardBlockData";
import ImageCard from "./Card";

const ImageCardBlock = ({ contributors }: ImageCardBlockData) => {
  return (
    <div className="flex flex-col gap-7.5">
      {contributors.map((contributor, id) => (
        <div key={id}>
          <ImageCard {...contributor} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardBlock;
