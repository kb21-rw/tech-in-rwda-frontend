import ImageCardGrid from "@/components/ImageCardGrid";
import { data } from "../../../public/data/projectsPage.json";

const Projects = () => {
  const { articles } = data;

  return (
    <div>
      <ImageCardGrid {...articles} />
    </div>
  );
};

export default Projects;
