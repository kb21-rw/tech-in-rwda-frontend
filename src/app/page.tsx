import ComponentParser from "@/app/cms/ComponentParser";

const fetchEntity = async ({ path }: { path: string }) => {
  const res = await fetch(`${process.env.BASE_URL}${path}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export default async function Home() {
  let homepage;
  try {
    homepage = await fetchEntity({ path: "pages" });
  } catch (error) {
    console.error("Error fetching data:", error);
    homepage = null;
  }

  const data = homepage.data[0];
  return (
    <div className="min-h-screen">
      {homepage ? (
        <>
          <ComponentParser blocks={data.blocks} />
        </>
      ) : (
        <p>Failed to load page content.</p>
      )}
    </div>
  );
}
