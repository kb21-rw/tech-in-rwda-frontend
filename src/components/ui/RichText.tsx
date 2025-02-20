"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const RichText = ({ content }: any) => {
  return (
    <div className="font-mulish text-primary text-base lg:text-2xl font-normal leading-5 lg:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children, level }) => {
            return (
              <h1
                className={`font-bold my-4- text-center ${
                  level === 1
                    ? "text-4xl"
                    : level === 2
                    ? "text-3xl"
                    : level === 3
                    ? "text-2xl"
                    : "text-xl"
                }`}
              >
                {children}
              </h1>
            );
          },

          paragraph: ({ children }: any) => {
            const isCodeBlock = children.some(
              (child: any) => typeof child === "object" && child?.code === true
            );

            return isCodeBlock ? (
              <pre>
                <code>{children.map((child: any) => child.text).join("")}</code>
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
