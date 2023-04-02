import React from "react";
import styles from "./SearchVideoCard.module.css";
import { Link } from "react-router-dom";

export default function SearchVideoCard({ id, thumbnails, title, pubilsh, channel, description }) {
  return (
    <div className={styles.searchvideocard}>
      <Link to={`/videos/${id}`}>
        <div>
          <img src={thumbnails.url} alt={title} className={styles.thumbnails} />
        </div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.publish}>날짜 왜 안나옴</p>
          <h4 className={styles.channel}>{channel}</h4>
          <div className={styles.description}>{description}</div>
        </div>
      </Link>
    </div>
  );
}
