import { useQuery } from "@tanstack/react-query";
import React from "react";
import styles from "./RelatedVideo.module.css";
import RelatedCard from "../../components/RelatedCard/RelatedCard";

export default function Related() {
  const {
    isLoading,
    error,
    data: related,
  } = useQuery(["related"], async () => {
    return fetch("../../data/related.json").then((res) => res.json());
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {related?.items?.map((i) => (
        <RelatedCard
          key={i?.etag}
          id={i?.etag}
          img={i?.snippet?.thumbnails?.maxres?.url}
          title={i?.snippet?.title}
          channel={i?.snippet?.channelTitle}
          publish={i?.snippet?.publishedAt}
        />
      ))}
    </div>
  );
}

// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=AIzaSyAhoKOR1IrncZNFocBhgkbYVAl06-5ZtxY"
