import React, { useState } from "react";
import styles from "./CommentForm.module.scss";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../services/firestore";

const CommentForm = () => {
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const commentCollection = collection(database, "/Comments");

    return addDoc(commentCollection, {
      Comment: comment,
      Timestamp: time,
    });
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <h3>
        Write comment <span>on timeline</span>
      </h3>
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        onChange={(e) => setComment(e.target.value)}
      >
        {comment}
      </textarea>
      <button type="submit" className={styles.button}>
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
