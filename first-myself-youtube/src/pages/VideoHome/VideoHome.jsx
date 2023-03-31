import React from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoHome.module.css";

export default function VideoHome({ value }) {
  const {
    isLoading,
    error,
    data: popular,
  } = useQuery(["popular"], async () => {
    return fetch("data/popular.json").then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.video}>
      {popular.items.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          thumbnails={video.snippet.thumbnails.medium}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          publish={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
}
