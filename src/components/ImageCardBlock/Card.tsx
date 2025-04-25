import Image from "next/image";
import { ImageCardData } from "@/types/ImageCardBlockData";
import RichText from "../ui/RichText";

const ImageCard = ({ image, title, description }: ImageCardData) => {
  return (
    <div className="flex-col lg:flex-row flex gap-7.5 lg:gap-10">
      {image && (
        <Image
          src={image?.url}
          alt={"members"}
          width={1000}
          height={1000}
          className="w-full lg:w-45 h-full object-cover"
        />
      )}
      <div className="font-mulish">
        <h4 className="font-bold text-2xl">{title}</h4>
        {description && <RichText content={description} />}
      </div>
    </div>
  );
};

export default ImageCard;
