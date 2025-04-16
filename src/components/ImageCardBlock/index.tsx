// import { ImageCardBlockData } from "@/types/ImageCardBlockData";
import ImageCard from "./Card";

const ImageCardBlock = ({ cards }: any) => {
  console.log(cards);
  return (
    <div className="flex flex-col gap-7.5">
      {cards?.map((item: any, index: number) => (
        <div key={index + item.id}>
          <ImageCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardBlock;
