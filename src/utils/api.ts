export const fetchEntityBySlug = async ({ path, slug }: any) => {
  const res = await fetch(
    `${process.env.BASE_URL}${path}?filters[slug][$eq]=${slug}`
  );

  const entities = await res.json();
  const entity = entities?.data;
  if (!entity || !entity[0]) throw new Error("Entity not found");
  return entity;
};
export const fetchEntities = async ({ path }: any) => {
  const res = await fetch(`${process.env.BASE_URL}${path}`);

  const entities = await res.json();
  const entity = entities?.data;

  if (!entity) throw new Error("Entity not found");
  return entity;
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
