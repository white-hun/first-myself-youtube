import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import SearchVideoCard from "../SearchVideoCard/SearchVideoCard";
import styles from "./VideoSearch.module.css";

export default function VideoSearch() {
  const { search } = useParams();
  const {
    isLoading,
    error,
    data: searchvideo,
  } = useQuery(["searchvideo"], async () => {
    return fetch(`../../data/${search}.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!searchvideo.items?.length) {
    return <div>No Data</div>;
  }
  return (
    <div className={styles.videosearch}>
      {searchvideo.items?.map((value) => (
        <SearchVideoCard
          key={value.etag}
          id={value.etag}
          thumbnails={value.snippet.thumbnails.medium.url}
          title={value.snippet.title}
          publish={value.snippet.publishedAt}
          channel={value.snippet.channelTitle}
          description={value.snippet.description}
        />
      ))}
    </div>
  );
}

//`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyAhoKOR1IrncZNFocBhgkbYVAl06-5ZtxY`
//console.log(bts.items.map((i) => i.id.videoId));
