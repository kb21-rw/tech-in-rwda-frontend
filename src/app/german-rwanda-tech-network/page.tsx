import MembersContentCard from "@/components/MembersContentCard";
import { data } from "../../../public/data/membersPageData.json";

const Members = () => {
  return (
    <div>
      <MembersContentCard {...data} />
    </div>
  );
};

export default Members;
