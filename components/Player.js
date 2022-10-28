import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./Player.module.scss";
import { useStreamCollection } from "../hooks/useStreamCollection";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../services/firestore";

const Player = ({ url }) => {
  const player = useRef();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const handleReady = (e) => {
    player.current = e;
    setDuration(130);
  };
  const handleProgress = (e) => {
    // {playedSeconds: 30.337, played: 0.2336491065927295, loadedSeconds: 48.64, loaded: 0.37461491065927294}
    setProgress(e);
  };
  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const value = x / rect.width;

    player.current.seekTo(value);
  };

  const comments = useStreamCollection("/Comments");

  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!comment) return;

    const commentCollection = collection(database, "/Comments");

    addDoc(commentCollection, {
      Comment: comment,
      Timestamp: progress.playedSeconds,
    });

    setComment("");
  };

  return (
    <div>
      <div className={styles.player}>
        <ReactPlayer
          onProgress={handleProgress}
          onReady={handleReady}
          url={url}
          controls
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className={styles.playbar} onClick={handleSeek}>
        <div
          className={styles.innerPlaybar}
          style={{ width: `${progress.played * 100}%` }}
        ></div>
      </div>
      <div className={styles.comments}>
        {comments.map((comment) => (
          <div
            className={styles.comment}
            key={comment.id}
            style={{ left: `${(comment.Timestamp / duration) * 100}%` }}
          >
            {comment.Content}
          </div>
        ))}
      </div>

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
    </div>
  );
};

export default Player;
