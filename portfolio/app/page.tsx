import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "../../portfolio/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == 'rich'] {content}`);
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
            <PortableText value={data[0].content} />
          </>
        );
      })}
    </main>
  );
}
