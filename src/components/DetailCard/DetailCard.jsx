import React from "react";
import styles from "./DetailCard.module.css";

export default function DetailCard({ thumbnail, title, channel }) {
  return (
    <div className={styles.detailcard}>
      <img src={thumbnail} alt={title} className={styles.detailthumbmail} />
      <h3 className={styles.detailtitle}>{title}</h3>
      <p className={styles.detailchannel}>{channel}</p>
    </div>
  );
}
