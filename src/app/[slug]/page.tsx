import {
  fetchEntities,
  fetchEntitiesPath,
  fetchEntityBySlug,
} from "@/utils/api";
import { notFound, redirect } from "next/navigation";
import ComponentParser from "../cms/ComponentParser";

export async function generateStaticParams() {
  const paths = await fetchEntitiesPath({
    path: "pages",
    excluded: ["404", "resources", "contact"],
  });
  return paths.map((path: any) => ({
    id: path.params.slug,
  }));
}

export default async function ViewPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const page = await fetchEntityBySlug({
      slug: params.slug,
      path: "pages",
    });
    const projects = await fetchEntities({ path: "projects" });

    if (!page) redirect("/not-found");
    return (
      <div className="min-h-screen">
        {page?.map((section: any) => (
          <ComponentParser
            key={section.id + section.__component}
            {...section}
            projects={projects}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
