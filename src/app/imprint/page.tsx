import SidedContent from "@/components/SidedContent";
import data from "../../../public/data/imprintData.json";

const Imprint = () => {
  return (
    <div className="px-0 lg:px-46.75">
      <SidedContent {...data} />
    </div>
  );
};

export default Imprint;
