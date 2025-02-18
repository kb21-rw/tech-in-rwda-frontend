import Header from "@/components/Header";
import headerData from "../../public/data/homePageData.json";

export default function Home() {
  const { title } = headerData.data;
  console.log("title", title);
  return (
    <h1 className="font-avenir">
      <Header description={title} />
    </h1>
  );
}
