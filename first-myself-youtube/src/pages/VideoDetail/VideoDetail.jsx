import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { etag } = useParams();
  const {
    isLoading,
    error,
    data: all,
  } = useQuery(["all"], async () => {
    return fetch(`../../data/popular.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <div>{all.items.filter((prev) => prev.etag !== etag)}</div>;
}

//
//  <img
//   className={styles.divbox}
//   src={prev.includes(etag).snippet.thumbnails.medium.url}
//   alt={prev.includes(etag).snippet.title}
// />
