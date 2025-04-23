import { fetchEntitiesPath } from "@/utils/api";

export const getAllProjectPaths = async () => {
  return fetchEntitiesPath({
    path: "projects?pagination[limit]=1000",
  });
};

export default getAllProjectPaths;
