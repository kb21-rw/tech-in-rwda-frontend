export const fetchEntityBySlug = async ({ path, slug }: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error('BASE_URL environment variable is not defined');

    const res = await fetch(
      `${baseUrl}${path}?filters[slug][$eq]=${slug}`
    );

    const entities = await res.json();
    const entity = entities?.data;
    if (!entity || entity.length === 0) throw Error("Entity not found");
    return entity;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchEntities = async ({ path }: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error('BASE_URL environment variable is not defined');

    const res = await fetch(`${baseUrl}${path}`);

    const entities = await res.json();
    const entity = entities?.data;

    if (!entity) throw Error("Entity not found");
    return entity;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchEntitiesPath = async ({ path, excluded = [] }: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error('BASE_URL environment variable is not defined');

    const res = await fetch(`${baseUrl}${path}`);
    const entities = await res.json();

    const paths: { locale: string; params: { slug: string } }[] = [];
    const list = entities?.data
      ?.filter((page: any) => !excluded.includes(page.slug))
      ?.map((page: any) => ({
        params: { slug: String(page.slug) },
      }));
    paths.push(...list);

    return paths;
  } catch (error) {
    console.error("Error fetching paths:", error);
    throw error;
  }
};

export const fetchSiteLinks = async (path: any) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) throw new Error('BASE_URL environment variable is not defined');

    const res = await fetch(`${baseUrl}${path}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (error) {
    console.error("Error fetching site links:", error);
    throw error;
  }
};
