import Header from "@/components/TextBlock";
import headerData from "../../public/data/homePageData.json";

export default function Home() {
  const { title, variant } = headerData.data;
  return (
    <h1 className="font-avenir">
      <Header title={title} variant={variant} />
    </h1>
  );
}
