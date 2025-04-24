import { fetchEntities } from "@/utils/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectsPage() {
  try {
    const projects = await fetchEntities({ path: "projects" });

    if (!projects || projects.length === 0) {
      notFound();
    }

    return (
      <div className="min-h-[80vh] container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <Link
              href={`/project/${project.attributes.slug}`}
              key={project.id}
              className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                  {project.attributes.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.attributes.description}
                </p>
                <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    notFound();
  }
}
