import { fetchSiteLinks } from "@/utils/api";

export const getAllPageLinks = async () => {
  return await fetchSiteLinks("site-config");
};

export default getAllPageLinks;
