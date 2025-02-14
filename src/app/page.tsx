import Navbar from "@/components/Navbar";
import navbarData from "../../public/data/siteConfig.json";
import { ApiResponse } from "@/types/SiteConfigApi";

export default function Home() {
  const { data } = navbarData;
  console.log("data", data);
  return (
    <>
      <Navbar
        menu={navbarData.data.attributes.menu}
        logo={navbarData.data.attributes.logo}
        {...(data as unknown as ApiResponse)}
      />
    </>
  );
}
