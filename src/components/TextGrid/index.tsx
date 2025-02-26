const TextGrid = ({
  listItem,
  hasBulletPoints,
  hasSpacing,
}: {
  listItem: { id: number; description: string }[];
  hasBulletPoints: boolean;
  hasSpacing: boolean;
}) => {
  return (
    <ul
      className={`${
        hasBulletPoints
          ? "custom-list gap-y-7.5 text-base lg:text-lg lg:gap-y-11.25"
          : hasSpacing === true
          ? "gap-y-7.5 text-base lg:text-lg lg:gap-y-11.25"
          : "text-base lg:text-2xl"
      } grid md:grid-cols-2 gap-x-20`}
    >
      {listItem.map((item) => (
        <li key={item.id} className="text-primary font-mulish font-normal">
          {item.description}
        </li>
      ))}
    </ul>
  );
};

export default TextGrid;
