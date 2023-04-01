import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { id } = useParams(); // 동일화 children path

  return (
    <div>
      <h3>Test {id}</h3>
    </div>
  );
}
