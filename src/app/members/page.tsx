import Header from "@/components/Header";
import membersData from "../../../public/data/membersPageData.json";

const Members = () => {
  const { data } = membersData;
  return (
    <div>
      <Header {...data} />
    </div>
  );
};

export default Members;
