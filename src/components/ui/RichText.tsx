"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getTextSize } from "./TextSize";
import Link from "next/link";
import CodeText from "./CodeText";

const RichText = ({ content }: any) => {
  return (
    <div className="font-mulish text-primary text-base lg:text-2xl font-normal leading-5 lg:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children, level }) => (
            <h1 className={`font-bold text-center ${getTextSize(level)}`}>
              {children}
            </h1>
          ),

          paragraph: ({ children }: any) => {
            const codeChildren = children.filter(
              (child: any) => child?.props?.code === true
            );

            return codeChildren.length > 0 ? (
              <CodeText>{codeChildren}</CodeText>
            ) : (
              <p className="pb-4 text-center lg:text-start paragraph">
                {children}
              </p>
            );
          },

          list: ({ children, format }) => (
            <ul
              className={`ml-6 ${
                format === "ordered" ? "list-decimal" : "list-disc"
              }`}
            >
              {children}
            </ul>
          ),

          "list-item": ({ children }) => <li className="my-1">{children}</li>,

          link: ({ children, url }: any) => (
            <div>
              {children.map((child, id) =>
                child?.props?.code === true ? (
                  <CodeText key={id}>{child}</CodeText>
                ) : (
                  <Link
                    key={id}
                    href={"/"}
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {child.props.text}
                  </Link>
                )
              )}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
