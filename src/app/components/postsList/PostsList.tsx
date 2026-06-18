import Post from "../posts/Post";
import styles from "./PostsList.module.css";
import NewPost from "../newPost/NewPost";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Thais" body="Learning Next.js is fantastic" />
        <Post author="Ana" body="I think everything is amazing"></Post>
        <Post author="Anonymous User" body="I'm really excited today" />{" "}
      </ul>
    </>
  );
}

export default PostsList;
