import { fetchEntitiesPath } from "@/utils/api";

export const getAllPagePaths = async ({ excluded }: any) => {
  return fetchEntitiesPath({
    path: "pages?pagination[limit]=1000",
    excluded,
  });
};

export default getAllPagePaths;
