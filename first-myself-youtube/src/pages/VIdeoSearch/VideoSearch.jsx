import React from "react";
import { useParams } from "react-router-dom";

export default function VideoSearch() {
  const { search } = useParams();
  return (
    <div>
      <p>{search}</p>
    </div>
  );
}
