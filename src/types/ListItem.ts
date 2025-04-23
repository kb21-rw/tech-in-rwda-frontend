export type ListItem = {
  id: number;
  text: string;
  hasBulletPoints?: boolean;
  hasSpacing?: boolean;
};

export type List = { listItem: ListItem[] };

export type ListItemsBlockData = List & {
  id: number;
  __component: "blocks.list-items-block";
  textBlockList: ListItem[];
};
