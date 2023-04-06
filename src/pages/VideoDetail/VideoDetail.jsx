import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import RelatedVideo from "../RelatedVideo/RelatedVideo";
import DetailCard from "../../components/DetailCard/DetailCard";
import NotFound from "../NotFound/NotFound";
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

  if (!clickedVideo)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div className={styles.detailbox}>
      <div className={styles.detailpage}>
        <div>
          <DetailCard
            ukey={clickedVideo?.etag}
            img={clickedVideo?.snippet?.thumbnails?.standard?.url}
            title={clickedVideo?.snippet?.title}
            channel={clickedVideo?.snippet?.channelTitle}
          />
        </div>
        <div>
          <RelatedVideo />
        </div>
      </div>
    </div>
  );
}
