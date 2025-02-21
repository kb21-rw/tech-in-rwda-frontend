import Articles from "@/components/Articles";
import { data } from "../../../public/data/projectsPage.json";

const Projects = () => {
  const { articles } = data;

  return (
    <div className="absolute">
      <Articles {...articles} />
    </div>
  );
};

export default Projects;
