import Image from "next/image";
import { MembersCardData } from "@/types/MembersData";

const MembersCard = ({ image, title, description }: MembersCardData) => {
  return (
    <div className="flex-col lg:flex-row flex gap-7.5 lg:gap-10">
      <Image
        src={image.url}
        alt={image.alternativeText || "members"}
        width={image.width}
        height={image.height}
        className="w-full lg:w-45 h-full object-cover"
      />
      <div className="font-mulish">
        <h4 className="font-bold text-2xl">{title}</h4>
        <p className="font-normal text-sm lg:text-lg text-primary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MembersCard;
