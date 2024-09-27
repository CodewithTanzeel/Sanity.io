import { client } from "../../portfolio/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'student']`);
  return fetchData;
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main>
      <h1 className="text-align justify-center bg-center">Sanity Schema</h1>

      {data.map((val:any, i: number) => {
        return (
          <>
            <h1>{val.name}</h1>
          </>
        );
      })}
    </main>
  );
}
