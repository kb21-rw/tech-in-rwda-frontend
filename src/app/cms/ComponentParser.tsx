import ImageCardBlock from "@/components/ImageCardBlock";
import ImageCardGrid from "@/components/ImageCardGrid";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";
import { Component, ComponentParserProps } from "@/types/ComponentParser";

const ComponentParser = ({ blocks, projects }: ComponentParserProps) => {
  console.log(blocks);
  return (
    <>
      {blocks?.map((item: Component & { id?: number }, index: number) => {
        const key = `${item.id + item.__component}-${index}`;
        switch (item.__component) {
          case "blocks.title-and-description-block":
            return <TextBlock key={key} {...item} />;
          case "blocks.cards-block":
            return <ImageCardBlock key={key} {...item} />;
          case "blocks.left-and-right-contents":
            return <SidedContent key={key} {...item} />;
          case "blocks.text-grid":
            return <TextGrid key={key} {...item} />;
          case "blocks.projects":
            return <ImageCardGrid key={key} cards={projects} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ComponentParser;
