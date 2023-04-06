import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import RelatedVideo from "../RelatedVideo/RelatedVideo";
// import popular from "../../../public/data/popular.json";
// import bts from "../../../public/data/bts.json";
// import aespa from "../../../public/data/aespa.json";

export default function VideoDetail() {
  const { etag } = useParams();
  const {
    isLoading,
    error,
    data: test,
  } = useQuery(["test"], async () => {
    return fetch("../../data/popular.json").then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const clickedVideo = test?.items?.find((item) => item.etag === etag);

  return (
    <div className={styles.detailpage}>
      <div>
        <img
          src={clickedVideo?.snippet?.thumbnails?.standard?.url}
          alt={clickedVideo?.snippet?.title}
        />
        <h3 className={styles.divbox}>{clickedVideo?.snippet?.title}</h3>
        <p>{clickedVideo?.snippet?.channelTitle}</p>
      </div>
      <div>
        <RelatedVideo />
      </div>
    </div>
  );
}

// const 변수 = all
