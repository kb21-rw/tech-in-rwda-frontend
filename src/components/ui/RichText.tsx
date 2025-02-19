import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const RichText = ({ children, type }: any) => {
  return (
    <div>
      <BlocksRenderer content={[]} />
    </div>
  );
};

export default RichText;
