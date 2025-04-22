import { List, ListItem } from "@/types/ListItem";

const TextGrid = ({ listItem }: List) => {
  return (
    <ul
      className={`${
        listItem &&
        listItem[0]?.hasBulletPoints &&
        "custom-list text-base lg:text-lg "
      } grid md:grid-cols-2 gap-x-20 gap-y-7.5 px-0 lg:px-43.75 lg:gap-y-11.25`}
    >
      {listItem &&
        listItem?.map((item: ListItem, index: number) => (
          <li
            key={item.id + index}
            className="text-primary font-mulish font-normal"
          >
            {item.text}
          </li>
        ))}
    </ul>
  );
};

export default TextGrid;
