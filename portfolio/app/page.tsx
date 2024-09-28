import Image from "next/image";
import { client } from "../../portfolio/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'test']{
  name,
  "imageUrl": image.asset->url
}`);
  return fetchData;
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main>
      <h1 className="text-align  flex justify-center bg-center">
        Sanity Schema
      </h1>

      {data.map((val: any) => {
        return (
          <>
            <h1>{val.name}</h1>
            <Image alt="Tom" width={500} height={500} src={val.imageUrl} />
          </>
        );
      })}
    </main>
  );
}
