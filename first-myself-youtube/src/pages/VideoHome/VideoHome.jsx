import React from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoHome.module.css";

export default function VideoHome() {
  const {
    isLoading,
    error,
    data: popular,
  } = useQuery(["popular"], async () => {
    return fetch("/../../data/popular.json").then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.video}>
      {popular.map((video) => (
        <VideoCard
          key={video.etag}
          id={video.etag}
          thumbnails={video.items.snippet.thumbnails.medium.url}
          title={video.items.snippet.title}
          channel={video.items.snippet.channelTitle}
          publish={video.items.snippet.publishedAt}
        />
      ))}
    </div>
  );
}

//console.log(popular.items.map((i) => i.id));
