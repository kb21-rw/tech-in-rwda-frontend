import ImageCardBlock from "@/components/ImageCardBlock";
import ImageCardGrid from "@/components/ImageCardGrid";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";

const ProjectComponentParser = (props: any) => {
  return (
    <div>
      {props.blocks?.map((item: any, index: number) => {
        switch (item.__component) {
          case "blocks.title-and-description-block":
            return (
              <TextBlock
                key={props.id + index}
                title={props.title}
                description={props.description}
              />
            );
          case "blocks.cards-block":
            return <ImageCardBlock {...item} />;
          case "blocks.left-and-right-contents":
            return <SidedContent {...item} />;
          case "blocks.text-grid":
            return <TextGrid {...item} />;
          case "blocks.projects":
            return <ImageCardGrid cards={item} />;
          case "blocks.text-block-list":
            return <TextBlock {...item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProjectComponentParser;
