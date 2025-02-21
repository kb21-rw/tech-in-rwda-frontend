import MembersContentCard from "@/components/MembersContentCard";
import { data } from "../../../public/data/membersPageData.json";

const Members = () => {
  return (
    <div className="px-0 lg:px-34">
      <MembersContentCard {...data} />
    </div>
  );
};

export default Members;
