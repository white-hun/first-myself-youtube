import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";

export default function VideoDetail() {
  const { id } = useParams();
  return (
    <div>
      <div className={styles.divbox}>Test {id}</div>
    </div>
  );
}

//
