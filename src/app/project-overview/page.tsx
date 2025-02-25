import { data } from "../../../public/data/ProjectOverviewData.json";
import TextGrid from "@/components/TextGrid";

const ProjectOverview = () => {
  const { characteristics } = data[0];

  return (
    <div className="px-0 lg:px-[175px]">
      <TextGrid {...characteristics} />
    </div>
  );
};

export default ProjectOverview;
