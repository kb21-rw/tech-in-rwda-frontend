import ImageCardBlock from "@/components/ImageCardBlock";
import ImageCardGrid from "@/components/ImageCardGrid";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";
import { Component, ComponentParserProps } from "@/types/ComponentParser";

const ComponentParser = ({ blocks, projects }: ComponentParserProps) => {
  return (
    <div>
      {blocks?.map((item: Component) => {
        switch (item.__component) {
          case "blocks.title-and-description-block":
            return <TextBlock {...item} />;
          case "blocks.cards-block":
            return <ImageCardBlock {...item} />;
          case "blocks.left-and-right-contents":
            return <SidedContent {...item} />;
          case "blocks.text-grid":
            return <TextGrid {...item} />;
          case "blocks.projects":
            return <ImageCardGrid cards={projects} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ComponentParser;
