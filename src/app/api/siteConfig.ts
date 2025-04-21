import { fetchSiteLinks } from "@/utils/api";

export const getAllPageLinks = async () => {
  return fetchSiteLinks("site-config");
};

export default getAllPageLinks;
