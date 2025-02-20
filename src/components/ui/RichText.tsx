"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getTextSize } from "./TextSize";

const RichText = ({ content }: any) => {
  return (
    <div className="font-mulish text-primary text-base lg:text-2xl font-normal leading-5 lg:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children, level }) => {
            return (
              <h1 className={`font-bold text-center ${getTextSize(level)}`}>
                {children}
              </h1>
            );
          },

          paragraph: ({ children }: any) => {
            const isCodeBlock = children.some(
              (child: any) => child?.props.code === true
            );

            return isCodeBlock ? (
              <pre className="py-4 text-lg px-4">
                <code>
                  {children.filter((child: any) => child?.props.text)}
                </code>
              </pre>
            ) : (
              <p className="pb-4 text-center lg:text-start paragraph">
                {children}
              </p>
            );
          },
          list: ({ children, format }) => {
            return (
              <ul
                className={`ml-6 ${
                  format === "ordered" ? "list-decimal" : "list-disc"
                }`}
              >
                {children}
              </ul>
            );
          },
          "list-item": ({ children }) => {
            return <li className="my-1">{children}</li>;
          },
          link: ({ children, url }) => (
            <a
              href={url}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
