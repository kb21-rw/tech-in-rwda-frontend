import ComponentParser from "@/app/cms/ComponentParser";
import RichText from "@/components/ui/RichText";

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
    <div>
      {data.blocks.map((item: any, index: number) => (
        <div key={item.id + index}>
          {homepage ? (
            <>
              <ComponentParser title={data} />
              <RichText content={item.description} />
            </>
          ) : (
            <p>Failed to load page content.</p>
          )}
        </div>
      ))}
    </div>
  );
}
