import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Player from "../components/Player";
import CommentForm from "../components/CommentForm";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>STRP - Rabbithole</title>
        <meta name="description" content="Immersive archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!loading && <Player url={"https://vimeo.com/705706832"} />}
      </main>
    </div>
  );
}
