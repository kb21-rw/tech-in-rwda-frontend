import { HeaderData } from "@/types/TextBlock";
import Image from "next/image";
import RichText from "../ui/RichText";

const TextBlock = ({ title, description, align, image }: HeaderData) => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-6.75 gap-5 lg:gap-7.5">
      {title && (
        <>
          <h1
            className={`font-avenir ${
              title.variant === "secondary"
                ? "text-primary text-2xl lg:text-4xl"
                : "text-4xl lg:text-6xl"
            } `}
          >
            {title.text}
          </h1>
          <span className="border-b-2 border-b-secondary w-11.25" />
        </>
      )}
      {image && (
        <div className="my-8">
          <Image
            src={image.url}
            alt={image.alternativeText || image.name || "members"}
            width={10000}
            height={10000}
            className="object-cover"
          />
        </div>
      )}
      <div>
        {description && <RichText content={description} aligned={align} />}
      </div>
    </div>
  );
};

export default TextBlock;
