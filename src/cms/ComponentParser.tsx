import ImageCardBlock from "@/components/ImageCardBlock";
import ImageCardGrid from "@/components/ImageCardGrid";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";

const ComponentParser = ({ title }: any) => {
  return (
    <div>
      {title.blocks.map((item: any, index: number) => {
        let Component;

        switch (item.__component) {
          case "blocks.title-and-description-block":
            Component = <TextBlock title={item.title.text} />;
            break;
          case "blocks.cards-block":
            Component = <ImageCardBlock {...title} />;
            break;
          case "blocks.left-and-right-contents":
            Component = <SidedContent {...title} />;
            break;
          case "blocks.projects":
            Component = <ImageCardGrid {...title} />;
            break;
          case "blocks.text-grid":
            Component = <TextGrid {...title} />;
            break;
          default:
            Component = null;
        }

        return <div key={index}>{Component}</div>;
      })}
    </div>
  );
};

export default ComponentParser;
