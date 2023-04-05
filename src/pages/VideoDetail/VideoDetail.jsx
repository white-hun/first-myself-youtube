import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { etag } = useParams();
  const {
    isLoading,
    error,
    data: xxx,
  } = useQuery(["test"], async () => {
    return fetch("../../data/popular.json").then((res) => res.json());
  });
  const clickedVideo = xxx.items.find((item) => item.etag === etag);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <img src={clickedVideo.snippet.thumbnails.standard.url} alt={clickedVideo.snippet.title} />
      <h2 className={styles.divbox}>{clickedVideo.snippet.title}</h2>
    </div>
  );
}

// const 변수 = all
