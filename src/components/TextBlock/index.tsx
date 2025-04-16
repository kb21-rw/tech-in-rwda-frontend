// import { HeaderData } from "@/types/HeaderData";
import RichText from "../ui/RichText";

const TextBlock = ({ title, description, variant }: any) => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-6.75 gap-5 lg:gap-7.5">
      <h1
        className={`font-avenir ${
          variant === "secondary"
            ? "text-primary text-2xl lg:text-4xl"
            : "text-4xl lg:text-6xl"
        } `}
      >
        {title.text || title}
      </h1>
      <span className="border-b-2 border-b-secondary w-11.25" />
      <div>{description && <RichText content={description} />}</div>
    </div>
  );
};

export default TextBlock;
