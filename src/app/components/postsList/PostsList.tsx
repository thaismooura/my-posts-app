"use client";
import Post from "../posts/Post";
import styles from "./PostsList.module.css";
import NewPost from "../newPost/NewPost";
import { useState } from "react";
import Modal from "../Modal/Modal";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [author, setAuthor] = useState("");
  const [IsModalVisible, setIsModalVisible] = useState(true);

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      {IsModalVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost
            onBodyChange={(e) => setEnteredBody(e.target.value)}
            onAuthorChange={(e) => setAuthor(e.target.value)}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={author} body={enteredBody} />
        <Post author="Ana" body="I think everything is amazing"></Post>
        <Post author="Anonymous User" body="I'm really excited today" />{" "}
      </ul>
    </>
  );
}

export default PostsList;
