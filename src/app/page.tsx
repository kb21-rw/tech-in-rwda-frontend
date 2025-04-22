import ComponentParser from "@/app/cms/ComponentParser";
import { fetchEntity } from "@/utils/api";
import { notFound } from "next/navigation";

export default async function Home() {
  try {
    const { data } = await fetchEntity({ path: "pages", slug: "about" });
    const homepage = data[0];
    if (!homepage) {
      return notFound();
    }
    console.log(homepage.data);
    return (
      <div className="min-h-[80vh]">
        <ComponentParser blocks={homepage.blocks} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="min-h-[80vh] flex items-center justify-center text-red-500">
        Failed to load content.
      </div>
    );
  }
}
