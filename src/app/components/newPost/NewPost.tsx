"use client";
import styles from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
const [text, setText] = useState("");
  return (
   <form className= {styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={(e)=>setText(e.target.value)} id="body" required rows={3} />
      </p>

      <p>{text}</p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;
