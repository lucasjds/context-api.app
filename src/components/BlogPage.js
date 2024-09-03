import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";
import Post from "./Post";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>Blog</h1>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin}></Post>
    </div>
  );
}
