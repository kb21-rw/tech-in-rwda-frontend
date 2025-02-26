const TextGrid = ({
  listItem,
  hasBulletPoints,
}: {
  listItem: { id: number; description: string }[];
  hasBulletPoints: boolean;
}) => {
  return (
    <ul
      className={`${
        hasBulletPoints && "custom-list text-base lg:text-lg "
      } grid md:grid-cols-2 gap-x-20 gap-y-7.5 lg:gap-y-11.25`}
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
