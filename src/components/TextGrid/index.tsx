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
        hasBulletPoints ? "custom-list gap-y-7.5 lg:gap-y-11.25" : ""
      } grid lg:grid-cols-2 gap-x-20`}
    >
      {listItem.map((item) => (
        <li
          key={item.id}
          className="text-primary text-lg font-mulish font-normal"
        >
          {item.description}
        </li>
      ))}
    </ul>
  );
};

export default TextGrid;
