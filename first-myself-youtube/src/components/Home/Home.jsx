import React from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./Home.module.css";

export default function Home() {
  const {
    isLoading,
    error,
    data: bts,
  } = useQuery(["bts"], async () => {
    return fetch("data/bts.json").then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.video}>
      {bts.items.map((video) => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          thumbnails={video.snippet.thumbnails.medium}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          publish={video.snippet.publishTime}
        />
      ))}
    </div>
  );
}
