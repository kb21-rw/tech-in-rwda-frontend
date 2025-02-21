import Image from "next/image";
import { MembersCardData } from "@/types/MembersData";

const MembersCard = (data: MembersCardData) => {
  return (
    <div className="flex-col lg:flex-row flex gap-7.5 lg:gap-10">
      <Image
        src={data.image.url}
        alt="members"
        width={data.image.width}
        height={data.image.height}
        className="w-full lg:w-45 h-full object-cover"
      />
      <div className="font-mulish">
        <h4 className="font-bold text-2xl">{data.title}</h4>
        <p className="font-normal text-sm lg:text-lg text-primary">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default MembersCard;
