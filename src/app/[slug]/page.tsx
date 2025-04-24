import {
  fetchEntities,
  fetchEntitiesPath,
  fetchEntityBySlug,
} from "@/utils/api";
import { notFound } from "next/navigation";
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

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ViewPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  try {
    const page = await fetchEntityBySlug({
      slug: slug,
      path: "pages",
    });
    const projects = await fetchEntities({ path: "projects" });

    if (!page) {
      notFound();
    }

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
