import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import SearchVideoCard from "../SearchVideoCard/SearchVideoCard";
import styles from "./VideoSearch.module.css";

export default function VideoSearch() {
  const { search } = useParams();
  const {
    isLoading,
    error,
    data: searchvideo,
  } = useQuery(["searchvideo"], async () => {
    return fetch(`/../../data/${search}.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.videosearch}>
      {searchvideo.map((value) => (
        <SearchVideoCard
          key={value.etag}
          id={value.etag}
          thumbnails={value.items.snippet.thumbnails.medium.url}
          title={value.items.snippet.title}
          publish={value.items.snippet.publishedAt}
          channel={value.items.snippet.channelTitle}
          description={value.items.snippet.description}
        />
      ))}
    </div>
  );
}

//console.log(bts.items.map((i) => i.id.videoId));
