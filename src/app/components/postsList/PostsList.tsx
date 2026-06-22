"use client"
import Post from "../posts/Post";
import styles from "./PostsList.module.css";
import NewPost from "../newPost/NewPost";
import { useState } from "react";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const[author, setAuthor] = useState("");
  return (
    <>
      <NewPost onBodyChange={e=>setEnteredBody(e.target.value)} onAuthorChange={e=>setAuthor(e.target.value)}/>
      <ul className={styles.posts}>
        <Post author={author} body={enteredBody} />
        <Post author="Ana" body="I think everything is amazing"></Post>
        <Post author="Anonymous User" body="I'm really excited today" />{" "}
      </ul>
    </>
  );
}

export default PostsList;
