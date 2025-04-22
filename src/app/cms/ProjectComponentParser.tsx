import ImageCardBlock from "@/components/ImageCardBlock";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";
import { Component, ComponentParserProps } from "@/types/ComponentParser";

const ProjectComponentParser = (props: ComponentParserProps) => {
  return (
    <>
      {props.blocks?.map((item: Component) => {
        switch (item.__component) {
          case "blocks.title-and-description-block":
            return <TextBlock {...item} />;
          case "blocks.cards-block":
            return <ImageCardBlock {...item} />;
          case "blocks.left-and-right-contents":
            return <SidedContent {...item} />;
          case "blocks.text-grid":
            return <TextGrid {...item} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ProjectComponentParser;
