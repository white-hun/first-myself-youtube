import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import SearchVideoCard from "../SearchVideoCard/SearchVideoCard";
import NotFound from "../NotFound/NotFound";

export default function VideoSearch() {
  const { search } = useParams();
  const { data: bts } = useQuery(["bts"], async () => {
    return fetch("data/bts.json").then((res) => res.json());
  });

  return (
    <div>
      {bts.items.map((value) => (
        <SearchVideoCard title={value.snippet.title} />
      ))}
    </div>
  );
}
