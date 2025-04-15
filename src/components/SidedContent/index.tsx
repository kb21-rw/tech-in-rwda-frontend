import RichText from "../ui/RichText";

const SidedContent = ({ right, left }: any) => {
  return (
    <div className="block lg:flex justify-between">
      {left && (
        <div className="pb-10 lg:pb-0 text-center lg:text-left">
          <RichText content={left} />
        </div>
      )}
      {right && (
        <div className="pb-10 lg:pb-0 text-center lg:text-left">
          <RichText content={right} />
        </div>
      )}
    </div>
  );
};

export default SidedContent;
