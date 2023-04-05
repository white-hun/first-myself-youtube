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
  const clickedVideo = test.items.find((item) => item.etag === etag);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return console.log(clickedVideo);
}

// const 변수 = all
