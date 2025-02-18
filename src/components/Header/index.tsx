import React from "react";

const Header = ({ description }: any) => {
  return (
    <div className="flex flex-col justify-center items-center py-6.75">
      <h1 className="font-avenir text-4xl lg:text-15">{description}</h1>
      <div className="border-b-2 border-b-secondary w-11.25 py-5 lg:py-7.5" />
    </div>
  );
};

export default Header;
