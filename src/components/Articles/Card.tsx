import Link from "next/link";
import Image from "next/image";

const ArticlesCard = ({ link, image, title, description }: any) => {
  const { url, width, height } = image.data.attributes;
  return (
    <div className="relative flex flex-col mx-auto">
      <Link href={link}>
        <div className="relative group">
          <Image
            alt=""
            src={url}
            height={height}
            width={width}
            className=" w-full lg:w-[520px] h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-80 transition" />
          <div className="font-arvo text-primary font-bold absolute bottom-0 left-0 z-10 w-full p-5 group-hover:text-white">
            <h4 className="text-2xl lg:text-[32px] transition">{title}</h4>
            <p className="text-sm lg:text-lg transition">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCard;
