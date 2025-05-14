import Image from "next/image";
import { ImageCardData } from "@/types/ImageCardBlockData";
import RichText from "../ui/RichText";

const ImageCard = ({ image, title, description }: ImageCardData) => {
  return (
    <div className="md:grid grid-cols-10 gap-7.5 lg:gap-10 items-center">
      {image && (
        <div className="col-span-3 lg:col-span-2 w-full h-auto">
          <Image
            src={image?.url}
            alt={"members"}
            width={1000}
            height={1000}
            objectFit="fit"
            layout="responsive"
          />
        </div>
      )}
      <div className="col-span-7 lg:col-span-8 font-mulish w-auto">
        <h4 className="font-bold text-2xl">{title}</h4>
        {description && <RichText content={description} />}
      </div>
    </div>
  );
};

export default ImageCard;
