import RichText from "@/components/ui/RichText";
import { data } from "../../public/data/homePageData.json";

export default function Home() {
  const { description } = data;
  return (
    <div>
      <RichText content={description} />
    </div> 
  );
}
