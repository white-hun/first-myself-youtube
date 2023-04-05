import React from "react";
import styles from "./SearchVideoCard.module.css";
import { Link, useParams } from "react-router-dom";

export default function SearchVideoCard({ id, thumbnails, title, publish, channel, description }) {
  // const { search } = useParams();
  const decodeHtml = (html) => {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className={styles.searchvideocard}>
      <Link to={`/watch/${id}`}>
        <div>
          <img src={thumbnails} alt={title} className={styles.thumbnails} />
        </div>
        <div>
          <h3 className={styles.title}>{decodeHtml(title)}</h3>
          <p className={styles.publish}>{publish}</p>
          <h4 className={styles.channel}>{channel}</h4>
          <div className={styles.description}>{description}</div>
        </div>
      </Link>
    </div>
  );
}
