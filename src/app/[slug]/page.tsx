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
    excluded: ["not-found", "contact"],
  });
  return paths.map((path: any) => ({
    slug: path.params.slug,
  }));
}

export default async function ViewPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  try {
    const page = await fetchEntityBySlug({
      slug: slug,
      path: "pages",
    });
    const projects = await fetchEntities({ path: "projects" });

    if (!page) redirect("/not-found");
    return (
      <div className="min-h-[80vh]">
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
