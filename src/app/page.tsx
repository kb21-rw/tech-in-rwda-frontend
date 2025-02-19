import Header from "@/components/Header";
import headerData from "../../public/data/homePageData.json";

export default function Home() {
  const { title } = headerData.data;
  return (
    <h1 className="font-avenir">
      <Header title={title} />
    </h1>
  );
}
