import { fetchSiteLinks } from "@/utils/api";

export const getAllPageLinks = async () => {
  return fetchSiteLinks({
    path: "site-config",
  });
};

export default getAllPageLinks;
