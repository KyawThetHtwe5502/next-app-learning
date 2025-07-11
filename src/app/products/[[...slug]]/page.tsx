import React from "react";

interface Params {
  slug?: string[];
}

interface SearchParams {
    [key: string]: string | string[] | undefined;
}

interface Props {
    params: Promise<Params>,
  searchParams: Promise<SearchParams>

}

const Page = async ({ params, searchParams }: Props) => {

  const {slug} = await params;
  const searchParamsObj = await searchParams;
  return (
    <div>
      <h1>{slug && slug.length > 0 ? slug : "All Products"}</h1>
      {searchParamsObj.sortOrder && (
        <p>Sort Order: {searchParamsObj.sortOrder}</p>
      )}
    </div>
  );
};

export default Page;