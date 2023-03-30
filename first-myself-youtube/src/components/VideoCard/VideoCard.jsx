import React from "react";
import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";

export default function Video({ id, thumbnails, title, channel, publish }) {
  return (
    <div className={styles.videocard}>
      <Link to={`/video/${id}`}>
        <img src={thumbnails.url} alt={title} className={styles.thumbnail} />
        <h2 className={styles.title}>{title}</h2>
        <div>
          <span className={styles.channel}>{channel}</span>
        </div>
        <div>
          <span className={styles.publish}>{publish}</span>
        </div>
      </Link>
    </div>
  );
}
