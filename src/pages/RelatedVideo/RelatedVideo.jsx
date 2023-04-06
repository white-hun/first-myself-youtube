import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Related() {
  const {
    isLoading,
    error,
    data: related,
  } = useQuery(["related"], async () => {
    return fetch("../../data/related.json").then((res) => res.json());
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {related?.items?.map((i) => (
        <div key={i.etag}>
          <img src={i?.snippet?.thumbnails?.default?.url} alt={i?.snippet?.title} />
          <div>
            <p>{i?.snippet?.title}</p>
            <p>{i?.snippet?.publishedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
