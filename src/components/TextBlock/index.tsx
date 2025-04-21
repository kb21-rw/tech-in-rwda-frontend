// import { HeaderData } from "@/types/HeaderData";
import Image from "next/image";
import RichText from "../ui/RichText";

const TextBlock = ({ title, description, image }: any) => {
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
            alt={"members"}
            width={10000}
            height={10000}
            className="object-cover"
          />
        </div>
      )}
      <div className="px-0 lg:px-43.75">
        {description && <RichText content={description} />}
      </div>
    </div>
  );
};

export default TextBlock;
