import ProjectComponentParser from "@/app/cms/ProjectComponentParser";
import { fetchEntitiesPath, fetchEntityBySlug } from "@/utils/api";
import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
  const paths = await fetchEntitiesPath({
    path: "projects",
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
    const project = await fetchEntityBySlug({
      slug: params.slug,
      path: "projects",
    });

    if (!project) redirect("/not-found");
    return (
      <div className="min-h-screen">
        {project?.map((section: any) => (
          <ProjectComponentParser
            key={section.id + section.__component}
            {...section}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
