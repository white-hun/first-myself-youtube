import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: all,
  } = useQuery(["all"], async () => {
    return fetch(`../../data/popular.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {all.items.map((prev) => (
        <div>
          <img
            className={styles.divbox}
            src={prev.snippet.thumbnails.medium.url}
            alt={prev.snippet.title}
          />
          <p>{prev.snippet.title}</p>
        </div>
      ))}
    </div>
  );
}

//
