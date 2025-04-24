import ProjectComponentParser from "@/app/cms/ProjectComponentParser";
import { fetchEntitiesPath, fetchEntityBySlug } from "@/utils/api";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const paths = await fetchEntitiesPath({
    path: "projects",
    excluded: ["not-found", "contact"],
  });
  return paths.map((path: any) => ({
    slug: path.params.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ViewPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  try {
    const project = await fetchEntityBySlug({
      slug: slug,
      path: "projects",
    });

    if (!project) {
      notFound();
    }
    return (
      <div className="min-h-[80vh]">
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
