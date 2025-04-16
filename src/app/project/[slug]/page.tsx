import ProjectComponentParser from "@/app/cms/ProjectComponentParser";
import { fetchEntityBySlug } from "@/utils/api";

const Page = ({ project }: any) => {
  return (
    <>
      <div className="flex flex-col gap-12.5 md:gap-25 pt-25">
        {project.attributes.sections.map((section: any, index: number) => (
          <ProjectComponentParser key={index} data={section} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  try {
    const [project] = await Promise.all([
      fetchEntityBySlug({
        slug: params.slug,
        path: "/projects",
      }),
    ]);
    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

// export const getStaticPaths = async ({ locales }: any) => {
//   const paths = await getAllArticlesPaths({ locales });
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

export default Page;
