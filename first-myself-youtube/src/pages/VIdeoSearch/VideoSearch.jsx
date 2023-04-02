import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import SearchVideoCard from "../SearchVideoCard/SearchVideoCard";
import NotFound from "../NotFound/NotFound";
import styles from "./VideoSearch.module.css";

export default function VideoSearch() {
  const { search } = useParams();
  const {
    isLoading,
    error,
    data: bts,
  } = useQuery(["bts"], async () => {
    return fetch(`/../../data/${search}.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.videosearch}>
      {bts.items.map((value) => (
        <SearchVideoCard
          key={value.id.videoId}
          id={value.id.videoId}
          thumbnails={value.snippet.thumbnails.medium}
          title={value.snippet.title}
          pubilsh={value.snippet.pubilshedAt}
          channel={value.snippet.channelTitle}
          description={value.snippet.description}
        />
      ))}
    </div>
  );
}
