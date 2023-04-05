import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { etag } = useParams();
  const {
    isLoading,
    error,
    data: test,
  } = useQuery(["test"], async () => {
    return fetch("../../data/popular.json").then((res) => res.json());
  });
  // const jsonData = JSON.parse(test);
  const videoData = test.items.find((item) => item.etag === etag);
  const thumbnail = videoData.snippet.thumbnails.medium.url;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className={styles.divbox}>
      {etag}
      {thumbnail ? <img src={thumbnail} alt="test" /> : null}
    </div>
  );
}

// 여기에 컴포넌트 속성을 만들고
// 다른 파일에 속성을 받아서 보여준다
