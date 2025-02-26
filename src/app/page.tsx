import Header from "@/components/TextBlock";
import headerData from "../../public/data/homePageData.json";
import RichText from "@/components/ui/RichText";
import { data } from "../../public/data/homePageData.json";

export default function Home() {
  const { title, variant } = headerData.data;
  const { description } = data;
  return (
    <div>
      <h1 className="font-avenir">
      <Header title={title} variant={variant} />
    </h1>
      <RichText content={description} />
    </div>
  );
}
