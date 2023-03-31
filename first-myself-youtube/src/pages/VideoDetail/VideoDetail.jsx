import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { id } = useParams(); // 동일화 children path
  const {
    isLoading,
    error,
    data: detail,
  } = useQuery(["detail"], async () => {
    return fetch("data/popular.json").then((res) => res.json);
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>{detail.map((value) => value === id && "Test")}</h3>
    </div>
  );
}
