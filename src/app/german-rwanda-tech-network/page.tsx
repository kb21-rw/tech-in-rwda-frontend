import { data } from "../../../public/data/membersPageData.json";
import ImageCardBlock from "@/components/ImageCardBlock";

const Members = () => {
  return (
    <div className="px-0 lg:px-34">
      <ImageCardBlock {...data} />
    </div>
  );
};

export default Members;
