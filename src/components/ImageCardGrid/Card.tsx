import Link from "next/link";
import Image from "next/image";
import RichText from "../ui/RichText";
import { ImageCardType } from "@/types/ImageCard";

const ImageCard = ({
  title,
  description,
  slug,
  image,
}: Omit<ImageCardType, "id">) => {
  return (
    <div className="relative">
      <Link href={"/project/" + slug}>
        <div className="group">
          <Image
            alt="articles"
            src={image?.url}
            width={1001}
            height={1001}
            className=" w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-80 transition" />
          <div className="font-arvo text-white opacity-35 font-bold absolute bottom-0 left-0 z-10 p-5 group-hover:opacity-100 md:w-4/5">
            <h4 className="text-2xl lg:text-3.5xl">{title}</h4>
            <div className="line-clamp-2">
              <RichText content={description} colored={true} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
