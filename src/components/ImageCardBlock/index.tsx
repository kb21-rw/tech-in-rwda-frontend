import MembersCard from "./Card";
import { MembersData } from "@/types/MembersData";

const ImageCardBlock = ({ contributors }: MembersData) => {
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
