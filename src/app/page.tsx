import ComponentParser from "@/app/cms/ComponentParser";
import { fetchEntityBySlug } from "@/utils/api";
import { notFound } from "next/navigation";

export default async function Home() {
  try {
    const homepage = await fetchEntityBySlug({ path: "pages", slug: "about" });

    if (!homepage || homepage.length === 0) {
      return notFound();
    }
    return (
      <div className="min-h-[80vh]">
        <ComponentParser blocks={homepage[0].blocks} />
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
