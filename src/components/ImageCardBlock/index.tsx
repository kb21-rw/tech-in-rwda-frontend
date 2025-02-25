import MembersCard from "./Card";
import { ImageCardBlockData } from "@/types/ImageCardBlockData";

const ImageCardBlock = ({ contributors }: ImageCardBlockData) => {
  return (
    <div className="flex flex-col gap-7.5">
      {contributors.map((contributor, id) => (
        <div key={id}>
          <MembersCard {...contributor} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardBlock;
