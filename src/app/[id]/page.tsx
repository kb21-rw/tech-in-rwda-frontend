import { fetchEntitiesPath, fetchEntityBySlug } from "@/utils/api";
import { notFound } from "next/navigation";
import ComponentParser from "../cms/ComponentParser";

export async function generateStaticParams() {
  const paths = await fetchEntitiesPath({
    path: "pages",
    excluded: ["404", "resources", "contact"],
  });
  console.log("paths 88888888888888888888888888888888888", paths);
  return paths.map((path: any) => ({
    id: path.params.slug,
  }));
}

export default async function ViewPage({ params }: { params: { id: string } }) {
  try {
    const page = await fetchEntityBySlug({
      slug: params?.id === "" ? "about" : params?.id,
      path: "pages",
    });
    console.log("=======================================", page);
    return (
      <>
        {page?.map((section: any) => (
          <ComponentParser
            key={section.id + section.__component}
            {...section}
          />
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
