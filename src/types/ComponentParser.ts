import { TextBlockItem } from "./TextBlock";
import { ImageCardBlockData } from "./ImageCardBlockData";
import { ListItemsBlockData } from "./ListItem";
import { TextGridItem } from "./TextGrid";

export type SidedBlockContent = {
  __component: "blocks.left-and-right-contents";
};

export type Projects = {
  __component: "blocks.projects";
  id: number;
  hasProjects: boolean;
};

export type Component =
  | TextBlockItem
  | ImageCardBlockData
  | SidedBlockContent
  | ListItemsBlockData
  | TextGridItem
  | Projects;

export type ComponentParserProps = {
  blocks: Component[];
  projects?: any;
};
