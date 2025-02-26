import TextBlock from "@/components/TextBlock";
import RichText from "@/components/ui/RichText";
import { data } from "../../public/data/homePageData.json";

export default function Home() {
  const { description, title } = data;
  return (
    <div>
      <h1 className="font-avenir">
        <TextBlock title={title} />
      </h1>
      <RichText content={description} />
    </div>
  );
}
