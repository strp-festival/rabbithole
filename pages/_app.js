import '../styles/globals.css';
import {useEffect} from "react";
import {firebaseApp} from '../services/firestore';
import {getAnalytics} from "firebase/analytics";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    getAnalytics(firebaseApp);
  });

  return <Component {...pageProps} />
}

export default MyApp
