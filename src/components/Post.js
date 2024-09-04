import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete comment</button>}
      <h1>Example post title 1</h1>
      <Comment username={username} isAdmin={isAdmin}></Comment>
    </div>
  );
}
