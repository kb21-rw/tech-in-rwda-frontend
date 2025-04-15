import ImageCardBlock from "@/components/ImageCardBlock";
import ImageCardGrid from "@/components/ImageCardGrid";
import SidedContent from "@/components/SidedContent";
import TextBlock from "@/components/TextBlock";
import TextGrid from "@/components/TextGrid";

const ComponentParser = ({ blocks }: any) => {
  console.log("fffffffffffffffffffffffffffffffffffffffffffirst", blocks);
  return (
    <div>
      {blocks?.map((item: any) => {
        switch (item.__component) {
          case "blocks.title-and-description-block":
            return (
              <TextBlock
                key={item.id}
                title={item.title}
                variant={item.title.variant}
                description={item.description}
              />
            );
          case "blocks.cards-block":
            return <ImageCardBlock {...item} />;
          case "blocks.left-and-right-contents":
            return <SidedContent {...item} />;
          // case "blocks.projects":
          //   return <ImageCardGrid {...item} />;
          case "blocks.text-grid":
            return <TextGrid {...item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ComponentParser;
