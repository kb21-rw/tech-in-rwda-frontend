import { HeaderData } from "@/types/HeaderData";

const TextBlock = ({ title, description, variant }: HeaderData) => {
  console.log("variant", variant);
  return (
    <div className="flex flex-col justify-center items-center text-center py-6.75 gap-5 lg:gap-7.5">
      <h1
        className={`font-avenir ${
          variant === "secondary"
            ? "text-primary text-2xl lg:text-4xl"
            : "text-4xl lg:text-6xl"
        } `}
      >
        {title}
      </h1>
      <span className="border-b-2 border-b-secondary w-11.25" />
      <div>
        {description && (
          <p className="font-mulish text-primary text-base lg:text-2xl pb-10 lg:py-25 leading-5 lg:leading-7.5 font-normal">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
