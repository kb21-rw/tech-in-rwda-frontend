import Articles from "@/components/Articles";
import { data } from "../../../public/data/projectsPage.json";

const Projects = () => {
  const { articles } = data;

  return (
    <div>
      <Articles {...articles} />
    </div>
  );
};

export default Projects;
