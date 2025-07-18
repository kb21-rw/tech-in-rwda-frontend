"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getTextAlign, getTextSize } from "./helper";
import Link from "next/link";
import CodeText from "./CodeText";
import { Align } from "@/types/TextBlock";

type RichTextProps = {
  content: any;
  colored?: boolean;
  aligned?: Align;
};
const RichText = ({ content, colored = false, aligned }: RichTextProps) => {
  return (
    <div className="font-mulish  text-base xl:text-2xl font-normal leading-5 xl:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children, level }) => (
            <h1
              className={`font-bold text-center text-black font-avenir ${getTextSize(
                level
              )}`}
            >
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
              <p
                className={`${
                  content[0].variant === "header"
                    ? `font-normal text-sm xl:text-lg pb-3`
                    : "pb-4"
                } ${
                  colored
                    ? "text-white opacity-35 hover:opacity-100"
                    : "text-primary"
                }  ${aligned && getTextAlign(aligned)}`}
              >
                {children}
              </p>
            );
          },

          list: ({ children, format }) => (
            <ul
              className={`text-left text-primary ${
                format === "ordered" ? "list-decimal" : "list-disc"
              }`}
            >
              {children}
            </ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children, url }: any) => (
            <div className="flex flex-col gap-10">
              {children.map((child: any, id: any) =>
                child?.props?.code === true ? (
                  <CodeText key={id}>{child}</CodeText>
                ) : (
                  <Link
                    key={id}
                    href={url}
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
