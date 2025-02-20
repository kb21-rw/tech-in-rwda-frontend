import React from "react";

const CodeText = ({ children }: any) => {
  const codeChildren = children.filter(
    (child: any) => child?.props?.code === true
  );
  return (
    <div className="bg-gray-700 text-white p-4 w-full lg:w-1/2 overflow-x-auto">
      <pre className="whitespace-pre-wrap">
        <code>{codeChildren}</code>
      </pre>
    </div>
  );
};

export default CodeText;
