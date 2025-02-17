import data from "../../public/data/siteConfig.json";
import Footer from "@/components/Footer";

export default function Home() {
  const { footer } = data.data.attributes;
  return (
    <div>
      <Footer {...footer} />
    </div>
  );
}
