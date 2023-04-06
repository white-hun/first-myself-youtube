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
    return fetch("../../data/popular.json").then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  // if (!popular.items?.length) return <div>No data</div>;

  return (
    <div className={styles.video}>
      {popular.items.map((video) => (
        <VideoCard
          ukey={video.etag}
          id={video.etag}
          thumbnails={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          publish={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
}

//console.log(popular.items.map((i) => i.id));
