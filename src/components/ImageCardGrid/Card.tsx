import Link from "next/link";
import Image from "next/image";
import { ImageCardType } from "@/types/ImageCard";

const ImageCard = (props: ImageCardType) => {
  const { link, image, title, description } = props;
  const { url, width, height } = image.data.attributes;

  return (
    <div className="relative">
      <Link href={link}>
        <div className="group">
          <Image
            alt="articles"
            src={url}
            height={height}
            width={width}
            className=" w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-80 transition" />
          <div className="font-arvo text-white opacity-35 font-bold absolute bottom-0 left-0 z-10 p-5 group-hover:opacity-100 md:w-4/5">
            <h4 className="text-2xl lg:text-3.5xl">{title}</h4>
            <p className="text-sm lg:text-lg">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
