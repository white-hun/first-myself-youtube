import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
// import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { etag } = useParams(); // 동일화 children path
  const {
    isLoading,
    error,
    data: detail,
  } = useQuery(["detail"], async () => {
    return fetch(`/../../data`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.massage}</p>;

  return (
    // <div>{detail.filter((pick) => (pick.etag !== etag).map((p) => p.item.snippet.title))}</div>
    console.log(detail.includes({ ...detail, etag }))
  );
}
// etag가 포함된 배열의 items를 사용해야하는데............
