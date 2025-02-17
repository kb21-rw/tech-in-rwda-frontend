import Navbar from "@/components/Navbar";
import navbarData from "../../public/data/siteConfig.json";

export default function Home() {
  const { data } = navbarData;
  return (
    <>
      <Navbar {...data} />
    </>
  );
}
