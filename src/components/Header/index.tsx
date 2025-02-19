import { HeaderData } from "@/types/HeaderData";

const Header = ({ title, description }: HeaderData) => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-6.75">
      <h1 className="font-avenir text-4xl lg:text-15">{title}</h1>
      <div className="border-b-2 border-b-secondary w-11.25 py-5 lg:py-7.5" />
      <div>
        {description && (
          <p className="font-mulish text-primary text-base lg:text-2xl py-7.5 lg:py-15 leading-5 lg:leading-7.5 font-normal">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
