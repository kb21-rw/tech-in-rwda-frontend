export const fetchEntity = async ({
  path,
  slug,
}: {
  path: string;
  slug: string;
}) => {
  const res = await fetch(
    `${process.env.BASE_URL}${path}?filters[slug][$eq]=${slug}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};
export const fetchEntityBySlug = async ({ path, slug }: any) => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}${path}?filters[slug][$eq]=${slug}`
    );

    const entities = await res.json();
    const entity = entities?.data;
    if (!entity || !entity[0]) throw Error("Entity not found");
    return entity;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchEntities = async ({ path }: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}${path}`);

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
  const res = await fetch(`${process.env.BASE_URL}${path}`);
  const entities = await res.json();

  const paths: { locale: string; params: { slug: string } }[] = [];
  const list = entities?.data
    ?.filter((page: any) => !excluded.includes(page.slug))
    ?.map((page: any) => ({
      params: { slug: String(page.slug) },
    }));
  paths.push(...list);

  return paths;
};

export const fetchSiteLinks = async (path: any) => {
  const res = await fetch(`${process.env.BASE_URL}${path}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};
