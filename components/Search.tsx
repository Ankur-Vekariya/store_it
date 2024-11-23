"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "next/navigation";
import { getFiles } from "@/lib/actions/file.action";
import { Models } from "node-appwrite";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Models.Document[]>([]);
  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await getFiles({ searchText: query });
      console.log("files=", files);

      setResult(files?.documents);
      setOpen(true);
    };
    fetchFiles();
  }, [query]);

  useEffect(() => {
    if (!searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  return (
    <div className="search">
      Search
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search......"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
        {open && (
          <div className="search-result">
            {result.map((item, index) => {
              return <p key={index}>{item.fullName}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
