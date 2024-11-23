import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.action";
import { getFileTypesParams } from "@/lib/utils";
import React from "react";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: string;
  params: string;
}) => {
  const type = ((await params)?.type as string) || "";

  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type);
  const files = await getFiles({ types, searchText, sort });
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1 ">
            Total <span className="h5">{"0 MB"}</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>
      {files?.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file, index) => (
            <Card key={index} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files available</p>
      )}
    </div>
  );
};

export default Page;
