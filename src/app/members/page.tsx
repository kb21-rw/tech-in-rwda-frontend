import TextBlock from "@/components/TextBlock";
import membersData from "../../../public/data/membersPageData.json";

const Members = () => {
  const { data } = membersData;
  return (
    <div>
      <TextBlock {...data} />
    </div>
  );
};

export default Members;
