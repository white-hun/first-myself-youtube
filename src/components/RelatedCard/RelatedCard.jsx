import React from "react";
import styles from "./RelatedCard.module.css";
import { Link } from "react-router-dom";

export default function RelatedCard({ ukey, id, img, title, channel, publish }) {
  return (
    <div key={ukey}>
      <Link to={`/watch/${id}`} className={styles.relatedcard}>
        <img src={img} alt={title} className={styles.relatedimg} />
        <div className={styles.relatedright}>
          <p className={styles.relatedtitle}>{title}</p>
          <p className={styles.relatedchannel}>{channel}</p>
          <p className={styles.relatedpublish}>{publish}</p>
        </div>
      </Link>
    </div>
  );
}
